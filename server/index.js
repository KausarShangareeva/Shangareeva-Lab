require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// ─── WhatsApp отправка ────────────────────────────────────────────────────────
//
// Есть два режима работы:
//
// 1. TWILIO (реальная отправка сообщения на номер владельца)
//    Нужно: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, OWNER_WHATSAPP
//
// 2. WA.ME (открывает WhatsApp на устройстве клиента — проще, без регистрации)
//    Нужно только: OWNER_WHATSAPP_NUMBER (без +, без пробелов, например 77001234567)
//
// ─────────────────────────────────────────────────────────────────────────────

function buildMessage({ product, name, phone }) {
  return `🛍 Новый заказ!\n\nПродукт: ${product}\nИмя: ${name}\nТелефон: ${phone}`
}

async function sendViaTwilio(message) {
  const twilio = require('twilio')
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_FROM,   // whatsapp:+14155238886
    to: process.env.OWNER_WHATSAPP,            // whatsapp:+77001234567
    body: message,
  })
}

// ─── POST /api/order ──────────────────────────────────────────────────────────
app.post('/api/order', async (req, res) => {
  const { product, name, phone } = req.body

  if (!product || !name || !phone) {
    return res.status(400).json({ error: 'Все поля обязательны' })
  }

  const message = buildMessage({ product, name, phone })

  // Режим 1: отправить через Twilio (если настроен)
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
    try {
      await sendViaTwilio(message)
      return res.json({ success: true })
    } catch (err) {
      console.error('Twilio error:', err.message)
      return res.status(500).json({ error: 'Ошибка отправки через Twilio' })
    }
  }

  // Режим 2: вернуть wa.me ссылку — клиент сам откроет WhatsApp
  const number = process.env.OWNER_WHATSAPP_NUMBER || '905XXXXXXXXX'
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  return res.json({ success: true, whatsappUrl })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

import { useState } from "react";
import styles from "./OrderForm.module.css";

const FEATURES = [
  { icon: "🌿", text: "Натуральный состав без химии" },
  { icon: "📦", text: "Доставка по всей России" },
  { icon: "💬", text: "Поддержка в WhatsApp 24/7" },
  { icon: "✨", text: "Результат уже после первого применения" },
];

const PRODUCTS = [
  { name: "Hydra Calm Mask", desc: "Для сухой кожи", image: "/hadiya_1.png" },
  { name: "Pure Detox Mask", desc: "Для жирной кожи", image: "/hadiya_2.png" },
  {
    name: "Balance Glow Mask",
    desc: "Для нормальной кожи",
    image: "/hadiya_3.png",
  },
];

export default function OrderForm({ selectedProduct, onSelectProduct }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function scrollToProducts() {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedProduct) {
      scrollToProducts();
      return;
    }
    setStatus("loading");
    try {
      const base = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${base}/api/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: selectedProduct, ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ошибка сервера");
      if (data.whatsappUrl) {
        const a = document.createElement('a')
        a.href = data.whatsappUrl
        a.target = '_blank'
        a.rel = 'noreferrer'
        a.click()
      }
      setStatus("success");
      setForm({ name: "", phone: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="order-form">
      <div className={styles.inner}>
        {/* Left */}
        <div className={styles.info}>
          <p className={styles.eyebrow}>Оформить заказ</p>
          <h2 className={styles.title}>Сделайте первый шаг к сияющей коже</h2>
          <p className={styles.desc}>
            Заполните форму — мы свяжемся с вами в WhatsApp и подтвердим заказ в
            течение нескольких минут.
          </p>
          <div className={styles.features}>
            {FEATURES.map((f) => (
              <div key={f.text} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — card form */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Оформление заказа</h3>

          {/* Product picker */}
          <p className={styles.pickerLabel}>Выберите маску</p>
          <div className={styles.picker}>
            {PRODUCTS.map((p) => (
              <button
                key={p.name}
                type="button"
                className={`${styles.pickerItem} ${selectedProduct === p.name ? styles.pickerItemActive : ""}`}
                onClick={() => onSelectProduct(p.name)}
              >
                <img src={p.image} alt={p.name} className={styles.pickerImg} />
                <div className={styles.pickerInfo}>
                  <span className={styles.pickerName}>{p.name}</span>
                  <span className={styles.pickerDesc}>{p.desc}</span>
                </div>
                {selectedProduct === p.name && (
                  <span className={styles.pickerCheck}>✓</span>
                )}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <label className={styles.fieldLabel}>
              Ваше имя
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Алина"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.fieldLabel}>
              Телефон
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="+7 900 000 00 00"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>
            <button
              className={styles.btn}
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Отправка..."
                : "📲 Заказать через WhatsApp"}
            </button>
          </form>

          {status === "success" && (
            <p className={styles.successMsg}>
              ✓ Заявка отправлена! Проверьте WhatsApp.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              Ошибка отправки. Попробуйте ещё раз.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

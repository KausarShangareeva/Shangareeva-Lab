import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductList.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

export const PRODUCTS = [
  {
    id: 1,
    descKey: 'hydraCalmDesc',
    name: 'HYDRA CALM',
    badge: '💧',
    image: '/hadiya_1.png',
    price: '2 900 ₽',
    note: 'Powder-to-cream mask • Gentle moisture formula',
    content: {
      ru: {
        tagline: 'Маска интенсивного увлажнения',
        targetsLabel: '✧ Борется с',
        targets: ['Сухостью', 'Стянутостью', 'Шелушением', 'Раздражением'],
        effectsLabel: '✧ Эффект',
        effects: ['Увлажняет', 'Успокаивает', 'Восстанавливает', '«Запечатывает» влагу'],
        highlight: 'Убирает стянутость за 1 применение • Эффект «как после салона» дома',
        warning: null,
      },
      en: {
        tagline: 'Intensive hydration mask',
        targetsLabel: '✧ Targets',
        targets: ['Dryness', 'Tightness', 'Flaking', 'Irritation'],
        effectsLabel: '✧ Effect',
        effects: ['Hydrates', 'Soothes', 'Restores', 'Seals moisture'],
        highlight: 'Removes tightness in 1 use • Salon-like result at home',
        warning: null,
      },
      tr: {
        tagline: 'Yoğun nemlendirici maske',
        targetsLabel: '✧ Hedefler',
        targets: ['Kuruluk', 'Gerginlik', 'Pullanma', 'Tahriş'],
        effectsLabel: '✧ Etki',
        effects: ['Nemlendirir', 'Yatıştırır', 'Onarır', 'Nemi hapseder'],
        highlight: 'İlk kullanımda gerginliği giderir • Salon etkisi',
        warning: null,
      },
      ar: {
        tagline: 'قناع ترطيب مكثف',
        targetsLabel: '✧ يعالج',
        targets: ['الجفاف', 'الشد', 'التقشر', 'التهيج'],
        effectsLabel: '✧ التأثير',
        effects: ['يرطب', 'يهدئ', 'يجدد', 'يحبس الرطوبة'],
        highlight: 'يزيل الشد من الاستخدام الأول • تأثير الصالون في المنزل',
        warning: null,
      },
    },
  },
  {
    id: 2,
    descKey: 'detoxPureDesc',
    name: 'DETOX PURE',
    badge: '🖤',
    image: '/hadiya_2.png',
    price: '2 700 ₽',
    note: 'Powder-to-cream mask • Deep pore cleanse',
    content: {
      ru: {
        tagline: 'Маска глубокого очищения',
        targetsLabel: '✧ Борется с',
        targets: ['Чёрными точками', 'Расширенными порами', 'Жирным блеском', 'Загрязнениями'],
        effectsLabel: '✧ Эффект',
        effects: ['Очищает поры', 'Сужает поры', 'Балансирует', 'Детоксицирует'],
        highlight: 'Глубокое очищение без пересушивания • Мягкая детокс-формула',
        warning: null,
      },
      en: {
        tagline: 'Deep pore cleansing mask',
        targetsLabel: '✧ Targets',
        targets: ['Blackheads', 'Enlarged pores', 'Oily shine', 'Impurities'],
        effectsLabel: '✧ Effect',
        effects: ['Purifies pores', 'Minimizes pores', 'Balances', 'Detoxifies'],
        highlight: 'Deep cleanse without drying • Gentle detox formula',
        warning: null,
      },
      tr: {
        tagline: 'Derin gözenek temizleme maskesi',
        targetsLabel: '✧ Hedefler',
        targets: ['Siyah noktalar', 'Büyümüş gözenekler', 'Yağlı parlaklık', 'Kirlilik'],
        effectsLabel: '✧ Etki',
        effects: ['Gözenekleri temizler', 'Gözenekleri sıkıştırır', 'Dengeler', 'Detoks'],
        highlight: 'Kurutmadan derin temizlik • Hafif detoks formülü',
        warning: null,
      },
      ar: {
        tagline: 'قناع تنظيف عميق للمسام',
        targetsLabel: '✧ يعالج',
        targets: ['الرؤوس السوداء', 'المسام المتسعة', 'البريق الدهني', 'الشوائب'],
        effectsLabel: '✧ التأثير',
        effects: ['ينظف المسام', 'يضيق المسام', 'يوازن', 'ديتوكس'],
        highlight: 'تنظيف عميق دون جفاف • صيغة ديتوكس لطيفة',
        warning: null,
      },
    },
  },
  {
    id: 3,
    descKey: 'sosRepairDesc',
    name: 'SOS REPAIR',
    badge: '🌿',
    image: '/hadiya_3.png',
    price: '2 800 ₽',
    note: 'Powder-to-cream mask • Gentle care • Skin balance',
    content: {
      ru: {
        tagline: 'Маска успокаивающего ухода',
        targetsLabel: '✧ Борется с',
        targets: ['Лёгкими воспалениями', 'Прыщами', 'Покраснениями'],
        effectsLabel: '✧ Эффект',
        effects: ['Очищает', 'Успокаивает', 'Балансирует'],
        highlight: 'Мягкое действие без раздражения • Подходит для чувствительной кожи',
        warning: null,
      },
      en: {
        tagline: 'Soothing repair mask',
        targetsLabel: '✧ Targets',
        targets: ['Mild breakouts', 'Pimples', 'Redness'],
        effectsLabel: '✧ Effect',
        effects: ['Cleanses', 'Soothes', 'Balances'],
        highlight: 'Gentle action without irritation • Suitable for sensitive skin',
        warning: null,
      },
      tr: {
        tagline: 'Yatıştırıcı onarım maskesi',
        targetsLabel: '✧ Hedefler',
        targets: ['Hafif iltihaplanma', 'Sivilce', 'Kızarıklık'],
        effectsLabel: '✧ Etki',
        effects: ['Temizler', 'Yatıştırır', 'Denge sağlar'],
        highlight: 'Tahriş olmadan hafif etki • Hassas ciltlere uygun',
        warning: null,
      },
      ar: {
        tagline: 'قناع مهدئ للإصلاح',
        targetsLabel: '✧ يعالج',
        targets: ['الالتهابات الخفيفة', 'البثور', 'الاحمرار'],
        effectsLabel: '✧ التأثير',
        effects: ['ينظف', 'يهدئ', 'يوازن'],
        highlight: 'تأثير لطيف بدون تهيج • مناسب للبشرة الحساسة',
        warning: null,
      },
    },
  },
  {
    id: 4,
    descKey: 'sosClearProDesc',
    name: 'SOS CLEAR PRO',
    badge: '🔥',
    image: '/hadiya_2.png',
    price: '3 200 ₽',
    note: 'Powder-to-cream mask • No harsh drying • Skin-friendly formula',
    content: {
      ru: {
        tagline: 'Маска против акне — активная поддержка',
        targetsLabel: '✧ Очищает от',
        targets: ['Воспалений', 'Прыщей', 'Покраснений'],
        effectsLabel: '✧ Эффект',
        effects: ['Уменьшает воспаления', 'Очищает', 'Успокаивает'],
        highlight: 'Breakout control • Быстрое действие без пересушивания кожи',
        warning: 'При выраженном акне рекомендуется консультация специалиста',
      },
      en: {
        tagline: 'Anti-acne support mask — fast action',
        targetsLabel: '✧ Targets',
        targets: ['Breakouts', 'Pimples', 'Redness'],
        effectsLabel: '✧ Effect',
        effects: ['Helps reduce breakouts', 'Cleanses', 'Soothes'],
        highlight: 'Breakout control • Fast action without harsh drying',
        warning: 'For severe acne, consult a specialist',
      },
      tr: {
        tagline: 'Akne karşıtı destek maskesi',
        targetsLabel: '✧ Hedefler',
        targets: ['Akne', 'Sivilce', 'Kızarıklık'],
        effectsLabel: '✧ Etki',
        effects: ['Akneyi azaltır', 'Temizler', 'Yatıştırır'],
        highlight: 'Hızlı etki • Kurutmadan temizler',
        warning: 'Şiddetli akne için uzman önerilir',
      },
      ar: {
        tagline: 'قناع دعم مضاد للأكنه',
        targetsLabel: '✧ يعالج',
        targets: ['حب الشباب', 'البثور', 'الاحمرار'],
        effectsLabel: '✧ التأثير',
        effects: ['يقلل الحبوب', 'ينظف', 'يهدئ'],
        highlight: 'تأثير سريع • ينظف دون جفاف شديد',
        warning: 'للحالات الشديدة يُنصح بمختص',
      },
    },
  },
  {
    id: 5,
    descKey: 'glowRadianceDesc',
    name: 'GLOW RADIANCE',
    badge: '✨',
    image: '/hadiya_1.png',
    price: '3 100 ₽',
    note: 'Powder-to-cream mask • Brightening formula',
    content: {
      ru: {
        tagline: 'Маска для сияния и выравнивания тона',
        targetsLabel: '✧ Борется с',
        targets: ['Тусклостью', 'Неровным тоном', 'Усталостью кожи', 'Пигментацией'],
        effectsLabel: '✧ Эффект',
        effects: ['Придаёт сияние', 'Выравнивает тон', 'Осветляет', 'Освежает'],
        highlight: 'Видимый результат с первого применения • Естественное сияние',
        warning: null,
      },
      en: {
        tagline: 'Brightening & tone-evening mask',
        targetsLabel: '✧ Targets',
        targets: ['Dullness', 'Uneven tone', 'Skin tiredness', 'Pigmentation'],
        effectsLabel: '✧ Effect',
        effects: ['Adds radiance', 'Evens tone', 'Brightens', 'Refreshes'],
        highlight: 'Visible result from first use • Natural glow',
        warning: null,
      },
      tr: {
        tagline: 'Aydınlatıcı ve ton eşitleme maskesi',
        targetsLabel: '✧ Hedefler',
        targets: ['Donukluk', 'Düzensiz ton', 'Cilt yorgunluğu', 'Pigmentasyon'],
        effectsLabel: '✧ Etki',
        effects: ['Işıltı verir', 'Tonu eşitler', 'Aydınlatır', 'Tazelendirir'],
        highlight: 'İlk kullanımda görünür sonuç • Doğal parlaklık',
        warning: null,
      },
      ar: {
        tagline: 'قناع الإشراق وتوحيد البشرة',
        targetsLabel: '✧ يعالج',
        targets: ['الإشراق', 'عدم التساوي', 'إرهاق البشرة', 'التصبغ'],
        effectsLabel: '✧ التأثير',
        effects: ['يضيف إشراقاً', 'يوحد اللون', 'يفتح البشرة', 'ينعش'],
        highlight: 'نتيجة مرئية من الاستخدام الأول • إشراق طبيعي',
        warning: null,
      },
    },
  },
]

export default function ProductList({ onOpenModal, onSelect }) {
  const { t } = useLanguage()
  const p = t.products

  return (
    <section className={styles.section} id="products">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{p.eyebrow}</p>
          <h2 className={styles.title}>{p.title}</h2>
          <p className={styles.subtitle}>{p.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {PRODUCTS.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onOpenModal={onOpenModal}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

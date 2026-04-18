import styles from './Reviews.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

const REVIEWS = [
  {
    id: 1,
    name: 'Алина К.',
    text: 'После первого применения Hydra Calm Mask кожа стала мягкой как бархат. Больше не нужны дополнительные крема — маска заменяет всё!',
    rating: 5,
    product: 'Hydra Calm Mask',
    avatar: 'А',
    accent: true,
  },
  {
    id: 2,
    name: 'Марина Р.',
    text: 'Pure Detox — это находка для жирной кожи. Поры сузились, жирный блеск ушёл. Использую раз в неделю уже 3 месяца.',
    rating: 5,
    product: 'Pure Detox Mask',
    avatar: 'М',
    accent: false,
  },
  {
    id: 3,
    name: 'Екатерина Ш.',
    text: 'Balance Glow — мой ежедневный ритуал. Кожа выглядит отдохнувшей и сияющей. Подруги спрашивают, что за процедуры делаю!',
    rating: 5,
    product: 'Balance Glow Mask',
    avatar: 'Е',
    accent: false,
  },
  {
    id: 4,
    name: 'Диана М.',
    text: 'Натуральный состав — это то, что меня покорило. Никакой химии, только результат. Заказала уже третий раз!',
    rating: 4,
    product: 'Hydra Calm Mask',
    avatar: 'Д',
    accent: true,
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { t } = useLanguage()
  const r = t.reviews

  return (
    <section className={styles.section} id="reviews">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{r.eyebrow}</p>
          <h2 className={styles.title}>{r.title}</h2>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((rev) => (
            <div key={rev.id} className={`${styles.card} ${rev.accent ? styles.cardAccent : ''}`}>
              <Stars count={rev.rating} />
              <p className={styles.text}>«{rev.text}»</p>
              <div className={styles.author}>
                <div className={`${styles.avatar} ${rev.accent ? styles.avatarAccent : ''}`}>
                  {rev.avatar}
                </div>
                <div>
                  <p className={styles.authorName}>{rev.name}</p>
                  <p className={styles.authorProduct}>{rev.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

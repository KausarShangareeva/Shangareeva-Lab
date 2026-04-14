import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductList.module.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Hydra Calm Mask',
    description: 'Для сухой кожи',
    image: '/hadiya_1.png',
    price: '2 900 ₽',
  },
  {
    id: 2,
    name: 'Pure Detox Mask',
    description: 'Для жирной кожи',
    image: '/hadiya_2.png',
    price: '2 700 ₽',
  },
  {
    id: 3,
    name: 'Balance Glow Mask',
    description: 'Для нормальной кожи',
    image: '/hadiya_3.png',
    price: '3 100 ₽',
  },
]

export default function ProductList({ onSelect }) {
  return (
    <section className={styles.section} id="products">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Наши продукты</p>
          <h2 className={styles.title}>Заказать сейчас</h2>
          <p className={styles.subtitle}>
            Выберите маску под свой тип кожи — и ваша кожа скажет спасибо
          </p>
        </div>

        <div className={styles.grid}>
          {PRODUCTS.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              description={p.description}
              image={p.image}
              price={p.price}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import styles from './ProductCard.module.css'

export default function ProductCard({ name, description, image, price, onSelect }) {
  return (
    <div className={styles.card}>
      {/* Image area with colored bg */}
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      {/* Content */}
      <div className={styles.body}>
        <p className={styles.category}>{description}</p>
        <h3 className={styles.name}>{name}</h3>
        {price && <p className={styles.price}>{price}</p>}
        <button className={styles.btn} onClick={() => onSelect(name)}>
          Заказать
        </button>
      </div>
    </div>
  )
}

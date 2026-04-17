import styles from './ProductCard.module.css'

export default function ProductCard({ product, onOpenModal, onSelect }) {
  return (
    <div
      className={styles.card}
      onClick={() => onOpenModal(product)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpenModal(product)}
    >
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <span className={styles.badgeEmoji}>{product.badge}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.category}>{product.description}</p>
        <h3 className={styles.name}>{product.name}</h3>
        {product.price && <p className={styles.price}>{product.price}</p>}
        <div className={styles.more}>
          <span>Подробнее</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </div>
  )
}

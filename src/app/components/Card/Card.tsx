import styles from './Card.module.css';

type CardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
};

export default function Card({ image, title, description, price }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

// מוצרים
export const products = [
  {
    title: 'אתרוג',
    price: 50,
    description: 'אתרוג איכותי, פרי מצוות ארבעת המינים.',
    image: 'https://storage.hidabroot.org/articles_new/372420_tumb_730X500.webp',
  },
  {
    title: 'לולב',
    price: 40,
    description: 'לולב מהודר, מתאים למצוות ארבעת המינים.',
    image: 'https://www.kipa.co.il/userFiles/c4365b7cefcb31b9b3ea4e9223744c87.jpg',
  },
  {
    title: 'הדסים',
    price: 30,
    description: 'הדסים ריחניים וטריים במיוחד, מהודרים למצווה.',
    image: 'https://www.dirshu.co.il/wp-content/uploads/2021/09/הדסים-1.jpg',
  },
  {
    title: 'ערבה',
    price: 20,
    description: 'ערבה רעננה ויפה, מתאימה לארבעת המינים.',
    image: 'https://w2.chabad.org/media/images/336/ypSY3360150.jpg?_i=_nF180D66DDD9FF78C7D1745F12385B457',
  },
  {
    title: 'קופא לאתרוג',
    price: 100,
    description: 'קופסת עור בעיצוב מדויק',
    image: 'https://chabadshop.com/cdn/shop/products/1050f11c5389a3e6721cd00576ac00ac_500x500.jpg?v=1689790444',
  },
  {
    title: 'סט ארבעת המינים',
    price: 120,
    description: 'סט שלם של ארבעת המינים: אתרוג, לולב, הדסים וערבה.',
    image: 'https://judaica-chabad.co.il/wp-content/uploads/2023/07/Depositphotos_164562006_xl-2015_700x700.png',
  },
];

// דף הבית
export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center', direction: 'rtl',backgroundColor: '#f5f3ef', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>חנות ארבעת המינים</h1>

      {/* כפתור מעבר לטופס */}
      <Link href="/RegistrationForm">
        <button className="link-button">מעבר לטופס רישום</button>
      </Link>

      {/* רשימת מוצרים */}
      <section className="product-list">
        {products.map(({ title, price, description, image }, index) => (
          <div key={index} className="product-card">
            <div className="product-image">
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                }}
              />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="product-price">{price} ש"ח</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

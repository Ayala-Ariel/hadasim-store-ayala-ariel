
import Image from 'next/image';
import Link from 'next/link';
// ייבוא ה-Type של המוצר מה-API Route 
import type { Product } from './api/products/route'; 

// פונקציית שליפת נתונים - רצה בצד השרת לפני ה-Render
async function getProducts(): Promise<Product[]> {
  // קורא ל-API Route הפנימי /api/products
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/products`, { 
      cache: 'no-store' 
  }); 
  
  if (!res.ok) {
    console.error('Failed to fetch products from API:', res.status, res.statusText);
    return []; 
  }

  return res.json();
}

// דף הבית - Server Component אסינכרוני
export default async function HomePage() {
  const products = await getProducts(); // שליפת הנתונים

  return (
    <main style={{ padding: '2rem', textAlign: 'center', direction: 'rtl',backgroundColor: '#f5f3ef', minHeight: '100vh' }}>
      {/* <h1 style={{ marginBottom: '1.5rem' }}>חנות ארבעת המינים</h1> */}

      {/* כפתור מעבר לטופס */}
      <Link href="/RegistrationForm">
        <button className="link-button">מעבר לטופס רישום</button>
      </Link>

      {/* רשימת מוצרים */}
      <section className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card"> 
            <div className="product-image">
              <Image
                src={product.image}
                alt={product.title}
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
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className="product-price">{product.price} ש"ח</p>
            </div>
          </div>
        ))}
      </section>
      
      {/* הודעה אם לא נמצאו מוצרים */}
      {products.length === 0 && (
        <p style={{ marginTop: '2rem', color: 'red' }}>לא נמצאו מוצרים. ודא ש-MongoDB מחובר ושם הדאטה בייס נכון.</p>
      )}
    </main>
  );
}

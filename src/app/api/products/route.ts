// src/app/api/products/route.ts

// **ייבוא לפי המבנה שקיים אצלך**
import clientPromise from '@/app/services/server/mongodb'; 
import { NextResponse } from 'next/server';

export interface Product {
  _id: string; // MongoDB ObjectId
  title: string;
  price: number; 
  description: string;
  image: string;
}

export async function GET() {
  try {
    const client = await clientPromise;
    // החלף את 'YourDatabaseName' לשם הדאטה בייס האמיתי שלך
    const db = client.db('hadassim_store'); 
    
    // שליפת כל המוצרים מה-Collection 'products'
    const products = await db.collection<Product>('products').find({}).toArray();

    return NextResponse.json(products);
  } catch (e) {
    console.error('Error fetching products from DB:', e);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
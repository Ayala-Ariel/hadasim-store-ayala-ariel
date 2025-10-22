
import { MongoClient } from 'mongodb';

// המשתנה MONGODB_URI חייב להיות בקובץ .env
const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

if (process.env.NODE_ENV === 'development') {
  // שמירת החיבור במשתנה גלובלי כדי להימנע מחיבורים מרובים בפיתוח
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // ב-Production
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// הגדרת משתנה גלובלי ל-TypeScript
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
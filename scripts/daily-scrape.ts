// scripts/daily-scrape.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const TRENDING_MOCK_DATA = [
  { title: "Y2K Star Zip Hoodie", price: 24.99, imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=60", aesthetic: "Y2K" },
  { title: "Vintage Carhartt Jacket", price: 85.00, imageUrl: "https://images.unsplash.com/photo-1551028919-ac7d21422db7?auto=format&fit=crop&w=500&q=60", aesthetic: "Vintage" },
  { title: "Baggy Cyber Jeans", price: 45.00, imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60", aesthetic: "Cyber" }
];

async function main() {
  console.log("Starting Daily Scrape...");
  
  // In a real scenario, you would use axios/cheerio here to scrape AliExpress
  
  for (const item of TRENDING_MOCK_DATA) {
    await prisma.product.create({
      data: {
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        sourceUrl: "https://aliexpress.com",
        aesthetic: item.aesthetic
      }
    });
  }
  
  console.log("Database updated with trending products.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

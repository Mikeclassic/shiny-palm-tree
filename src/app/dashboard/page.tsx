import { db } from "../../lib/db";

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  // Fetch products scraped by Github Action
  const products = await db.product.findMany({
    take: 6,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Winning Products 🚀</h2>
      <p className="text-gray-400">Freshly scraped trends ready to dropship.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-card border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition duration-300">
            <div className="h-48 bg-gray-700 relative">
               <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
               <div className="absolute top-2 right-2 bg-purple-600 text-xs font-bold px-2 py-1 rounded">
                 {product.aesthetic}
               </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg truncate">{product.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-green-400 font-mono">${product.price}</span>
                <button className="text-sm bg-white text-black px-3 py-1 rounded-full font-medium hover:bg-gray-200">
                  Import
                </button>
              </div>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="col-span-3 text-center py-10 text-gray-500">
            Waiting for GitHub Scraper to run...
          </div>
        )}
      </div>
    </div>
  );
}

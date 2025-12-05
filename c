import Link from 'next/link';
import { LayoutDashboard, Wand2, ShoppingBag, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-card border-r border-gray-800 h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-8">
        GlowSeller
      </h1>
      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition">
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link href="/dashboard/tools" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition">
          <Wand2 size={20} /> AI Tools
        </Link>
        <div className="mt-8 text-xs font-semibold text-gray-500 uppercase tracking-wider">Settings</div>
        <Link href="/dashboard/billing" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition">
          <Settings size={20} /> Subscription
        </Link>
      </nav>
    </div>
  );
}

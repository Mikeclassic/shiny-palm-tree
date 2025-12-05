import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function LandingPage() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            GlowSeller
        </div>
        <Link href="/sign-in">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Login
          </button>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Automate your <br />
          <span className="text-purple-500">Depop Empire</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Find winning products, generate AI descriptions, and remove backgrounds in seconds. 
          Join the top 1% of sellers today.
        </p>
        
        <Link href="/sign-up">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg shadow-purple-900/50 hover:scale-105 transition flex items-center gap-2">
            Start for $1 <ArrowRight />
          </button>
        </Link>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            {[
                "Daily Winning Products",
                "AI Description Writer",
                "One-Click Background Removal"
            ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-500" /> {feature}
                </div>
            ))}
        </div>
      </main>
    </div>
  );
}

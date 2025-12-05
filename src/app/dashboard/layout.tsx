import Sidebar from '../components/Sidebar'
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-end mb-6">
          <UserButton afterSignOutUrl="/" />
        </div>
        {children}
      </main>
    </div>
  );
}

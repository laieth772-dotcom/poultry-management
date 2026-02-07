import Link from 'next/link'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">لوحة التحكم</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard/products" className="hover:bg-primary hover:text-white px-2 py-1 rounded">المنتجات</Link>
          <Link href="/dashboard/farms" className="hover:bg-primary hover:text-white px-2 py-1 rounded">المزارع</Link>
          <Link href="/dashboard/articles" className="hover:bg-primary hover:text-white px-2 py-1 rounded">المقالات</Link>
        </nav>
      </aside>
      {/* Content */}
      <div className="flex-1 p-4">{children}</div>
    </div>
  )
}

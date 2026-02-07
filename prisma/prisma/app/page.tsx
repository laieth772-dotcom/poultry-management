import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto p-4 font-cairo">
      <h1 className="text-3xl font-bold text-primary mb-4">مرحبا بك في نظام إدارة الدواجن</h1>
      <p className="mb-4">تصفح المنتجات والمزارع، أضف منتجاتك ومزارعك من لوحة التحكم.</p>
      <Link href="/dashboard" className="bg-primary text-white px-4 py-2 rounded">لوحة التحكم</Link>
    </main>
  )
}

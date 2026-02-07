import { useState } from 'react'

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([])

  const addProduct = () => {
    const name = prompt('اسم المنتج')
    const price = parseFloat(prompt('السعر بالدينار العراقي') || '0')
    const image = prompt('رابط الصورة') || ''
    setProducts([...products, { name, price, image }])
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">المنتجات</h1>
      <button onClick={addProduct} className="bg-primary text-white px-3 py-1 rounded mb-4">إضافة منتج</button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <div key={i} className="border p-2 rounded">
            <img src={p.image} alt={p.name} className="mb-2 w-full h-32 object-cover"/>
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.price} IQD</p>
          </div>
        ))}
      </div>
    </div>
  )
}

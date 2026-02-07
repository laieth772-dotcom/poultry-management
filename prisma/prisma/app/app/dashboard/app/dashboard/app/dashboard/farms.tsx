import { useState } from 'react'

export default function FarmsPage() {
  const [farms, setFarms] = useState<any[]>([])

  const addFarm = () => {
    const name = prompt('اسم المزرعة')
    const location = prompt('الموقع')
    const capacity = parseInt(prompt('السعة') || '0')
    const description = prompt('وصف المزرعة')
    setFarms([...farms, { name, location, capacity, description }])
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">المزارع</h1>
      <button onClick={addFarm} className="bg-primary text-white px-3 py-1 rounded mb-4">إضافة مزرعة</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {farms.map((f, i) => (
          <div key={i} className="border p-2 rounded">
            <h3 className="font-bold">{f.name}</h3>
            <p>{f.location}</p>
            <p>السعة: {f.capacity}</p>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

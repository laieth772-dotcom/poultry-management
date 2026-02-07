import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>نظام إدارة الدواجن الذكي</h1>
      <p>أهلاً بك! الموقع الآن يعمل بنجاح وبانتظار ربط البيانات.</p>
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>إحصائيات المزرعة</h3>
        <p>عدد القاعات: 0</p>
        <p>إجمالي الطيور: 0</p>
      </div>
      <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        إضافة وجبة جديدة
      </button>
    </div>
  );
}

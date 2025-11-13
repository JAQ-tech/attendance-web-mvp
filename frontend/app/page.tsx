'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <Image
        src="/logo.png"
        alt="شعار المدرسة"
        width={150}
        height={150}
        className="rounded-full"
      />
      <h1 className="text-3xl font-bold text-center">نظام حصر الغياب</h1>
      <div className="flex gap-4">
        <Link href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          تسجيل الدخول
        </Link>
        <Link href="/admin" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          لوحة التحكم
        </Link>
      </div>
    </div>
  );
}
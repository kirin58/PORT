import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-emerald-600 p-8 text-white shadow-lg shadow-emerald-200">
          <p className="text-sm font-medium text-emerald-100">ABOUT ME — เกี่ยวกับผม</p>
          <h2 className="mt-2 text-3xl font-bold leading-snug">
            ชอบเปลี่ยนไอเดีย
            <br />
            ให้เป็นเว็บใช้ได้จริง
          </h2>
          <p className="mt-4 text-sm leading-7 text-emerald-50">
            ผมถนัดสาย Full-Stack เน้นเขียนโค้ดอ่านง่าย ทดสอบได้
            และสื่อสารกับทีมรู้เรื่อง เคยทำทั้งโปรเจกต์เดี่ยวและโปรเจกต์กลุ่ม
            ชอบเรียนรู้เทคโนโลยีใหม่ๆ อย่าง Next.js, TypeScript และ Cloud พื้นฐาน
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs">Clean Code</span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs">Team Work</span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs">Fast Learner</span>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
          <h3 className="font-bold text-emerald-950">ข้อมูลเบื้องต้น</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between border-b border-dashed border-emerald-100 pb-2">
              <dt className="text-emerald-600">ชื่อ</dt>
              <dd className="font-medium">{profile.name} ({profile.englishName})</dd>
            </div>
            <div className="flex justify-between border-b border-dashed border-emerald-100 pb-2">
              <dt className="text-emerald-600">สาขา</dt>
              <dd className="font-medium">วิศวกรรมซอฟต์แวร์</dd>
            </div>
            <div className="flex justify-between border-b border-dashed border-emerald-100 pb-2">
              <dt className="text-emerald-600">มหาวิทยาลัย</dt>
              <dd className="font-medium">{profile.university}</dd>
            </div>
            <div className="flex justify-between border-b border-dashed border-emerald-100 pb-2">
              <dt className="text-emerald-600">อีเมล</dt>
              <dd className="font-medium">{profile.email}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-emerald-600">ที่อยู่</dt>
              <dd className="font-medium">{profile.location}</dd>
            </div>
          </dl>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-2xl bg-emerald-50 p-3">
              <p className="text-lg">💻</p>
              <p className="mt-1 font-semibold text-emerald-800">Web Dev</p>
            </div>
            <div className="rounded-2xl bg-lime-50 p-3">
              <p className="text-lg">🎨</p>
              <p className="mt-1 font-semibold text-lime-800">UI Design</p>
            </div>
            <div className="rounded-2xl bg-teal-50 p-3">
              <p className="text-lg">🗄️</p>
              <p className="mt-1 font-semibold text-teal-800">Database</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

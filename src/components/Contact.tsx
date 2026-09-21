import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14">
      <div className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-xl shadow-emerald-100">
        <div>
          <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 p-8 text-white md:p-10">
            <h2 className="text-3xl font-bold">มาคุยกันครับ! 👋</h2>
            <p className="mt-3 text-sm leading-7 text-emerald-50">
              สนใจรับเข้าฝึกงานสหกิจ / Freelance เว็บไซต์ / หรือชวนทำโปรเจกต์
              ติดต่อมาได้เลยตามช่องทางข้างล่างครับ
            </p>
            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl bg-white/15 p-3 hover:bg-white/25">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">📧</span>
                <span><span className="block text-xs text-emerald-100">Email</span><span className="font-semibold">{profile.email}</span></span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">📱</span>
                <span><span className="block text-xs text-emerald-100">Phone / LINE</span><span className="font-semibold">{profile.phone}</span></span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">📍</span>
                <span><span className="block text-xs text-emerald-100">Location</span><span className="font-semibold">{profile.location}</span></span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={profile.github}
                target="_blank"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
              >
                GitHub →
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 rounded-3xl border border-emerald-100 bg-white px-6 py-5 text-[13px] text-emerald-800 md:flex-row">
        <p>© 2026 {profile.englishName} • สร้างด้วย Next.js + Tailwind CSS 💚</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" className="hover:text-emerald-600">GitHub</a>
          <a href={profile.linkedin} target="_blank" className="hover:text-emerald-600">LinkedIn</a>
          <a href="#top" className="hover:text-emerald-600">กลับขึ้นด้านบน ↑</a>
        </div>
      </footer>
    </section>
  );
}

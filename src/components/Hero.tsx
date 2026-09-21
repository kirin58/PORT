import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-dots absolute inset-0 opacity-40" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-lime-200/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.2fr_0.8fr] md:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-emerald-700 shadow-sm">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            เปิดรับงานฝึกงาน / สหกิจศึกษา 2026
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.15] text-emerald-950 md:text-6xl">
            สวัสดีครับ ผม
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              {profile.name}
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-semibold text-emerald-800">
              {profile.role} 🌱
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-emerald-900/80 md:text-base">
            {profile.bio}
          </p>
          <p className="mt-3 text-sm text-emerald-700">
            📍 {profile.location} • 🎓 {profile.university}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              ดูผลงานของผม →
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-emerald-200 bg-white px-7 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              ดูเรซูเม่ 📄
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {["Next.js", "React", "TypeScript", "Hono", "SQLite", "Git"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full bg-emerald-100/80 px-3 py-1.5 font-medium text-emerald-800"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* Profile card */}
        <div className="relative">
          <div className="mx-auto max-w-sm rounded-[28px] border border-emerald-100 bg-white p-6 text-center shadow-xl shadow-emerald-100">
            <Image
              src={profile.photo}
              alt={profile.englishName}
              width={220}
              height={280}
              className="mx-auto h-56 w-44 rounded-[24px] border-4 border-emerald-100 object-cover object-top shadow-md"
              priority
            />
            <p className="mt-4 font-bold text-emerald-950">{profile.englishName}</p>
            <p className="text-sm text-emerald-600">{profile.roleEn}</p>
            <p className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs text-emerald-700">
              ● พร้อมเริ่มงานทันที
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 text-left">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-[#f3faf4] border border-emerald-100 p-3 text-center"
                >
                  <p className="text-2xl font-bold text-emerald-600">{s.value}</p>
                  <p className="text-xs text-emerald-800">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                className="flex-1 rounded-xl bg-emerald-950 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-900"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                className="flex-1 rounded-xl bg-emerald-100 py-2.5 text-center text-sm font-medium text-emerald-800 hover:bg-emerald-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-[#f3faf4]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-bold text-white shadow-md shadow-emerald-200">
            {profile.avatarInitials}
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold text-emerald-950">
              {profile.englishName}
            </span>
            <span className="block text-xs text-emerald-600">
              Software Engineering
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-emerald-900 transition hover:bg-emerald-100 hover:text-emerald-700"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-700 sm:block"
          >
            จ้าง / ฝึกงาน 🌱
          </a>
          <a
            href="#projects"
            className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm md:hidden"
          >
            เมนู
          </a>
        </div>
      </nav>
      {/* mobile links */}
      <div className="flex gap-1 overflow-x-auto px-5 pb-3 md:hidden">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="whitespace-nowrap rounded-full bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 text-[13px] text-emerald-800"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}

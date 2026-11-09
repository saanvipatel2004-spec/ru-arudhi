export default function SocialsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFF5F0] pt-24 sm:pt-28">
      {/* Header */}
      <section className="px-5 pb-12 text-center sm:px-6 sm:pb-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
          Stay Connected
        </p>

        <h1 className="font-serif text-3xl leading-tight text-[#2A0D0D] sm:text-4xl md:text-6xl">
          Follow RU ARUDHI
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:mt-6 md:text-lg">
          Keep up with our performances, rehearsals, events, and everything
          happening throughout the year.
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
          Follow us on social media to see what we&apos;re dancing, where
          we&apos;re performing, and what the RU ARUDHI community is up to.
        </p>
      </section>

      {/* Social Cards */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-6 sm:pb-24">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ru.arudhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[1.5rem] border border-[#EBC76A]/30 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-[2rem] sm:p-8 md:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F0] text-lg font-bold text-[#2A0D0D] sm:h-14 sm:w-14 sm:text-xl">
              IG
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A46E] sm:mt-8 sm:text-sm sm:tracking-[0.2em]">
              Instagram
            </p>

            <h2 className="mt-2 break-words font-serif text-2xl text-[#2A0D0D] sm:text-3xl">
              @ru.arudhi
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Follow us for performance photos, event updates, rehearsal
              moments, announcements, and a closer look at RU ARUDHI.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#2A0D0D] transition group-hover:gap-3 sm:mt-8">
              Follow on Instagram
              <span aria-hidden="true">→</span>
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@ruarudhi?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[1.5rem] border border-[#EBC76A]/30 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-[2rem] sm:p-8 md:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F0] text-lg font-bold text-[#2A0D0D] sm:h-14 sm:w-14 sm:text-xl">
              TT
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A46E] sm:mt-8 sm:text-sm sm:tracking-[0.2em]">
              TikTok
            </p>

            <h2 className="mt-2 break-words font-serif text-2xl text-[#2A0D0D] sm:text-3xl">
              @ruarudhi
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Watch dance clips, behind-the-scenes moments, trends, and fun
              highlights from our members and performances.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#2A0D0D] transition group-hover:gap-3 sm:mt-8">
              Follow on TikTok
              <span aria-hidden="true">→</span>
            </div>
          </a>
        </div>

        {/* Closing Section */}
        <div className="mt-8 rounded-[1.5rem] bg-[#2A0D0D] px-5 py-8 text-center sm:mt-12 sm:rounded-[2rem] sm:px-8 sm:py-10 md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EBC76A] sm:text-sm sm:tracking-[0.25em]">
            Dance With Us
          </p>

          <h2 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-3xl">
            Stay connected with RU ARUDHI.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            From rehearsals to the stage, follow along and be part of our
            journey throughout the year.
          </p>
        </div>
      </section>
    </main>
  );
}
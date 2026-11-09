import Image from "next/image";
import OpeningAnimation from "@/components/OpeningAnimation";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#EBC76A] via-[#F5A46E] to-[#FF6B6B]">
      <OpeningAnimation />

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-5 pb-10 pt-24 text-center sm:px-6 md:px-8">
        <Image
          src="/logo.png"
          alt="RU ARUDHI Logo"
          width={250}
          height={250}
          priority
          className="mb-5 h-auto w-[170px] sm:mb-6 sm:w-[210px] md:w-[250px]"
        />

        <h1 className="mb-3 mt-3 text-4xl font-bold tracking-[0.15em] text-[#2A0D0D] sm:mt-4 sm:text-5xl sm:tracking-[0.2em] md:text-7xl md:tracking-[0.3em]">
          RU ARUDHI
        </h1>

        <div className="mb-5 h-1 w-24 rounded-full bg-[#2A0D0D] sm:mb-6 sm:w-32" />

        <p className="mb-4 max-w-xl text-lg leading-relaxed text-[#2A0D0D] sm:text-xl md:text-2xl">
          Rutgers University&apos;s Bharatanatyam Organization
        </p>

        <p className="max-w-3xl text-base leading-relaxed text-[#2A0D0D] sm:text-lg md:text-xl">
          Celebrating culture, artistry, tradition, and sisterhood through the
          beauty of Bharatanatyam.
        </p>

        <a
          href="#special"
          className="mt-8 flex w-full max-w-xs items-center justify-center rounded-full bg-[#2A0D0D] px-6 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#4A1717] sm:mt-10 sm:inline-flex sm:w-auto sm:max-w-none sm:px-10 sm:text-lg sm:hover:scale-105"
        >
          Explore RU ARUDHI
        </a>
      </section>

      {/* Special Section */}
      <section
        id="special"
        className="bg-white px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold leading-tight text-[#2A0D0D] sm:text-4xl md:mb-12 md:text-5xl">
            What Makes RU ARUDHI Special?
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {/* Dance */}
            <div className="rounded-[1.5rem] bg-[#FFF5F0] p-6 shadow-lg transition-transform duration-300 sm:rounded-3xl sm:p-8 md:hover:-translate-y-2">
              <h3 className="mb-3 text-2xl font-bold text-[#2A0D0D] sm:mb-4 sm:text-3xl">
                Dance
              </h3>

              <p className="leading-7 text-gray-700">
                Explore Bharatanatyam through performances, workshops, and
                choreography throughout the year.
              </p>
            </div>

            {/* Family */}
            <div className="rounded-[1.5rem] bg-[#FFF5F0] p-6 shadow-lg transition-transform duration-300 sm:rounded-3xl sm:p-8 md:hover:-translate-y-2">
              <h3 className="mb-3 text-2xl font-bold text-[#2A0D0D] sm:mb-4 sm:text-3xl">
                Family
              </h3>

              <p className="leading-7 text-gray-700">
                Build meaningful friendships and become part of a supportive
                dance family.
              </p>
            </div>

            {/* Culture */}
            <div className="rounded-[1.5rem] bg-[#FFF5F0] p-6 shadow-lg transition-transform duration-300 sm:rounded-3xl sm:p-8 md:hover:-translate-y-2">
              <h3 className="mb-3 text-2xl font-bold text-[#2A0D0D] sm:mb-4 sm:text-3xl">
                Culture
              </h3>

              <p className="leading-7 text-gray-700">
                Celebrate tradition, storytelling, and cultural expression
                through classical dance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
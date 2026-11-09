import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="About Us"
        subtitle="More than dance. More than a team. A home away from home."
      />

      {/* Our Story */}
      <section className="bg-white px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
              More Than Dance
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2A0D0D] sm:text-4xl md:text-5xl">
              A Home Away From Home
            </h2>

            <div className="mx-auto mt-5 h-px w-14 bg-[#EBC76A] sm:mt-6 sm:w-16" />
          </div>

          {/* Personal Message */}
          <div className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-[#EBC76A]/30 bg-[#FFF5F0] px-5 py-8 shadow-sm sm:rounded-[2rem] sm:px-7 sm:py-10 md:mt-12 md:px-14 md:py-14">
            {/* Decorative Quote */}
            <span
              aria-hidden="true"
              className="absolute left-4 top-2 font-serif text-6xl leading-none text-[#EBC76A]/30 sm:left-6 sm:text-8xl md:left-10 md:text-9xl"
            >
              “
            </span>

            <p className="relative z-10 text-[15px] leading-7 text-[#2A0D0D]/80 sm:text-base sm:leading-8 md:text-lg md:leading-9">
              RU Arudhi is not just a dance organization, it is a family. It’s
              where we all go when we feel lost, and what we all do when we need
              hope. The creativity, leadership, resilience, determination, and
              passion I have seen from everyone on this team is a blessing that
              I thank God every night for. The people that make up this
              organization: Eboard, Performance Group, Intermediate Group,
              Beginner’s Classes, and even more, have met me with so much joy,
              laughter, and friendship, and I wouldn’t have it any other way.
              College can happen without Arudhi, but I don’t know if I can do
              college without it. I have made so many friends, shared so many
              laughs, and found a home away from home here at Rutgers. I have
              put my all into making this place a home for everyone that enters,
              and I am so bittersweet serving my last year as President. To
              everyone that makes it possible for me to do what I love on the
              daily, thank you. Arudhi is so much more than me. Arudhi is all of
              you, all of us.
            </p>

            {/* Signature */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <div className="hidden h-px flex-1 bg-[#EBC76A]/50 sm:block" />

              <p className="text-center font-serif text-base italic text-[#2A0D0D] sm:text-lg">
                With love, RU ARUDHI
              </p>

              <div className="hidden h-px flex-1 bg-[#EBC76A]/50 sm:block" />
            </div>

            <div className="mx-auto mt-3 h-px w-20 bg-[#EBC76A]/50 sm:hidden" />
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#FFF5F0] px-5 py-14 text-center sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
            Our Family
          </p>

          <h2 className="mt-4 font-serif text-2xl leading-tight text-[#2A0D0D] sm:text-3xl md:text-4xl">
            Arudhi is all of you.
            <br />
            Arudhi is all of us.
          </h2>

          <div className="mx-auto mt-6 h-px w-14 bg-[#EBC76A] sm:mt-7 sm:w-16" />
        </div>
      </section>
    </main>
  );
}
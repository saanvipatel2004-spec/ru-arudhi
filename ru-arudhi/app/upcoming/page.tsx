import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function UpcomingEventsPage() {
  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Upcoming Events"
        subtitle="See what’s coming up with RU ARUDHI."
      />

      {/* Featured Event */}
      <section className="bg-white px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
              Featured Event
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2A0D0D] sm:text-4xl md:text-5xl">
              Annual Classical Showcase
            </h2>

            <div className="mx-auto mt-5 h-px w-14 bg-[#EBC76A] sm:w-16" />
          </div>

          {/* Event Card */}
          <div className="overflow-hidden rounded-[1.5rem] border border-[#EBC76A]/30 bg-[#FFF5F0] shadow-lg sm:rounded-[2rem]">
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              
              {/* Flyer */}
              <div className="relative bg-[#F9D1D5] p-4 sm:p-6 md:p-8">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src="/showcase-2027.jpeg"
                    alt="RU ARUDHI Annual Classical Showcase Flyer"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 40vw"
                  />
                </div>
              </div>

              {/* Event Information */}
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm">
                  RU ARUDHI Presents
                </p>

                <h3 className="mt-3 font-serif text-3xl leading-tight text-[#2A0D0D] sm:text-4xl">
                  Annual Classical Showcase
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  Join RU ARUDHI for an evening celebrating Bharatanatyam,
                  classical dance, artistry, and community. Come support our
                  dancers as we bring together a year of dedication and
                  performance on one stage.
                </p>

                {/* Event Details */}
                <div className="mt-8 space-y-5">
                  <div className="border-b border-[#EBC76A]/30 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A46E]">
                      Date
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#2A0D0D]">
                      November 15, 2027
                    </p>
                  </div>

                  <div className="border-b border-[#EBC76A]/30 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A46E]">
                      Time
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#2A0D0D]">
                      5:30 PM
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A46E]">
                      Location
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#2A0D0D]">
                      LSC MPR
                    </p>
                  </div>
                </div>

                {/* Tickets */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeiAhjwTPMwaARQbXuecBFI--mmv6XLhFhxY9ClsNSU96_xdg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 flex w-full items-center justify-center gap-3 rounded-full bg-[#2A0D0D] px-7 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#4A1717] sm:w-fit sm:hover:scale-105"
                >
                  Get Tickets
                  <span aria-hidden="true">→</span>
                </a>

                <p className="mt-3 text-sm text-gray-500">
                  Ticket form opens in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-[#FFF5F0] px-5 py-14 text-center sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
            Join Us
          </p>

          <h2 className="mt-4 font-serif text-2xl leading-tight text-[#2A0D0D] sm:text-3xl md:text-4xl">
            We can&apos;t wait to see you there.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
            Follow RU ARUDHI on social media for performance updates,
            announcements, and future events.
          </p>

          <div className="mx-auto mt-7 h-px w-16 bg-[#EBC76A]" />
        </div>
      </section>
    </main>
  );
}
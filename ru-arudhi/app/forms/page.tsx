import PageHeader from "@/components/PageHeader";

export default function LetsChatPage() {
  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Let’s Chat!"
        subtitle="Your voice matters to us."
      />

      {/* Main Section */}
      <section className="bg-white px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
              We&apos;re Listening
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2A0D0D] sm:text-4xl md:text-5xl">
              Have Something on Your Mind?
            </h2>

            <div className="mx-auto mt-5 h-px w-14 bg-[#EBC76A] sm:mt-6 sm:w-16" />

            <p className="mt-6 text-base leading-7 text-gray-600 sm:mt-7 sm:leading-8 md:text-lg">
              RU ARUDHI is built by the people who make up our organization,
              and we want everyone to feel heard. Whether you have feedback,
              questions, ideas, concerns, or simply something you would like us
              to know, this is a space for you to share.
            </p>
          </div>

          {/* Form Card */}
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[1.5rem] border border-[#EBC76A]/30 bg-[#FFF5F0] p-6 text-center shadow-sm sm:mt-14 sm:rounded-[2rem] sm:p-8 md:p-12">
            <h3 className="font-serif text-2xl text-[#2A0D0D] sm:text-3xl">
              Share With Us
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
              Use our form to send us your thoughts. Take your time, say what
              you need to say, and share as much or as little as you&apos;d
              like.
            </p>

            <a
              href="https://forms.gle/WaqJ8SjGjAnYmx5V9"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-7 flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-[#2A0D0D] px-5 py-4 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#4A1717] sm:mt-8 sm:inline-flex sm:w-auto sm:max-w-none sm:px-9 sm:text-base sm:hover:scale-105"
            >
              Open Let&apos;s Chat Form
              <span aria-hidden="true">→</span>
            </a>

            <p className="mt-5 text-sm text-gray-500">
              The form will open in a new tab.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#FFF5F0] px-5 py-14 text-center sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
            RU ARUDHI
          </p>

          <h2 className="mt-4 font-serif text-2xl leading-tight text-[#2A0D0D] sm:text-3xl md:text-4xl">
            Every voice has a place here.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Thank you for helping us continue to grow, improve, and make ARUDHI
            a welcoming space for everyone.
          </p>

          <div className="mx-auto mt-6 h-px w-14 bg-[#EBC76A] sm:mt-7 sm:w-16" />
        </div>
      </section>
    </main>
  );
}
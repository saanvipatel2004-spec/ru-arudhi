import PageHeader from "@/components/PageHeader";

export default function ActiveMembershipPage() {
  return (
    <main className="overflow-x-hidden">
      <PageHeader
        title="Active Membership"
        subtitle="Recognizing the members who consistently show up, contribute, and grow with RU ARUDHI."
      />

      {/* WHAT IS ACTIVE MEMBERSHIP */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
              Active Membership
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2A0D0D] sm:text-4xl">
              What is Active Membership?
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Performance Group members can move in and out of ARUDHI and may
              participate in one performance without participating in every
              other opportunity. Active Membership, or AM, gives ARUDHI a way
              to recognize sustained effort and consistent involvement over
              time.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {/* Consistency */}
            <div className="rounded-[1.5rem] bg-[#FFF5F0] p-6 shadow-sm sm:rounded-3xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E]">
                Commitment
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#2A0D0D]">
                Sustained Effort
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                AM recognizes PG members who consistently contribute their
                time, effort, participation, and energy to ARUDHI throughout
                the year.
              </p>
            </div>

            {/* Membership */}
            <div className="rounded-[1.5rem] bg-[#FFF5F0] p-6 shadow-sm sm:rounded-3xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E]">
                Involvement
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#2A0D0D]">
                More Than One Performance
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Active Membership helps distinguish occasional participation
                from a deeper and more consistent commitment to the
                organization.
              </p>
            </div>

            {/* Opportunities */}
            <div className="rounded-[1.5rem] bg-[#FFF5F0] p-6 shadow-sm sm:rounded-3xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E]">
                Opportunities
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#2A0D0D]">
                A Little More
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                AM comes with additional dance opportunities and other perks as
                ARUDHI continues to develop and expand the program.
              </p>
            </div>
          </div>

          {/* Important Note */}
          <div className="mx-auto mt-10 max-w-4xl rounded-[1.5rem] border border-[#EBC76A]/50 bg-[#FFF9F4] px-5 py-7 text-center sm:mt-12 sm:rounded-3xl sm:px-8">
            <p className="font-serif text-xl leading-8 text-[#2A0D0D] sm:text-2xl">
              Active Membership is not a requirement to perform with RU ARUDHI.
            </p>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
              AM simply unlocks a few additional large-scale performance
              opportunities for members who demonstrate sustained involvement.
            </p>
          </div>
        </div>
      </section>

      {/* THIS YEAR */}
      <section className="bg-[#FFF5F0] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
                2026–2027
              </p>

              <h2 className="font-serif text-3xl leading-tight text-[#2A0D0D] sm:text-4xl">
                AM is for Performance Group
              </h2>

              <p className="mt-5 leading-7 text-gray-600 sm:mt-6">
                Active Membership applies only to Performance Group this year.
                We want to take additional time to develop what AM should look
                like for Intermediate and Beginner Classes before expanding the
                program.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                ARUDHI is still a growing organization, and we want to make
                sure the system develops in a way that is meaningful and fair
                for every group.
              </p>
            </div>

            {/* Feedback Card */}
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E]">
                Help Us Grow
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#2A0D0D]">
                Have an idea for AM?
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                We are still developing the benefits and incentives that come
                with Active Membership. If you have suggestions for making AM
                more meaningful or rewarding, we genuinely want to hear them.
              </p>

              <a
                href="/forms"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#2A0D0D] transition-opacity hover:opacity-60"
              >
                Share your feedback
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
              Performance Group
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2A0D0D] sm:text-4xl">
              How Do You Become an Active Member?
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              PG members now have one full academic year to complete the
              requirements, allowing flexibility if one semester is busier than
              the other.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {/* Adavu */}
            <div className="rounded-[1.5rem] border border-[#EBC76A]/30 bg-[#FFF5F0] p-6 text-center shadow-sm sm:rounded-[2rem] sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white font-serif text-xl font-bold text-[#2A0D0D]">
                6
              </div>

              <h3 className="mt-5 font-serif text-2xl text-[#2A0D0D]">
                Adavu Classes
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Attend 6 Adavu classes during the academic year.
              </p>
            </div>

            {/* Events */}
            <div className="rounded-[1.5rem] border border-[#EBC76A]/30 bg-[#FFF5F0] p-6 text-center shadow-sm sm:rounded-[2rem] sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white font-serif text-xl font-bold text-[#2A0D0D]">
                7
              </div>

              <h3 className="mt-5 font-serif text-2xl text-[#2A0D0D]">
                Events
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Attend 7 qualifying ARUDHI events throughout the year.
              </p>
            </div>

            {/* Performances */}
            <div className="rounded-[1.5rem] border border-[#EBC76A]/30 bg-[#FFF5F0] p-6 text-center shadow-sm sm:rounded-[2rem] sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white font-serif text-xl font-bold text-[#2A0D0D]">
                2
              </div>

              <h3 className="mt-5 font-serif text-2xl text-[#2A0D0D]">
                Performances
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Participate in 2 ARUDHI performances during the academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-[#FFF5F0] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
              Performance Opportunities
            </p>

            <h2 className="font-serif text-3xl text-[#2A0D0D] sm:text-4xl">
              Showcase
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Active Membership creates additional opportunities at Showcase
              without preventing other eligible PG members from performing.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E]">
                Everyone
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#2A0D0D]">
                Showcase Eligibility
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Everyone who is otherwise eligible may perform at Showcase.
                Active Membership itself is not required.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E]">
                Active Members
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#2A0D0D]">
                The AM Piece
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Active Members will have their own piece at Showcase and may
                also participate in the regular Performance Group dance.
              </p>
            </div>
          </div>

          {/* PG Showcase Requirement */}
          <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-[#EBC76A]/40 bg-white p-6 text-center">
            <p className="leading-7 text-[#2A0D0D]">
              <strong>New PG members:</strong> You must dance in at least one
              ARUDHI performance before Showcase in order to perform at
              Showcase.
            </p>
          </div>
        </div>
      </section>

      {/* PERFORMANCE SIGN-UPS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E] sm:text-sm sm:tracking-[0.25em]">
              Performance Group
            </p>

            <h2 className="font-serif text-3xl text-[#2A0D0D] sm:text-4xl">
              Performance Sign-Ups
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Sign-ups are designed to make performance selection clear and
              give members the information they need before committing to a
              piece.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2">
            {/* Signup */}
            <div className="rounded-[1.5rem] bg-[#FFF5F0] p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E]">
                Sign-Up Sheet
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#2A0D0D]">
                10-Minute Sign-Up Window
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Performance sign-up sheets will be released for 10 minutes
                during a PG practice time, when most members are expected to be
                available.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Each form will clearly outline the practices you must be able to
                attend in order to sign up for that performance.
              </p>
            </div>

            {/* Waitlist */}
            <div className="rounded-[1.5rem] bg-[#FFF5F0] p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A46E]">
                Missed the Form?
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#2A0D0D]">
                Join the Waitlist
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                If you cannot complete the sign-up sheet during its release
                window, a separate waitlist form will be available.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Members who submit the waitlist form can still be considered
                for available spots in a piece after the initial sign-up
                period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#FFF5F0] py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <div className="mx-auto mb-5 h-px w-14 bg-[#EBC76A] sm:w-16" />

          <p className="font-serif text-2xl leading-9 text-[#2A0D0D] md:text-3xl">
            Consistency matters more than perfection.
          </p>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Active Membership is our way of recognizing the members who
            consistently invest their time and energy into RU ARUDHI while
            giving everyone the flexibility to participate in the organization
            in the way that works best for them.
          </p>
        </div>
      </section>
    </main>
  );
}
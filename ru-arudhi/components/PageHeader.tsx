type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-[#EBC76A] via-[#F5A46E] to-[#FF6B6B] px-5 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 break-words text-4xl font-bold leading-tight text-[#2A0D0D] sm:text-5xl">
          {title}
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-7 text-[#2A0D0D] sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
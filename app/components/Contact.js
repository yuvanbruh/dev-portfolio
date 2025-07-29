'use client';

export default function FreelanceContact() {
  return (
    <section className="bg-black text-white px-6 pb-24 sm:px-10 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Available for select <br /> freelance opportunities
        </h2>

        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          Have an exciting project you need help with? <br />
          Send me an email or connect through the links below!
        </p>

        <a
          href="mailto:tamal@tamalsen.dev"
          className="inline-block text-lg font-semibold text-purple-400 border-b-2 border-purple-500 hover:text-purple-300 hover:border-purple-400 transition duration-300 mb-10"
        >
          tamal@tamalsen.dev
        </a>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-base font-mono text-gray-300">
          <a href="/messenger" className="hover:text-white transition duration-200">
            Messenger
          </a>
          <a href="/linkedin" className="hover:text-white transition duration-200">
            LinkedIn
          </a>
          <a href="/instagram" className="hover:text-white transition duration-200">
            Instagram
          </a>
          <a href="/github" className="hover:text-white transition duration-200">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

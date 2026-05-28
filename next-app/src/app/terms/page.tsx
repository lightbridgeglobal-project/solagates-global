import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 tracking-tight">Terms of Service</h1>
          <p className="font-sans text-grey-400">Last Updated: May 2026</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] max-w-4xl mx-auto prose prose-lg font-sans text-grey-600">
          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
          </p>
          
          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">2. Engineering & Advisory Services</h2>
          <p>
            Any preliminary calculations, ROI estimates, or system sizings provided on this website are estimations. Final technical specifications require a physical site audit by our engineering team.
          </p>

          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">3. Academy Enrollments</h2>
          <p>
            Registration for the Solagates Academy is subject to capacity. Fees are non-refundable once the induction period has commenced.
          </p>

          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">4. Liability</h2>
          <p>
            Solagates Global shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our digital platforms.
          </p>
        </div>
      </section>
    </div>
  );
}

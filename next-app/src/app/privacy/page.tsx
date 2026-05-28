import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 tracking-tight">Privacy Policy</h1>
          <p className="font-sans text-grey-400">Last Updated: May 2026</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] max-w-4xl mx-auto prose prose-lg font-sans text-grey-600">
          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">1. Introduction</h2>
          <p>
            Solagates Global ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights.
          </p>
          
          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Identity Data</strong> includes first name, last name, and title.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version.</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">3. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
            <strong>Email:</strong> privacy@solagates.com
          </p>
        </div>
      </section>
    </div>
  );
}

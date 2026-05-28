import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 tracking-tight">Cookie Policy</h1>
          <p className="font-sans text-grey-400">Last Updated: May 2026</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="w-[90%] md:w-[85%] 2xl:w-[75%] max-w-4xl mx-auto prose prose-lg font-sans text-grey-600">
          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>
          
          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">2. How we use Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>

          <h2 className="font-display font-bold text-2xl text-primary mt-8 mb-4">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Strictly Necessary Cookies:</strong> These are required for the operation of our website.</li>
            <li><strong>Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors.</li>
            <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

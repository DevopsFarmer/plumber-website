import ContactForm from "./Contactpage";


export default function ContactPage() {
  return (
    <main className="bg-white py-12 mt-20 px-6 lg:px-24">
      <section className="text-center mb-12">
      <div className="flex items-center w-full gap-4">
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
          <h2 className="text-6xl font-bold text-[#3E180E] text-center whitespace-nowrap">
          Get in Touch?
          </h2>
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
        </div>
        <p className="text-[#3F170F] mt-4 max-w-2xl mx-auto">
          Get in touch with us for reliable plumbing services in Alice Springs.
          Whether it’s repairs, installations, or maintenance, our experienced
          team is here to help.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img 
            src="contactImg\vecteezy_plumbing-services-banner-or-advertising-poster-template-with_25754781 1.png" // Update with correct path
            alt="Plumbing Service"
            className="max-w-md w-full"
          />
        </div>


        <ContactForm />
        
      </div>
    </main>
  );
}

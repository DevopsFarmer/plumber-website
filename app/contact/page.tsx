import ContactForm from "../components/MyComponents/ContactPage/Contactpage";


export default function ContactPage() {
  return (
    <main className="bg-white py-12 px-6 lg:px-24">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brown-800">Get in Touch?</h1>
        <p className="text-brown-700 mt-4 max-w-2xl mx-auto">
          Get in touch with us for reliable plumbing services in Alice Springs.
          Whether it’s repairs, installations, or maintenance, our experienced
          team is here to help.
        </p>
      </section>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Illustration */}
        <div className="flex justify-center">
          <img 
            src="contactImg\vecteezy_plumbing-services-banner-or-advertising-poster-template-with_25754781 1.png" // Update with correct path
            alt="Plumbing Service"
            className="max-w-md w-full"
          />
        </div>

        {/* Contact Form */}
        <ContactForm />
        
      </div>
    </main>
  );
}

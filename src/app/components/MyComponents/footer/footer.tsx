"use client";

export default function Footer() {
  const footerSections = [
    {
      title: "Site Links",
      links: [
        { name: "Home", url: "#" },
        { name: "About", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Hot Water System", url: "#" },
        { name: "Leakage Detection", url: "#" },
        { name: "Commercial Plumbing", url: "#" },
        { name: "Industrial Plumbing", url: "#" },
        { name: "Residential Plumbing", url: "#" },
        { name: "Any Other Requests", url: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "Call Us on 0418 333 952", url: "tel:0418333952" },
        {
          name: "78 Standley Crescent, Gillen, Alice Springs",
          url: "https://goo.gl/maps/RR5P2VRPbEoRjzB59",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#FCF8E8] py-6 lg:py-8">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="md:flex md:justify-between">

          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="/aboutImg/image 195.png" className="h-40 sm:h-60" alt="Logo" />
            </a>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-3 ">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                  {section.title}
                </h2>
                <ul className="text-gray-500 font-medium space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {section.title === "Contact Us" && (
                  <div className="mt-4">
                    <iframe
                      className="w-full max-w-[320px] h-[130px] rounded-lg shadow-md"
                      src="https://maps.google.com/maps?q=78+Standley+Crescent,+Gillen,+Alice+Springs&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="text-right">
          <span className="text-sm text-gray-500">Copyright &copy; 2025</span>
        </div>
      </div>
    </footer>
  );
}

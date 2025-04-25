
const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      id: 2,
      name: "Google Cloud",
      logo: "https://www.gstatic.com/devrel-devsite/prod/v24d520161e40b626311fe9bacc8b9206697364b98a7758c2b25fb7a4300a1671/cloud/images/cloud-logo.svg",
    },
    {
      id: 3,
      name: "Amazon Web Services",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      id: 4,
      name: "Microsoft Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    },
    {
      id: 5,
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage industry-leading AI and cloud technologies to deliver powerful automation solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

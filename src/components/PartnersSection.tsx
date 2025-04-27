import { useEffect, useRef } from "react";

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      id: 2,
      name: "HeyGen",
      logo: "/logo/heygen.png",
    },
    {
      id: 4,
      name: "Pika",
      logo: "/logo/pika.jpg",
    },
    {
      id: 1,
      name: "Gumloop",
      logo: "/logo/gumloop.png",
    },
    {
      id: 3,
      name: "Runway",
      logo: "/logo/runaway.png",
    },
    {
      id: 5,
      name: "Lindy",
      logo: "/logo/lindy.png",
    },
    {
      id: 6,
      name: "Buffer",
      logo: "/logo/buffer.jpg",
    },
    {
      id: 7,
      name: "WordPress",
      logo: "/logo/wordpress.png",
    },
    {
      id: 8,
      name: "ElevenLabs",
      logo: "/logo/elevenlabs.webp",
    },
    {
      id: 9,
      name: "Retell",
      logo: "/logo/retell.webp",
    },
    {
      id: 10,
      name: "Vapi",
      logo: "/logo/vapi.jpg",
    },
    // Duplicate logos for seamless scrolling
    {
      id: 2,
      name: "HeyGen",
      logo: "/logo/heygen.png",
    },
    {
      id: 4,
      name: "Pika",
      logo: "/logo/pika.jpg",
    },
    {
      id: 1,
      name: "Gumloop",
      logo: "/logo/gumloop.png",
    },
    {
      id: 3,
      name: "Runway",
      logo: "/logo/runaway.png",
    },
    {
      id: 5,
      name: "Lindy",
      logo: "/logo/lindy.png",
    },
    {
      id: 6,
      name: "Buffer",
      logo: "/logo/buffer.jpg",
    },
    {
      id: 7,
      name: "WordPress",
      logo: "/logo/wordpress.png",
    },
    {
      id: 8,
      name: "ElevenLabs",
      logo: "/logo/elevenlabs.webp",
    },
    {
      id: 9,
      name: "Retell",
      logo: "/logo/retell.webp",
    },
    {
      id: 10,
      name: "Vapi",
      logo: "/logo/vapi.jpg",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customised Integration with Trendy Technologies
          </h2>
          <p className="text-lg text-gray-600">
            We seamlessly integrate with leading AI and cloud platforms to
            deliver powerful automation solutions. Our expertise in these
            technologies allows us to build robust, scalable, and efficient
            systems that drive your business forward.
          </p>
        </div>

        {/* Infinite Scrolling Container */}
        <div
          ref={scrollRef}
          className="relative overflow-hidden w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex space-x-8 animate-scroll">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex-shrink-0 flex items-center justify-center p-4 transition-all will-change-transform"
              >
                <div className="bg-white rounded-2xl p-4 transition-all">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-16 md:h-20 object-contain rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

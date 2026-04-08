import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ClientFeedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Stive meloni",
      role: "Ceo Of Miko",
      title: "The Best Training Program!",
      comment:
        "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive1",
    },
    {
      id: 2,
      name: "Stive meloni",
      role: "Ceo Of Miko",
      title: "The Best Training Program!",
      comment:
        "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive2",
    },
    {
      id: 3,
      name: "Stive meloni",
      role: "Ceo Of Miko",
      title: "The Best Training Program!",
      comment:
        "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive3",
    },
    // Adding more to match your 6-card grid
    {
      id: 4,
      name: "Stive meloni",
      role: "Ceo Of Miko",
      title: "The Best Training Program!",
      comment:
        "The boxing program helped me build confidence, strength, and endurance...",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive4",
    },
    {
      id: 5,
      name: "Stive meloni",
      role: "Ceo Of Miko",
      title: "The Best Training Program!",
      comment:
        "The boxing program helped me build confidence, strength, and endurance...",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive5",
    },
    {
      id: 6,
      name: "Stive meloni",
      role: "Ceo Of Miko",
      title: "The Best Training Program!",
      comment:
        "The boxing program helped me build confidence, strength, and endurance...",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive6",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16 px-6 ">
      <div className="">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#333] mb-2">
            What Our Clients Are Saying
          </h2>
          <p className="text-gray-500 text-lg">
            Real Stories, Real Results — Hear From Our Athletes
          </p>
        </div>

        {/* Feedback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-black rounded-2xl p-8 flex flex-col justify-between shadow-xl transition-transform hover:scale-[1.02]"
            >
              {/* Content */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {item.comment}
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src={item?.avatar}
                      alt={item?.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(4)].map((_, i) => (
                      <AiFillStar key={i} size={14} />
                    ))}
                    {/* Half Star approximation using a different color or partial fill */}
                    <AiFillStar size={14} className="text-yellow-500/50" />
                  </div>
                  <span className="text-gray-400 text-[10px] ml-1">
                    ({item.rating})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;

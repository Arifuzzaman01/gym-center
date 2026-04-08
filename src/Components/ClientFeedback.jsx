import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import ClientFeedBackCard from "./ClientFeedBackCard";

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
        "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive4",
    },
    {
      id: 5,
      name: "Stive meloni",
      role: "Ceo Of Miko",
      title: "The Best Training Program!",
      comment:
        "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive5",
    },
    {
      id: 6,
      name: "Stive meloni",
      role: "Ceo Of Miko",
      title: "The Best Training Program!",
      comment:
        "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      rating: 4.5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stive6",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16 px-6 rounded-3xl">
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
            <ClientFeedBackCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;

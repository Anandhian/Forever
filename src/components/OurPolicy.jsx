import React from "react";
import { MdSwapHoriz } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";

const OurPolicy = () => {
  const policies = [
    {
      icon: <MdSwapHoriz className="text-4xl mx-auto mb-3" />,
      title: "Easy Exchange Policy",
      subtitle: "We offer hassle free exchange policy",
    },
    {
      icon: <BsShieldCheck className="text-4xl mx-auto mb-3" />,
      title: "7 Days Return Policy",
      subtitle: "We provide 7 days free return policy",
    },
    {
      icon: <FiHeadphones className="text-4xl mx-auto mb-3" />,
      title: "Best customer support",
      subtitle: "we provide 24/7 customer support",
    },
  ];

  return (
    <div className="py-10 mt-20  bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {policies.map((item, index) => (
          <div key={index}>
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;

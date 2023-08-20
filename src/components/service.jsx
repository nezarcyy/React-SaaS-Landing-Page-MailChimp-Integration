import React, { useState } from "react";

const Service = () => {
  const [effects, setEffects] = useState({}); // Use an object to manage effects for each details element

  const toggleEffect = (index) => {
    setEffects((prevEffects) => ({
      ...prevEffects,
      [index]: !prevEffects[index],
    }));
  };

  return (
    <section className="scroll-smooth bg-black/40">
      <h2 className="text-3xl tracking-tight mb-8 font-extrabold text-gray-200 sm:text-4xl dark:text-white">Any Questions? Look Here</h2>
      <div className="py-8 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-6">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="w-full border-black bg-black/50 rounded-lg"
              onClick={() => toggleEffect(index)}
              onAnimationEnd={() => toggleEffect(index)}
            >
              <summary className="px-4 py-6 text-lg font-small text-gray-300 text-left focus:outline-none focus-visible:ri">
                {faq.question}
              </summary>
              <p
                className={`${effects[index] && "animate-fade-down animate-once animate-ease-in-out"} px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 text-left `}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What is NextierLab, and when will it be launched?",
    answer:
      "NextierLab is an exciting new all-in-one e-commerce sellers growth platform designed to empower online sellers with powerful tools for product optimization. We're working diligently to launch NextierLab soon. Sign up for our newsletter to be among the first to know about the official launch date.",
  },
  {
    question: "How can I stay updated about the launch of NextierLab?",
    answer:
      "You can subscribe to our newsletter to receive timely updates about our launch, early access opportunities, and exclusive bonuses. We'll keep you informed every step of the way.",
  },
  {
    question: "What features will NextierLab offer to e-commerce sellers?",
    answer:
      "NextierLab will provide a comprehensive set of features, including AI-driven image enhancement, SEO description optimization, advanced keyword research, and a winning product research tool. These tools will help you optimize your product listings and boost your online business.",
  },
  {
    question: "How can NextierLab help me manage multiple stores?",
    answer:
      "With NextierLab, managing multiple online stores becomes a breeze. You can seamlessly oversee your stores from different e-commerce platforms, centralizing inventory, updates, and analytics, all within a single account.",
  },
  {
    question: "What analytics can I expect from NextierLab?",
    answer:
      "NextierLab's analytics offer deep insights into your store's performance. From sales trends to customer behavior, and even product popularity, our intuitive analytics help you make informed decisions and refine your strategies.",
  },
  {
    question: "Is my data safe with NextierLab?",
    answer:
      "Absolutely. We take data privacy seriously. Your information will be handled with the utmost care and in accordance with our Privacy Policy. Feel free to review it for more details.",
  },
  {
    question: "Will there be any early access or pre-launch opportunities for NextierLab?",
    answer:
      "Yes, we're planning to offer early access to a limited number of users before the official launch. Subscribers to our newsletter will have the first opportunity to gain early access, so be sure to subscribe to stay in the loop.",
  },
  {
    question: "How will NextierLab help e-commerce sellers stand out in a competitive market?",
    answer:
      "NextierLab's advanced optimization tools will help your product listings attract more customers. With features like AI image enhancement and keyword optimization, you'll have a competitive edge in showcasing your products effectively.",
  },
  {
    question: "What kind of support will be available for users of NextierLab?",
    answer:
      "We're committed to providing excellent customer support. Once NextierLab is launched, we'll offer various support channels, including email support, a knowledge base, and possibly live chat, to ensure you have the help you need.",
  },
  {
    question: "How can I contact NextierLab for more information or questions?",
    answer:
      "For now, the best way to get in touch is by subscribing to our newsletter, where we'll provide updates and communicate with you. We're excited to connect with you and provide the information you need once we launch.",
  },

];

export default Service;

import { LogoName } from "@/constants/logo-name";

const faq = [
  {
    question: "Are your courses beginner-friendly?",
    answer:
      "Yes! Our cybersecurity courses cover everything from the basics to advanced techniques. Whether you're a complete beginner or looking to sharpen your skills, we have structured content to guide you step by step.",
  },
  {
    question: "Can I gift access to friends and coworkers?",
    answer:
      "Yes! With the team plan in your account, you can add up to 10 members per purchase. If you need more, simply make additional purchases. Team plans come at a discounted rate, making it the most simple and cost-effective way to provide access.",
  },
  {
    question: "Can I redo previous lessons?",
    answer:
      "You can go back to previous lessons. You cannot answer them again, but you can read through them and see the correct answers.",
  },
  {
    question: "Why do you offer one-time payments instead of subscriptions?",
    answer:
      "Right now, our courses are designed to be completed within a month, ensuring you get full value from your access. We believe in ethical billing—one-time payments ensure you won't be charged unexpectedly. As our platform grows and we offer more content, we may introduce optional subscriptions in the future.",
  },
  {
    question: "I need to come in contact with you. How can I do that?",
    answer: `For any inquiries or support, you can reach us at ${LogoName.supportMail}`,
  },
  {
    question: "What is your technology stack?",
    answer:
      "Our frontend and backend are both written in TypeScript. The frontend is built with Next.js and React, while the backend runs on Node.js with a PostgreSQL database.",
  },
];

function FAQPage() {
  return (
    <>
      <header className="text-4xl text-center mt-2 mb-6 font-bold ">FAQ</header>
      <div className="flex justify-center mx-4">
        <div className="join join-vertical w-full max-w-2xl bg-base-400 text-slate-300">
          {faq.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-200 mb-2"
            >
              <input type="radio" name="my-accordion-1" id={`faq-${index}`} />
              <label
                htmlFor={`faq-${index}`}
                className="collapse-title text-lg font-bold cursor-pointer"
              >
                {item.question}
              </label>
              <div className="collapse-content text-sm">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQPage;

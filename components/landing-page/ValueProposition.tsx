import { LogoName } from "@/constants/logo-name";

export function ValueProposition() {
  const cards = [
    {
      title: "Is Cybersecurity Important?",
      description: `A team is only as strong as its weakest link. An untrained employee can become an entry point for threats. ${LogoName.AppName} helps companies educate all employees to strengthen security.`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="150px"
          viewBox="0 -960 960 960"
          width="150px"
          fill="#2563eb"
        >
          <path d="M200-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T608-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T361-690q-39 33-69 68.5t-50.5 72Q221-513 210.5-475T200-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T497-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T582-658l18-22q74 42 117 117t43 163q0 134-93 227T440-80q-134 0-227-93t-93-227q0-129 86.5-245T440-840Zm400 320q-17 0-28.5-11.5T800-560q0-17 11.5-28.5T840-600q17 0 28.5 11.5T880-560q0 17-11.5 28.5T840-520Zm-40-120v-200h80v200h-80Z" />
        </svg>
      ),
    },
    {
      title: `Why ${LogoName.AppName}?`,
      description:
        "Our easy-to-learn courses provide essential cybersecurity knowledge, ensuring your team has a solid foundation even without prior experience while also teaching managers how to protect their business.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="150px"
          viewBox="0 -960 960 960"
          width="150px"
          fill="#2563eb"
        >
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480h80q0 66 25 124.5t68.5 102q43.5 43.5 102 69T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-89 0-161.5 43.5T204-640h116v80H80v-240h80v80q55-73 138-116.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-80-240q-17 0-28.5-11.5T360-360v-120q0-17 11.5-28.5T400-520v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40q17 0 28.5 11.5T600-480v120q0 17-11.5 28.5T560-320H400Zm40-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40Z" />
        </svg>
      ),
    },
    {
      title: "Cybersecurity for SMBs",
      description: `Many SMBs lack an incident response and disaster recovery plan. ${LogoName.AppName} provides practical examples to secure data and prevent attacks—easy to understand and apply.`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="150px"
          viewBox="0 -960 960 960"
          width="150px"
          fill="#2563eb"
        >
          <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header className="md:text-[3rem] text-4xl text-center mt-6 font-bold md:p-10 p-4 leading-snug">
        Knowledge is your best defense
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl gap-8 mt-12 text-md place-items-center mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg p-6 text-center md:text-left max-w-sm flex flex-col h-full"
          >
            <div className="flex justify-center mb-4">{card.svg}</div>
            <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
            <p className="flex-grow">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

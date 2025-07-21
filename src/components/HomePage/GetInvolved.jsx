// components/GetInvolved.jsx
import React from 'react';
import { Building2, Handshake, User2 } from 'lucide-react';

const involvementOptions = [
  {
    icon: <Building2 className="w-8 h-8 text-indigo-600" />,
    title: "For Corporates",
    description: "Drive impact beyond CSR. Join India's most ambitious public-private road safety movement.",
    points: [
      "Sponsor high-impact safety programs",
      "Co-develop tech innovations and safety tools",
      "Adopt fleet and employee road safety policies",
    ],
    button: "Partner With Us",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfMz0z7QhK0ir2oVxD_uZ89KJ-7ATAe1BvHJBFOoLBb84Duog/viewform",
  },
  {
    icon: <Handshake className="w-8 h-8 text-indigo-600" />,
    title: "For Nonprofits",
    description:
      "Let's amplify each other. If you're already working in safety, health, mobility, or community building, we'd love to collaborate.",
    points: [
      "Joint awareness campaigns",
      "Resource sharing and knowledge exchange",
      "Collaborative policy advocacy",
    ],
    button: "Collaborate",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfMz0z7QhK0ir2oVxD_uZ89KJ-7ATAe1BvHJBFOoLBb84Duog/viewform",
  },
  {
    icon: <User2 className="w-8 h-8 text-indigo-600" />,
    title: "For Volunteers",
    description: "From street-level campaigns to digital advocacy, every action matters.",
    points: [
      "Lead local awareness drives",
      "Help with data collection & surveys",
      "Host sessions in schools & communities",
    ],
    button: "Volunteer",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfMz0z7QhK0ir2oVxD_uZ89KJ-7ATAe1BvHJBFOoLBb84Duog/viewform",
  },
];

const GetInvolved = () => {
  return (
    <section id="getinvolved" className="scroll-mt-20">
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          You Can Help Drive the Change. Crash Free India is built on collaboration.
          Solving India's road safety crisis requires a united front – governments,
          changemakers, companies, and citizens working together. No matter who you are,
          there's a seat at the table.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {involvementOptions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-2 transform transition duration-300 text-left flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-50 p-4 rounded-full">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
              <p className="text-md text-gray-700 text-center mb-4">{item.description}</p>
              <ul className="list-disc list-inside marker:text-indigo-600 marker:text-lg text-black text-sm md:text-base lg:text-sm space-y-1 leading-snug mb-8">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="mt-auto text-center">
                <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition w-full inline-block text-center"
>
  {item.button}
</a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-xl flex-nowrap mt-10">
          Change starts with you—be the reason roads get safer.
        </div>
      </section>
    </section>
  );
};

export default GetInvolved;

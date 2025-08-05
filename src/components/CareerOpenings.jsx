// JobOpenings.jsx
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const jobList = [
  {
    title: "Cross-Continental Tech Innovation Officer",
    location: "Istanbul, Türkiye | Type: Full-time, Hybrid",
    description:
      "We are seeking a dynamic innovation strategist to lead cross-continental tech initiatives linking China, Europe, and the Caspian region. This role requires a deep understanding of global R&D ecosystems and a passion for high-tech development.",
    responsibilities: [
      "Coordinate multinational research and development programs across sectors such as AI, electronics, and smart manufacturing",
      "Facilitate technology transfer and innovation partnerships between Asian and European institutions",
      "Identify emerging technologies relevant to trade, energy, and infrastructure modernization",
      "Represent the organization in international forums, tech summits, and bilateral cooperation meetings",
      "Track government and private-sector funding opportunities for joint innovation projects",
    ],
    qualifications: [
      "Master’s degree in Engineering, Innovation Management, or International Technology Policy",
      "Proven experience in multinational project coordination or R&D programs",
      "Familiarity with BRI (Belt and Road Initiative) and EU-China cooperation frameworks",
      "Excellent English communication skills; proficiency in Chinese or Turkish is a plus",
    ],
  },
  {
    title: "Caspian Green Energy Integration Lead",
    location: "Baku, Azerbaijan | Type: Full-time, Onsite",
    description:
      "Join a regional energy transformation effort as a Green Energy Integration Lead. This role is critical for developing resilient, sustainable, and cross-border energy infrastructure in the Caspian region.",
    responsibilities: [
      "Lead the integration of renewable energy (solar, wind, hydrogen) into existing grids",
      "Design strategies for cross-border energy trade between Central Asia, Europe, and China",
      "Collaborate with energy ministries, transmission operators, and international stakeholders",
      "Pilot battery storage, demand response, and hydrogen-ready systems",
      "Support regulatory reforms and grid modernization projects",
    ],
    qualifications: [
      "Degree in Electrical Engineering, Energy Systems, or Renewable Energy",
      "5+ years of experience in energy grid or utility-scale renewable projects",
      "Knowledge of regional energy policy and transnational energy markets",
      "Familiarity with SCADA, grid simulation, or energy modeling tools",
    ],
  },
  {
    title: "IoT Solutions Architect",
    location: "Baku, Azerbaijan | Type: Full-time, Hybrid",
    description:
      "Drive digital transformation in Caspian industries by architecting and deploying advanced IoT systems. This role bridges operational technology with data innovation to enhance cross-sector productivity.",
    responsibilities: [
      "Design and implement scalable IoT platforms for logistics, energy, and manufacturing sectors",
      "Integrate sensor networks, real-time monitoring systems, and cloud-based control platforms",
      "Collaborate with Chinese and European vendors on device standardization and security protocols",
      "Support predictive maintenance, remote diagnostics, and intelligent asset management",
      "Contribute to the development of smart ports and trade logistics infrastructure",
    ],
    qualifications: [
      "Bachelor’s or Master’s degree in Computer Science, Electrical Engineering, or IoT Systems",
      "Proficiency in IoT protocols (MQTT, LoRa, NB-IoT), cloud architecture, and edge computing",
      "Experience with digital twin technologies and industrial automation systems",
      "Knowledge of supply chain and international trade logistics is a plus",
    ],
  },
  {
    title: "Sustainability Project Coordinator",
    location: "Vienna, Austria | Type: Full-time, Hybrid with Occasional Travel",
    description:
      "Play a key role in advancing sustainable development by leading projects focused on clean technologies and ecological innovation—particularly along trade and energy corridors connecting Europe, China, and the Caspian region.",
    responsibilities: [
      "Design and implement sustainability initiatives across urban and rural environments",
      "Drive clean energy adoption in transport, infrastructure, and logistics networks",
      "Communicate and collaborate regularly with project partners in the Caspian region to ensure alignment and impact",
      "Coordinate with stakeholders from government, private sector, and NGOs to meet shared sustainability goals",
      "Monitor progress using ESG frameworks, carbon reporting tools, and sustainability KPIs",
      "Organize workshops, briefings, and knowledge-sharing sessions with European and Eurasian partners",
    ],
    qualifications: [
      "Degree in Environmental Science, Sustainable Development, Public Policy, or a related field",
      "Experience managing multi-stakeholder sustainability or clean energy projects",
      "Familiarity with the EU Green Deal, ESG standards, and global climate policy frameworks",
      "Excellent communication skills in English; fluency in German or a Caspian regional language is a plus",
      "Previous engagement with the Caspian region or international sustainability partnerships is strongly preferred",
    ],
  },
  {
    title: "Data Analyst – Energy Sector",
    location: "Astana, Kazakhstan | Type: Full-time, Onsite",
    description:
      "Help shape energy strategy in Central Asia by turning data into actionable insights. Work with large, diverse datasets to support efficiency, forecasting, and international energy cooperation.",
    responsibilities: [
      "Analyze production, consumption, and transmission data for renewable energy systems",
      "Support policy modeling and regional energy trade scenarios involving China and Europe",
      "Build dashboards, forecasting tools, and performance analytics for utilities and agencies",
      "Collaborate with IoT teams and SCADA engineers for real-time data integration",
      "Generate insights for hydrogen pilots, smart grids, and energy transition pathways",
    ],
    qualifications: [
      "Degree in Data Science, Energy Economics, or Applied Mathematics",
      "Proficient in Python, SQL, Power BI, or similar tools",
      "Experience working with utility-scale datasets; geospatial energy data is a plus",
      "Understanding of regional energy trade flows and policy frameworks",
    ],
  },
  {
    title: "International Executive Assistant",
    location: "Europe | Type: Part-time, Remote with Occasional Business Travel",
    description:
      "Support strategic international initiatives by providing high-level administrative assistance to executives operating across Europe, China, and the Caspian region.",
    responsibilities: [
      "Facilitate communication and collaboration with stakeholders based in Europe, China, and the Caspian region",
      "Serve as a key point of contact across diverse cultural and linguistic backgrounds",
      "Deliver operational suggestions and actionable input to enhance process efficiency and partner engagement",
      "Organize travel logistics including flights, lodging, and itineraries for executive-level business trips",
    ],
    qualifications: [
      "Based in Europe with the ability and willingness to travel for business purposes",
      "Fluent in both English and Chinese (native proficiency in Chinese is highly desirable); Russian is a plus",
      "Strong cultural competency and ability to manage intercultural dynamics",
      "Experience related to the Caspian region or international coordination is a definite asset",
      "Detail-oriented, discreet, and capable of handling sensitive information professionally",
      "Calm, resilient, and efficient under pressure",
      "Ethical, dependable, and able to work independently when required",
      "Quick to adapt in dynamic, fast-evolving international work environments",
    ],
  },
];

const CareerOpenings = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div  className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold uppercase border-l-4 pl-2 border-[#2E8B57] my-5">Current Openings</h2>
      <div className="space-y-4">
        {jobList.map((job, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <button
              className="w-full cursor-pointer flex justify-between items-center p-5 bg-[#2E8B57] text-left"
              onClick={() => toggleOpen(index)}
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <p className="text-sm text-white">{job.location}</p>
              </div>
              <span className="text-white">{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden px-5 py-4 bg-[#fff] text-black"
                >
                  <p className="mb-4">{job.description}</p>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {job.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2">Qualifications:</h4>
                  <ul className="list-disc list-inside">
                    {job.qualifications.map((qual, i) => (
                      <li key={i}>{qual}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerOpenings;

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Security Engineer",
    company: "Secure Networks",
    period: "Sep 2024 – present",
    location: "Islamabad, Pakistan",
    points: [
      "Monitored and investigated security alerts using Trend Micro Server Security and Infoblox BloxOne Threat Defense", 
      "Conducted log analysis to investigate incidents and block or allow domains based on company policies", 
      "Configured and deployed Trend Micro and Infoblox solutions to enhance server and DNS security", 
      "Provided technical support and troubleshooting for multiple customers", 
      "Collaborated with teams to integrate security tools seamlessly into existing infrastructures", 
      "Contributed to the development of a threat-sharing platform to enhance threat intelligence and response", 
      "Stayed updated on emerging cybersecurity trends and technologies to implement best practices"
    ]
  },
  {
    title: "Information Security Engineer",
    company: "I2C INC",
    period: "Feb 2024 – Aug 2024",
    location: "Lahore, PK",
    points: [
      "Conducted risk assessments",
      "Developed security awareness training",
      "Outlined compliance procedures",
      "Assisted in ISO, SSAE-18, and PCI audits"
    ]
  },
  {
    title: "Infrastructure and Technology Intern",
    company: "KPS",
    period: "Nov 2023 – Feb 2024",
    location: "Islamabad, Pakistan",
    points: [
      "Managed company-wide user devices",
      "Deployed Rapid7 agents",
      "Implemented access controls",
      "Updated security policies"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-secondary/50" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experience Journey
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period} | {exp.location}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
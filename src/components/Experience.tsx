import { motion } from "framer-motion";

const experiences = [
  {
    title: "Security Engineer",
    company: "Secure Networks",
    period: "Sep 2024 – present",
    location: "Islamabad, Pakistan",
    points: [
      "Monitored and investigated security alerts using Trend Micro Server Security and Infoblox BloxOne Threat Defense, identifying and mitigating threats.",
      "Conducted log analysis to investigate incidents and took action to block or allow domains based on company policies.",
      "Monitored and investigated security alerts using Trend Micro XDR to mitigate potential threats effectively.",
      "Designed and implemented multiple incident response playbooks to streamline threat investigation and mitigation processes.",
      "Leveraged Palo Alto Cortex XSIAM to enhance security operations and detect advanced threats.",
      "Provided technical support and troubleshooting for multiple customers, resolving issues promptly.",
      "Collaborated with cross-functional teams to integrate security tools into existing infrastructures with minimal disruption.",
      "Stayed updated with emerging cybersecurity trends and technologies to implement best practices."
    ]
  },
  {
    title: "Information Security Engineer",
    company: "I2C INC",
    period: "Feb 2024 – Aug 2024",
    location: "Lahore, PK",
    points: [
      "Conducted gap and risk assessments, developing and implementing mitigation strategies.",
      "Delivered information security awareness training to enhance organizational compliance.",
      "Defined procedures to ensure global compliance with ISO 27001, ISO 27701, and other standards.",
      "Contributed to SSAE-18, and PCI audits as a junior resource."
    ]
  },
  {
    title: "Infrastructure and Technology Intern",
    company: "KPS",
    period: "Nov 2023 – Feb 2024",
    location: "Islamabad, Pakistan",
    points: [
      "Managed and maintained company-wide user laptops and devices, ensuring optimal performance and user satisfaction.",
      "Assisted in the deployment of Rapid7 agents, enhancing system security and operational efficiency.",
      "Conducted in-depth investigations of security incidents using InsightIDR.",
      "Contributed to optimizing its detection capabilities by fine-tuning InsightIDR Detection Rules.",
      "Updated security policies for compliance with industry standards."
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
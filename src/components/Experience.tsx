import { motion } from "framer-motion";

const experiences = [
  {
    title: "Security Engineer",
    company: "Secure Networks",
    period: "Sep 2024 – present",
    location: "Islamabad, Pakistan",
    points: [
      "Monitored and investigated over 500 security alerts monthly using Trend Micro Server Security and Infoblox BloxOne Threat Defense, identifying and mitigating threats to ensure zero data breaches. ",
      "Conducted log analysis on more than 1,000 events, leading to an 80% reduction in incident response time by automating domain blocking/allowing based on company policies.",
      "Utilized Trend Micro XDR to detect and neutralize potential threats in real-time, reducing threat detection time by 40%.",
      "Delivered technical support to 20+ customers, resolving security issues swiftly and contributing to a 95% customer satisfaction rate.",
      "Collaborated with cross-functional teams to integrate security tools, achieving seamless deployment with 0% operational downtime.",
      "Stayed updated with emerging cybersecurity trends and technologies to implement best practices."
    ]
  },
  {
    title: "Information Security Engineer",
    company: "I2C INC",
    period: "Feb 2024 – Aug 2024",
    location: "Lahore, PK",
    points: [
      "Conducted 3+ gap and risk assessments, implementing mitigation strategies that reduced security vulnerabilities by 25%.",
      "Led ISO 27001, ISO 27701 compliance initiatives, ensuring the company met global standards and reducing non-compliance incidents by 15%.",
      "Assisted in SSAE-18 and PCI audits, contributing to a successful audit outcome."
    ]
  },
  {
    title: "Infrastructure and Technology Intern",
    company: "KPS",
    period: "Nov 2023 – Feb 2024",
    location: "Islamabad, Pakistan",
    points: [
      "Managed and optimized 500+ user laptops and devices, ensuring a 98% uptime and enhancing user satisfaction.",
      "Assisted in deploying Rapid7 agents, enhancing system security across 100+ devices.",
      "Updated security policies for compliance with industry standards."
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pointVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="py-20 bg-secondary/50" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center text-gradient"
        >
          Experience Journey
        </motion.h2>
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-primary"
            >
              <motion.div 
                className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"
                whileInView={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(255, 215, 0, 0)",
                    "0 0 0 10px rgba(255, 215, 0, 0.1)",
                    "0 0 0 0 rgba(255, 215, 0, 0)"
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div 
                className="glass-card p-6 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period} | {exp.location}</p>
                <motion.ul 
                  className="list-disc list-inside space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  {exp.points.map((point, idx) => (
                    <motion.li 
                      key={idx} 
                      variants={pointVariants}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
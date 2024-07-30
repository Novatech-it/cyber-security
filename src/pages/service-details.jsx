import React, { useState } from 'react'
import { motion } from "framer-motion"

import { CSSTransition } from 'react-transition-group'
import service_bg from "../assets/images/services.jpeg"
import success from "../assets/images/success.svg"
import lock from "../assets/images/lock.svg"
import PageTitle from '../components/common/pageTitle'
import { ScrollRestoration } from 'react-router-dom'
import { zoomIn } from '../utlits/zoomIn'
import { slideUp } from '../utlits/slideUp'

const ServiceDetails = () => {
  const [expandedItems, setExpandedItems] = useState({
    'Windows OS fundamentals': true
  });

  const toggleItem = (title) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <>
      <PageTitle link={"Training"} pageName={"Training"} />
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div className="services-details-right-sidebar"
                          initial="offscreen"
                          whileInView="onscreen"
                          variants={slideUp(1)}
                          viewport={{once: true, amount: 0}}
              >
                <h1>Empowering Your Digital Landscape with Our Cybersecurity Services.</h1>
                <p>The field of cyber security, also known as digital security, is experiencing rapid growth as digital
                  information becomes integral to our daily lives. The global market value of cyber security, currently
                  at $173.5 billion, is projected to reach $262.4 billion by 2027. This reflects an average annual
                  growth rate of 11%, highlighting the expanding career opportunities in this domain
                  (www.statista.com/outlook/tmo/cybersecurity/global).</p>
                <p>McKinsey, a renowned research firm, predicts that by 2030, the Internet of Things (IoT) could be
                  valued between $5.5 trillion and $12.6 trillion. This underscores the heightened cyber security risks
                  and the increasing demand for specialists in this field. Additionally, the World Economic Forum's 2023
                  survey ranked the cyber security profession as the fourth fastest-growing career globally, further
                  validating these trends and forecasts.</p>
                <motion.div className="image"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={zoomIn(1)}
                            viewport={{once: true, amount: 0}}
                >
                  <img src={service_bg} alt="services-image"/>
                </motion.div>
                <p style={{marginBottom: 5}}>At Novatech Academy, we stay abreast of technological trends and market
                  needs to prepare you effectively for a promising future in cyber security. Our comprehensive training
                  programs provide you with the essential tools to excel as a cyber security professional. We offer
                  expert guidance to navigate the complexities of cyber security and, as an official partner of Comptia,
                  prepare you thoroughly for certification exams. Embark on your journey to success with us today.</p>
                <p style={{marginBottom: 5}}>For those aspiring to become cyber security analysts, our online courses,
                  led by experts, deliver advanced guidance through a scientific approach. Our program features:</p>
                <p style={{marginBottom: 5}}>Small study groups</p>
                <p style={{marginBottom: 5}}>Career support until employment is secured</p>
                <p style={{marginBottom: 5}}>One-on-one mentoring</p>
                <p style={{marginBottom: 5}}>Practical application of knowledge</p>
                <p>Hands-on laboratory training</p>
                <div>
                  <h3 style={{marginBottom: 15, marginTop: 30}}>What to Learn?</h3>
                  <div>
                    <img src={success} alt="learn-the-lesson-successfully"/>
                    <p style={{display: "inline", marginLeft: 5}}>Python</p>
                  </div>
                  <div style={{marginTop: 5}}>
                    <img src={success} alt="learn-the-lesson-successfully"/>
                    <p style={{display: "inline", marginLeft: 5}}>Linux</p>
                  </div>
                  <div style={{marginTop: 5}}>
                    <img src={success} alt="learn-the-lesson-successfully"/>
                    <p style={{display: "inline", marginLeft: 5}}>Networking</p>
                  </div>
                  <div style={{marginTop: 5}}>
                    <img src={success} alt="learn-the-lesson-successfully"/>
                    <p style={{display: "inline", marginLeft: 5}}>SDLC</p>
                  </div>
                  <div style={{marginTop: 5}}>
                    <img src={success} alt="learn-the-lesson-successfully"/>
                    <p style={{display: "inline", marginLeft: 5}}>SQL</p>
                  </div>
                  <div style={{marginTop: 5}}>
                    <img src={success} alt="learn-the-lesson-successfully"/>
                    <p style={{display: "inline", marginLeft: 5}}>Job Hunting</p>
                  </div>
                </div>
                <h2 style={{marginTop: 30}}>Curriculum</h2>
                <div className="curriculum-section">
                  <CurriculumItem
                      title="Introduction to Information Technology"
                      expanded={expandedItems['Introduction to Information Technology']}
                      toggleExpand={() => toggleItem('Introduction to Information Technology')}
                      content="This section provides an overview of information technology, covering its role in modern society and fundamental concepts such as hardware, software, and data management."
                  />
                  <CurriculumItem
                      title="Windows OS fundamentals"
                      expanded={expandedItems['Windows OS fundamentals']}
                      toggleExpand={() => toggleItem('Windows OS fundamentals')}
                      content="Learn about the architecture and features of Windows operating systems, including user interface, system management, and security settings."
                  />
                  <CurriculumItem
                      title="Linux OS fundamentals"
                      expanded={expandedItems['Linux OS fundamentals']}
                      toggleExpand={() => toggleItem('Linux OS fundamentals')}
                      content="Explore the Linux operating system's architecture, command line interface, and basic administration tasks, highlighting its importance in server environments."
                  />
                  <CurriculumItem
                      title="Computer Networking Core Concepts"
                      expanded={expandedItems['Computer Networking Core Concepts']}
                      toggleExpand={() => toggleItem('Computer Networking Core Concepts')}
                      content="Understand the essential principles of computer networking, including networking models, protocols, and the role of hardware in data communication."
                  />
                  <CurriculumItem
                      title="Introduction to Cyber Security"
                      expanded={expandedItems['Introduction to Cyber Security']}
                      toggleExpand={() => toggleItem('Introduction to Cyber Security')}
                      content="This section introduces the fundamentals of cybersecurity, focusing on the importance of protecting information systems and understanding common threats."
                  />
                  <CurriculumItem
                      title="Introduction to Logs and Analysis"
                      expanded={expandedItems['Introduction to Logs and Analysis']}
                      toggleExpand={() => toggleItem('Introduction to Logs and Analysis')}
                      content="Learn about the significance of log files in cybersecurity, including methods for log collection, analysis, and their role in incident response."
                  />
                  <CurriculumItem
                      title="Host Security & Defense"
                      expanded={expandedItems['Host Security & Defense']}
                      toggleExpand={() => toggleItem('Host Security & Defense')}
                      content="Explore strategies for securing individual hosts, covering topics such as endpoint protection, access control, and malware defenses."
                  />
                  <CurriculumItem
                      title="Network Security & Defense"
                      expanded={expandedItems['Network Security & Defense']}
                      toggleExpand={() => toggleItem('Network Security & Defense')}
                      content="This section delves into the methods for protecting networked environments, including firewalls, VPNs, and intrusion prevention systems."
                  />
                  <CurriculumItem
                      title="Cyber security Threats & management"
                      expanded={expandedItems['Cyber security Threats & management']}
                      toggleExpand={() => toggleItem('Cyber security Threats & management')}
                      content="Understand the various types of cybersecurity threats and how to effectively manage and mitigate these risks within an organization."
                  />
                  <CurriculumItem
                      title="Threat Detection"
                      expanded={expandedItems['Threat Detection']}
                      toggleExpand={() => toggleItem('Threat Detection')}
                      content="Learn about the techniques and tools used for detecting potential threats to information systems, including anomaly detection and behavioral analysis."
                  />
                  <CurriculumItem
                      title="Cyber security in an Enterprise"
                      expanded={expandedItems['Cyber security in an Enterprise']}
                      toggleExpand={() => toggleItem('Cyber security Threats & management')}
                      content="Explore the specific challenges and solutions related to implementing cybersecurity measures within large organizations."
                  />
                  <CurriculumItem
                      title="Security Operations and Monitoring"
                      expanded={expandedItems['Security Operations and Monitoring']}
                      toggleExpand={() => toggleItem('Security Operations and Monitoring')}
                      content="This section covers the importance of security operations centers (SOCs) and continuous monitoring practices to maintain security posture."
                  />
                  <CurriculumItem
                      title="SOC Operations, roles % responsibilities"
                      expanded={expandedItems['Security Operations and Monitoring']}
                      toggleExpand={() => toggleItem('Security Operations and Monitoring')}
                      content="Understand the roles and responsibilities within a security operations center, including incident response, monitoring, and threat intelligence."
                  />
                  <CurriculumItem
                      title="Security Information and Event Management"
                      expanded={expandedItems['Security Information and Event Management']}
                      toggleExpand={() => toggleItem('Security Information and Event Management')}
                      content="Explore the functionalities of Security Information and Event Management (SIEM) systems and their role in aggregating and analyzing security data."
                  />
                  <CurriculumItem
                      title="Packet analysis"
                      expanded={expandedItems['Packet analysis']}
                      toggleExpand={() => toggleItem('Packet analysis')}
                      content="Learn the fundamentals of packet analysis, including tools and techniques for inspecting network traffic and identifying anomalies."
                  />
                  <CurriculumItem
                      title="Incident Response"
                      expanded={expandedItems['Incident Response']}
                      toggleExpand={() => toggleItem('Incident Response')}
                      content="Understand the incident response lifecycle, including preparation, detection, containment, and recovery from security incidents."
                  />
                  <CurriculumItem
                      title="Compliance concepts"
                      expanded={expandedItems['Compliance concepts']}
                      toggleExpand={() => toggleItem('Compliance concepts')}
                      content="Explore the key compliance frameworks and regulations that organizations must adhere to in order to maintain cybersecurity standards."
                  />
                  <CurriculumItem
                      title="Security Assesments Types"
                      expanded={expandedItems['Security Assesments Types']}
                      toggleExpand={() => toggleItem('Security Assesments Types')}
                      content="Learn about different types of security assessments, including vulnerability assessments, penetration testing, and security audits."
                  />
                  <CurriculumItem
                      title="Penetration Testing"
                      expanded={expandedItems['Penetration Testing']}
                      toggleExpand={() => toggleItem('Penetration Testing')}
                      content="This section covers the process of penetration testing, including methodologies, tools, and the importance of ethical hacking in security."
                  />
                  <CurriculumItem
                      title="Case study & Real project"
                      expanded={expandedItems['Case study & Real project']}
                      toggleExpand={() => toggleItem('Case study & Real project')}
                      content="Engage in a detailed case study that applies theoretical knowledge to real-world cybersecurity challenges and solutions."
                  />
                  <CurriculumItem
                      title="Case study & Real project"
                      expanded={expandedItems['Case study & Real project']}
                      toggleExpand={() => toggleItem('Case study & Real project')}
                      content="Participate in hands-on projects that provide practical experience in tackling cybersecurity incidents and implementing security measures."
                  />
                  <CurriculumItem
                      title="Case study & Real project"
                      expanded={expandedItems['Case study & Real project']}
                      toggleExpand={() => toggleItem('Case study & Real project')}
                      content="Analyze different case studies to understand the application of cybersecurity principles and techniques in various scenarios."
                  />
                  <CurriculumItem
                      title="Case study & Real project"
                      expanded={expandedItems['Case study & Real project']}
                      toggleExpand={() => toggleItem('Case study & Real project')}
                      content="Work on a collaborative project that simulates real-life cybersecurity issues, fostering teamwork and problem-solving skills."
                  />
                  <CurriculumItem
                      title="Case study & Real project"
                      expanded={expandedItems['Case study & Real project']}
                      toggleExpand={() => toggleItem('Case study & Real project')}
                      content="Explore additional case studies that illustrate successful strategies in combating cyber threats and enhancing security posture."
                  />
                  <CurriculumItem
                      title="Case study & Real project"
                      expanded={expandedItems['Case study & Real project']}
                      toggleExpand={() => toggleItem('Case study & Real project')}
                      content="Conduct a final project that synthesizes the knowledge gained throughout the course, focusing on practical application and results."
                  />
                  <CurriculumItem
                      title="Mock-up interviews"
                      expanded={expandedItems['Mock-up interviews']}
                      toggleExpand={() => toggleItem('Mock-up interviews')}
                      content="Participate in mock interviews to practice communication skills and technical knowledge, preparing for real-world job opportunities in cybersecurity."
                  />
                  <CurriculumItem
                      title="Mock-up interviews, graduation"
                      expanded={expandedItems['Mock-up interviews, graduation']}
                      toggleExpand={() => toggleItem('Mock-up interviews, graduation')}
                      content="Engage in final mock interviews as part of the graduation process, receiving feedback and preparing for career advancement in cybersecurity."
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration/>
    </>
  )
}

const CurriculumItem = ({ title, expanded, toggleExpand, content }) => {
  return (
      <div className="curriculum-item">
        <div className="curriculum-header" onClick={toggleExpand}>
          <h3>{title}</h3>
          <span className={`toggle-icon ${expanded ? 'expanded' : ''}`}>
          {expanded ? '-' : '+'}
        </span>
        </div>
        <CSSTransition
            in={expanded}
            timeout={300}
            classNames="curriculum-content"
            unmountOnExit
        >
          <div className="curriculum-content">
            <img src={lock} alt="learn-the-lesson-successfully"/>
            <p style={{display: "inline", marginLeft: 5}}>{content}</p>
          </div>
        </CSSTransition>
      </div>
  )
}

export default ServiceDetails
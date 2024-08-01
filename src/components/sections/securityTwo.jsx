import React from 'react'
import {motion} from "framer-motion"
import Memory from '../../assets/icons/memory'
import Lock from '../../assets/icons/lock'
import Security from '../../assets/icons/security'
import { Link } from 'react-router-dom'
import { zoomIn } from '../../utlits/zoomIn'
import Title from '../common/title'

const SecurityTwo = () => {
    const securityTypes = [
        {
            id: 1,
            icon: <Memory />,
            security_name: "Security Training",
            details: "We empower individuals with essential cybersecurity knowledge through targeted training. Our programs teach best practices, threat awareness, and preventive measures to effectively protect digital assets and enhance overall security posture.",
            link: "/service-details"
        },
        {
            id: 2,
            icon: <Lock />,
            security_name: "Data Privacy",
            details: "We help organizations establish robust data privacy practices, ensuring secure handling and protection of sensitive information. Our services include compliance guidance, data protection strategies, and privacy training to safeguard personal and corporate data.",
            link: "/service-details"
        },
        {
            id: 3,
            icon: <Security />,
            security_name: "Network Security",
            details: "We enhance your network's defenses with advanced firewalls, intrusion detection, and encryption. Our services include threat assessment, continuous monitoring, and compliance audits to ensure your network is secure and resilient against cyber threats.",
            link: "/service-details"
        },

    ]
    return (
        <section className="security-area pt-100 pb-75">
            <div className="container">
                <Title sectionName={"What We Do"} sectionTitle={"Introducing Our Cyber Security Services."}/>

                <div className="row justify-content-center" data-cues="fadeIn">
                    {
                        securityTypes.map(({ id, details, icon, link, security_name }) => {
                            return (
                                <motion.div key={id} className="col-lg-4 col-sm-6"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-security-card text-center">
                                        <div className="icon">
                                            {icon}
                                        </div>
                                        <h3>{security_name}</h3>
                                        <p>{details}</p>
                                        <Link className="read-more text-decoration-none" to={link}>
                                            Read More
                                            <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SecurityTwo

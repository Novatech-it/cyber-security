import React from 'react'
import { motion } from "framer-motion"
import BlogCard from '../blogCard.jsx'
import { blogData } from '../../../utlits/fackData/blogData'
import Title from '../../common/title'
import { zoomIn } from '../../../utlits/zoomIn'
const HeroSection = () => {

    return (
        <>
            <section className={`pb-75 style-2`}>
                <div className="container">
                    <Title sectionName={"Our Courses"} sectionTitle={"Latest Courses"} style={"style-2"}/>
                    <div className="row justify-content-center" >
                        {
                            blogData.slice(0, 3).map(({ author, date, id, link, thumb, title, author_link }) => {
                                return (
                                    <motion.div key={id} className="col-lg-4 col-md-6"
                                                initial="offscreen"
                                                whileInView="onscreen"
                                                variants={zoomIn(id)}
                                                viewport={{ once: true, amount: 0.4 }}
                                    >
                                        <BlogCard author={author} date={date} author_link={author_link} link={link} style={"style-2"} thumb={thumb} title={title} />
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
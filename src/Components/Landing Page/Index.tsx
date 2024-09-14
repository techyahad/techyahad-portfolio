import React from 'react';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';

import Main from './Hero/Main';
import Work from './Work/Work';
import Project from './Project/Project';
import Blog from "./Blog/Blog";
import About from './About/About';
import Review from "./Testimonial/Reviews"
import './Index.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Index: React.FC = () => {
    return (
        <>
            <hr className="container mx-auto" />

            <Element name="main">
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                    <Main />
                </motion.div>
            </Element>

            <Element name="project">
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                    <Work />
                </motion.div>
            </Element>
            <hr className="container mx-auto" />

            <Element name="project">
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                    <Project />
                </motion.div>
            </Element>
            <hr className="container mx-auto" />

            <Element name="about">
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                    <About />
                </motion.div>
            </Element>
            <hr className="container mx-auto" />

            <Element>
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                    <Review />
                </motion.div>
            </Element>

            <Element name="blog">
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                    <Blog />
                </motion.div>
            </Element>
        </>
    );
};

export default Index;

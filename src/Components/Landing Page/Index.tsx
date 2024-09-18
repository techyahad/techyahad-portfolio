import React from 'react';
import { motion } from 'framer-motion';
import Main from './Hero/Main';
import Work from './Work/Work';
import Project from './Project/Project';
import Blog from "./Blog/Blog";
import About from './About/About';
import Review from "./Testimonial/Reviews";
import './Index.css';
import Contact from './Contact/Contact';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Index: React.FC = () => {
    return (
        <>
            <hr className="container mx-auto" />

            <motion.div
                id="home" // Section ID for scrolling
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Main />
            </motion.div>

            <motion.div
                id="work" // Section ID for scrolling
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Work />
            </motion.div>

            <hr className="container mx-auto" />

            <motion.div
                id="services" // Section ID for scrolling
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Project />
            </motion.div>

            <hr className="container mx-auto" />

            <motion.div
                id="about" // Section ID for scrolling
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <About />
            </motion.div>

            <hr className="container mx-auto" />

            <motion.div
                id="review" // Section ID for scrolling
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Review />
            </motion.div>

            <hr className="container mx-auto" />

            <motion.div
                id="contact" // Section ID for scrolling
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Contact />
            </motion.div>

            <motion.div
                id="insights" // Section ID for scrolling
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Blog />
            </motion.div>
        </>
    );
};

export default Index;

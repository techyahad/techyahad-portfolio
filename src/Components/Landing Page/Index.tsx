import React from 'react';
import { motion } from 'framer-motion';
import Main from './Hero/Main';
import Work from './Work/Work';
import Project from './Project/Project';
import Blog from "./Blog/Blog";
import About from './About/About';
import Review from "./Testimonial/Reviews";
import './Index.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Index: React.FC = () => {
    return (
        <>
            <hr className="container mx-auto" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Main />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Work />
            </motion.div>

            <hr className="container mx-auto" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Project />
            </motion.div>

            <hr className="container mx-auto" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <About />
            </motion.div>

            <hr className="container mx-auto" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Review />
            </motion.div>

            <motion.div
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

import React from 'react';
import { Link, Element } from 'react-scroll'; // Import necessary components from react-scroll
import Main from './Hero/Main';
import Navbar from './Hero/Navbar';
import Project from './Project/Project';
import Footer from './Footer/Footer';
import Portfolio from './Portfolio/Portfolio';
import Blog from "./Blog/Blog"
import Contact from './Contact/Contact';

const Index: React.FC = () => {
    return (
        <>
            <Navbar />
            <hr className="container mx-auto" />

            <Element name="main">
                <Main />
            </Element>

            <Element name="project">
                <Project />
            </Element>
            <hr className="container mx-auto" />

            <Element name="portfolio">
                <Portfolio />
            </Element>
            <hr className="container mx-auto" />



            <Element name="contact">
                <Contact />
            </Element>
            <hr className="container mx-auto" />

            <Element name="blog">
                <Blog />
            </Element>


            <Footer />
        </>
    );
};

export default Index;

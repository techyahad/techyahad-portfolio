import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import { TbWriting } from "react-icons/tb";

const AboutSection: React.FC = () => {
    return (
        <div className='w-full font-serif h-auto'>
            <hr className='container mx-auto' />
            <header className="flex flex-col items-center py-20 justify-center text-center ">
                <h1 className="text-4xl md:text-6xl font-medium text-gray-800 mb-6">
                    Know <span className='text-gray-500'>Who I am..</span>
                </h1>
                <p className="text-gray-600 text-md max-w-4xl">
                    A creative thinker with a keen eye for detail, driven by a passion for transforming ideas into engaging digital experiences.
                </p>
            </header>

            <div className='lg:space-y-20 space-y-2'>
                <div className='container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between'>
                    <div className='md:w-1/2 bg-gray-600  flex-shrink-0 flex items-center'>
                    </div>
                    <div className='md:w-1/2 space-y-8'>
                        <h1 className='text-6xl font-medium text-gray-800'>The Journey of a Front End Engineer Extraordinaire</h1>
                        <p className='text-xl text-gray-600'>
                            Hi, I'm Ahad, a Front End Developer from Sindh, Pakistan. Over the past 3 years, I've worked in various areas of digital design, including front-end development, brand designing, and app UI/UX. I'm proud to have worn many hats and honed my skills across diverse projects and industries. These days, I focus on leading design at Lawfied, a cutting-edge legal AI tech platform that revolutionizes lawyer consultation and drafting services. My role involves collaborating with a dynamic team, driving innovation, and constantly pushing the boundaries of what's possible in legal tech.
                        </p>
                        <div className='flex items-center'>
                            <div className="md:flex cursor-pointer mt-3">
                                <button className="flex items-center justify-center text-gray-800 py-3 rounded-full hover:bg-gray-800 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                        <span>Let's Talk</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between'>
                    <div className='md:w-1/2 space-y-8'>
                        <h1 className='text-6xl font-medium text-gray-800'>My Passions and Interests</h1>
                        <p className='text-xl text-gray-600'>
                            My love for technology extends beyond my professional life, influencing my hobbies and daily routines. I believe in maintaining a balanced lifestyle, where creativity and physical activity go hand in hand. This holistic approach not only keeps me energized but also fuels my creativity, allowing me to bring fresh perspectives to my projects.

                        </p>
                        <div className='flex items-center'>
                            <div className="md:flex cursor-pointer mt-3">
                                <button className="flex items-center justify-center text-gray-800 py-3 rounded-full hover:bg-gray-800 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                        <span>Let's Talk</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 bg-gray-600  flex-shrink-0 flex items-center'>
                    </div>
                </div>
            </div>
            <section className='w-full py-20 '>
                <div className='container mx-auto text-center'>
                    <h2 className='text-4xl md:text-5xl font-medium text-gray-800 mb-6'>My Approach..</h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>This is How I Work – From Idea to Finished Original
                    </p>
                    <div className='bg-gray-300 p-10 rounded-xl'>
                        <div className='flex items-center  '>
                            <div className=''>
                                <TbWriting size={30} />
                                <div className='text-left'>
                                    <h1>Briefing</h1>
                                    <p> Identify key points and research the customer's brand, vision, and values</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>

    )
}

export default AboutSection
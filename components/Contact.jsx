import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import quoteImg from "../public/assets/quote.png";

const Contact = () => {
    const emailAddress = "doychin_alexandrov@abv.bg";
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full flex flex-col justify-center items-center">
                            <div>
                                <img
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src="https://images.unsplash.com/photo-1548174753-897b449b097e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                    alt="/"
                                />
                            </div>
                            <div>
                                <h2 className="py-2">Doychin Alexandrov</h2>
                                <p>Front-End Developer</p>
                                <p className="py-4">
                                    I am available for full-time positions as an
                                    Intern or Junior Front-End developer.
                                    Contact me and let's talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">
                                    Connect With Me
                                </p>
                                <div className="flex items-center py-4">
                                    <Link
                                        href="https://www.linkedin.com/in/doychin-aleksandrov-29b248198/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-4">
                                            <FaLinkedinIn />
                                        </div>
                                    </Link>
                                    <Link
                                        href="https://github.com/DoychinAlexandrov"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-4">
                                            <FaGithub />
                                        </div>
                                    </Link>
                                    <Link href={`mailto:${emailAddress}`}>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <AiOutlineMail />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="col-span-2 lg:col-span-3 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                        <div className="max-w-full">
                            <h1 className="text-3xl mb-4 text-center underline">
                                Quote of the Day
                            </h1>
                            <Image
                                className="rounded-xl"
                                src={quoteImg}
                                layout="responsive"
                                width={800}
                                height={800}
                                alt="/"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp
                                className="text-[#5651e5]"
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;

import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
    const emailAddress = "doychin_alexandrov@abv.bg";
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LETS&apos;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&apos;m{" "}
                        <span className="text-[#5651e5]">Doychin</span>{" "}
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        A Front-End Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I&apos;m a front-end web developer specializing in
                        building front-end applications.Currently, I&apos;m
                        focused on building responsive front-end web application
                        using HTML,CSS,JavaScript & React!
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link
                            href="https://www.linkedin.com/in/doychin-aleksandrov-29b248198/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/DoychinAlexandrov"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
    );
};

export default Main;

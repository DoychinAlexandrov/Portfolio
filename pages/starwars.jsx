import Image from "next/image";
import React from "react";
import starWarsImg from "../public/assets/projects/project1.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";

const StarWars = () => {
    return (
        <div className="w-full">
            <Navbar />
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={starWarsImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2 font-bold text-3xl sm:text-4xl">
                        Star Wars
                    </h2>
                    <h3 className="font-bold">React JS / Tailwind / Vercel</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <h2 className="font-bold ">Project Overview</h2>
                    <br />
                    <p>
                        This app was built using React JS and styled components
                        and is hosted on Vercel.The website is a Star
                        Wars-themed application that utilizes the Star Wars API
                        (SWAPI) to fetch and display information about Star Wars
                        characters, movies, species & vehicles. It provides an
                        interactive interface for users to explore the world of
                        Star Wars and learn more about it.
                    </p>
                    <a
                        href="https://github.com/DoychinAlexandrov/Star-Wars"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                            Code
                        </button>
                    </a>
                    <a
                        href="https://star-wars-flax-nu.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                            Demo
                        </button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Tailwind
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />{" "}
                                Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Vercel
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> SWAPI
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default StarWars;

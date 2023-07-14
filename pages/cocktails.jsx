import Image from "next/image";
import React from "react";
import cocktailsImg from "../public/assets/projects/CoctailsPub.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";

const cocktails = () => {
    return (
        <div className="w-full">
            <Navbar />
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={cocktailsImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2 font-bold text-3xl sm:text-4xl">
                        Cocktails Pub
                    </h2>
                    <h3 className="font-bold">
                        React JS / Styled Components / Vercel
                    </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <h2 className="font-bold">Project Overview</h2>
                    <br />
                    <p>
                        This app was built using React JS and styled components
                        and is hosted on Vercel.The app offers an immersive and
                        visually appealing experience for cocktail enthusiasts.
                        Leveraging the powerful CocktailDB API, the website
                        serves as a hub for cocktail lovers to explore and
                        discover a wide range of exciting drink recipes. The
                        app&apos;s stylish design, crafted with the help of
                        styled components, ensures a sleek and intuitive user
                        interface. Users can easily navigate through various
                        sections and access a wealth of information about their
                        favorite cocktails.
                    </p>
                    <a
                        href="https://github.com/DoychinAlexandrov/Coctails-pub"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                            Code
                        </button>
                    </a>
                    <a
                        href="https://coctails-pub.vercel.app/"
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
                                <RiRadioButtonFill className="pr-1" /> Styled
                                Components
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />{" "}
                                Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Vercel
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> The
                                Cocktail DB
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

export default cocktails;

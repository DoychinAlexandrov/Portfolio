import React from "react";
import Image from "next/image";
import projectImg from "../public/assets/projects/project1.png";
import cocktailsPubImg from "../public/assets/projects/CoctailsPub.png";
import ecomerceImg from "../public/assets/projects/ecomerce.png";
import techImg from "../public/assets/projects/tech.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">What I have Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="Star Wars"
                        backgroundImg={projectImg}
                        projectUrl="/starwars"
                    />
                    <ProjectItem
                        title="Cocktail Pub"
                        backgroundImg={cocktailsPubImg}
                        projectUrl="/cocktails"
                    />
                    <ProjectItem
                        title="E-commerce"
                        backgroundImg={ecomerceImg}
                        projectUrl="/ecomerce"
                    />
                    <ProjectItem
                        title="Techno Store"
                        backgroundImg={techImg}
                        projectUrl="/techstore"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;

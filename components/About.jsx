import React from "react";

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-y flex items-center py-16"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className=" text-xl tracking-widest text-[#5651e5]">
                        About
                    </p>
                    <h2 className="p-4">Who I Am</h2>

                    <p className="py-2 text-gray-600">
                        I have been working as a mechanical engineer on a ship
                        right after my graduation in 2021.In 2022 I started
                        learning HTML & CSS so I can build a small website that
                        I needed for my promotion project which presents the
                        ship operating systems, machinery and structure.What I
                        thought was just simple website turned into a love for
                        programming.
                    </p>
                    <p className="py-2 text-gray-600">
                        After my contract finished I started learning
                        JavaScript,HTML & CSS and I was quickly drown to learn
                        more.I am now spending my time building projects with
                        React JS and learning every day how to do it better.
                    </p>
                </div>
                <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img
                        className="rounded-xl"
                        src="https://images.unsplash.com/photo-1548611716-ad782502c9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

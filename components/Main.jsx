import React from "react";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LETS'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm <span className="text-[#5651e5]">Doychin</span>{" "}
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        A Front-End Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm a front-end web developer specializing in building
                        exceptional digital experiences.Currently, I'm focused
                        on building responsive front-end web application using
                        HTML,CSS,JavaScript & React!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
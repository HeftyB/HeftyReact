import React from "react";
import nasa from "../imgs/nasa.jpg";

export default function Projects() {
    return (
        <>
            <h1>PROJECTS</h1>

            <div>
                <div className="container mx-auto border flex items-center my-3 mx-2 p-2 py-4 bg-gray-500 border-4 border-double border-black">


                    <div className="rounded-full w-4/12 overflow-hidden">
                        <img src={nasa} alt="image" />
                    </div>
                    <div className="flex flex-col justify-between mx-2">
                        <div className="text-4xl mb-3">
                            Lorem ipsum dolor sit.
                        </div>

                        <hr />

                        <div className="flex">
                            <div className="align-bottom w-10/12">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias temporibus sed ad
                                eos labore a possimus debitis accusantium
                                pariatur, animi, placeat asperiores deleniti
                                atque odio alias nisi consectetur voluptate at?
                                Quos odit aliquam, molestias sequi non
                                recusandae expedita perferendis, nulla assumenda
                                ipsum cum qui placeat.
                            </div>

                            <div className="mx-2 text-right">
                                <a href="#">See the code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 rounded border-2 border-black container mx-auto my-3 px-4 shadow-2xl">


                <div className="text-2xl mx-auto my-4">Citrics</div>
                



                <div className="container mx-auto flex">


                    <div className="max-w-xs rounded-full overflow-hidden mx-auto mb-4 border-4 border-green-400">
                        <img src={nasa} alt="image" />
                    </div>


                    <div className="w-8/12 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">


                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">


                            <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, accusantium?</span>


                            <span className="block text-indigo-600">
                                Technologies Used
                            </span>
                        </h2>


                       


                    </div>


                    <div className="flex flex-col justify-center w-auto border-l pl-4">
                            <div className="rounded-md shadow my-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    See the code
                                </a>
                            </div>
                            <div className="rounded-md shadow my-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                    See the Project
                                </a>
                            </div>
                            <div className="inline-flex rounded-md shadow my-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                    See the Blog Post
                                </a>
                            </div>
                        </div>


                </div>



            </div>
        </>
    );
}

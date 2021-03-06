import React from "react";
import nasa from "../imgs/nasa.jpg";
import okta from "../imgs/Okta.png";
import citrics from "../imgs/citrics.png";

export default function Projects() {
    return (
        <>
            <span className="text-4xl font-bold text-white">- PROJECTS -</span>

            {/* <div>
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
                            <span className="block">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Libero, accusantium?
                            </span>

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
            </div> */}

            <div className="container mx-auto bg-gray-500 px-4 py-2 my-4 flex justify-evenly rounded-2xl border-2 border-green-600 shadow-xl">
                <div className="w-64 rounded-full overflow-hidden border-2">
                    <img src={nasa} alt="image" />
                </div>
                <div className="container w-6/12 mx-auto flex flex-col justify-between mt-4">
                    <div className="text-4xl text-center align-text-bottom p-6">
                        <span className="font-bold">
                            <strong>Citrics</strong>
                        </span>
                        <hr />
                        <span>
                            <small>A city comparison application</small>
                        </span>
                    </div>

                    <div className="text-left align-middle mb-4 py-2">
                        <p>
                            <span className="text-xl">
                                Featured Technologies :
                            </span>
                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>
                        </p>
                    </div>
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

            <div className="container mx-auto bg-gray-300 p-4 my-4 flex justify-evenly rounded-2xl border-2 border-green-600 shadow-2xl">
                <div className="w-64 h-48 rounded-2xl overflow-hidden border-4 border-black self-center">
                    <img src={citrics} alt="image" />
                </div>
                <div className="container w-8/12 mx-auto flex flex-col justify-between mt-4">
                    <div className="text-4xl text-center align-text-bottom p-6">
                        <p className="font-bold pb-2">
                            <strong>Citrics</strong>
                        </p>
                        {/* &nbsp; &nbsp; */}
                        <hr className="border-green-600" />
                        <span>
                            <small>A city comparison application</small>
                        </span>
                    </div>

                    <div className="text-center align-middle mb-4 py-2">
                        <p>
                            <span className="text-xl">
                                Featured Technologies :
                            </span>
                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn.svgporn.com/logos/redux.svg"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn.svgporn.com/logos/ant-design.svg"></img>

                            <img
                                className="inline-block w-20 mx-2"
                                src="https://www.vectorlogo.zone/logos/java/java-ar21.svg"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn.svgporn.com/logos/spring.svg"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn.svgporn.com/logos/postgresql.svg"></img>

                            <img
                                className="inline-block w-20 mx-2"
                                src="https://cdn.svgporn.com/logos/heroku.svg"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn.svgporn.com/logos/aws.svg"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src={okta}></img>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-auto border-l border-green-600 pl-4">
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

            <div className="container mx-auto bg-gray-500 px-4 py-2 my-4 flex justify-evenly rounded-2xl border-2 border-green-600 shadow-2xl">
                <div className="w-64 rounded-full overflow-hidden border-4 border-black">
                    <img src={nasa} alt="image" />
                </div>
                <div className="container w-6/12 mx-auto flex flex-col justify-between mt-4">
                    <div className="text-4xl text-center align-text-bottom p-6">
                        <span className="font-bold">
                            <strong>Citrics</strong>
                        </span>
                        <hr />
                        <span>
                            <small>A city comparison application</small>
                        </span>
                    </div>

                    <div className="text-left align-middle mb-4 py-2">
                        <p>
                            <span className="text-xl">
                                Featured Technologies :
                            </span>
                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>
                        </p>
                    </div>
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

            <div className="container mx-auto bg-gray-300 px-4 py-2 my-4 flex justify-evenly rounded-2xl border-2 border-green-600 shadow-2xl">
                <div className="w-64 rounded-full overflow-hidden border-4 border-black">
                    <img src={nasa} alt="image" />
                </div>
                <div className="container w-6/12 mx-auto flex flex-col justify-between mt-4">
                    <div className="text-4xl text-center align-text-bottom p-6">
                        <span className="font-bold">
                            <strong>Citrics</strong>
                        </span>
                        <hr />
                        <span>
                            <small>A city comparison application</small>
                        </span>
                    </div>

                    <div className="text-left align-middle mb-4 py-2">
                        <p>
                            <span className="text-xl">
                                Featured Technologies :
                            </span>
                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>

                            <img
                                className="inline-block w-12 mx-2"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>
                        </p>
                    </div>
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
        </>
    );
}

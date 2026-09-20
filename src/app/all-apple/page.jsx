// "use client"

import Cards from "@/components/shared/cards";

const AllApples = () => {
    return (
        <div className="container mx-auto">
            <div className="hero bg-base-200 h-[300] rounded-md">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Explore All apples</h1>
                        <p className="py-6 text-slate-500">
                            Fresh, juicy, and delicious apples, perfect for a healthy and refreshing snack.
                        </p>
                        <div className="max-w-full">

                            <label className="input w-full rounded-xl">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <Cards/>
        </div>
    );
};

export default AllApples;
"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { IconDownload } from "@tabler/icons-react";
import { reelsapi } from "@/api/reelsapi";

interface UrlInputProps {
    setReelData: (data: any) => void;
}

function UrlInput({ setReelData }: UrlInputProps) {
    const [inputUrl, setInputUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await reelsapi(inputUrl);
        setReelData(res?.data);
    };

    return (
        <div className="w-full !mx-auto mt-20 rounded-2xl bg-gray-900/40 p-2 backdrop-blur-sm md:w-[70vw] sm:w-[95vw] xs:w-[90vw]md:mt-5 md:mx-0">
            <form
                onSubmit={handleSubmit}
                className="flex w-full justify-center md:justify-around items-center space-x-1"
            >
                <Input
                    id="url"
                    type="url"
                    placeholder="enter reel url --instagram"
                    className="p-6 w-full md:w-[50vw] text-lg rounded-md border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setInputUrl(e.target.value)}
                />
                <button
                    className="relative group/btn md:w-50px sm:text-sm flex items-center justify-center space-x-2 p-6 rounded-md h-10 font-medium text-white shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="submit"
                >
                    <IconDownload className="h-5 w-5" />
                    <span className="xs:hidden lg:flex md:flex">Download</span>
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

export default UrlInput;

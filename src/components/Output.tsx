import { useState } from "react";
import Image from "next/image"; 

function Output({ reelData }: any) {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadBtn = async (url: string) => {
        if (!url) {
            console.error("URL is not provided.");
            return;
        }

        setIsDownloading(true);

        try {
            // Create an anchor element
            const a = document.createElement("a");
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().slice(0, 19).replace(/:/g, '-');
            const fileName = `rd_insta_${formattedDate}.mp4`;
            a.href = url;
            a.download = fileName;
            a.click();
        } catch (error) {
            console.error("Error initiating download:", error);
            setIsDownloading(false);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="w-full mx-auto flex flex-col items-center justify-center rounded-2xl bg-gray-900/40 p-2 backdrop-blur-sm mt-5 md:w-[70vw]">
            <p className="text-sm w-full md:w-[300px] text-start">{reelData?.title}</p>
            {reelData ? (
                <Image
                    src={reelData?.picture}
                    loading="lazy"
                    width={400}
                    height={400}
                    alt="Image not found"
                    className="rounded-xl border border-gray-300 dark:border-zinc-700 my-5 m-h-[300px]"
                />
            ) : (
                <p className="flex items-center justify-center text-3xl text-gray-700 font-bold rounded-xl border border-gray-300 dark:border-zinc-700 my-5 m-h-[400px] w-[300px] h-[300px]">No image available</p>
            )}

            <button
                disabled={isDownloading}
                onClick={() => downloadBtn(reelData?.links[0]?.link)}
                className={`inline-flex w-full h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-gray-900 to-gray-800 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''} md:w-[200px]`}
            >
                {isDownloading ? 'Downloading...' : 'Download'}
            </button>
        </div>
    );
}

export default Output;

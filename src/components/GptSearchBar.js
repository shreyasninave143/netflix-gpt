import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useState } from "react";

const GptSearchBar = () => {
    const language = useSelector(store => store.config.lang);
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12">
                <input
                    placeholder={lang[language].gptSearchPlaceholder}
                    type="text"
                    className="p-4 m-4 border-black col-span-9" />
                <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">
                    {lang[language].search}
                </button>
            </form>
        </div>
    )
}
export default GptSearchBar;
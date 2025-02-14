import { departmentsListOne, departmentsListThree, departmentsListTwo } from "@/data";
import { useState } from "react";

export default function MobileDepartments() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (title: string) => {
        setOpenCategory(openCategory === title ? null : title);
    };

    return (
        <div className="flex flex-col gap-y-6">
            {[...departmentsListOne, ...departmentsListTwo].map((category, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggleCategory(category.title)}
                        className="flex justify-between items-center w-full text-left text-[#737373] font-semibold text-[16px]"
                    >
                        <span>{category.title}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 transition-transform ${openCategory === category.title ? 'rotate-180' : ''}`}
                            viewBox="0 0 20 20"
                            fill="#F47920"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {openCategory === category.title && (
                        <ul className="mt-2 ml-4 flex flex-col gap-y-2">
                            {category.items.map((item, idx) => (
                                <li key={idx} className="text-[#737373] text-[14px] hover:text-[#F47920] cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}

            <div>
                <h3 className="text-[#737373] font-semibold text-[16px]">Mais Departamentos</h3>
                <ul className="mt-2 ml-4 flex flex-col gap-y-2">
                    {departmentsListThree.map((item, index) => (
                        <li key={index} className="text-[#737373] text-[14px] hover:text-[#F47920] cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
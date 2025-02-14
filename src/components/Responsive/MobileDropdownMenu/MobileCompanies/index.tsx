import React from 'react';

export default function MobileCompanies() {
    return (
        <div className="mt-6">
            <h3 className="text-[#737373] font-semibold text-[16px] mb-4">Empresas</h3>
            <div className="flex overflow-x-auto gap-4 pb-4">
                {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="flex flex-col items-center flex-shrink-0 w-[70px]">
                        <div className="w-[70px] h-[70px] bg-[#F47920] rounded-full"></div>
                        <span className="text-[#737373] text-[12px] mt-1">Lorem Ipsum</span>
                    </div>
                ))}
                <div className="flex flex-col items-center flex-shrink-0 w-[70px]">
                    <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[#F47920]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </div>
                    <span className="text-[#737373] text-[12px] mt-1">Ver mais</span>
                </div>
            </div>
        </div>
    );
}
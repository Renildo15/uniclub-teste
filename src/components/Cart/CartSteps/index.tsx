export default function CartSteps() {
    return (
        <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
            <li className="flex w-full relative text-indigo-600 after:content-[''] after:w-full after:h-1 after:bg-white after:inline-block after:absolute lg:after:top-[12px] after:top-3 after:left-4 h-[25px]">
                <div className="block whitespace-nowrap z-10">
                    <span className="w-[25px] h-[25px] bg-[#F47920] border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-[25px] lg:h-[25px]">1</span>
                </div>
            </li>

            <li className="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-1 after:bg-white after:inline-block after:absolute lg:after:top-[12px] after:top-3 after:left-4 h-[25px]">
                <div className="block whitespace-nowrap z-10">
                    <span className="w-[25px] h-[25px] bg-white  rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-[#D4D4D4] lg:w-[25px] lg:h-[25px]">2</span>
                </div>
            </li>

            <li className="flex relative text-gray-900 h-[25px]">
                <div className="block whitespace-nowrap z-10">
                    <span className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-[#D4D4D4] lg:w-[25px] lg:h-[25px]">3</span>
                </div>
            </li>
        </ol>
    );
}
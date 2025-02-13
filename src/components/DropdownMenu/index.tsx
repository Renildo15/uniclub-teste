import React, { forwardRef } from 'react';
import Departments from './Departments';
import Companies from './Companies';

interface IDropdownMenuProps {
    isOpen: boolean;
}
const DropdownMenu = forwardRef<HTMLDivElement, IDropdownMenuProps>(({ isOpen }, ref) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
            )}

            <div
                ref={ref}
                className={`${
                    isOpen ? "block" : "hidden"
                } flex flex-col absolute bg-white shadow-lg w-[84%] 3xl:w-[68%] 2xl:w-[68%] max-h-[450px] 3xl:max-h-full 2xl:max-h-full mt-2 top-[395px] 3xl:top-[520] 2xl:top-[522] xl:top-[390] lg:top-[390] md:top-[432] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-10 transition-all duration-300 overflow-y-auto`}
            >
                <Departments />
                <Companies/>
            </div>
        </>
    );
});
DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
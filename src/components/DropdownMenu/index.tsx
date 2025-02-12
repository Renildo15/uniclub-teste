import React, { forwardRef } from 'react';
import Departments from '../Departments';
import Companies from '../Companies';

interface IDropdownMenuProps {
    isOpen: boolean;
}
const DropdownMenu = forwardRef<HTMLDivElement, IDropdownMenuProps>(({ isOpen }, ref) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-0"></div>
            )}

            <div
                ref={ref}
                className={`${
                    isOpen ? "block" : "hidden"
                } flex flex-col absolute bg-white shadow-lg w-[1165px] max-h-[450px] mt-2 top-[395px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-10 transition-all duration-300 overflow-y-auto`}
            >
                <Departments />
                <Companies/>
            </div>
        </>
    );
});
DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
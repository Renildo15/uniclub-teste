import React, { forwardRef } from 'react';
import MobileDepartments from './MobileDepartments';
import MobileCompanies from './MobileCompanies';

interface IMobileDropdownMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileDropdownMenu = forwardRef<HTMLDivElement, IMobileDropdownMenuProps>(
    ({ isOpen, onClose }, ref) => {
        return (
            <>
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={onClose}
                    ></div>
                )}

                <div
                    ref={ref}
                    className={`${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed inset-y-0 left-0 w-[80%] max-w-[300px] bg-white z-50 transition-transform duration-300 ease-in-out overflow-y-auto`}
                >
                    <div className="p-4">
                        <MobileDepartments />
                        <MobileCompanies />
                    </div>
                </div>
            </>
        );
    }
);

MobileDropdownMenu.displayName = 'MobileDropdownMenu';

export default MobileDropdownMenu;
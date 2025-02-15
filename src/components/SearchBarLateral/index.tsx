import React, { forwardRef } from 'react';
import SearchInput from '../Header/SearchInput';
import LogoU from "../../../public/logo-u.svg"
import Image from 'next/image';
import CloseIcon from "../../../public/icons/close-icon.svg"

interface ISearchBarLateralProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchBarLateral = forwardRef<HTMLDivElement, ISearchBarLateralProps>(
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
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    } fixed inset-y-0 right-0 border-t-[8px] border-t-[#F47920] w-[80%] max-w-[300px] bg-white z-50 transition-transform duration-300 ease-in-out overflow-y-auto`}
                >
                    <div className="flex flex-col px-4 py-2 bg-[#EAE0D5] gap-y-2">
                        <div className='flex flex-row justify-between w-full'>
                            <Image
                                src={LogoU}
                                width={40}
                                alt='logo u'
                                
                            />
                            <button className='text-[#737373] font-bold text-[18px]' onClick={onClose}>
                                <Image src={CloseIcon} width={12} alt="close"/>
                            </button>
                        </div>
                        <SearchInput display='flex'/>
                    </div>
                    <div className='flex flex-col px-4 py-2 gap-y-2'>
                        <span className='text-[#737373] text-sm font-bold'>O que você gostaria hoje?</span>
                    </div>
                </div>
            </>
        );
    }
);

SearchBarLateral.displayName = 'SearchBarLateral';

export default SearchBarLateral;
import React, { forwardRef } from 'react';
import LogoU from "../../../public/logo-u.svg"
import Image from 'next/image';
import CartSteps from './CartSteps';
import CloseIcon from "../../../public/icons/close-icon.svg"
import CartItem from './CartItems';
import Continue from './Continue';
import { useCart } from '@/context/CartContext';

interface ICartProps {
    isOpen: boolean;
    onClose: () => void;
};

const Cart = forwardRef<HTMLDivElement, ICartProps>(
    ({ isOpen, onClose }, ref) => {
        const { totalItems } = useCart()

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
                    } fixed inset-y-0 right-0 border-t-[8px] border-t-[#F47920] w-[80%] max-w-[300px] md:w-[100%] md:max-w-[400px] 2xl:w-[80%] 2xl:max-w-[500px] bg-[#FAF7F4] z-50 transition-transform duration-300 ease-in-out overflow-hidden`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative h-full flex flex-col">
                        <div className="flex flex-col px-4 py-2 gap-y-2">
                            <div className="flex flex-row justify-center items-center gap-9 py-4">
                                <Image src={LogoU} width={50} alt="logo u" />
                                <CartSteps />
                                <button
                                    className="text-[#737373] font-bold text-[18px]"
                                    onClick={onClose}
                                >
                                    <Image src={CloseIcon} width={20} alt="close" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-row items-end px-4 py-2">
                            <span className="text-[#F47920] text-[24px] md:text-[30px] font-bold">Carrinho</span>
                            <span className="text-[12px] md:text-[14px] text-[#737373] ml-2 mb-1">({totalItems} itens)</span>
                        </div>

                        <div className="flex-grow overflow-y-auto md:px-4 md:py-2 scrollbar-hide">
                            <CartItem />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full bg-[#FAF7F4] shadow-md">
                            <Continue />
                        </div>
                    </div>
                </div>
            </>
        );
    }
);

Cart.displayName = "Cart";

export default Cart;

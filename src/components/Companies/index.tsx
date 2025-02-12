import More from "../../../public/icons/more-icon.svg"
import Image from 'next/image';

export default function Companies() {
    return (
        <div className='w-full p-[40px] bg-[#FAF7F4]'>
            <div className='flex flex-row justify-center gap-x-4 flex-wrap'> {/* Adicionamos flex-wrap */}
                {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className='flex flex-col justify-center items-center w-[90px] text-center'>
                        <div className='w-[90px] h-[90px] bg-[#F47920] rounded-full'></div>
                        <span className='text-[#737373] text-[16px] mt-1'>Lorem Ipsum</span>
                    </div>
                ))}
                <div className='flex flex-col justify-center items-center w-[90px] text-center'>
                    <div className='flex items-center justify-center w-[90px] h-[90px] bg-white rounded-full'>
                        <Image
                            src={More}
                            alt='more'
                            width={40}
                            height={40}
                        />
                    </div>
                    <span className='text-[#737373] text-[16px] mt-1'>Ver mais empresas</span>
                </div>
            </div>
        </div>
    )
}
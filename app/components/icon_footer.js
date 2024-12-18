import Image from 'next/image'
import React from 'react'

function IconFooter({ url, iconLink, title }) {
    return (
        <div className='flex flex-col items-center justify-center space-x-2'>
            <div className='items-center justify-center bg-black rounded-full p-2 border-gray-100 border h-10 w-10'>
                <a href={url} target='_blank' rel="noreferrer">
                    <Image
                        width={30} height={30}
                        src={iconLink} alt="Github" />
                </a>
            </div>
            {/* <p className='text-sm text-center'>{title}</p> */}
        </div>
    )
}

export default IconFooter
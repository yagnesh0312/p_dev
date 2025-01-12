import React from 'react'
import Content from '../data/content'
import { FontStyle } from '../data/fontStyle'

function ExperienceTile({ id, title, company
    , place, duration, content
}) {
    return (
        <div className={`px-10 flex flex-col gap-4 md:gap-8 block-card overflow-hidden ${Content.ABOUT_CONTAINER_BORDER_CLASSES}`}>
                    <div className="shadow-[0_0px_60px_10px_#9b5de5] mb-5 h-0"></div>
           

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-10">
                <div className="md:w-1/2">
                    <h2 className={'text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 ' + FontStyle.montserrat}>{title}</h2>
                    <p className='text-lg md:text-2xl text-gray-600 dark:text-gray-400 opacity-90'>{company}</p>
                    <p className='md:text-xl text-gray-500 dark:text-gray-300 opacity-70'>{place}</p>
                </div>
                <div className="md:w-1/2">
                    <p className='text-lg md:text-xl font-medium text-purple-600 dark:text-purple-400'>{duration}</p>
                    <div className="mt-4 prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
                        <p className='text-lg md:text-xl'>{content}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ExperienceTile


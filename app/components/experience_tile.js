import React from 'react'

function ExperienceTile({ id, title, company
    , place, duration, content
}) {
    return (
        <div className={`flex flex-col ${id % 2 === 0 ? "md:flex-row-reverse" : ""} gap-4 md:gap-8`}>
            <div className="flex flex-col gap-2">
                <h2 className='text-4xl font-semibold text-gray-900 dark:text-gray-100'>{title}</h2>
                <p className='text-2xl text-gray-600 dark:text-gray-400 opacity-90'>{company}</p>
                <p className='text-lg text-gray-500 dark:text-gray-300 opacity-70'>{place}</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className='text-lg font-medium text-green-600 dark:text-green-400'>{duration}</p>
                <div className="mt-4 prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
                    <p>{content}</p>
                </div>
            </div>
        </div>

    )
}

export default ExperienceTile


import React from 'react'
import MyCSS from '../data/cssStyle'
import Content from '../data/content'
import ExperienceTile from '../components/experience_tile'

function Experience() {
    return (
        <div className='py-40'>
            <div className="text-center w-full">
                <h1 className={MyCSS.heading}>{Content.EXPERIENCE_TITLE}</h1>
                <p className={MyCSS.subHeading}>
                    {Content.EXPERIENCE_SUBTITLE}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-20 md:mx-40 mx-4 ">

                    {Content.EXPERIENCE_DATA.reverse().map((experience, index) => (
                        <div key={index}>
                            <ExperienceTile {...experience} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
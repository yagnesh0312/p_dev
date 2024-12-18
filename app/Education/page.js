import { Timeline } from '@/components/ui/timeline';
import { Image } from 'lucide-react';
import React from 'react'
import Content from '../data/content';
import MyCSS from '../data/cssStyle';

function Education() {
    
    return (
        <div className='py-40'>
            <div className="text-center w-full">
                <h1 className={MyCSS.heading}>{Content.EDUCATION_TITLE}</h1>
                <p className={MyCSS.subHeading}>
                    {Content.EDUCATION_SUBTITLE}
                </p>
                <div className="w-full bg-red">
                    <Timeline data={Content.EDUCATION_DATA} />
                </div>
            </div>
        </div>
    )
}

export default Education
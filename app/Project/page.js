import { Timeline } from '@/components/ui/timeline'
import { content } from '@/tailwind.config';
import React from 'react'
import ProjectTile from '../components/project-tile';
import projects from '../data/Projects';
import Content from '../data/content';
import MyCSS from '../data/cssStyle';
function Projects() {

    let data = [];
    projects.map((project, index) => {
        data.push({
            title: project.name,
            content: (
                <div key={project.name}>
                    <ProjectTile id={index} />
                </div>
            )
        })
    })
    return (
        <>
            <div className="body-gradient py-40">
                <div className="max-w-6xl mx-auto text-center mb-12 ">
                    <h1 className={MyCSS.heading}>
                        {Content.PROJECT_HEADER_TITLE}
                    </h1>
                    <p className={MyCSS.subHeading}>
                        {Content.PROJECT_HEADER_SUBTITLE}
                    </p>    
                </div>
                {/* <Timeline data={data} /> */}
                {projects.map((project, index) => (
                    <div key={project.name}>
                        <ProjectTile id={index} />
                    </div>
                ))}
            </div>

        </>
    )
}

export default Projects
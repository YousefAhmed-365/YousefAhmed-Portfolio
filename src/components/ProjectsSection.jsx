import ReactPaginate from 'react-paginate';

import React from 'react'
import GitHub from '@mui/icons-material/GitHub';

import { ProjectCard } from './ProjectCard';

const data = [
    {
        title: 'Canvas Language',
        content: 'An interpreted functional programming language for rendering graphics.',
        useDefaultStyle: false,
        tags: ["Programming Language", "C/C++"],
        links: [{ title: 'Github', link: 'https://github.com/YousefAhmed-365/CanvasLanguage', icon: <><GitHub className='sp-simple-icon' style={{ transition: 'none' }} /></> }],
    },
    {
        title: 'Personal Web Portfolio',
        content: 'My personal portfolio... Yes the one you are currently using.',
        useDefaultStyle: true,
        tags: ["Frontend", "Vite/ReactJS", "UI/UX Figma", "AnimeJS..."],
        links: [{ title: 'Github', link: 'https://github.com/YousefAhmed-365/YousefAhmed-Portfolio', icon: <><GitHub className='sp-simple-icon' style={{ transition: 'none' }} /></> }],
    },
    {
        title: 'Notes',
        content: 'A social media facebook/twitter like clone made for practice.',
        useDefaultStyle: false,
        tags: ["Backend", "Laravel"],
        links: [{ title: 'Github', link: 'https://github.com/YousefAhmed-365/YousefAhmed-Portfolio', icon: <><GitHub className='sp-simple-icon' style={{ transition: 'none' }} /></> }],
    },
    {
        title: 'BluV Engine',
        content: 'A state based engine framework made for SFML. (Note: This project is currently deprecated and being reworked on)',
        useDefaultStyle: true,
        tags: ["Framework", "C/C++"],
        links: [{ title: 'Github', link: 'https://github.com/YousefAhmed-365/BluVEngine', icon: <><GitHub className='sp-simple-icon' style={{ transition: 'none' }} /></> }],
    },
    {
        title: 'Misc. Projects Made During Courses & Training',
        content: 'Worked on multiple project during school and Pearson (BTec Level 3) training. For more information contact me.',
        useDefaultStyle: false,
        tags: ["Web/Software Development", "Frontend/Backend"],
    },
]

export default function ProjectsSection() {

    return (
        <section id='projects-section' className='d-flex flex-column align-items-center'>
            <h1>Projects</h1>
            <hr />
            <div className='container d-flex flex-column gap-5'>
                {data && data.map((data, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            title={data.title}
                            content={data.content}
                            component={data.component}
                            tags={data.tags}
                            links={data.links}
                            useDefaultStyle={data.useDefaultStyle}
                        />
                    )
                })}
            </div>
            <hr />
        </section>
    )
}

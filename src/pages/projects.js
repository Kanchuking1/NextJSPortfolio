import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import ProjectCard from '@/components/ProjectCard'

import projectsList from '../../public/data/projects'
import SearchBar from '@/components/SearchBar'

const techSet = new Set([]);
const topicSet = new Set([]);

projectsList.map(p => {
    p.tech.map(t => techSet.add(t))
    p.topics.map(t => topicSet.add(t))
})

const techOptions = Array.from(techSet);
techOptions.sort();
const topicOptions = Array.from(topicSet);
topicOptions.sort();

const projects = () => {

    // Understand project criteria
    const [selectedFilters, setSelectedFilters] = useState([]);

    const onRemoveSelectedFitler = (value) => {
        setSelectedFilters(selectedFilters.filter(f => f.value != value));
    }

    const onSelectedFilterChip = (value) => {
        const find = selectedFilters.find((f) => f.value == value);
        if (find) return;
        setSelectedFilters([... selectedFilters, {
            value
        }]);
    }

    let filteredProjects = projectsList.filter(project => {
        const found = selectedFilters.find((filter) => {
            return project.topics.includes(filter.value) ||
            project.tech.includes(filter.value) ||
            project.title.includes(filter.value) ||
            project.intro.includes(filter.value)
        })
        return found != null && found != undefined
    });

    if ((!selectedFilters) || selectedFilters.length < 1) filteredProjects = projectsList;

    return (
        <>
            <Head>
                <title>Wahib Kapdi | Projects</title>
                <meta name="description" content="Looks at some of Wahib Kapdi's work" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <AnimatedText text={'Let the record speak for itself'} />
                <AnimatedText text={'It\'s testimony is undeniable'} className='font-medium !text-3xl pb-8' />
                <Layout className='pt-16 '>
                    <div>
                        <SearchBar searchSuggestions={[
                            {
                                categoryName: 'Tech and Frameworks',
                                filters: techOptions
                            }, {
                                categoryName: 'Topics',
                                filters: topicOptions
                            }
                            ]}
                            selectedFilters={selectedFilters}
                            onRemoveSelectedFitler={onRemoveSelectedFitler}
                            onSelectedFilterChip={onSelectedFilterChip} />
                        <div className='border-t-2 border-dark grid grid-cols-3 gap-4 pt-4'>
                            {filteredProjects.map((project, index) => {
                                return <ProjectCard key={`${index}_${project.id}`} {...project} />
                            })}
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
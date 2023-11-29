import React from 'react';

const Projects = () => (
    <section id="projects" class="container mx-auto my-8 px-4">
        <h2 class="text-3xl font-bold mb-4">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-md shadow-md">
                <h3 class="text-xl font-bold mb-2">Project 1</h3>
                <p class="text-gray-700">Description of Project 1.</p>
                <a href="#" class="text-blue-500 font-bold mt-2 inline-block">View Project</a>
            </div>
            <div class="bg-white p-4 rounded-md shadow-md">
                <h3 class="text-xl font-bold mb-2">Project 2</h3>
                <p class="text-gray-700">Description of Project 2.</p>
                <a href="#" class="text-blue-500 font-bold mt-2 inline-block">View Project</a>
            </div>
        </div>
    </section>
);

export default Projects;

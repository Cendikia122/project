import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ProjectStyle2 from '@/components/project/ProjectStyle2';
import React from 'react';

export const metadata = {
    title: "Fasel, Inc - Project Album"
}

const ProjectPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Training" title="Training - Album">
                <ProjectStyle2 />
            </LayoutStyle7>
        </>
    );
};

export default ProjectPage;
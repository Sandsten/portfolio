import React from 'react';
import styles from './ProjectContainer.module.scss';

interface ProjectContainerProps {
    children: React.ReactNode;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ children }) => {
    return (
        <div className={styles.scrollContainer}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};

export default ProjectContainer;
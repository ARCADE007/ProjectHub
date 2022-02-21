import React from 'react'
import Project from '../project/Project';
import styles from './FeaturedProject.module.css';

function FeaturedProject() {
  return (
    <div className={styles.project_section}>
        <div className={styles.heading}>
       <h1 className={styles.heading}>
            Featured Projects
           </h1>                 

        </div>
        <Project/>

    </div>

  )
}

export default FeaturedProject;
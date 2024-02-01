import React from "react";

export default function ProjectsForm({img, title, description, skills, linkGit, linkPage}){

    return(
        <article className="projects-form">
            <img src={img} alt="project's screen" />
            
        </article>
    )

}
import React from "react";
import ProjectsForm from "./ProjectsForm";
export default function Projects(){
    return(
        <section className="projets">
            <h1 className="projects__title title">Projects</h1>
            <div className="projects__container">
                <ProjectsForm />
            </div>
        </section>
    )
}
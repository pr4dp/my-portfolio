import React, { Fragment, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, idx) => (
          <Fragment key={idx}>
            <Project key={idx} {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

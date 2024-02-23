import React from "react"
import Link from "next/link"
import { AccordionSummary } from "@mui/material"
import { Accordion } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import styles from "./CourseAccordion.module.css"
import { Section } from "@src/modules/shared/models"
import { PlayCircle } from "react-bootstrap-icons"

interface CourseAccordionProps {
  sections: Section[]
  courseId: string
}

export const CourseAccordion = ({ sections, courseId }: CourseAccordionProps) => {
  return (
    <div>
      <AccordionSummary className={styles["course-accordion-head"]} style={{ backgroundColor: "#f3f1f1" }}>
        Contenido del curso
      </AccordionSummary>

      {sections &&
        sections.map(section => {
          return (
            <Accordion key={section.id} className={styles["course-accordion"]}>
              <AccordionSummary
                style={{ backgroundColor: "#f3f1f1" }}
                expandIcon={<ExpandMoreIcon />}
                className={styles["course-accordion-summary"]}
              >
                <div className={styles["course-accordion-summary-content"]}>
                  <h2>{section.name}</h2>
                  <span>{section.videos.length} clases</span>
                </div>
              </AccordionSummary>
              <ol>
                {section.videos &&
                  section.videos.map(video => (
                    <li key={video.id} className={styles["course-accordion-li"]}>
                      <div className={styles["course-accordion-li-div"]}>
                        <Link
                          href={{ pathname: `/clase/${courseId}/${video.id}` }}
                          className={styles["course-accordion-class-link"]}
                        >
                          {video.videoTitle}
                        </Link>
                        <Link
                          href={{ pathname: `/clase/${courseId}/${video.id}` }}
                          className={styles["course-accordion-class-link"]}
                        >
                          <PlayCircle />
                        </Link>
                      </div>
                    </li>
                  ))}
              </ol>
            </Accordion>
          )
        })}
    </div>
  )
}

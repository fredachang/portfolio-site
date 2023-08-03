import { LayoutGroup, motion } from "framer-motion";
import "./App.css";
import { ProjectTile } from "./components/ProjectTile";
import { projects } from "./data";
import { useState } from "react";
import { Project } from "./types";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { commonStyles } from "./tailwind-utils";

const overallBodyContainer = `${commonStyles.sitePrimaryColour} flex flex-col w-screen h-screen`;

function App() {
  const [expandedProjectId, setExpandedProjectId] = useState("1");
  const [expandFilter, setExpandFilter] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [removeFilter, setRemoveFilter] = useState(false);

  const handleExpand = (projectId: string) => {
    if (projectId === expandedProjectId) {
      setExpandedProjectId("");
    } else setExpandedProjectId(projectId);
  };

  const handleShowHome = () => {
    setFilteredProjects(projects);
    setExpandedProjectId("1");
    setRemoveFilter(false);
    setExpandFilter(false);
  };

  const handleExpandFilter = () => {
    setExpandFilter(!expandFilter);
    setRemoveFilter(!removeFilter);
    setFilteredProjects(projects);
    setExpandedProjectId("1");
  };

  const filterProjectsByType = (projects: Project[], projectType: string) => {
    const filteredProjects = projects.filter(
      (project) => project.type === projectType
    );
    setFilteredProjects(filteredProjects);
  };

  return (
    <>
      <main className={overallBodyContainer}>
        <nav>
          <Header
            handleShowHome={handleShowHome}
            expandFilter={expandFilter}
            projects={projects}
            filterProjectsByType={filterProjectsByType}
            handleExpandFilter={handleExpandFilter}
            removeFilter={removeFilter}
          />
        </nav>

        <LayoutGroup>
          <motion.section className="bars">
            {filteredProjects.map((project) => {
              return (
                <ProjectTile
                  key={project.id}
                  project={project}
                  isExpanded={expandedProjectId === project.id}
                  handleExpand={handleExpand}
                />
              );
            })}
          </motion.section>
        </LayoutGroup>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;

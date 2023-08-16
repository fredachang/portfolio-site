import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import "./App.css";
import { ProjectTile } from "./components/ProjectTile";
import { projectTypes, projects } from "./data";
import { useState } from "react";
import { Project } from "./types";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { fade, fadeUp } from "./motion";
import { Route, Routes } from "react-router-dom";
import { ProjectPage } from "./pages/ProjectPage";
import { About } from "./pages/About";
import { LandingPage } from "./pages/LandingPage";
import { colour } from "./tailwind-utils";
import { useDetectScreenWidth } from "./hooks/useDetectScreenWidth";

const overallBodyContainer = `${colour.sitePrimaryColour} flex flex-col w-screen h-screen`;

function App() {
  const [expandedProjectId, setExpandedProjectId] = useState("1");
  const [expandFilter, setExpandFilter] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleExpandTile = (projectId: string) => {
    if (projectId === expandedProjectId) {
      setExpandedProjectId("");
    } else setExpandedProjectId(projectId);
  };

  const handleExpandFilter = () => {
    setExpandFilter(!expandFilter);
    setFilteredProjects(projects);
    setExpandedProjectId("");
  };

  const handleShowHome = () => {
    setExpandedProjectId("1");
    setFilteredProjects(projects);
    setExpandFilter(false);
  };

  const showAll = expandedProjectId === "";
  const filtered = filteredProjects.length < 8;

  const { screenWidth } = useDetectScreenWidth();

  const onMobile = screenWidth < 1000;

  const filterProjectsByType = (projects: Project[], projectType: string) => {
    const filteredProjects = projects.filter(
      (project) => project.type === projectType
    );
    setFilteredProjects(filteredProjects);
  };

  const countProjectsByType = (
    projects: Project[],
    projectType: string
  ): number => {
    const foundProjects = projects.filter(
      (project) => project.type === projectType
    );
    const lengthOfProject = foundProjects.length;
    return lengthOfProject;
  };

  const projectCount: {
    design: number;
    threeD: number;
    web: number;
  } = {
    design: countProjectsByType(projects, projectTypes.GraphicDesign),
    threeD: countProjectsByType(projects, projectTypes.threeD),
    web: countProjectsByType(projects, projectTypes.WebDev),
  };

  return (
    <>
      <main className={overallBodyContainer}>
        <Header
          expandFilter={expandFilter}
          projects={projects}
          filtered={filtered}
          filterProjectsByType={filterProjectsByType}
          handleExpandFilter={handleExpandFilter}
          projectCount={projectCount}
          handleShowHome={handleShowHome}
        />

        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-red-100 fixed top-0 bottom-0 w-screen h-screen z-50">
                <LandingPage />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeUp(100, 0.8)}
                className="flex justify-between w-full h-86%"
              >
                <About />
              </motion.section>
            }
          />

          <Route
            path="/project/:title"
            element={
              <motion.section className="flex justify-between w-full h-86%">
                <ProjectPage projects={projects} />
              </motion.section>
            }
          />

          <Route
            path="/home"
            element={
              <LayoutGroup>
                <AnimatePresence>
                  <motion.section
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fade(0.8, 0.5)}
                    className={`flex md:justify-between h-86%  ${
                      showAll && !onMobile
                        ? `overflow-x-hidden`
                        : `overflow-x-scroll`
                    }`}
                  >
                    {filteredProjects.map((project) => {
                      return (
                        <ProjectTile
                          key={project.id}
                          project={project}
                          isExpanded={expandedProjectId === project.id}
                          handleExpandTile={handleExpandTile}
                        />
                      );
                    })}
                  </motion.section>
                </AnimatePresence>
              </LayoutGroup>
            }
          />
        </Routes>

        {screenWidth > 1000 && <Footer />}
      </main>
    </>
  );
}

export default App;

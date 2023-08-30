import "./App.css";
import { projectTypes, projects } from "./data";
import { useEffect, useState } from "react";
import { Project } from "./types";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { ProjectPage } from "./pages/ProjectPage";
import { About } from "./pages/About";
import { colour } from "./tailwind-utils";
import { useDetectScreenWidth } from "./hooks/useDetectScreenWidth";
import { MasterIndex } from "./components/MasterIndex";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const [expandedProjectId, setExpandedProjectId] = useState("1");
  const [expandNavFilter, setExpandNavFilter] = useState(false);
  const [expandContact, setExpandContact] = useState(false);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showLanding, setShowLanding] = useState(false);

  const handleExpandTile = (projectId: string) => {
    if (projectId === expandedProjectId) {
      setExpandedProjectId("");
    } else setExpandedProjectId(projectId);
  };

  const handleExpandNavFilter = () => {
    setExpandNavFilter(!expandNavFilter);
    setFilteredProjects(projects);
    setExpandedProjectId("");
  };

  const handleExpandContact = () => {
    setExpandContact(!expandContact);
  };

  const handleShowHome = () => {
    setExpandedProjectId("1");
    setFilteredProjects(projects);
    setExpandNavFilter(false);
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
    if (screenWidth < 1000) {
      setExpandNavFilter(false);
    }
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

  const handleShowLanding = () => {
    setExpandedProjectId("");
    setShowLanding(true);
  };

  const handleHideLanding = () => {
    setExpandedProjectId("1");
    setShowLanding(false);
  };

  useEffect(() => {
    handleShowLanding();
  }, []);

  return (
    <>
      <main
        className={`${colour.sitePrimaryColour} flex flex-col w-screen h-screen`}
      >
        {showLanding && <LandingPage handleHideLanding={handleHideLanding} />}
        <Header
          expandNavFilter={expandNavFilter}
          projects={projects}
          filtered={filtered}
          filterProjectsByType={filterProjectsByType}
          handleExpandNavFilter={handleExpandNavFilter}
          projectCount={projectCount}
          handleShowHome={handleShowHome}
          expandContact={expandContact}
          handleExpandContact={handleExpandContact}
        />

        <Routes>
          <Route
            path="/home"
            element={
              <MasterIndex
                showAll={showAll}
                onMobile={onMobile}
                filteredProjects={filteredProjects}
                expandedProjectId={expandedProjectId}
                handleExpandTile={handleExpandTile}
              />
            }
          />
          <Route
            path="/project/:title"
            element={<ProjectPage projects={projects} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>

        {screenWidth > 1000 && <Footer />}
      </main>
    </>
  );
}

export default App;

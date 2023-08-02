import { LayoutGroup, motion } from "framer-motion";
import "./App.css";
import { ProjectTile } from "./components/ProjectTile";
import { projects } from "./data";
import { useState } from "react";

function App() {
  const [expandedProjectId, setExpandedProjectId] = useState("1");

  const handleExpand = (projectId: string) => {
    if (projectId === expandedProjectId) {
      setExpandedProjectId("");
    } else setExpandedProjectId(projectId);
  };

  return (
    <>
      <div className="bg-stone-50 flex flex-col w-screen h-screen">
        <div className="header">
          <h1>Portfolio Site</h1>
        </div>

        <LayoutGroup>
          <motion.div className="bars">
            {projects.map((project) => {
              return (
                <ProjectTile
                  key={project.id}
                  project={project}
                  isExpanded={expandedProjectId === project.id}
                  handleExpand={handleExpand}
                />
              );
            })}
          </motion.div>
        </LayoutGroup>

        <footer>
          <h1 className="footer">
            <p>Email</p>
            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>Instagram</p>
          </h1>
        </footer>
      </div>
    </>
  );
}

export default App;

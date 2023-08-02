import { LayoutGroup, motion } from "framer-motion";
import "./App.css";
import { ProjectTile } from "./components/ProjectTile";
import { projects } from "./data";
import { useState } from "react";

function App() {
  const [expandedProjectId, setExpandedProjectId] = useState("");

  const handleExpand = (projectId: string) => {
    setExpandedProjectId(projectId);
  };

  return (
    <>
      <div className="bg-stone-50 flex flex-col w-screen h-screen">
        <div className="bg-stone-50 h-5% fixed w-screen top-0 z-10">
          <h1>Portfolio Site</h1>
        </div>

        <LayoutGroup>
          <motion.div className="flex justify-between w-screen h-90% flex-1">
            {projects.map((project) => {
              return (
                <ProjectTile
                  key={project.id}
                  project={project}
                  isExpanded={expandedProjectId === project.id}
                  onExpand={handleExpand}
                />
              );
            })}
          </motion.div>
        </LayoutGroup>

        <div>
          <h1 className="bg-stone-50 fixed w-screen bottom-0 h-5% z-10">
            Footer
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;

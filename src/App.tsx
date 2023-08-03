import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import "./App.css";
import { ProjectTile } from "./components/ProjectTile";
import { projects } from "./data";
import { useState } from "react";
import { fadeX, staggerParentContainer } from "./motion";

function App() {
  const [expandedProjectId, setExpandedProjectId] = useState("1");
  const [expandFilter, setExpandFilter] = useState(false);

  const handleExpand = (projectId: string) => {
    if (projectId === expandedProjectId) {
      setExpandedProjectId("");
    } else setExpandedProjectId(projectId);
  };

  const handleShowHome = () => {
    setExpandedProjectId("1");
  };

  const handleExpandFilter = () => {
    setExpandFilter(!expandFilter);
  };

  const overallBodyContainer = "bg-stone-50 flex flex-col w-screen h-screen";
  const filterNavContainer = `bg-yellow-100 flex justify-end w-1/3`;
  const categoryButtonContainer =
    "bg-purple-100 w-4/5 flex justify-between mr-10";

  return (
    <>
      <div className={overallBodyContainer}>
        <div className="header">
          <button onClick={handleShowHome}>Freda Chang</button>

          <div className={filterNavContainer}>
            <AnimatePresence>
              {expandFilter && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={staggerParentContainer}
                  className={categoryButtonContainer}
                >
                  <motion.button variants={fadeX}>Graphic Design</motion.button>
                  <motion.button variants={fadeX}>3D Design</motion.button>
                  <motion.button variants={fadeX}>
                    Web Development
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <button onClick={handleExpandFilter}>Filter By</button>
          </div>
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

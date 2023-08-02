import { LayoutGroup, motion } from "framer-motion";
import "./App.css";
import { ProjectTile } from "./components/ProjectTile";
import { projects } from "./data";

function App() {
  return (
    <>
      <div className="bg-stone-50 flex flex-col w-screen h-screen">
        <div className="bg-stone-50 h-7">
          <h1>Portfolio Site</h1>
        </div>

        <LayoutGroup>
          <motion.div className="flex justify-between w-screen flex-1">
            {projects.map((project) => {
              return <ProjectTile key={project.id} project={project} />;
            })}
          </motion.div>
        </LayoutGroup>

        <div>
          <h1 className="bg-stone-50 h-7">Footer</h1>
        </div>
      </div>
    </>
  );
}

export default App;

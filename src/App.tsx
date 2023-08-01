import "./App.css";
import { ProjectTile } from "./components/ProjectTile";
import { projects } from "./data";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="bg-yellow-100 h-7">
          <h1>Portfolio Site</h1>
        </div>

        <div className="flex justify-between w-screen flex-1">
          {projects.map((project) => {
            return <ProjectTile project={project} />;
          })}
        </div>

        <div>
          <h1 className="bg-yellow-100 h-7">Footer</h1>
        </div>
      </div>
    </>
  );
}

export default App;

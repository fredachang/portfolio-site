import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ReactNode, Suspense, useRef } from "react";
import * as THREE from "three";
import { WeatherBalloon } from "../components/WeatherBalloon";
import { Link } from "react-router-dom";

function Rig({ children }: { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.03
      );

      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.03
      );
    }
  });

  return <group ref={ref}>{children}</group>;
}

const loaderStyles = {
  container: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "white",
    borderRadius: "10%",
  },
  bar: {
    backgroundColor: "black",
    height: "50px",
  },
  data: {
    color: "white",
    fontSize: "20px",
  },
};

const lightColours = {
  warmYellow: "rgb(247, 191, 126)",
  lightBlue: "rgb(171, 203, 255)",
};

export const LandingPage = () => {
  return (
    <>
      <Link to="/home" className="flex justify-center">
        ENTER
      </Link>

      <Canvas>
        <Environment files="HDR/clear_land.hdr" blur={0.01} />
        {/* <axesHelper args={[5]} /> */}

        <ambientLight color={lightColours.warmYellow} intensity={0.3} />
        <hemisphereLight
          color={lightColours.lightBlue}
          groundColor={lightColours.warmYellow}
          intensity={0.6}
          position={[0, 5, 3]}
        />

        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Rig>
            <WeatherBalloon scale={300} position={[0, 0, 0]} />
          </Rig>
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={loaderStyles.container}
        innerStyles={loaderStyles.inner}
        barStyles={loaderStyles.bar}
        dataStyles={loaderStyles.data}
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
      />
    </>
  );
};
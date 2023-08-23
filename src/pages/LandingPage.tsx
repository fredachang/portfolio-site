import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ReactNode, Suspense, useRef } from "react";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeXWithDelay } from "../motion";
import { DigiCard2 } from "../components/DigiCard2";
import { landingPageBg } from "../data";

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
    backgroundColor: "#fafaf9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "transparent",
    borderRadius: "10%",
  },
  bar: {
    backgroundColor: "black",
    height: "5px",
  },
  data: {
    color: "black",
    fontSize: "20px",
    fontFamily: "Sohne-Regular",
  },
};

const lightColours = {
  mint: "rgb(194,255,188)",
  lightBlue: "rgb(171, 203, 255)",
};

export const LandingPage = () => {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   console.log("inside");
  //   navigate("/home");
  // };

  return (
    <>
      <div className="bg-stone-50 fixed top-0 bottom-0 w-screen h-screen z-50">
        <Link
          to="/home"
          className="font-bold text-xl p-4 absolute w-full flex justify-center z-20"
        >
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeXWithDelay(-20, 1.5, 2)}
          >
            ENTER
          </motion.p>
        </Link>

        <div
          className="bg-yellow-100 absolute top-0 w-screen h-screen"
          style={{
            backgroundImage: `url(${landingPageBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <Canvas>
          <Suspense fallback={null}>
            <Environment files="HDR/clear_land.hdr" blur={0.01} />
            {/* <axesHelper args={[5]} /> */}

            <hemisphereLight
              color={lightColours.lightBlue}
              groundColor={lightColours.mint}
              intensity={0.6}
              position={[0, 5, 3]}
            />

            <OrbitControls enableZoom={false} />
            <Rig>
              <DigiCard2 scale={120} position={[0, 0, 0]} />
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
      </div>
    </>
  );
};

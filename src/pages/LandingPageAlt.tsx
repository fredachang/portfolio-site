import { Environment, Loader } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ReactNode, Suspense, useRef } from "react";
import * as THREE from "three";
import { Case } from "../components/three/Case";
import { BobbyPin } from "../components/three/BobbyPin";
import { Zipv2 } from "../components/three/Zipv2";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";

function Rig({ children }: { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null);

  //higher the 60 number, the less it moves
  //lower the 0.03 number, slower it responds (dampening)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        (state.mouse.x * Math.PI) / 120,
        0.03
      );

      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        (state.mouse.y * Math.PI) / 120,
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

// const lightColours = {
//   mint: "rgb(194,255,188)",
// };

interface Props {
  handleHideLanding: () => void;
}

export const LandingPageAlt = (props: Props) => {
  const { handleHideLanding } = props;

  const {
    isPortrait,
    isMediumScreen,
    isSmallScreen,
    isLargeScreen,
    includesZip,
  } = useDetectScreenSize();

  const calculateZipPositions = () => {
    if (isMediumScreen) {
      const xPosition = -4;
      const thresholdX = 4;
      return { xPosition, thresholdX };
    }
    if (isSmallScreen && isPortrait) {
      const xPosition = -2;
      const thresholdX = 2;
      return { xPosition, thresholdX };
    }
    if (isLargeScreen) {
      const xPosition = -5;
      const thresholdX = 5;
      return { xPosition, thresholdX };
    }
    if (includesZip) {
      const xPosition = -6;
      const thresholdX = 6;
      return { xPosition, thresholdX };
    }
    return { xPosition: -6, thresholdX: 6 };
  };
  let { xPosition, thresholdX } = calculateZipPositions();

  const updateInitialXPosition = () => {
    ({ xPosition, thresholdX } = calculateZipPositions()); // Use parentheses here
  };

  // Add an event listener for the 'resize' event
  window.addEventListener("resize", updateInitialXPosition);

  // Initial calculation

  // When the component or script is unmounted or no longer in use, remove the event listener
  window.removeEventListener("resize", updateInitialXPosition);

  return (
    <>
      <div className="fixed top-0 bottom-0 w-screen h-screen flex justify-center z-50">
        {/* <img
          src={landingPageBgAlt}
          className="w-screen h-screen object-cover absolute top-0"
        /> */}

        <div className="w-full fixed h-full z-20">
          <Canvas className="z-20">
            <Suspense fallback={null}>
              <Environment files="HDR/clear_land.hdr" blur={0.01} />
              {/* <axesHelper args={[5]} /> */}

              {/* <hemisphereLight
                color={lightColours.mint}
                groundColor={lightColours.mint}
                intensity={1}
                position={[0, 0, 0]}
              /> */}

              {/* <OrbitControls enableZoom={false} /> */}
              <Rig>
                <Zipv2
                  staticScale={37}
                  hoverScale={43}
                  handleHideLanding={handleHideLanding}
                  initialPosition={[xPosition, 3, 0.5]}
                  thresholdX={thresholdX}
                />
                <BobbyPin
                  scale={60}
                  position={[0, -4, -0.6]}
                  rotation={[0, 0, Math.PI / 16]}
                />
                <Case
                  scale={8.8}
                  position={[0, 0, -0.5]}
                  textPosition={[0.6, 0.4, 0.01]}
                />
              </Rig>
            </Suspense>
          </Canvas>
        </div>
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

import { Environment, Loader } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ReactNode, Suspense, useRef } from "react";
import * as THREE from "three";
import { Case } from "../components/three/Case";
import { BobbyPin } from "../components/three/BobbyPin";
import { Zipv2 } from "../components/three/Zipv2";
import { useCalculateZipPosition } from "../hooks/useCalculateZipPosition";

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

  const { xPosition, thresholdX } = useCalculateZipPosition();

  return (
    <>
      <div className="fixed top-0 bottom-0 w-screen h-screen flex justify-center z-50">
        {/* <img
          src={landingPageBgAlt}
          className="w-screen h-screen object-cover absolute top-0"
        /> */}

        <div className="w-full fixed h-full z-20 touch-none">
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
                <Zipv2 scale={50} position={[0, -2, 0]} />
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

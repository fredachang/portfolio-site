import { Environment, Loader } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ReactNode, Suspense, useRef } from "react";
import * as THREE from "three";
import { Case } from "../components/three/Case";
import { BobbyPin } from "../components/three/BobbyPin";
import { Zipv2 } from "../components/three/Zipv2";
import { useCalculateZipPosition } from "../hooks/useCalculateZipPosition";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";
import {
  generateBobbyPinCoordinates,
  loaderStyles,
} from "../components/three/three-utils";

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

// const lightColours = {
//   mint: "rgb(194,255,188)",
// };

interface Props {
  handleHideLanding: () => void;
}

export const LandingPageAlt = (props: Props) => {
  const { handleHideLanding } = props;

  const { xPosition, thresholdX } = useCalculateZipPosition();
  const { isXlScreen } = useDetectScreenSize();

  const yPosition = isXlScreen ? 3.15 : 3;

  const bobbyPins = generateBobbyPinCoordinates(-10, 10, -5, -3.5, -1.4, -3);

  return (
    <>
      <div className="fixed top-0 bottom-0 w-screen h-screen flex justify-center z-50">
        <div className="w-full fixed h-full z-20 touch-none">
          <Canvas className="z-20">
            <Suspense fallback={null}>
              <Environment files="HDR/clear_land.hdr" blur={0.01} />

              <Rig>
                <Zipv2
                  staticScale={37}
                  hoverScale={40}
                  handleHideLanding={handleHideLanding}
                  initialPosition={[xPosition, yPosition, 0.5]}
                  thresholdX={thresholdX}
                />
                {bobbyPins.map((bobbyPin, i) => (
                  <BobbyPin
                    key={i}
                    scale={60}
                    floatingAmplitude={0.1 * (i * 0.1)}
                    floatingSpeed={1 * (i * 0.12)}
                    position={bobbyPin.position}
                    rotation={bobbyPin.rotation}
                  />
                ))}

                {/* <BobbyPin scale={60} rotation={[0, Math.PI / 12, 0]} /> */}

                <Case
                  scale={isXlScreen ? 9.5 : 9}
                  position={[0, 0, -0.5]}
                  textPosition={[0, 0.3, 0.1]}
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

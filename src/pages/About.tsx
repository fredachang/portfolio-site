import { space, type } from "../tailwind-utils";
import { motion } from "framer-motion";
import { fade } from "../motion";
import { DigiCard2 } from "../components/three/DigiCard2";
import { ReactNode, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";

interface Props {
  bgHex: string;
}

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

export const About = (props: Props) => {
  const { bgHex } = props;

  const { isSmallScreen } = useDetectScreenSize();

  return (
    <>
      <motion.div
        className={`bg-[${bgHex}] flex flex-col justify-between w-full h-75%`}
      >
        <div
          className={`p-${space.spacingMd} w-screen h-full flex flex-col md:flex-row`}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade(1, 0.5, 0)}
            className={`flex ${type.paragraphLarge} w-full h-1/2 md:w-1/2 md:h-full`}
          >
            Freda is a multidiscplinary designer and developer who thrives in
            the intersection of design and technology. Bringing analytical
            thinking capabilities from a previous career in consulting, she is
            looking to create impactful digital real estate that pushes the
            status quo of how we experience & interact with the virtual world.{" "}
          </motion.div>
          <div className="w-full h-1/2 md:w-1/2 h-full">
            <Canvas className="z-20 touch-none">
              <Environment files="HDR/clear_land.hdr" blur={0.01} />
              <OrbitControls />

              <Rig>
                <DigiCard2
                  scale={isSmallScreen ? 130 : 100}
                  position={[0, 0, 0]}
                />
              </Rig>
            </Canvas>
          </div>
        </div>
      </motion.div>
    </>
  );
};

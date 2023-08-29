import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ReactNode, Suspense, useRef } from "react";
import * as THREE from "three";
import { landingPageBg } from "../data";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { DigiCard2 } from "../components/three/DigiCard2";

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

interface Props {
  handleHideLanding: () => void;
}

export const LandingPage = (props: Props) => {
  const { handleHideLanding } = props;
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   console.log("inside");
  //   navigate("/home");
  // };

  const { screenWidth } = useDetectScreenWidth();
  const isMobile = screenWidth < 1000;

  return (
    <>
      <div className="fixed top-0 bottom-0 w-screen h-screen flex justify-center z-50">
        <img
          src={landingPageBg}
          className="w-screen h-screen object-cover absolute z-10 top-0 mix-blend-difference"
        />

        <div className="w-full fixed top-20 h-4/5 z-20">
          <Canvas className="z-20">
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
                <DigiCard2
                  scale={isMobile ? 90 : 120}
                  position={[0, 0, 0]}
                  onClick={handleHideLanding}
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

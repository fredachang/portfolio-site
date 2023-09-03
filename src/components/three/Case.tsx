import * as THREE from "three";
import { Object3DNode, useLoader } from "@react-three/fiber";
import { animated } from "@react-spring/three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import GTPressura from "../../assets/GTPressura.json";
import { useRef } from "react";
import { landingPageBgAlt } from "../../data";

extend({ TextGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

const fontColour = new THREE.Color("rgb(0,255,0)");

export function Case(props: any) {
  const ref = useRef<any | null>(null);

  const font = new FontLoader().parse(GTPressura);
  const colorMap = useLoader(THREE.TextureLoader, landingPageBgAlt);

  const fontSize = 0.1;

  return (
    <animated.group {...props} dispose={null} ref={ref}>
      <mesh position={[-0.2, 0.3, -0.01]}>
        <textGeometry args={["Freda", { font, size: fontSize, height: 0 }]} />
        <meshBasicMaterial attach="material" color={fontColour} />
      </mesh>
      <mesh>
        <planeGeometry args={[2, 1, 1]} />

        <meshBasicMaterial
          side={THREE.DoubleSide}
          map={colorMap}
          toneMapped={false}
          transparent={true}
        />
      </mesh>
    </animated.group>
  );
}

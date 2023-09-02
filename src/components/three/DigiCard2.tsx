/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 DigiCard2.glb --transform -types
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Plane003: THREE.Mesh;
    Plane003_1: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["shiny metal"]: THREE.MeshStandardMaterial;
  };
};

export function DigiCard2(props: any) {
  const { nodes, materials } = useGLTF(
    "/DigiCard2-transformed.glb"
  ) as GLTFResult;

  const rotatingCard = useRef<THREE.Object3D>(null!);

  //PREVIOUS CODE WITHOUT ROTATION
  // const initialPosition = useRef<THREE.Vector3 | null>(null);

  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();

  //   // Floating Animation
  //   const floatingAmplitude = 0.4; // Adjust the amplitude of the floating animation
  //   const floatingSpeed = 1; // Adjust the speed of the floating animation

  //   if (!initialPosition.current) {
  //     // Store the initial position when it's not set
  //     initialPosition.current = rotatingCard.current!.position.clone();
  //   }

  //   const yPosition =
  //     initialPosition.current.y +
  //     Math.sin(elapsedTime * floatingSpeed) * floatingAmplitude;

  //   rotatingCard.current!.position.setY(yPosition);
  // });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Rotation
    const rotationSpeed = props.rotationSpeed || 0.2; // Default rotation speed
    const rotation = elapsedTime * rotationSpeed;
    rotatingCard.current.rotation.y = rotation;

    // Floating Animation
    const floatingAmplitude = 0.4; // Adjust the amplitude of the floating animation
    const floatingSpeed = 1; // Adjust the speed of the floating animation

    const yPosition = Math.sin(elapsedTime * floatingSpeed) * floatingAmplitude;

    rotatingCard.current.position.y = yPosition;
  });

  return (
    <group {...props} dispose={null} ref={rotatingCard}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_1.geometry}
        material={materials["shiny metal"]}
      />
    </group>
  );
}

useGLTF.preload("/DigiCard2-transformed.glb");

import React, { useEffect, useRef } from 'react'
import { EffectComposer } from '@react-three/postprocessing';
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
const HexGrid = () => {
    const { mouse, viewport } = useThree();
    const group = useRef();
    const hexes = useRef([]);
    const COUNT = 80;
  
    // Initialize hexagons with random positions
    useEffect(() => {
      hexes.current = Array.from({ length: COUNT }, () => ({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 5
        ),
        scale: 0.5 + Math.random() * 0.5,
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
      }));
    }, []);
  
    useFrame((state) => {
      if (!group.current) return;
  
      // Convert mouse position to 3D space
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
  
      // Animate each hexagon
      group.current.children.forEach((mesh, i) => {
        // Distance based interaction
        const distance = Math.sqrt(
          Math.pow(mesh.position.x - x, 2) + Math.pow(mesh.position.y - y, 2)
        );
  
        // Pulse effect based on time and distance
        const pulse =
          Math.sin(state.clock.getElapsedTime() * 0.5 + i * 0.1) * 0.5 + 0.5;
  
        // Apply rotation and scale based on mouse proximity
        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.002;
  
        if (distance < 3) {
          mesh.scale.setScalar(hexes.current[i].scale * (1.2 - distance * 0.1));
        } else {
          mesh.scale.lerp(
            new THREE.Vector3(
              hexes.current[i].scale * (0.8 + pulse * 0.2),
              hexes.current[i].scale * (0.8 + pulse * 0.2),
              hexes.current[i].scale * (0.8 + pulse * 0.2)
            ),
            0.1
          );
        }
      });
  
      // Gentle overall movement
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    });
  
    return (
      <group ref={group}>
        {hexes.current.map((hex, i) => (
          <mesh key={i} position={hex.position} rotation={hex.rotation}>
            <cylinderGeometry args={[1, 1, 0.2, 6, 1]} />
            <meshStandardMaterial
              color={i % 2 ? "#0ff" : "#a0f"}
              emissive={i % 2 ? "#0aa" : "#70a"}
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    );
  };

export default HexGrid
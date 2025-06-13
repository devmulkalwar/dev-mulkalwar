import React, { Suspense } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from '@react-three/postprocessing';
import { Bloom } from '@react-three/postprocessing';
import HexGrid from './HexGrid';
const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <HexGrid />
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              intensity={1.5}
              levels={9}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroBackground;
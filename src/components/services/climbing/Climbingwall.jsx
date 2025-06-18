import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Climbingwall(props) {
  const { nodes, materials } = useGLTF('/Climbingwall.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -0.096]} rotation={[-Math.PI / 2, 0, 0]} scale={0.576}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.pCube1_lambert2_0.geometry} material={materials.lambert2} position={[0.5, 3.75, 0.125]} scale={[5, 7.5, 0.25]} />
          <mesh geometry={nodes.pCube2_lambert3_0.geometry} material={materials.lambert3} position={[0.5, 3.74, -0.25]} scale={[4.9, 7.49, 0.5]} />
          <mesh geometry={nodes.shard2_lambert4_0.geometry} material={materials.lambert4} position={[-0.029, -0.01, -0.047]} rotation={[-0.034, 0.098, 0.002]} />
          <mesh geometry={nodes.shard3_lambert7_0.geometry} material={materials.lambert7} position={[1.699, -1.808, -0.047]} rotation={[-0.034, 0.098, 0.002]} />
          <mesh geometry={nodes.shard4_lambert5_0.geometry} material={materials.lambert5} position={[3.678, 0.247, -0.047]} rotation={[-0.034, 0.098, 0.002]} />
          <mesh geometry={nodes.shard5_lambert7_0.geometry} material={materials.lambert7} position={[2.216, 1.783, -0.438]} rotation={[0.136, 0.097, -0.014]} />
          <mesh geometry={nodes.shard6_lambert5_0.geometry} material={materials.lambert5} position={[0.083, 0.17, -0.288]} rotation={[0.075, -0.105, 0.01]} />
          <mesh geometry={nodes.shard7_lambert5_0.geometry} material={materials.lambert5} position={[0.704, 7.663, -3.379]} rotation={[1.09, -0.224, 0.252]} scale={0.378} />
          <mesh geometry={nodes.shard14_lambert6_0.geometry} material={materials.lambert6} position={[0, -0.041, 0.225]} rotation={[-0.147, 0, 0]} />
          <mesh geometry={nodes.shard16_lambert4_0.geometry} material={materials.lambert4} position={[-1.412, 3.719, 0.15]} rotation={[0.006, 0, 0]} />
          <mesh geometry={nodes.shard17_lambert4_0.geometry} material={materials.lambert4} position={[1.704, -2.266, 0.225]} rotation={[-0.147, 0, 0]} />
          <mesh geometry={nodes.shard27_lambert6_0.geometry} material={materials.lambert6} position={[2.097, 4.104, 0.214]} rotation={[0, -0.614, 0]} scale={0.185} />
          <mesh geometry={nodes.shard25_lambert6_0.geometry} material={materials.lambert6} position={[0.111, 4.53, 0.126]} rotation={[0.157, 0.157, -0.028]} scale={0.254} />
          <mesh geometry={nodes.shard28_lambert6_0.geometry} material={materials.lambert6} position={[-1.131, 3.042, -0.354]} rotation={[0.607, -0.525, 0.335]} scale={0.185} />
          <mesh geometry={nodes.shard29_lambert4_0.geometry} material={materials.lambert4} position={[1.489, 1.145, -0.354]} rotation={[0.607, -0.525, 0.335]} scale={0.185} />
          <mesh geometry={nodes.shard30_lambert6_0.geometry} material={materials.lambert6} position={[-1.141, 0.113, -0.354]} rotation={[0.607, -0.525, 0.335]} scale={0.185} />
          <mesh geometry={nodes.shard31_lambert5_0.geometry} material={materials.lambert5} position={[-1.629, 3.074, -2.353]} rotation={[1.09, -0.224, 0.252]} scale={0.253} />
          <mesh geometry={nodes.shard32_lambert4_0.geometry} material={materials.lambert4} position={[0.514, 4.474, -2.36]} rotation={[1.09, -0.224, 0.252]} scale={0.253} />
          <mesh geometry={nodes.shard33_lambert5_0.geometry} material={materials.lambert5} position={[1.397, 2.292, -2.353]} rotation={[1.09, -0.224, 0.252]} scale={0.253} />
          <mesh geometry={nodes.shard34_lambert7_0.geometry} material={materials.lambert7} position={[-0.092, 2.574, -0.336]} rotation={[0.136, 0.097, -0.014]} />
          <mesh geometry={nodes.shard35_lambert7_0.geometry} material={materials.lambert7} position={[-0.172, -1.407, -1.537]} rotation={[0.253, 0.127, -0.093]} />
          <mesh geometry={nodes.shard37_lambert5_0.geometry} material={materials.lambert5} position={[0.392, 1.017, -0.576]} rotation={[0.14, -0.312, 0.043]} scale={0.873} />
          <mesh geometry={nodes.shard41_lambert6_0.geometry} material={materials.lambert6} position={[0, 0.127, -0.816]} rotation={[0.142, 0, 0]} />
          <mesh geometry={nodes.shard42_lambert4_0.geometry} material={materials.lambert4} position={[0.725, 2.458, 1.424]} rotation={[-1.344, 0.549, 0.004]} scale={0.211} />
          <mesh geometry={nodes.shard43_lambert6_0.geometry} material={materials.lambert6} position={[2.189, -2.793, -1.537]} rotation={[0.253, 0.127, -0.093]} />
          <mesh geometry={nodes.shard44_lambert4_0.geometry} material={materials.lambert4} position={[-0.645, -3.709, -1.537]} rotation={[0.253, 0.127, -0.093]} />
          <mesh geometry={nodes.shard45_lambert7_0.geometry} material={materials.lambert7} position={[2.273, -1.074, -1.537]} rotation={[0.253, 0.127, -0.093]} />
          <mesh geometry={nodes.shard46_lambert4_0.geometry} material={materials.lambert4} position={[0.994, 6.094, 0.067]} rotation={[0.607, -0.525, 0.335]} scale={0.185} />
          <mesh geometry={nodes.shard47_lambert7_0.geometry} material={materials.lambert7} position={[0, 0.122, -0.777]} rotation={[0.113, 0, 0]} />
          <mesh geometry={nodes.shard48_lambert5_0.geometry} material={materials.lambert5} position={[-0.004, -5.303, -1.267]} rotation={[0.159, -0.104, 0.05]} scale={0.873} />
          <mesh geometry={nodes.shard49_lambert7_0.geometry} material={materials.lambert7} position={[-1.532, 6.379, 0.123]} rotation={[0.607, -0.525, 0.335]} scale={0.185} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Climbingwall.glb')

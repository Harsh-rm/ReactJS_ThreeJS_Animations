import React from 'react'
import { useGLTF } from '@react-three/drei'

export function SoccerJersey(props) {
  const { nodes, materials } = useGLTF('/SoccerJersey.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.023, 0, -1.755]} rotation={[-Math.PI / 2, 0, -3.14]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Material4352} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.PT_FABRIC_FRONT_2205811} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.PT_FABRIC_FRONT_2216408} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.PT_FABRIC_FRONT_2648488} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.PT_FABRIC_FRONT_2653343} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.PT_FABRIC_FRONT_2693726} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.body_FRONT_1920185} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.cuffs_FRONT_1920745} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.sleeves_FRONT_1920216} />
      </group>
    </group>
  )
}

useGLTF.preload('/SoccerJersey.glb')
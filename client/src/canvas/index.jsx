import { Backdrop, Center, Environment } from '@react-three/drei'
import React from 'react'
import CameraRig from './CameraRig'
import Shirt from './Shirt'

const CanvasModel = () => {
  return (
    <Canvas>
        <ambientLight intensity={0.5}/>
        <Environment preset='city'/>
        <CameraRig>
            <Backdrop/>
            <Center>
                <Shirt/>
            </Center>
        </CameraRig>

    </Canvas>
  )
}

export default CanvasModel

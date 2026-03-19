import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useState } from 'react'

export default function Walls(props) {
    const [wallExtTexture, wallInTexture] = useTexture(['./Textures/WallExt.jpg', './Textures/WallIn.jpg'])
    const [modifiedWallExtTexture, setModifiedWallExtTexture] = useState(null)

    // Create modified texture with "genzcoder house" text overlay
    useEffect(() => {
        if (!wallExtTexture || !wallExtTexture.image) return

        const image = wallExtTexture.image

        // Wait for image to load if not already loaded
        const processImage = () => {
            const canvas = document.createElement('canvas')
            canvas.width = image.width || 1024
            canvas.height = image.height || 1024
            const context = canvas.getContext('2d')

            // Draw the original wall texture
            context.drawImage(image, 0, 0, canvas.width, canvas.height)

            context.fillStyle = '#2d1d04' // Brown color matching the theme
            context.font = 'bold 120px Arial'
            context.textAlign = 'center'
            context.textBaseline = 'middle'

            context.fillText('genzcoder house', canvas.width / 2, canvas.height / 2)

            // Create new texture from canvas
            const texture = new THREE.CanvasTexture(canvas)
            texture.flipY = false
            texture.needsUpdate = true

            setModifiedWallExtTexture(texture)
        }

        if (image.complete) {
            processImage()
        } else {
            image.onload = processImage
        }
    }, [wallExtTexture])

    return <>
        <mesh
            geometry={props.nodes.WallExtMerge.geometry}
            position={[-0.006, 1.6, -4.011]}
            rotation={[0, 1.571, 0]}
        >
            <meshBasicMaterial map={modifiedWallExtTexture || wallExtTexture} map-flipY={false} side={THREE.DoubleSide} />
        </mesh>

        <mesh
            geometry={props.nodes.WallInMerge.geometry}
            position={[0, 1.6, 3.9]}
        >
            <meshBasicMaterial map={wallInTexture} map-flipY={false} />
        </mesh>

    </>



}
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, RoundedBox } from '@react-three/drei'
import type { Group } from 'three'

// normalized cursor position, tracked window-wide so MIKA watches
// the pointer even when it's not over the canvas
const cursor = { x: 0, y: 0 }

function Monitor() {
  const group = useRef<Group>(null)
  const eyes = useRef<Group>(null)
  const blinkAt = useRef(-10)
  const pendingBlink = useRef(false)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (pendingBlink.current) {
      blinkAt.current = t
      pendingBlink.current = false
    }

    const g = group.current
    if (g) {
      g.position.y = Math.sin(t * 1.1) * 0.07 - 0.05
      g.rotation.y += (cursor.x * 0.45 - g.rotation.y) * 0.07
      g.rotation.x += (-cursor.y * 0.22 - g.rotation.x) * 0.07
    }

    const e = eyes.current
    if (e) {
      e.position.x = cursor.x * 0.09
      e.position.y = 0.16 - cursor.y * 0.06
      const dt = t - blinkAt.current
      // quick close-open blink
      e.scale.y =
        dt > 0 && dt < 0.22 ? Math.max(0.06, Math.abs(1 - dt / 0.11)) : 1
    }
  })

  return (
    <group
      ref={group}
      onPointerDown={() => {
        pendingBlink.current = true
      }}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = ''
      }}
    >
      {/* shell */}
      <RoundedBox args={[2.3, 1.75, 1.5]} radius={0.1} smoothness={6}>
        <meshStandardMaterial color="#d8d2c4" roughness={0.55} metalness={0.05} />
      </RoundedBox>
      {/* bezel */}
      <RoundedBox args={[1.85, 1.32, 0.18]} radius={0.05} smoothness={4} position={[0, 0.1, 0.72]}>
        <meshStandardMaterial color="#c7c0af" roughness={0.6} />
      </RoundedBox>
      {/* screen */}
      <mesh position={[0, 0.1, 0.825]}>
        <boxGeometry args={[1.58, 1.06, 0.02]} />
        <meshStandardMaterial
          color="#161613"
          roughness={0.3}
          emissive="#191815"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* eyes */}
      <group ref={eyes} position={[0, 0.16, 0.85]}>
        <mesh position={[-0.36, 0, 0]}>
          <circleGeometry args={[0.17, 32]} />
          <meshBasicMaterial color="#fff3ea" />
        </mesh>
        <mesh position={[0.36, 0, 0]}>
          <circleGeometry args={[0.17, 32]} />
          <meshBasicMaterial color="#fff3ea" />
        </mesh>
      </group>
      {/* knob + slot details */}
      <mesh position={[0.72, -0.62, 0.74]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.06, 24]} />
        <meshStandardMaterial color="#b9b2a1" roughness={0.5} />
      </mesh>
      <mesh position={[-0.4, -0.62, 0.76]}>
        <boxGeometry args={[0.55, 0.045, 0.02]} />
        <meshStandardMaterial color="#b9b2a1" roughness={0.5} />
      </mesh>
      {/* stand */}
      <mesh position={[0, -0.97, -0.1]}>
        <boxGeometry args={[0.6, 0.22, 0.6]} />
        <meshStandardMaterial color="#cfc8b8" roughness={0.6} />
      </mesh>
      <RoundedBox args={[1.5, 0.14, 1.0]} radius={0.05} position={[0, -1.12, 0]}>
        <meshStandardMaterial color="#cfc8b8" roughness={0.6} />
      </RoundedBox>
    </group>
  )
}

export default function Mika3D() {
  const wrapper = useRef<HTMLDivElement>(null)
  const [onScreen, setOnScreen] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursor.x = (e.clientX / window.innerWidth) * 2 - 1
      cursor.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // only run the render loop while the canvas is actually visible
  useEffect(() => {
    const el = wrapper.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapper} className="h-full w-full">
      <Canvas
        dpr={[1, 2]}
        frameloop={onScreen ? 'always' : 'never'}
        camera={{ position: [0, 0.25, 5.6], fov: 32 }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[2.5, 3.5, 4]} intensity={2.4} />
        <directionalLight position={[-3, 1.5, 2]} intensity={0.7} color="#ffe9d6" />
        <Monitor />
        <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={6} blur={2.8} far={3.2} />
      </Canvas>
    </div>
  )
}

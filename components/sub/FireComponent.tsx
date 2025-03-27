import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const FireEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set up scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Set the canvas size to the window's size
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 100;

    // Particle setup
    const particleCount = 500;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3); // x, y, z for each particle
    const particleColors = new Float32Array(particleCount * 3); // RGB color for each particle

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a random spread
      particlePositions[i * 3] = Math.random() * 50 - 25;
      particlePositions[i * 3 + 1] = Math.random() * 50 - 25;
      particlePositions[i * 3 + 2] = Math.random() * 50 - 25;

      // Fire color (red-yellow)
      particleColors[i * 3] = Math.random() * 1; // Red
      particleColors[i * 3 + 1] = Math.random() * 0.5; // Green
      particleColors[i * 3 + 2] = 0; // Blue (fire is usually no blue)
    }

    particles.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const material = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      map: new THREE.TextureLoader().load("https://threejs.org/examples/textures/sprites/disc.png"),
      transparent: true,
    });

    const points = new THREE.Points(particles, material);
    scene.add(points);

    // Animate particles
    const animate = () => {
      requestAnimationFrame(animate);

      points.rotation.x += 0.001;
      points.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure it's in the background
      }}
    />
  );
};

export default FireEffect;

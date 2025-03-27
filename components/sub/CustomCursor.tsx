'use client';

import React, { useEffect } from 'react';
import * as THREE from 'three';

const CustomCursor = () => {
  useEffect(() => {
    // Create the scene, camera, and renderer for Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'fixed';  // Fix the canvas to the screen
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '9999';  // Ensure it appears on top of other elements
    document.body.appendChild(renderer.domElement);  // Append the renderer to the DOM

    // Create a 3D cube cursor (a simple box)
    const geometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);  // Cube with smaller size
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cursor = new THREE.Mesh(geometry, material);
    scene.add(cursor);

    // Position the camera
    camera.position.z = 2;

    // Function to update mouse position
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update cursor's position in 3D space
      cursor.position.x = mouseX;
      cursor.position.y = mouseY;
    };

    // Attach mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Update renderer and camera on window resize
    const handleResize = () => {
      // Update camera aspect ratio
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // Update renderer size
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop to render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;  // We don't need to return anything from this component, the 3D cursor is handled by Three.js
};

export default CustomCursor;

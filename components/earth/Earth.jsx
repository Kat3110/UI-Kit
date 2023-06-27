import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import '../earth/earth.css'

const Earth = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const texture = new THREE.TextureLoader().load('/planet.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    containerRef.current.appendChild(renderer.domElement);

    const frames = 100;
    const rotationSpeed = 0.01;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += rotationSpeed;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      scene.remove(sphere);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className='earth' ref={containerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Earth;
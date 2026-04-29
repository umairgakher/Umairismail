'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Scene Setup ──
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.015); // Adds depth to the background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.setZ(40);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // ── Group for rotating the entire scene with mouse ──
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // ── Materials ──
    // Using AdditiveBlending for a glowing, holographic effect
    const wireMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1, // Indigo
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    const wireMaterialPurple = new THREE.MeshStandardMaterial({
      color: 0xa855f7, // Purple
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    // ── Main Complex Geometry (Torus Knot) ──
    const knotGeometry = new THREE.TorusKnotGeometry(12, 3, 200, 32);
    const mainKnot = new THREE.Mesh(knotGeometry, wireMaterial);
    sceneGroup.add(mainKnot);

    // Inner glowing sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(8, 2);
    const innerSphere = new THREE.Mesh(sphereGeometry, wireMaterialPurple);
    sceneGroup.add(innerSphere);

    // ── Floating Elements ──
    const floaters = new THREE.Group();
    sceneGroup.add(floaters);

    const createFloater = (geom: THREE.BufferGeometry, color: number, x: number, y: number, z: number) => {
      const mat = new THREE.MeshStandardMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(x, y, z);
      floaters.add(mesh);
      return mesh;
    };

    const floater1 = createFloater(new THREE.OctahedronGeometry(2, 0), 0x22d3ee, 25, 15, -10);
    const floater2 = createFloater(new THREE.TetrahedronGeometry(3, 0), 0xf472b6, -20, -15, 5);
    const floater3 = createFloater(new THREE.IcosahedronGeometry(1.5, 0), 0x34d399, -25, 20, -15);
    const floater4 = createFloater(new THREE.TorusGeometry(3, 0.5, 16, 32), 0xfacc15, 20, -20, -5);

    // ── Particle System (Starfield with depth) ──
    const buildParticles = (count: number, size: number, color: number) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        // Spread particles widely but keep them out of the immediate center
        positions[i] = (Math.random() - 0.5) * 300;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        size,
        color,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Points(geometry, material);
    };

    const particles1 = buildParticles(3000, 0.1, 0xffffff);
    const particles2 = buildParticles(1500, 0.2, 0x818cf8); // Indigo
    const particles3 = buildParticles(1000, 0.3, 0xc084fc); // Purple
    sceneGroup.add(particles1, particles2, particles3);

    // ── Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    const pointLight1 = new THREE.PointLight(0x6366f1, 3, 200);
    pointLight1.position.set(20, 20, 20);
    const pointLight2 = new THREE.PointLight(0xa855f7, 3, 200);
    pointLight2.position.set(-20, -20, 20);
    const pointLight3 = new THREE.PointLight(0x22d3ee, 2, 200);
    pointLight3.position.set(0, 0, -20);
    scene.add(ambientLight, pointLight1, pointLight2, pointLight3);

    // ── Mouse Interaction ──
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouse = (e: MouseEvent) => {
      targetX = (e.clientX - windowHalfX) * 0.001;
      targetY = (e.clientY - windowHalfY) * 0.001;
    };
    window.addEventListener('mousemove', handleMouse);

    // ── Resize ──
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ── Animation Loop ──
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Rotate Main Geometries
      mainKnot.rotation.x = t * 0.1;
      mainKnot.rotation.y = t * 0.15;
      mainKnot.rotation.z = t * 0.05;

      innerSphere.rotation.x = -t * 0.2;
      innerSphere.rotation.y = -t * 0.1;

      // Animate Floaters
      floater1.rotation.x += 0.01;
      floater1.rotation.y += 0.015;
      floater1.position.y = 15 + Math.sin(t) * 2;

      floater2.rotation.x -= 0.01;
      floater2.rotation.y += 0.01;
      floater2.position.y = -15 + Math.cos(t * 1.2) * 3;

      floater3.rotation.x += 0.02;
      floater3.position.y = 20 + Math.sin(t * 0.8) * 4;

      floater4.rotation.x += 0.01;
      floater4.rotation.z += 0.01;
      floater4.position.y = -20 + Math.cos(t * 1.5) * 2;

      // Rotate Particle Fields
      particles1.rotation.y = t * 0.02;
      particles2.rotation.y = -t * 0.015;
      particles3.rotation.y = t * 0.01;
      particles1.rotation.x = t * 0.005;

      // Smooth Mouse Follow (Easing)
      sceneGroup.rotation.y += 0.05 * (targetX - sceneGroup.rotation.y);
      sceneGroup.rotation.x += 0.05 * (targetY - sceneGroup.rotation.x);

      // Camera Scroll Parallax
      // Base Z is 40. As we scroll down, camera moves back and up slightly to give a sense of depth
      camera.position.z = 40 + scrollY * 0.015;
      camera.position.y = -(scrollY * 0.01);
      
      // Look at center to keep the knot in focus
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      // Memory cleanup for geometries and materials
      knotGeometry.dispose();
      sphereGeometry.dispose();
      wireMaterial.dispose();
      wireMaterialPurple.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

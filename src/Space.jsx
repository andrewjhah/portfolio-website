import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import * as THREE from "three";
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import { Float32BufferAttribute, MOUSE } from "three";

function Space({ onButtonClick }) {
    const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement);

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({
      vertexShader, fragmentShader, uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load('./assets/earth_map.jpeg')
        }
      }
    }))

    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader, 
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    }))

    atmosphere.scale.set(1.1,1.1,1.1)
    scene.add(atmosphere)

    const group = new THREE.Group()
    group.add(sphere)
    scene.add(group)

    const starGeometry = new THREE.BufferGeometry()
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff
    })

    const starVertices = []
    for (let i = 0; i<10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = -Math.random() * 4500
      starVertices.push(x,y,z)
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))


    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    camera.position.z = 15;
    camera.position.y = -1;

    const mouse = {
      x: 0,
      y: 0
    }
    addEventListener('mousemove', () => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1
      mouse.y = -(event.clientY / innerHeight) * 2 + 1
    })

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.003;
      gsap.to(group.rotation, {
        x: -mouse.y * 0.3,
        y: mouse.x * 0.5,
        duration: 2
      })
    };

    animate();

  }, []);
  
  return (
    <div className="Space" style={{position: "relative"}}>
      <div ref={containerRef}></div>
    </div>
  );
}

export default Space;
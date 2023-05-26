import * as THREE from 'three';
import GSAP from 'gsap';

import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';

export class ScrollStage {
    constructor() {
        this.element = document.querySelector('.content');

        this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        this.canvas = this.renderer.domElement;

        this.camera = new THREE.PerspectiveCamera(
            75,
            this.viewport.width / this.viewport.height,
            0.1,
            10
        );

        this.clock = new THREE.Clock();

        this.mouse = {
            x: 0,
            y: 0,
        };

        this.settings = {
            // vertex
            uFrequency: {
                start: 0,
                end: 0,
            },
            uAmplitude: {
                start: 0,
                end: 0,
            },
            uDensity: {
                start: 0,
                end: 0,
            },
            uStrength: {
                start: 0,
                end: 0,
            },
            // fragment
            uDeepPurple: {
                // max 1
                start: 0,
                end: 0,
            },
            uOpacity: {
                // max 1
                start: 1,
                end: 1,
            },
        };

        this.update = this.update.bind(this);

        this.init();
    }

    addMesh() {
        this.geometry = new THREE.IcosahedronGeometry(1, 64);

        this.material = new THREE.ShaderMaterial({
            wireframe: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            vertexShader,
            fragmentShader,
            uniforms: {
                uFrequency: { value: 0 },
                uAmplitude: { value: 0 },
                uDensity: { value: 0 },
                uStrength: { value: 0 },
                uDeepPurple: { value: 0 },
                uOpacity: { value: 0.5 },
            },
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);

        this.scene.add(this.mesh);
    }

    /**
     * STAGE
     */
    addCanvas() {
        this.canvas.classList.add('webgl');
        document.body.appendChild(this.canvas);
    }

    addCamera() {
        this.camera.position.set(0, 0, 2.5);
        this.scene.add(this.camera);
    }

    /**
     * EVENTS
     */
    addEventListeners() {
        window.addEventListener('resize', this.onResize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    onResize() {
        this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        if (this.mesh) {
            if (this.viewport.width < this.viewport.height) {
                this.mesh.scale.set(0.75, 0.75, 0.75);
            } else {
                this.mesh.scale.set(1, 1, 1);
            }
        }

        this.camera.aspect = this.viewport.width / this.viewport.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    }

    onMouseMove(event) {
        // play with it!
        // enable / disable / change x, y, multiplier …

        this.mouse.x = (event.clientX / this.viewport.width).toFixed(2) * 2;
        this.mouse.y = (event.clientY / this.viewport.height).toFixed(2) * 2;

        // GSAP.to(this.mesh.material.uniforms.uFrequency, {
        //     value: this.mouse.y,
        // });
        // GSAP.to(this.mesh.material.uniforms.uAmplitude, {
        //     value: this.mouse.x,
        // });
        GSAP.to(this.mesh.material.uniforms.uDensity, { value: this.mouse.y });
        GSAP.to(this.mesh.material.uniforms.uStrength, { value: this.mouse.y });
        // GSAP.to(this.mesh.material.uniforms.uDeepPurple, {
        //     value: this.mouse.x,
        // });
        // GSAP.to(this.mesh.material.uniforms.uOpacity, { value: this.mouse.y });
    }

    /**
     * LOOP
     */
    update() {
        this.render();

        window.requestAnimationFrame(this.update);
    }

    /**
     * RENDER
     */
    render() {
        this.renderer.render(this.scene, this.camera);
    }

    zoomOut = () => {
        GSAP.to(this.camera.position, {
            duration: 1,
            x: 0,
            y: 0,
            z: 10,
        });
    };

    zoomIn = () => {
        console.log('zoom in');
        // const cube = this.mesh;
        // const coords = { x: 0, y: 0, z: 5 };
        // new TWEEN.Tween(coords)
        //     .to({ x: 0, y: 0, z: 1 })
        //     .onUpdate(() => this.camera.position.set(0, 0, 1))
        //     .start();

        GSAP.to(this.camera.position, {
            duration: 1,
            x: 0,
            y: 0,
            z: 1.5,
        });
    };

    moveLeft = () => {
        GSAP.to(this.camera.position, {
            duration: 1.5,
            x: 1,
            y: 0,
            z: 2.5,
        });
    };

    init() {
        this.addCanvas();
        this.addCamera();
        this.addEventListeners();
        this.onResize();
        this.update();
        this.addMesh();

        // setTimeout(() => {
        //     this.camera.position.set(0, 0, 5);
        //     console.log('camera re set');
        // }, 2000);
    }
}

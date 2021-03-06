const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
})

controls = new THREE.OrbitControls(camera, renderer.domElement);

// create the shape

//cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

const spGeometry = new THREE.SphereGeometry( 5, 32, 32 );
const spMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00,  wireframe: true} );
const sphere = new THREE.Mesh( spGeometry, spMaterial );
scene.add( sphere );

camera.position.z = 18;


//game logic
function update() {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
}

function render() {
  renderer.render(scene, camera);
}

function GameLoop() {
  requestAnimationFrame(GameLoop);
  update();
  render();
}

GameLoop();

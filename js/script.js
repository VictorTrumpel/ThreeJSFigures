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
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterials = [
  new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/1.png'), side: THREE.DoubleSide}),
  new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/2.png'), side: THREE.DoubleSide}),
  new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/3.png'), side: THREE.DoubleSide}),
  new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/4.png'), side: THREE.DoubleSide}),
  new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/5.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/6.png'), side: THREE.DoubleSide}),
]
const material = new THREE.MeshFaceMaterial(cubeMaterials);
const cube = new THREE.Mesh(cubeGeometry, material);
scene.add(cube);

const spGeometry = new THREE.SphereGeometry( 5, 32, 32 );
const spMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00,  wireframe: true} );
const sphere = new THREE.Mesh( spGeometry, spMaterial );
scene.add( sphere );

camera.position.z = 18;

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 5.0);
scene.add(ambientLight);

//game logic
function update() {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.005;
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

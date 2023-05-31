import './style.css';

// Canvas setup
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Blob properties
const blob = {
  x: canvas.width / 4, // Initial x position
  y: canvas.height / 4, // Initial y position
  radius: canvas.width * 0.5, // Blob radius
  speed: 0.1, // Movement speed
  angle: 0, // Initial angle
};

// Render loop
function render() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update blob position
  blob.x += Math.cos(blob.angle) * blob.speed;
  blob.y += Math.sin(blob.angle) * blob.speed;

  // Blob gradient
  const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
  gradient.addColorStop(0, 'rgba(255, 0, 255, 0.5)'); // Magenta with opacity 0.5
  gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.5)'); // Cyan with opacity 0.5
  gradient.addColorStop(1, 'rgba(255, 255, 0, 0.5)'); // Yellow with opacity 0.8

  // Apply blurring effect
  ctx.shadowBlur = 100;
  ctx.shadowColor = 'rgba(255, 255, 0, 0.8)';

  // Draw blob
  ctx.beginPath();
  ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();

  // Reset shadow settings
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';

  // Update angle
  blob.angle += 0.01;

  // Request next frame
  requestAnimationFrame(render);
}

// Start the rendering loop
render();

(() => {
  // เริ่มเขียนโค้ด
  function setUp() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return {
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls: 250
    }
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height)
      }
    });
  }

  function drawSnowBall(canvasContext, snowBall) {
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x, snowBall.y, 4, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(255, 255, 255, 0.9)`;
    canvasContext.fill();
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowBalls } = setUp();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    snowBalls.forEach(snowBall => drawSnowBall(canvasContext, snowBall));
  }

  run();
})();

let height = window.innerHeight,
  width = window.innerWidth,
  style = "",
  movingElements = "";

for (let i = 0; i < 50; i++) {
  movingElements += `<div  class="moving" id="moving-${i}"></div>`;
  style += `
  #moving-${i}{
    animation: move${i} 20s infinite; 
  }
  @keyframes move${i} {
        0% {
          top: ${Math.random() * height}px;
          left: ${Math.random() * width}px;
          transform: scale(${Math.random() * 1});
        }
        20% {
            top: ${Math.random() * height}px;
            left: ${Math.random() * width}px;
            transform: scale(${Math.random() * 1});
          }
        40% {
            top: ${Math.random() * height}px;
            left: ${Math.random() * width}px;
            transform: scale(${Math.random() * 1});
          }
        60% {
            top: ${Math.random() * height}px;
            left: ${Math.random() * width}px;
            transform: scale(${Math.random() * 1});
          }
        80% {
            top: ${Math.random() * height}px;
            left: ${Math.random() * width}px;
            transform: scale(${Math.random() * 1});
          }
        100% {
            top: ${Math.random() * height}px;
            left: ${Math.random() * width}px;
            transform: scale(${Math.random() * 1});
          }
      }`;
}
document.write(`<div id="container">
${movingElements}</div>
<style>
 ${style}
  </style>`);

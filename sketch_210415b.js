function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  noSmooth();
}

  const params = {
  sides: 4,
  sideLengths: [300, 45, 200, 210]
};

function draw(){
  clear();

  // Draw gray box
  stroke(153);

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  for(let i=1; i<5; i++) {
    sideValue = e.target.elements['side'+i.toString()].value;
    params.sideLengths[i-1] = Number(sideValue);
  }
});
const sp = 30;
 params.sideLengths.forEach((side, i) => {
   if(i==0) {
      line(sp, sp, sp + side, sp);
   } else {
     if (i%2 !== 0) {
       line(sp + params.sideLengths[i-1] - (params.sideLengths[i-3] - (params.sideLengths[0] - params.sideLengths[2]) || 0), sp, sp + params.sideLengths[i-1] - (params.sideLengths[i-3] - (params.sideLengths[0] - params.sideLengths[2]) || 0), sp+ side)
   } else {
       line(sp, sp + params.sideLengths[3], sp + side, sp + params.sideLengths[3]);
     }
   }
  
 });
 
 // generate edge
if (params.sideLengths[0] !== params.sideLengths[2] || params.sideLengths[1] !== params.sideLengths[3]) {
  line(sp + params.sideLengths[0], sp + params.sideLengths[1], sp + params.sideLengths[2], sp + params.sideLengths[3]);
}

console.log(params);
}

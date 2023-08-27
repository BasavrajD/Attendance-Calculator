
function cal(){
    var sub = document.getElementById('sub').value;
    var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);
    var ans = (b*100)/a;

    document.getElementById('line').innerHTML = sub+" is:";
    document.getElementById('result').value = Math.round(ans)+"%";
    if(b <= a){
        if(ans <= 75){
            document.getElementById('result').style.boxShadow = "0 0 30px red";
        }
        else{
            document.getElementById('result').style.boxShadow = "0 0 30px green";
        }
    }
    else{
        document.getElementById('result').value = "Invalid";
    }
}
cal();

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan",
  "cyan"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

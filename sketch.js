var hr ,min, sec


function setup() {
  createCanvas(400,400);
  
  
}

function draw() {
  background(0,0,0);    
  translate(200,200) 
  hr = hour()
  min = minute()
  sec = second()
  scAngle = map(sec,0,60,0,360)
  push()
  rotate(scAngle)
  stroke('#FF6F0E')
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  scAnglemin = map(min,0,60,0,360)
  push()
  rotate(scAnglemin)
  stroke('#FFF6E0')
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  scAnglehr = map(hr%12,0,12,0,360)
  push()
  rotate(scAnglehr)
  stroke("yellow")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  
}
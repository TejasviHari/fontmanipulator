noseX=0;
noseY=0;
difference=0;
leftWrist=0;
rightWrist=0;

function setup(){
    canvas=createCanvas(550,400);
    canvas.position(560,150);
 
    video=createCapture(VIDEO);
    video.size(550,400);
 
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotPoses)
 }
 
 function modelloaded(){
     console.log("Posenet initialized!");
 }
 
 function gotPoses(results){
 if(results.length>0){
     console.log(results);
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;
     leftWrist=results[0].pose.leftWrist.x;
     rightWrist=results[0].pose.rightWrist.x;
     difference=floor(leftWrist-rightWrist);
 }
 }
 
 function draw(){
     background("pink");

     document.getElementById("square_size").innerHTML="Font size of the text is "+difference+"px";
     textSize(difference);
     text("Tejasvi",noseX,noseY);
 }
 noseX=0;
 noseY=0;
 diffrence=0;
 right_wristX=0;
 left_wristX=0;
 function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(550,170);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    background('#DA70D6');
    document.getElementById("square_sides").innerHTML="Width And Height Of The Square Will Be-"+diffrence+"px";
    fill('#a65065');
    stroke('#210533');
    square(noseX,noseY,diffrence);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
      console.log("noseX="+noseX+"noseY="+noseY);
      left_wristX=results[0].pose.leftWrist.x;
      right_wristX=results[0].pose.rightWrist.x;
      diffrence=floor(left_wristX-right_wristX);
      console.log("leftWristX="+left_wristX+"rightWristX="+right_wristX+"diffrence="+diffrence);
        }
}
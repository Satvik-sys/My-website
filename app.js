 async function getWebcam (){
   try {const videoSrc= await navigator.mediaDevices.getUserMedia({video:true});
    var video = document.getElementById("video");
    video.srcObject=videoSrc;
}
   catch(e){
       console.log(e);
   }
}



getWebcam();

var capture = document.getElementById("capture");
var canvas = document.getElementById("canvas");

capture.addEventListener("click",function () {
  context.drawImage(video,0,0,650,490);
})
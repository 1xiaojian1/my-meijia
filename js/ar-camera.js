let arStream=null;
async function startCamera(){const video=document.getElementById("arVideo");try{arStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:false});video.srcObject=arStream;document.getElementById("arStatus").innerText="摄像头已开启";}catch(e){document.getElementById("arStatus").innerText="摄像头权限不可用";}}
window.startCamera=startCamera;

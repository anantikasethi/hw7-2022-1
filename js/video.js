var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay=false
	console.log("autoplay is set to " +video.autoplay)
	video.loop=false
	console.log("loop is set to  "+ video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95
console.log("speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95
console.log("speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime +=15
	if( video.currentTime >= video.duration)
	video.currentTime = 0

console.log("current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==true){
		video.muted = false
		console.log("video is muted");
		this.innerHTML = "Mute"
	}
	else{
		video.muted=true
			video.muted = true
			console.log("video is unmuted");
			this.innerHTML = "Unmute"
	}
	console.log("video is muted");
});

document.querySelector("#vintage").addEventListener("click",function(){
    console.log("I am vintage")
    bd=document.querySelector("body")
    bd.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click",function(){
    console.log("I am orig")
    bd=document.querySelector("body")
    bd.classList.remove("oldSchool")
});


document.querySelector("#slider").addEventListener("change",function(){
    console.log("I am in slider")
    console.log("this")
    console.log(this.value)
    bd=document.querySelector("body")
    bd.style.volume = this.value + ""
});
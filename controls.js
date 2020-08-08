// main window processes
const electron = require("electron");
// object for ipc communication
const { ipcRenderer } = electron

document.querySelector("form").addEventListener('submit', (event)=>{
	event.preventDefault();
	const { path } = document.querySelector("input").files[0];
	// sending the signal to the core electron app
	ipcRenderer.send("getVideoLength", path);
	// signal must be received with an event listener
	console.log("submitted")

})
ipcRenderer.on("pushVideoLength",(event,videoLength)=>{
	console.log(videoLength);
	document.getElementById('result').innerHTML  = `video duration is ${videoLength} seconds`;
})
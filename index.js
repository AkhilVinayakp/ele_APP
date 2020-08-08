const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require("fluent-ffmpeg")
app.on("ready", ()=>{
	console.log('hello');
	// creating a sample window with default configuration
	const mainWindow = new BrowserWindow({
		webPreferences:{
			nodeIntegration:true
		}
	});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
})
// adding event listener for using ipcMain and using the channel send from the
ipcMain.on("getVideoLength",(event,path)=>{
	console.log("event received")
	ffmpeg.ffprobe(path, (err, metadata)=>{
		console.log(metadata.format.duration);
		console.log("error"+err);
	});
})
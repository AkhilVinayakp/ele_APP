const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require("fluent-ffmpeg")

// variable holds the main window reference
let mainWindow;

app.on("ready", ()=>{
	console.log('hello');
	// creating a sample window with default configuration
	 mainWindow = new BrowserWindow({
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
		// console.log(metadata.format.duration);
		// console.log("error :"+ err);
	//	sending the duration back to new channel
		mainWindow.webContents.send("pushVideoLength", metadata.format.duration)

	});
})
const electron = require("electron");
const { app, BrowserWindow } = electron;

app.on("ready", ()=>{
	console.log('hello');
	// creating a sample window with default configuration
	const mainWindow = new BrowserWindow({});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
})
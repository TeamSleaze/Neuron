const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {

    // Create Window
    const myWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load Webpage
    myWindow.loadFile('src/index.html');

});

app.on('window-all-closed', () => {
    // If not macOS
  if (process.platform !== 'darwin') app.quit();
})



app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Open a new Window'
  }
]);



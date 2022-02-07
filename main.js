const { app, BrowserWindow, Menu } = require('electron');

app.whenReady().then(() => {

    // Create Window
    const mainWindow = new BrowserWindow({
        width: 1376,
        height: 1112,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load Webpage
    mainWindow.loadFile('src/index.html');
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));

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
    description: 'Opens a new Window'
  }
]);


const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {label: 'New File'},
      {label: 'Open File'}
    ]
  }
]
const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const Store = require('electron-store');
const fs = require('fs');

const store = new Store();

let mainWindow;
let configPath = path.join(__dirname, 'config.json');

// Load configuration
function loadConfig() {
  try {
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    }
  } catch (err) {
    console.error('Error loading config:', err);
  }
  return getDefaultConfig();
}

function getDefaultConfig() {
  return {
    window: {
      width: 350,
      height: 500,
      x: undefined,
      y: undefined
    },
    appearance: {
      theme: 'light',
      scale: 1,
      position: 'right',
      opacity: 0.95,
      alwaysOnTop: true,
      showOnStartup: true
    },
    animation: {
      enabled: true,
      speed: 1,
      showThinkingProcess: true
    },
    integration: {
      blossomOsUrl: 'file://' + path.join(__dirname, '..', 'blossom-platform.html'),
      autoConnect: true
    }
  };
}

function saveConfig(config) {
  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving config:', err);
  }
}

function createWindow() {
  const config = loadConfig();
  const windowConfig = {
    width: config.window.width,
    height: config.window.height,
    x: config.window.x,
    y: config.window.y,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    },
    icon: fs.existsSync(path.join(__dirname, 'assets', 'icon.png')) ? path.join(__dirname, 'assets', 'icon.png') : undefined,
    alwaysOnTop: config.appearance.alwaysOnTop,
    transparent: false,
    hasShadow: true
  };

  mainWindow = new BrowserWindow(windowConfig);

  // Load the renderer
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  // Store window position on close
  mainWindow.on('close', () => {
    if (mainWindow) {
      const [x, y] = mainWindow.getPosition();
      const [width, height] = mainWindow.getSize();
      config.window = { x, y, width, height };
      saveConfig(config);
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC Handlers
ipcMain.handle('get-config', () => loadConfig());
ipcMain.handle('save-config', (event, config) => {
  saveConfig(config);
  return true;
});

ipcMain.handle('get-app-version', () => app.getVersion());

ipcMain.handle('set-window-always-on-top', (event, alwaysOnTop) => {
  if (mainWindow) {
    mainWindow.setAlwaysOnTop(alwaysOnTop);
    const config = loadConfig();
    config.appearance.alwaysOnTop = alwaysOnTop;
    saveConfig(config);
  }
  return true;
});

ipcMain.handle('minimize-window', () => {
  if (mainWindow) mainWindow.minimize();
  return true;
});

ipcMain.handle('close-window', () => {
  if (mainWindow) mainWindow.close();
  return true;
});

// Create application menu
function createMenu() {
  const template = [
    {
      label: 'Blossom',
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.on('ready', createMenu);

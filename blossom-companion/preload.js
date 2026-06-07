const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Configuration management
  getConfig: () => ipcRenderer.invoke('get-config'),
  saveConfig: (config) => ipcRenderer.invoke('save-config', config),

  // App info
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),

  // Window controls
  setAlwaysOnTop: (value) => ipcRenderer.invoke('set-window-always-on-top', value),
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  closeWindow: () => ipcRenderer.invoke('close-window'),

  // Communication with Blossom OS
  onBlossonMessage: (callback) => ipcRenderer.on('blossom-message', callback),
  sendToBlossom: (message) => ipcRenderer.send('blossom-message', message),

  // State updates
  onStateChange: (callback) => ipcRenderer.on('state-change', callback),
  updateState: (state) => ipcRenderer.invoke('update-state', state),

  // Animation events
  onAnimationEvent: (callback) => ipcRenderer.on('animation-event', callback),
  triggerAnimation: (animationType, params) =>
    ipcRenderer.invoke('trigger-animation', animationType, params)
});

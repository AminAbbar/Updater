const { app, BrowserWindow } = require('electron')
const path = require('path')
const { autoUpdater } = require("electron-updater")
const log = require('electron-log')

log.transports.file.resolvePath = () => path.join('C:/Users/Aness/Desktop/React Course/selfUpdateCourse', '/logs/main.log')
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 200,
        frame: false
    })
    mainWindow.loadFile(path.join(__dirname, 'index.html'))
}


app.on('ready', () => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})


autoUpdater.on('checking-for-update', () => {
    log.info('check for update')
})

autoUpdater.on('update-available', () => {
    log.info('update-available')
})

autoUpdater.on('download-progress', (progress) => {
    log.info(progress)
})

autoUpdater.on('update-downloaded', () => {
    log.info('update-downloaded')
})

autoUpdater.on('error', () => {
    log.info('update-erorr')
})

autoUpdater.on('update-cancelled', () => {
    log.info('update-cancelled')
})

autoUpdater.on('update-not-available', () => {
    log.info('the is no updates')
})

autoUpdater.on('login', () => {
    log.info('logged in')
})
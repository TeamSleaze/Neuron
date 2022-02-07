const updateOnlineStatus = () => {
  const statusIndicator = document.getElementById('status');
  const statusIndicatorTitle = document.getElementById('status-title');

  if (navigator.onLine) {
    statusIndicator.src = 'assets/status/online.svg';
    statusIndicatorTitle.title = 'Status: Online';
  } 
  else if (!navigator.onLine) {
    statusIndicator.src = 'assets/status/offline.svg';
    statusIndicatorTitle.title = 'Status: Offline';
  }
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()

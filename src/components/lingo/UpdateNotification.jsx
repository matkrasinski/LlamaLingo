// Example React component to notify users
import React, { useState, useEffect } from 'react';

const UpdateNotification = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'NEW_VERSION') {
          setUpdateAvailable(true);
        }
      });
    }
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  if (!updateAvailable) return null;

  return (
    <div>
      <p>A new version is available. Please refresh the page.</p>
      <button onClick={handleReload}>Reload</button>
    </div>
  );
};

export default UpdateNotification;

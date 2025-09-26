import { useEffect } from 'react';

function AppRedirect() {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isMobile = isIOS || isAndroid;

    // If desktop user, immediately show the app store links (no redirect)
    if (!isMobile) {
      return; // Just show the buttons below - no redirect needed
    }

    // For mobile users only - wait for app to open, then redirect to store
    const timer = setTimeout(() => {
      if (isIOS) {
        window.location.href = "https://apps.apple.com/ae/app/sama-health/id6447992708";
      } else if (isAndroid) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.sama.health_life";
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const isMobile = /iPad|iPhone|iPod|Android/.test(navigator.userAgent);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      {isMobile ? (
        // Mobile users see loading message
        <>
          <h2>🚀 Opening Sama Health App...</h2>
          <p>If the app doesn't open automatically, you'll be redirected to the app store.</p>
        </>
      ) : (
        // Desktop users see direct app store links
        <>
          <h2>📱 Download Sama Health App</h2>
          <p>Get our app on your mobile device:</p>
          <div style={{ margin: '30px 0' }}>
            <a 
              href="https://apps.apple.com/ae/app/sama-health/id6447992708" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ margin: '0 15px' }}
            >
              <img src="/assets/apple.svg" alt="App Store" width="150" />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.sama.health_life" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ margin: '0 15px' }}
            >
              <img src="/assets/playstore.svg" alt="Google Play" width="150" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default AppRedirect;
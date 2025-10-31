import React, { useMemo } from 'react';

const GetApp = () => {
  const appStoreURL = "https://apps.apple.com/ae/app/sama-health/id6447992708";
  const playStoreURL = "https://play.google.com/store/apps/details?id=com.sama.health_life&pcampaignid=web_share";

  const { isMobile, isIOS, isAndroid } = useMemo(() => {
    const ua = typeof navigator !== 'undefined' ? (navigator.userAgent || navigator.vendor || window.opera) : '';
    const ios = /iPad|iPhone|iPod/.test(ua);
    const android = /Android/.test(ua);
    const mobile = ios || android || /Mobile|Mobi/i.test(ua);
    return { isMobile: mobile, isIOS: ios, isAndroid: android };
  }, []);

  const iosQr = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(appStoreURL)}`;
  const androidQr = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(playStoreURL)}`;

  const handleSmartOpen = (platform) => {
    if (platform === 'ios') {
      window.location.href = appStoreURL;
    } else {
      window.location.href = playStoreURL;
    }
  };

  return (
    <main className="getAppPage" role="main">
      <div className="card">
        <img src="/assets/whitelogo.png" alt="Sama Health" className="brand" />
        <h1 className="title">Download the Sama Health app</h1>
        <p className="subtitle">Feel Better, Live Better - with SamaHealth</p>

        {isMobile ? (
          <div className="actions">
            {isIOS && (
              <a
                href={appStoreURL}
                className="storeBtn"
                aria-label="Download on the App Store"
              >
                <img src="/assets/apple.svg" alt="App Store" />
              </a>
            )}
            {isAndroid && (
              <a
                href={playStoreURL}
                className="storeBtn"
                aria-label="Get it on Google Play"
              >
                <img src="/assets/playstore.svg" alt="Google Play" />
              </a>
            )}
            {!isIOS && !isAndroid && (
              <>
                <a href={appStoreURL} className="storeBtn" aria-label="Download on the App Store">
                  <img src="/assets/apple.svg" alt="App Store" />
                </a>
                <a href={playStoreURL} className="storeBtn" aria-label="Get it on Google Play">
                  <img src="/assets/playstore.svg" alt="Google Play" />
                </a>
              </>
            )}
          </div>
        ) : (
          <div className="qrGrid">
            <div className="qrItem">
              <img src={iosQr} alt="QR for App Store" className="qr" />
              {/* <span className="qrLabel">iOS • App Store</span> */}
              <a href={appStoreURL} className="storeBtnInline" aria-label="Download on the App Store">
                <img src="/assets/apple.svg" alt="App Store" />
              </a>
            </div>
            <div className="qrItem">
              <img src={androidQr} alt="QR for Google Play" className="qr" />
              {/* <span className="qrLabel">Android • Google Play</span> */}
              <a href={playStoreURL} className="storeBtnInline" aria-label="Get it on Google Play">
                <img src="/assets/playstore.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        )}

        <p className="helper">Having trouble? Email info@samahealth.life</p>
      </div>

      <style jsx>{`
        .getAppPage {
          min-height: 100vh;
          background: #fdf8ef;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          box-sizing: border-box;
        }
        .card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          width: 100%;
          max-width: 720px;
          box-shadow: 0 12px 36px rgba(30, 60, 90, 0.12);
          text-align: center;
        }
        .brand {
          height: 40px;
          width: auto;
          margin-bottom: 0.75rem;
        }
        .title {
          margin: 0 0 0.5rem 0;
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          font-weight: 600;
          color: #181c23;
        }
        .subtitle {
          margin: 0 0 1.5rem 0;
          color: #6b7280;
          font-size: 0.95rem;
        }
        .actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .storeBtn { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; }
        .storeBtn img {
          height: 56px;
          width: auto;
          border-radius: 10px;
          transition: transform 0.2s ease;
        }
        .storeBtn:hover img { transform: scale(1.04); }
        .qrGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          justify-items: center;
        }
        .qrItem { display: flex; flex-direction: column; align-items: center; }
        .qr {
          height: 220px;
          width: 220px;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 6px 18px rgba(30,60,90,0.08);
        }
        .qrLabel { margin-top: 0.75rem; color: #374151; font-size: 0.95rem; }
        .storeBtnInline { display: inline-flex; margin-top: 0.5rem; }
        .storeBtnInline img { height: 48px; width: auto; border-radius: 8px; transition: transform 0.2s ease; }
        .storeBtnInline:hover img { transform: scale(1.04); }
        .helper { margin-top: 1.5rem; color: #9ca3af; font-size: 0.9rem; }

        @media (max-width: 640px) {
          .card { padding: 1.5rem; }
          .storeBtn img { height: 52px; }
          .qrGrid { grid-template-columns: 1fr; gap: 1.25rem; }
          .qr { height: 200px; width: 200px; }
        }
      `}</style>
    </main>
  );
};

export default GetApp;



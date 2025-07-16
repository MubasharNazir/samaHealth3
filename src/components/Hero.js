// import React from "react";
// import styles from "../styles/Hero.module.css";

// const Hero = () => (
//   <section className={styles.hero} id="hero">
//     <div className={styles.heroInner}>
//       <div className={styles.heroLeft}>
//         {/* <div className={styles.heroDesc}>
//           Join the South Asian mental health community in UAE
//         </div> */}
//         <h1>In our communities, silence is survival. At Sama Health, healing begins with being heard.</h1>
//         <div className={styles.heroDescHighlight}>
//           Access qualified therapists that you can deeply connect with. We offer a curated offering for the South Asian community.
//         </div>
//         <div className={styles.downloadSection}>
//           <div className={styles.downloadHeading}>Where your story is understood — Download Sama Health.</div>
//           <div className={styles.storeIcons}>
//             <a href="https://apps.apple.com/ae/app/sama-health/id6447992708" target="_blank" rel="noopener noreferrer">
//               <img src="/assets/apple.svg" alt="App Store" className={styles.storeBtnImg} />
//             </a>
//             <a href="https://play.google.com/store/apps/details?id=com.sama.health_life&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
//               <img src="/assets/playstore.svg" alt="Google Play" className={styles.storeBtnImg} />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className={styles.heroRightSingle}>
//         <img src="/assets/hero.png" alt="Android App" className={styles.heroImgSingle} />
//       </div>
//     </div>
//   </section>
// );

// export default Hero; 

import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="heroInner">
        <div className="heroLeft">
          <h1>In our communities, silence is survival. At Sama Health, healing begins with being heard.</h1>
          <div className="heroDescHighlight">
            Access qualified therapists that you can deeply connect with. We offer a curated offering for the South Asian community.
          </div>
          <div className="downloadSection">
            <div className="downloadHeading">Where your story is understood — Download Sama Health.</div>
            <div className="storeIcons">
              <a href="https://apps.apple.com/ae/app/sama-health/id6447992708" target="_blank" rel="noopener noreferrer">
                <img src="/assets/apple.svg" alt="App Store" className="storeBtnImg" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.sama.health_life&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <img src="/assets/playstore.svg" alt="Google Play" className="storeBtnImg" />
              </a>
            </div>
          </div>
        </div>
        <div className="heroRightSingle">
          <img src="/assets/hero.png" alt="Android App" className="heroImgSingle" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: #fdf8ef;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          box-sizing: border-box;
        }

        .heroInner {
          display: flex;
          max-width: 1200px;
          width: 100%;
          gap: 3rem;
          align-items: center;
          justify-content: space-between;
        }

        .heroLeft {
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 600px;
        }

        .heroLeft h1 {
          font-size: clamp(1.8rem, 4vw, 2.9rem);
          font-weight: 500;
          color: #181c23;
          margin-bottom: 1.5rem;
          line-height: 1.15;
        }

        .heroDescHighlight {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: #e6a481;
          margin-bottom: 2rem;
          font-weight: 500;
          line-height: 1.4;
        }

        .downloadSection {
          margin-top: 1.5rem;
        }

        .downloadHeading {
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: #181c23;
          margin-bottom: 1rem;
        }

        .storeIcons {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .storeBtnImg {
          height: 48px;
          width: auto;
          display: block;
          border-radius: 8px;
          transition: transform 0.2s ease;
        }

        .storeIcons a:hover .storeBtnImg {
          transform: scale(1.05);
        }

        .heroRightSingle {
          flex: 1 1 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 500px;
        }

        .heroImgSingle {
          width: 100%;
          height: auto;
          max-width: 300px;
          min-width: 250px;
          aspect-ratio: 3/4;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px rgba(30, 60, 90, 0.15);
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .hero {
            padding: 2rem 1.5rem;
          }
          
          .heroInner {
            gap: 2rem;
          }
          
          .heroImgSingle {
            max-width: 280px;
            min-width: 220px;
          }
        }

        /* Mobile landscape and smaller tablets */
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding: 2rem 1rem;
          }
          
          .heroInner {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
          
          .heroLeft {
            max-width: 100%;
          }
          
          .heroRightSingle {
            order: -1;
            max-width: 100%;
          }
          
          .heroImgSingle {
            max-width: 250px;
            min-width: 200px;
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .hero {
            padding: 1.5rem 1rem;
            min-height: auto;
          }
          
          .heroInner {
            gap: 1.5rem;
          }
          
          .downloadSection {
            margin-top: 1rem;
          }
          
          .storeIcons {
            justify-content: center;
            gap: 0.8rem;
          }
          
          .storeBtnImg {
            height: 40px;
          }
          
          .heroImgSingle {
            max-width: 220px;
            min-width: 180px;
            border-radius: 1rem;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .hero {
            padding: 1rem 0.5rem;
          }
          
          .heroInner {
            gap: 1rem;
          }
          
          .heroImgSingle {
            max-width: 200px;
            min-width: 160px;
          }
          
          .storeIcons {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
          
          .storeBtnImg {
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
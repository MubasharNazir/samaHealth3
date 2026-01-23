import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Legal.module.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

function getActiveTab(location) {
  if (location.pathname === '/') {
    if (location.hash === '#testimonials') return 'testimonials';
    if (location.hash === '#faqs') return 'faqs';
    return 'home';
  }
  if (location.pathname === '/book-call') return 'contact';
  return '';
}

export default function PrivacyPolicy() {
  const location = useLocation();
  const activeTab = getActiveTab(location);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleAnchorClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.split('#')[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      navigate(href);
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      navigate(href);
    }
  };
  return (
    <div className={styles.legalPageBg}>
    <NavigationBar>
        <li>
          <Link
            to="/"
            className={`${styles.tabLink} ${activeTab === 'home' ? styles.activeTab : ''}`}
            onClick={e => {
              if (location.pathname === '/' && !location.hash) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Home
          </Link>
        </li>
        <li><a href="/#testimonials" onClick={handleAnchorClick} className={`${styles.tabLink} ${activeTab === 'testimonials' ? styles.activeTab : ''}`}>Testimonials</a></li>
        <li><a href="/#faqs" onClick={handleAnchorClick} className={`${styles.tabLink} ${activeTab === 'faqs' ? styles.activeTab : ''}`}>Faqs</a></li>
        <li>
          <Link
            to="/podcasts"
            className={`${styles.tabLink} ${activeTab === 'podcasts' ? styles.activeTab : ''}`}
          >
            Podcasts
          </Link>
        </li>
      </NavigationBar>
      <div className={styles.legalContainerCustom}>
        <h1 className={styles.legalHeadingCustom}>Privacy Policy</h1>
        <div className={styles.legalContentCustom}>
          <p><strong>Last updated March 16, 2023</strong></p>
          <p>This privacy notice for Sama Health FZ LLC. ( Company, we, us, or our ), describes how and why we might collect, store, use, and/or share ( process ) your information when you use our services ( Services ), such as when you:</p>
          <ul>
            <li>Visit our website at http://www.samahealth.life, or any website of ours that links to this privacy notice</li>
            <li>Download and use our mobile application ( Sama health ), or any other application of ours that links to this privacy notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>
          <p>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at misha.akbar@gmail.com.</p>
          <h2>SUMMARY OF KEY POINTS</h2>
          <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</p>
          <ul>
            <li>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Sama Health and the Services, the choices you make, and the products and features you use. Click here to learn more.</li>
            <li>Do we process any sensitive personal information? We do not process sensitive personal information.</li>
            <li>Do we receive any information from third parties? We do not receive any information from third parties.</li>
            <li>How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.</li>
            <li>In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Click here to learn more.</li>
            <li>How do we keep your information safe? We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.</li>
            <li>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.</li>
            <li>How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</li>
            <li>Want to learn more about what Sama Health does with any information we collect? Click here to review the notice in full.</li>
          </ul>
          <h2>TABLE OF CONTENTS</h2>
          <ul>
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
          </ul>
          <h2>WHAT INFORMATION DO WE COLLECT?</h2>
          <h3>Personal information you disclose to us</h3>
          <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us</p>
          <h4>Personal Information Provided by You.</h4>
          <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul>
            <li>Names</li>
            <li>Phone Numbers</li>
            <li>Email Addresses</li>
            <li>Mailing Addresses</li>
            <li>Contact Preferences</li>
            <li>Passwords</li>
            <li>Usernames</li>
            <li>Contact or Authentication Data</li>
            <li>Debit/Credit Card Numbers</li>
            <li>Billing Addresses</li>
          </ul>
          <h4>Sensitive Information.</h4>
          <p>We do not process sensitive information.</p>
          <h4>Payment Data.</h4>
          <p>We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by __________. You may find their privacy notice link(s) here: __________.</p>
          <h4>Social Media Login Data.</h4>
          <p>We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?' below.</p>
          <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
          <h3>Information automatically collected</h3>
          <p><strong>In Short:</strong> Some information — such as your Internet Protocol ( IP ) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
          <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
          <h4>The information we collect includes:</h4>
          <ul>
            <li>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</li>
            <li>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
            <li>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
          </ul>
          {/* Continue with the rest of the sections as in your provided content */}
        </div>
      </div>
      <Footer />
    </div>
  );
} 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ContactDropdown from './ContactDropdown';
import stylesApp from '../styles/App.module.css';

const NavigationBar = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className={stylesApp.navbar}>
            <div className={stylesApp.navInner}>
                <div className={stylesApp.logo}>
                    <img src="/assets/logo.png" alt="Sama Health Logo" className={stylesApp.logoImg} />
                </div>
                <ul className={stylesApp.navTabs}>
                    {children}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <ContactDropdown />
                    <a
                      href="https://portal.samahealth.life/login"
                      className={stylesApp.therapistPortalBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Therapist Portal
                    </a>
                </div>
                {!sidebarOpen && (
                    <button className={stylesApp.hamburger} onClick={() => setSidebarOpen(true)} aria-label="Open menu">
                        <span />
                        <span />
                        <span />
                    </button>
                )}
            </div>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </nav>
    );
};

export default NavigationBar; 
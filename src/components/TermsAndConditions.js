import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Legal.module.css';
import Footer from './Footer';

export default function TermsAndConditions() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/book-call';
  return (
    <div className={styles.legalPageBg}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Sama Health Logo" className={styles.logoImg} />
        </div>
        <ul className={styles.navTabs}>
          <li><Link to="/" className={`${styles.tabLink} ${isHome ? styles.activeTab : ''}`}>Home</Link></li>
          <li><a href="/#testimonials" className={`${styles.tabLink} ${isHome ? styles.activeTab : ''}`}>Testimonials</a></li>
          <li><a href="/#faqs" className={`${styles.tabLink} ${isHome ? styles.activeTab : ''}`}>Faqs</a></li>
        </ul>
      </nav>
      <div className={styles.legalContainerCustom}>
        <h1 className={styles.legalHeadingCustom}>Terms and Conditions</h1>
        <div className={styles.legalContentCustom}>
          <p style={{ color: '#111' }}>These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the samahealth.life website (“Website”), “Sama Health” mobile application (“Mobile Application”) and any of their related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and Sama Health (“Sama Health”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Services. By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and Sama Health, even though it is electronic and is not physically signed by you, and it governs your use of the Services.</p>

          <h2>Accounts and membership</h2>
          <p>You must be at least 18 years of age to use the Services. By using the Services and by agreeing to this Agreement you warrant and represent that you are at least 18 years of age. If you create an account on the Services, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.</p>

          <h2>Links to other Resources</h2>
          <p>Although the Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Services. Your linking to any other off-site resources is at your own risk.</p>

          <h2>Prohibited Uses</h2>
          <p>In addition to other terms as set forth in the Agreement, you are prohibited from using the Services or Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Services, third party products and services, or the Internet; (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; (i) for any obscene or immoral purpose; or (j) to interfere with or circumvent the security features of the Services, third party products and services, or the Internet. We reserve the right to terminate your use of the Services for violating any of the prohibited uses.</p>

          <h2>Intellectual property Rights</h2>
          <p>“Intellectual Property Rights” means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by Sama Health or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with Sama Health. All trademarks, service marks, graphics and logos used in connection with the Services, are trademarks or registered trademarks of Sama Health or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Services may be the trademarks of other third parties. Your use of the Services grants you no right or license to reproduce or otherwise use any of Sama Health or third party trademarks.</p>

          <h2>Limitation of liability</h2>
          <p>To the fullest extent permitted by applicable law, in no event will Sama Health, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of Sama Health and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount no greater than one dollar or any amounts actually paid in cash by you to Sama Health for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.</p>

          <h2>Indemnification</h2>
          <p>You agree to indemnify and hold Sama Health and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Services or any willful misconduct on your part.</p>

          <h2>Severability</h2>
          <p>All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</p>

          <h2>Dispute Resolution</h2>
          <p>The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Delaware, United States without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of United States. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in Delaware, United States, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.</p>

          <h2>Changes and Amendments</h2>
          <p>We reserve the right to modify this Agreement or its terms related to the Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.</p>
          <p>An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.</p>

          <h2>Acceptance of these Terms</h2>
          <p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Services. This terms and conditions policy was created with the help of WebsitePolicies.com</p>

          <h2>Contacting us</h2>
          <p>If you have any questions, concerns, or complaints regarding this Agreement, we encourage you to contact us using the details below:</p>
          <p><a href="mailto:Info@samahealth.life">Info@samahealth.life</a></p>
          <p><em>This document was last updated on March 16, 2023</em></p>
        </div>
      </div>
      <Footer />
    </div>
  );
} 
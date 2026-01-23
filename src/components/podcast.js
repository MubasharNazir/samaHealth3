import React, { useState } from "react";
import styles from "../styles/Podcast.module.css";
import stylesApp from "../styles/App.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import ContactDropdown from "./ContactDropdown";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
// Sample podcast data - replace with your actual podcast data
// To add a new podcast, simply add an object with this structure:
// {
//   id: unique_number,
//   title: "Your Podcast Title",
//   description: "Brief description of the podcast episode",
//   youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID", // or "https://youtu.be/YOUR_VIDEO_ID"
//   duration: "XX:XX", // duration in MM:SS format
//   category: "Category Name" // make sure to add the category to the categories array below
// }
const podcastsData = [
  {
    id: 1,
    title: "Busting Myths about Online Therapy with Laila Bangash",
    description: "Join Laila Bangash as she busts common myths about online therapy and discusses its benefits.",
    youtubeUrl: "https://youtu.be/TaV6Tv1jBjM",
    duration: "33:35",
    category: "Therapy"
  },
  {
    id: 2,
    title: "Digital Detox with Areesha Nawaz Chaudhry",
    description: "Learn how to take a break from the digital world with Areesha Nawaz Chaudhry.",
    youtubeUrl: "https://youtu.be/0Ocl3oaGGRI",
    duration: "30:24",
    category: "Self-Care"
  },
  {
    id: 3,
    title: "Mental Health and Fasting with Nusrat Khan",
    description: "Nusrat Khan discusses the intersection of mental health and fasting.",
    youtubeUrl: "https://youtu.be/-sWnBMSJhcU",
    duration: "36:25",
    category: "Community Health"
  },
  {
    id: 4,
    title: "Postpartum Depression in South Asian Cultures",
    description: "Anjali opens up about finding support through postpartum depression in South Asian cultures.",
    youtubeUrl: "https://youtu.be/tSPQ9FPMpjA",
    duration: "1:00:15",
    category: "Family"
  },
  {
    id: 5,
    title: "Effective Parenting Strategies with Keyuri Vaidya",
    description: "Keyuri Vaidya shares effective parenting strategies for raising resilient children.",
    youtubeUrl: "https://youtu.be/R1kYyUY0eXA",
    duration: "1:02:22",
    category: "Family"
  },
  {
    id: 6,
    title: "Toxic Positivity in South Asian Cultures",
    description: "Sharanya V explores the concept of toxic positivity within South Asian cultures.",
    youtubeUrl: "https://youtu.be/w5cepJF_x5w",
    duration: "46:14",
    category: "Community Health"
  },
  {
    id: 7,
    title: "Navigating ADHD as a South Asian Woman",
    description: "Tanuka Gupta shares her experience navigating ADHD as a South Asian woman.",
    youtubeUrl: "https://youtu.be/8BRwWHKFaek",
    duration: "1:02:16",
    category: "Therapy"
  },
  {
    id: 8,
    title: "Finding purpose after Postpartum depression",
    description: "A discussion on finding purpose and rediscovering yourself after postpartum depression.",
    youtubeUrl: "https://youtu.be/F2MUhs-kra0",
    duration: "44:20",
    category: "Self-Care"
  },
  {
    id: 9,
    title: "Teen Mental Health in the Era of AI & Digitization",
    description: "AI and social media are changing how teens grow up. Join Vinita for simple tips to help parents manage screen time, emotions, and support their teens.",
    youtubeUrl: "https://www.youtube.com/watch?v=Z3kIPquMhOg&ab_channel=SamaHealth",
    duration: "36:34",
    category: "Therapy"
  }
];
function getActiveTab(location) {
    if (location.pathname === '/') {
      if (location.hash === '#testimonials') return 'testimonials';
      if (location.hash === '#faqs') return 'faqs';
      return 'home';
    }
    if (location.pathname === '/podcasts') return 'podcasts';
    return '';
  }
// Add or remove categories as needed
const categories = ["All", "Therapy", "Self-Care", "Community Health", "Family"];

const Podcast = () => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = getActiveTab(location);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    navigate(href);
  };

  const filteredPodcasts = activeCategory === "All" 
    ? podcastsData 
    : podcastsData.filter(podcast => podcast.category === activeCategory);

  const getYouTubeEmbedUrl = (url) => {
    // Convert various YouTube URL formats to embed format
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    
    return url; // Return as-is if already in embed format
  };

  const closePodcast = () => {
    setSelectedPodcast(null);
  };

  return (
    <div className={styles.podcastPage}>
      <NavigationBar>
        <li>
          <Link
            to="/"
            className={`${stylesApp.tabLink} ${activeTab === 'home' ? stylesApp.activeTab : ''}`}
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
        <li><a href="/#testimonials" onClick={handleAnchorClick} className={`${stylesApp.tabLink} ${activeTab === 'testimonials' ? stylesApp.activeTab : ''}`}>Testimonials</a></li>
        <li><a href="/#faqs" onClick={handleAnchorClick} className={`${stylesApp.tabLink} ${activeTab === 'faqs' ? stylesApp.activeTab : ''}`}>Faqs</a></li>
        <li>
          <Link
            to="/podcasts"
            className={`${stylesApp.tabLink} ${activeTab === 'podcasts' ? stylesApp.activeTab : ''}`}
          >
            Podcasts
          </Link>
        </li>
      </NavigationBar>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Sama Health Podcasts</h1>
          <p className={styles.subtitle}>
            Listen to expert discussions on mental health, wellness, and community support
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${
                activeCategory === category ? styles.activeCategoryBtn : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Podcasts Grid */}
        <div className={styles.podcastGrid}>
          {filteredPodcasts.map((podcast) => (
            <div
              key={podcast.id}
              className={styles.podcastCard}
              onClick={() => setSelectedPodcast(podcast)}
            >
              <div className={styles.thumbnailContainer}>
                <iframe
                  src={getYouTubeEmbedUrl(podcast.youtubeUrl)}
                  title={podcast.title}
                  className={styles.thumbnail}
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                />
                <div className={styles.playOverlay}>
                  <div className={styles.playButton}>▶</div>
                </div>
              </div>
              <div className={styles.podcastInfo}>
                <span className={styles.category}>{podcast.category}</span>
                <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                <p className={styles.podcastDescription}>{podcast.description}</p>
                <div className={styles.podcastMeta}>
                  <span className={styles.duration}>{podcast.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Selected Podcast */}
        {selectedPodcast && (
          <div className={styles.modal} onClick={closePodcast}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={closePodcast}>
                ×
              </button>
              <div className={styles.videoContainer}>
                <iframe
                  src={getYouTubeEmbedUrl(selectedPodcast.youtubeUrl)}
                  title={selectedPodcast.title}
                  className={styles.videoPlayer}
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className={styles.modalInfo}>
                <span className={styles.modalCategory}>{selectedPodcast.category}</span>
                <h2 className={styles.modalTitle}>{selectedPodcast.title}</h2>
                <p className={styles.modalDescription}>{selectedPodcast.description}</p>
                <div className={styles.modalMeta}>
                  <span className={styles.modalDuration}>Duration: {selectedPodcast.duration}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Podcast;

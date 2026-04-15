// script.js - ItsLylla Media Kit Functionality

// ===== TRANSLATIONS =====
const translations = {
    en: {
        title: { prefix: "Hi,", middle: "I'm", name: "Lylla" },
        bio: "Hi, I'm Lylla, better known as ItsLylla on Twitch. At 24 years old, I've been a full-time streamer since 2020, after dropping everything to pursue my passion. I mainly stream League of Legends with positive, fun, and authentic energy, while sharing life moments and good vibes with my community.",
        socialTitle: "SOCIAL MEDIA",
        partnershipsTitle: "PARTNERSHIPS",
        streamTitle: "STREAM SCHEDULE",
        streamFrequencyLabel: "FREQUENCY",
        streamDays: "Every Day",
        streamTimeLabel: "STREAM TIME",
        streamHours: "4:00 AM - 10:00 AM",
        streamDurationLabel: "DURATION",
        streamDuration: "6 hours",
        streamWeeklyLabel: "WEEKLY SCHEDULE",
        streamTimeSlot: "4-10 AM",
        daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        quickContactBtn: "Get In Touch",
        contactLabel: "REACH OUT AT",
        emailButton: "itslyllapro@gmail.com",
        pdfBtnText: "Download PDF",
        statsTitle: "DETAILED STATS",
        statsDescription: "Check out my real-time detailed statistics via TwitchTracker for a full view of my growth and Twitch presence.",
        statsBtnText: "View TwitchTracker Stats"
    },
    fr: {
        title: { prefix: "Salut,", middle: "je suis", name: "Lylla" },
        bio: "Salut, je suis Lylla, plus connue sous le pseudo ItsLylla sur Twitch. À 24 ans, je suis streameuse à temps plein depuis 2020, après avoir tout quitté pour poursuivre ma passion. Je streame principalement du League of Legends avec une énergie positive, fun et authentique, tout en partageant des moments de vie et de bonnes vibes avec ma communauté.",
        socialTitle: "RÉSEAUX SOCIAUX",
        partnershipsTitle: "PARTENARIATS",
        streamTitle: "HORAIRE DE STREAM",
        streamFrequencyLabel: "FRÉQUENCE",
        streamDays: "Chaque Jour",
        streamTimeLabel: "HORAIRE",
        streamHours: "4h - 10h du matin",
        streamDurationLabel: "DURÉE",
        streamDuration: "6 heures",
        streamWeeklyLabel: "HORAIRE HEBDOMADAIRE",
        streamTimeSlot: "4h-10h",
        daysOfWeek: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
        quickContactBtn: "Me Contacter",
        contactLabel: "ME CONTACTER À",
        emailButton: "itslyllapro@gmail.com",
        pdfBtnText: "Télécharger en PDF",
        statsTitle: "STATISTIQUES DÉTAILLÉES",
        statsDescription: "Consultez mes statistiques détaillées en temps réel via TwitchTracker pour une vision complète de ma croissance et de ma présence sur Twitch.",
        statsBtnText: "Voir les Stats sur TwitchTracker"
    }
};

// ===== LANGUAGE MANAGEMENT =====
class LanguageManager {
    constructor() {
        // Retrieve language from localStorage or default to 'en'
        this.currentLanguage = localStorage.getItem('site-language') || 'en';
        this.init();
    }

    init() {
        // Apply saved language on page load
        this.applyLanguage(this.currentLanguage);
        this.setupToggle();
    }

    setupToggle() {
        const toggleButton = document.getElementById('langToggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleLanguage());
            this.updateToggleText();
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
        localStorage.setItem('site-language', this.currentLanguage);
        this.applyLanguage(this.currentLanguage);
    }

    updateToggleText() {
        const toggleButton = document.getElementById('langToggle');
        if (toggleButton) {
            if (this.currentLanguage === 'en') {
                toggleButton.innerHTML = '<span>EN</span><span class="text-xs">|</span><span class="opacity-50">FR</span>';
            } else {
                toggleButton.innerHTML = '<span class="opacity-50">EN</span><span class="text-xs">|</span><span>FR</span>';
            }
        }
    }

    applyLanguage(lang) {
        const translation = translations[lang];

        // Update title
        const titleElement = document.getElementById('heroTitle');
        if (titleElement) {
            titleElement.innerHTML = `<span class="text-pink-500">${translation.title.prefix}</span> <span class="text-purple-400">${translation.title.middle}</span> <span class="text-pink-500">${translation.title.name}</span>`;
        }

        // Update bio
        const bioElement = document.getElementById('bio');
        if (bioElement) {
            bioElement.textContent = translation.bio;
            // Add fade animation
            bioElement.style.opacity = '0';
            setTimeout(() => {
                bioElement.textContent = translation.bio;
                bioElement.style.opacity = '1';
            }, 150);
        }

        // Update section titles
        const socialTitle = document.getElementById('socialTitle');
        if (socialTitle) {
            socialTitle.querySelector('span').textContent = translation.socialTitle;
        }

        const partnershipsTitle = document.getElementById('partnershipsTitle');
        if (partnershipsTitle) {
            partnershipsTitle.querySelector('span').textContent = translation.partnershipsTitle;
        }

        // Update contact label
        const contactLabel = document.getElementById('contactLabel');
        if (contactLabel) {
            contactLabel.textContent = translation.contactLabel;
        }

        // Update schedule section
        const streamTitle = document.getElementById('streamTitle');
        if (streamTitle) {
            streamTitle.querySelector('span').textContent = translation.streamTitle;
        }

        const streamSubtitle = document.getElementById('streamSubtitle');
        if (streamSubtitle) {
            streamSubtitle.textContent = translation.streamSubtitle;
        }

        const streamDays = document.getElementById('streamDays');
        if (streamDays) {
            streamDays.textContent = translation.streamDays;
        }

        const streamHours = document.getElementById('streamHours');
        if (streamHours) {
            streamHours.textContent = translation.streamHours;
        }

        const streamDuration = document.getElementById('streamDuration');
        if (streamDuration) {
            streamDuration.textContent = translation.streamDuration;
        }

        // Update schedule labels and other texts
        const streamFrequencyLabel = document.getElementById('streamFrequencyLabel');
        if (streamFrequencyLabel) {
            streamFrequencyLabel.textContent = translation.streamFrequencyLabel;
        }

        const streamDaysNote = document.getElementById('streamDaysNote');
        if (streamDaysNote) {
            streamDaysNote.textContent = translation.streamDaysNote;
        }

        const streamTimeLabel = document.getElementById('streamTimeLabel');
        if (streamTimeLabel) {
            streamTimeLabel.textContent = translation.streamTimeLabel;
        }

        const streamDurationLabel = document.getElementById('streamDurationLabel');
        if (streamDurationLabel) {
            streamDurationLabel.textContent = translation.streamDurationLabel;
        }

        const streamWeeklyLabel = document.getElementById('streamWeeklyLabel');
        if (streamWeeklyLabel) {
            streamWeeklyLabel.textContent = translation.streamWeeklyLabel;
        }

        // Update quick contact button
        const quickContactBtn = document.getElementById('quickContactBtn');
        if (quickContactBtn) {
            quickContactBtn.textContent = translation.quickContactBtn;
        }

        // Update PDF button text
        const pdfBtnText = document.getElementById('pdfBtnText');
        if (pdfBtnText) {
            pdfBtnText.textContent = translation.pdfBtnText;
        }

        // Update stats section
        const statsTitle = document.getElementById('statsTitle');
        if (statsTitle) {
            statsTitle.querySelector('span').textContent = translation.statsTitle;
        }

        const statsDescription = document.getElementById('statsDescription');
        if (statsDescription) {
            statsDescription.textContent = translation.statsDescription;
        }

        const statsBtnText = document.getElementById('statsBtnText');
        if (statsBtnText) {
            statsBtnText.textContent = translation.statsBtnText;
        }

        // Update day names in calendar
        const dayElements = document.querySelectorAll('[data-day]');
        dayElements.forEach((element, index) => {
            if (translation.daysOfWeek[index]) {
                element.textContent = translation.daysOfWeek[index];
            }
        });

        // Update time slots in calendar
        const timeSlotElements = document.querySelectorAll('[data-time-slot]');
        timeSlotElements.forEach((element) => {
            element.textContent = translation.streamTimeSlot;
        });

        // Update toggle text
        this.updateToggleText();

        // Set HTML lang attribute
        document.documentElement.lang = lang;
    }
}

// ===== EMAIL BUTTON FUNCTIONALITY =====
class EmailButton {
    constructor() {
        this.button = document.getElementById('emailButton');
        this.email = 'itslyllapro@gmail.com';
        this.init();
    }

    init() {
        if (this.button) {
            this.button.addEventListener('click', () => this.copyToClipboard());
        }
    }

    async copyToClipboard() {
        try {
            // Copy to clipboard
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(this.email);
            } else {
                // Fallback for older browsers
                this.fallbackCopy(this.email);
            }

            // Visual feedback
            this.showCopiedFeedback();
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }

    fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    showCopiedFeedback() {
        const originalText = this.button.textContent;

        // Add 'copied' class for green glow
        this.button.classList.add('copied');

        // Change button text
        const textSpan = this.button.querySelector('#emailText');
        if (textSpan) {
            textSpan.textContent = 'Copied! ✓';
        } else {
            this.button.textContent = 'Copied! ✓';
        }

        // Reset after 3 seconds
        setTimeout(() => {
            this.button.classList.remove('copied');
            const textSpan = this.button.querySelector('#emailText');
            if (textSpan) {
                textSpan.textContent = this.email;
            } else {
                this.button.innerHTML = `<span id="emailText">${this.email}</span>`;
            }
        }, 3000);
    }
}

// ===== ADD SMOOTH FADE TRANSITIONS TO BIO =====
function setupBioTransitions() {
    const bio = document.getElementById('bio');
    if (bio) {
        bio.style.transition = 'opacity 0.3s ease-in-out';
    }
}

// ===== INITIALIZE ON LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language manager
    new LanguageManager();

    // Initialize email button
    new EmailButton();

    // Setup transitions
    setupBioTransitions();

    // Add page entrance animation
    document.body.style.animation = 'fadeIn 0.6s ease-in-out';
});

// ===== FADE IN ANIMATION =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    #bio {
        transition: opacity 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

// ===== ANALYTICS & INTERACTIONS =====
// Track social link clicks (optional, can be extended)
document.querySelectorAll('.social-icon-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add any analytics tracking here if needed
        console.log('Social link clicked:', e.currentTarget.title);
    });
});

// Track partnership clicks (optional)
document.querySelectorAll('.partnership-logo').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log('Partnership clicked');
    });
});

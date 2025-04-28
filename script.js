// Select all the language buttons and their respective options
const languageBtns = document.querySelectorAll('.language-btn');

// Function to switch language
const switchLanguage = (selectedLang) => {
    const allLangElements = document.querySelectorAll('[data-lang]');

    allLangElements.forEach(element => {
        if (element.getAttribute('data-lang') === selectedLang) {
            element.hidden = false;
        } else {
            element.hidden = true;
        }
    });
};

// Setup for each language button
languageBtns.forEach(languageBtn => {
    const languageToggle = languageBtn.querySelector('.language-toggle');
    const languageOptions = languageBtn.querySelector('.language-options');
    const languageOptionItems = languageOptions.querySelectorAll('.language-option');

    // Default to English
    languageToggle.innerHTML = 'English <img src="images/down-icon.png" alt="language toggle">';
    switchLanguage('en');

    // Toggle dropdown
    languageToggle.addEventListener('click', () => {
        languageBtn.classList.toggle('active');
    });

    // Handle language selection
    languageOptionItems.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');

            // Update button text
            if (selectedLang === 'hi') {
                languageToggle.innerHTML = 'हिंदी <img src="images/down-icon.png" alt="language toggle">';
            } else {
                languageToggle.innerHTML = 'English <img src="images/down-icon.png" alt="language toggle">';
            }

            // Switch language
            switchLanguage(selectedLang);

            // Close dropdown
            languageBtn.classList.remove('active');
        });
    });
});

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
    languageBtns.forEach(languageBtn => {
        if (!languageBtn.contains(e.target)) {
            languageBtn.classList.remove('active');
        }
    });
});

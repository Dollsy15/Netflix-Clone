// Select all the language buttons and their respective options
const languageBtns = document.querySelectorAll('.language-btn');

// Set default language text for both header and footer
languageBtns.forEach(languageBtn => {
    const languageToggle = languageBtn.querySelector('.language-toggle');
    const languageOptions = languageBtn.querySelector('.language-options');
    const languageOptionItems = languageOptions.querySelectorAll('.language-option');

    // Default to English
    languageToggle.innerHTML = 'English <img src="images/down-icon.png" alt="language toggle">';

    // Toggle the dropdown on button click
    languageToggle.addEventListener('click', () => {
        languageBtn.classList.toggle('active');
    });

    // Change language when a language option is clicked
    languageOptionItems.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');

            // Update the button text based on selected language
            if (selectedLang === 'hi') {
                languageToggle.innerHTML = 'हिंदी <img src="images/down-icon.png" alt="language toggle">';
            } else {
                languageToggle.innerHTML = 'English <img src="images/down-icon.png" alt="language toggle">';
            }

            // Close the dropdown after selection
            languageBtn.classList.remove('active');
        });
    });
});

// Close the dropdown if clicking outside the dropdown
document.addEventListener('click', (e) => {
    languageBtns.forEach(languageBtn => {
        if (!languageBtn.contains(e.target)) {
            languageBtn.classList.remove('active');
        }
    });
});

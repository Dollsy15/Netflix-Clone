// Select all language buttons and options
const languageBtns = document.querySelectorAll('.language-btn');
const languageToggles = document.querySelectorAll('.language-toggle');
const languageOptionItems = document.querySelectorAll('.language-option');

// Set the default language text for the language toggle button
languageToggles.forEach(languageToggle => {
    languageToggle.innerHTML = 'English <img src="images/down-icon.png" alt="language toggle">';
});

languageBtns.forEach(languageBtn => {
    const languageToggle = languageBtn.querySelector('.language-toggle');
    const languageOptions = languageBtn.querySelector('.language-options');

    // Toggle the dropdown on button click
    languageToggle.addEventListener('click', () => {
        languageBtn.classList.toggle('active');
    });

    // Handle option selection
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

            console.log('Selected Language:', selectedLang);
        });
    });
});

// Close dropdown if click is outside
document.addEventListener('click', (e) => {
    languageBtns.forEach(languageBtn => {
        if (!languageBtn.contains(e.target)) {
            languageBtn.classList.remove('active');
        }
    });
});

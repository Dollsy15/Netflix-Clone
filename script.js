const languageToggle = document.querySelector('.language-toggle');
const languageOptions = document.querySelector('.language-options');
const languageBtn = document.querySelector('.language-btn');
const languageOptionItems = document.querySelectorAll('.language-option');

languageToggle.addEventListener('click', () => {
    languageBtn.classList.toggle('active');
});

languageOptionItems.forEach(option => {
    option.addEventListener('click', (e) => {
        const selectedLang = e.target.getAttribute('data-lang');
        
        if (selectedLang === 'hi') {
            languageToggle.innerHTML = 'हिंदी <img src="images/down-icon.png" alt="language toggle">';
        } else {
            languageToggle.innerHTML = 'English <img src="images/down-icon.png" alt="language toggle">';
        }

        languageBtn.classList.remove('active');
        
        console.log('Selected Language:', selectedLang);
    });
});

document.addEventListener('click', (e) => {
    if (!languageBtn.contains(e.target)) {
        languageBtn.classList.remove('active');
    }
});

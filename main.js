// Define an array of surah objects
const surahs = [
    { name: "Al-Fatiha", verses: 7 },
    { name: "Al-Baqarah", verses: 286 },
    { name: "Al-Imran", verses: 200 },
    { name: "An-Nisa", verses: 176 },
    { name: "Al-Ma'idah", verses: 120 },
    { name: "Al-An'am", verses: 165 },
    { name: "An-Nas", verses: 6 },
    { name: "Al-A'raf", verses: 206 },
    { name: "Al-Anfal", verses: 75 },
    { name: "At-Tawbah", verses: 129 },
    { name: "Yunus", verses: 109 },
    { name: "Hud", verses: 123 },
    { name: "Yusuf", verses: 111 },
    { name: "Ar-Ra'd", verses: 43 },
    { name: "Ibrahim", verses: 52 },
    { name: "Al-Hijr", verses: 99 },
    { name: "Al-Kahf", verses: 110 },
    { name: "Al-Isra", verses: 111 },
    { name: "Al-Kahf", verses: 110 },
    { name: "Maryam", verses: 98 },
    { name: "Taha", verses: 135 },
    { name: "Al-Anbiya", verses: 112 },
    { name: "Al-Hajj", verses: 78 },
    { name: "Al-Mu'minun", verses: 118 },
    { name: "An-Nur", verses: 64 },
    { name: "Al-Furqan", verses: 77 },
    { name: "Ash-Shu'ara", verses: 227 },
    { name: "An-Naml", verses: 93 },
    { name: "Al-Qasas", verses: 88 },
    { name: "Al-Ankabut", verses: 69 },
    { name: "Ar-Rum", verses: 60 },
];

// Function to render the surah list
function renderSurahs() {
    const surahsContainer = document.querySelector('.surahs');

    // Clear previous content
    surahsContainer.innerHTML = '';

    // Loop through each surah and add it to the container
    surahs.forEach(surah => {
        const surahElement = document.createElement('div');
        surahElement.innerHTML = `
            <p>${surah.name} - ${surah.verses} Verses</p>
        `;
        surahsContainer.appendChild(surahElement);
    });
}

// Call the renderSurahs function to display the surah list
renderSurahs();



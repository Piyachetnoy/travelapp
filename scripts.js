function toggleInfo(button) {
    const moreInfo = button.nextElementSibling;
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block"; // Show the hidden content
        button.textContent = "Less Info ⬆️"; // Change button text
    } else {
        moreInfo.style.display = "none"; // Hide the content again
        button.textContent = "More Info ⬇️"; // Reset button text
    }
}

// Array of profiles
const profiles = [
    {
        img: 'profilepics/user1.jpeg',
        name: 'John Doe, 23',
        bio: 'Hi! I’m solo traveling in Europe and would like to meet new people! Hit me up if you want to hang out and show me around your city. 😎',
        languages: 'Languages: English, French',
        interests: 'Interests: Photography, F1, Music',
        staying: 'Staying in Bordeaux for 5 Days',
        plans: 'Travel plans: I want to see a vineyard and surf in Lacanau!'
    },
    {
        img: 'profilepics/user2.jpeg',
        name: 'Jane Smith, 28',
        bio: 'Explorer at heart! Traveling around Asia to experience new cultures and food.',
        languages: 'Languages: English, Japanese',
        interests: 'Interests: Cooking, Hiking, Yoga',
        staying: 'Staying in Tokyo for 1 Week',
        plans: 'Travel plans: Exploring traditional Japanese tea houses and hiking Mount Takao.'
    },
    // Add more profiles here
];

let currentProfileIndex = 0;

// Function to load the current profile
function loadProfile(index) {
    const profile = profiles[index];
    document.getElementById('profile-img').src = profile.img;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-bio').textContent = profile.bio;
    document.getElementById('profile-languages').textContent = profile.languages;
    document.getElementById('profile-interests').textContent = profile.interests;
    document.getElementById('profile-staying').textContent = profile.staying;
    document.getElementById('profile-plans').textContent = profile.plans;
}

// Function to go to the next profile
function nextProfile() {
    currentProfileIndex++;
    if (currentProfileIndex >= profiles.length) {
        currentProfileIndex = 0; // Loop back to the first profile if at the end
    }
    loadProfile(currentProfileIndex);
}

// Load the initial profile
loadProfile(currentProfileIndex);

// Toggle more info visibility
function toggleInfo(button) {
    const moreInfo = button.nextElementSibling;
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        button.textContent = 'Less Info ⬆️';
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'More Info ⬇️';
    }
}
// scripts.js

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
        name: 'Jane Smith, 20',
        bio: 'Explorer at heart! Traveling around Asia to experience new cultures and food.',
        languages: 'Languages: English, Japanese',
        interests: 'Interests: Cooking, Hiking, Yoga',
        staying: 'Staying in Tokyo for 1 Week',
        plans: 'Travel plans: Exploring traditional Japanese tea houses and hiking Mount Takao.'
    },
    {
        img: 'profilepics/user3.jpeg',
        name: 'Alice Johnson, 30',
        bio: 'Digital nomad and foodie. Currently exploring local cuisines across South America.',
        languages: 'Languages: English, Spanish',
        interests: 'Interests: Street Food, Blogging, Scuba Diving',
        staying: 'Staying in Lima for 10 Days',
        plans: 'Travel plans: Taking a food tour in Lima and visiting Machu Picchu.'
    },
    {
        img: 'profilepics/user4.jpeg',
        name: 'Carlos Rivera, 22',
        bio: 'Adventure seeker and part-time photographer. Always up for new experiences!',
        languages: 'Languages: Spanish, French',
        interests: 'Interests: Photography, Surfing, Climbing',
        staying: 'Staying in Lisbon for 2 Weeks',
        plans: 'Travel plans: Surfing at Praia Grande and capturing Lisbon\'s stunning architecture.'
    },
    {
        img: 'profilepics/user5.jpeg',
        name: 'Emma Brown, 25',
        bio: 'Aspiring chef traveling to learn the art of different cuisines. Let\'s cook together!',
        languages: 'Languages: English, Italian',
        interests: 'Interests: Cooking, Wine Tasting, Art',
        staying: 'Staying in Rome for 3 Weeks',
        plans: 'Travel plans: Learning to make authentic Italian pasta and visiting local markets.'
    },
    {
        img: 'profilepics/user6.jpeg',
        name: 'Liam Turner, 32',
        bio: 'Nature lover and wildlife enthusiast. Traveling to capture the beauty of nature.',
        languages: 'Languages: English, German',
        interests: 'Interests: Wildlife Photography, Camping, Bird Watching',
        staying: 'Staying in Cape Town for 1 Month',
        plans: 'Travel plans: Going on a safari in Kruger National Park and hiking Table Mountain.'
    },
    {
        img: 'profilepics/user7.jpeg',
        name: 'Sophia Lee, 27',
        bio: 'Art and culture enthusiast. Journeying through Europe to soak up art history.',
        languages: 'Languages: English, Mandarin',
        interests: 'Interests: Painting, Museum Hopping, Classical Music',
        staying: 'Staying in Paris for 2 Weeks',
        plans: 'Travel plans: Visiting the Louvre, attending a concert at the Paris Opera, and painting in Montmartre.'
    }
    // Add more profiles here
];

let currentProfileIndex = 0;
let isAnimating = false;

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
function nextProfile(direction = 'left') {
    if (isAnimating) return; // Prevent rapid clicks from causing issues
    isAnimating = true;

    const card = document.querySelector('.card');
    
    // Determine slide out direction
    const slideOutClass = direction === 'left' ? 'slide-out-left' : 'slide-out-right';
    card.classList.add(slideOutClass);
    
    // Wait for the animation to complete
    setTimeout(() => {
        // Update the current profile index
        currentProfileIndex++;
        if (currentProfileIndex >= profiles.length) {
            currentProfileIndex = 0; // Loop back to the first profile if at the end
        }

        // Load the new profile
        loadProfile(currentProfileIndex);

        // Reset the card's position
        card.classList.remove(slideOutClass);
        card.classList.add('slide-in');
        
        // Wait for the slide-in animation to complete before enabling further animations
        setTimeout(() => {
            card.classList.remove('slide-in');
            isAnimating = false;
        }, 500);
    }, 500); // Match this duration to the CSS transition duration
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
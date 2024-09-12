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
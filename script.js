
const submitButton = document.getElementById("add-recommendation");
const recommendationInput = document.getElementById("recommendation-input");
const recommendationList = document.getElementById("recommendation-list");
const message = document.getElementById("message");
const popup = document.getElementById("recommendation-popup");
const closePopupButton = document.getElementById("close-popup");

function showPopup(isVisible) {
    if (isVisible) {
        popup.showModal();
    } else {
        popup.close();
    }
}

function addRecommendation() {
    const text = recommendationInput.value.trim();

    if (text === "") {
        message.textContent = "Please enter a recommendation.";
        return;
    }

    // Create a new recommendation element
    const newRecommendation = document.createElement("div");
    newRecommendation.className = "recommendation";

    // Use textContent to safely display user input
    newRecommendation.textContent = text;

    // Add it to the recommendation list
    recommendationList.appendChild(newRecommendation);

    // Clear the input field
    recommendationInput.value = "";

    message.textContent = "Recommendation added successfully!";
    showPopup(true);
}

submitButton.addEventListener("click", addRecommendation);
closePopupButton.addEventListener("click", function () {
    showPopup(false);
});

// Clear the message when the user starts typing
recommendationInput.addEventListener("input", function () {
    message.textContent = "";
});

const ramens = [
    { id: 1, name: "Naruto Ramen", restaurant: "Ichiran", image: "./image/naruto.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "./image/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Gyukotsu Ramen", restaurant: "Ramen-ya", image: "./image/gyukotsu.jpg", rating: 3, comment: "A bit salty." },
    { id: 4, name: "Shoyu Ramen", restaurant: "Ramen-ya", image: "./image/shoyu.jpg", rating: 4, comment: "Classic!" },
    { id: 5, name: "Nirvana Ramen", restaurant: "Ichiran", image: "./image/nirvana.jpg", rating: 5, comment: "Best ramen ever!" }
];

// Function to display ramen images
function displayRamens() {
   const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; // Clear existing items
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);  // Fixed the undefined 'imageDiv' to 'ramenMenu'
    });
}

// Function to handle ramen click and display details
function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}

// Function to handle new ramen submission
function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: parseInt(document.getElementById("rating").value),  // Ensure rating is an integer
            comment: document.getElementById("comment").value
        };

        ramens.push(newRamen);
        displayRamens(); // Refresh ramen list
        form.reset(); // Clear form
    });
}

// Main function to initialize the app
function main() {
    displayRamens();
    addSubmitListener();
}

// Ensure the DOM is loaded before running
document.addEventListener("DOMContentLoaded", main);

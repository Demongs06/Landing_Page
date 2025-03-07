function scrollToPricing(event) {
  event.preventDefault(); // Prevent form submission
  document.getElementById("pricing-options").scrollIntoView({ behavior: "smooth" });
}


//redirect to website
  function scrollToFirstDiv() {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
  }


//today date
const today = new Date();

const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',     
    day: 'numeric'
});

document.getElementById("currentDate").textContent = formattedDate;


//scroll image
const row = document.querySelector(".row");
const columns = document.querySelectorAll(".column");
const imageWidth = columns[0].offsetWidth; // Get the width of one image
const scrollAmount = imageWidth * 2; // Scroll 2 images at a time

document.querySelector(".scroll-left").addEventListener("click", () => {
  row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

document.querySelector(".scroll-right").addEventListener("click", () => {
  row.scrollBy({ left: scrollAmount, behavior: "smooth" });
});


//purchase
function showPurchased() {
  alert("Purchased");
}

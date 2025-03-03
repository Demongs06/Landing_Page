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
let startX, scrollLeft;

row.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
});

row.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - row.offsetLeft;
    const walk = (x - startX) * 1; // Adjust sensitivity
    row.scrollLeft = scrollLeft - walk;
});
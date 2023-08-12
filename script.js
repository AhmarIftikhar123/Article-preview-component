
let share_btn = document.querySelectorAll(".share-img button");
let person_data = document.getElementById("person-data");
let social_links = document.getElementById("social-links");

let displaychanger = () => {
  if (
    social_links.style.display === "none" ||
    social_links.style.display === ""
  ) {
    social_links.style.display = "flex";
    person_data.style.display = "none";
  } else {
    social_links.style.display = "none";
    person_data.style.display = "flex";
  }
};

share_btn.forEach((eve)=>{
    eve.addEventListener("click", displaychanger);

})



let listItems = document.querySelectorAll(".li");

listItems.forEach((listItem) => {
  listItem.addEventListener("mouseover", () => {
    let projectImg = listItem.querySelector(".project-img");
    if (projectImg) {
      projectImg.style.display = "block";
      projectImg.style.transition = "all 0.5s ease-in-out";
    }
  });

  listItem.addEventListener("mouseout", () => {
    let projectImg = listItem.querySelector(".project-img");
    if (projectImg) {
      projectImg.style.display = "none";
    }
  });
});

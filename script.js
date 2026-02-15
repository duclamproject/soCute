let container = document.querySelector("#container");
let body = document.querySelector("#body");
let yourChoose = document.querySelector("#container__select");
let container_C1 = document.querySelector("#container__child--1");
let container_C2 = document.querySelector("#container__child--2");
let img = document.querySelector("#img");
let you = document.querySelector("#you");
console.log(window);

yourChoose.addEventListener("change", () => {
  if (yourChoose.value == "144p") {
    img.style.display = "block";
    img.style.width = "450px";
    img.style.height = "450px";
    you.style.display = "none";
    img.src = "./img/144p.png";
  } else if (yourChoose.value == "240p") {
    img.style.display = "block";
    img.style.width = "450px";
    img.style.height = "450px";
    you.style.display = "none";
    img.src = "./img/240p.png";
  } else if (yourChoose.value == "480p") {
    img.style.width = "450px";
    img.style.height = "450px";
    img.style.display = "block";
    you.style.display = "none";
    img.src = "./img/480p.png";
  } else if (yourChoose.value == "720p60") {
    img.style.display = "block";
    img.style.width = "621px";
    img.style.height = "502px";
    you.style.display = "none";
    img.src = "./img/720p.png";
  } else {
    container.style.backgroundColor = "pink";
    body.style.backgroundColor = "pink";
    img.style.display = "none";
    you.style.display = "flex";
    setInterval(() => {
      let top = Math.floor(Math.random() * 80);
      let left = Math.floor(Math.random() * 80);
      let element = document.createElement("img");
      element.setAttribute("class", "show1080");
      element.src =
        "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-3.jpg";
      element.style.position = "absolute";
      element.style.width = "10vw";
      element.style.height = "10vw";
      element.style.top = `${top}%`;
      element.style.left = `${left}%`;
      container.appendChild(element);
    }, 500);
  }
});

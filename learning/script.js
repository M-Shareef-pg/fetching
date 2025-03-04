const URL = "https://dog.ceo/api/breeds/image/random";
const dogImage = document.querySelector("#dogImage");
const btn = document.querySelector(".btn");

const dogPics = async () => {
  let response = await fetch(URL);
  console.log(response);
  let result = await response.json();
  console.log(result.message);
  dogImage.src = result.message;
};

btn.addEventListener("click", dogPics);

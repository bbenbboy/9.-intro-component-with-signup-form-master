const btn = document.querySelector(".btn");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#mail");
const password = document.querySelector("#password");

const inputs = document.querySelectorAll("input");

btn.addEventListener("click", () => {
  console.log("click");
  inputs.forEach((fname, lname, email, password) => {
    // input.addEventListener("mouseover", function () {
    //   console.log("mouseIn");
    // });
    // if (fname.values === "") {
    //   alert("Please provide something");
    // } else {
    //   console.log("fail");
    // }
  });
});

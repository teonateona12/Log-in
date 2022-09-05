"use strict";

//time
const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);

//selecting
const userName = document.querySelector(".user");
const pinCode = document.querySelector(".pin");
const loginBtn = document.querySelector(".login__btn");
const welcome = document.querySelector(".welcome");
const time = document.querySelector(".time");
const image = (document.body.style.backgroundImage = "url(mypic2.jpg)");
const kate = document.querySelector(".kateMoss");
const lorem = document.querySelector(".lorem");
const image2 = document.querySelector(".my-pic");
const img = document.querySelector(".img");
const imgg = document.querySelector(".imgg");
const cont = document.querySelector(".user-info");

//acounts
const acount1 = {
  user: "user1",
  pin: 1111,
};

const acount2 = {
  user: "user2",
  pin: 2222,
};
const acounts = [acount1, acount2];

let curentAcount;

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  curentAcount = acounts.find((acc) => acc.user === userName.value);

  if (curentAcount?.pin === Number(pinCode.value)) {
    welcome.textContent = `Welcome Back, ${
      curentAcount.user.charAt(0).toUpperCase() + curentAcount.user.slice(1)
    } `;
    welcome.style.color = "brown";
    lorem.textContent = "";
  } else {
    alert("Wrong User Or Pin");
  }

  //acount1
  if (
    curentAcount?.user === acount1.user &&
    acount1.pin === Number(pinCode.value)
  ) {
    img.classList.remove("hidden");
    imgg.classList.add("hidden");
  }
  //acount2
  if (
    curentAcount?.user === acount2.user &&
    acount2.pin === Number(pinCode.value)
  ) {
    imgg.classList.remove("hidden");
    img.classList.add("hidden");

  }
});

time.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

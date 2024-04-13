// This is for the javascript

const errorPage = () => {
  let heroSection = (document.getElementById("herosection").style.display =
    "none");
  var aboutSection = (document.getElementById("aboutsection").style.display =
    "none");
  let contactSection = (document.getElementById(
    "contactsection"
  ).style.display = "none");
  let errorSection = (document.getElementById("errorsection").style.display =
    "block");
};

const homePage = () => {
  let heroSection = (document.getElementById("herosection").style.display =
    "block");
  var aboutSection = (document.getElementById("aboutsection").style.display =
    "none");
  let contactSection = (document.getElementById(
    "contactsection"
  ).style.display = "none");
  let errorSection = (document.getElementById("errorsection").style.display =
    "none");
};

const aboutPage = () => {
  var aboutSection = (document.getElementById("aboutsection").style.display =
    "block");
  var heroSection = (document.getElementById("herosection").style.display =
    "none");
  let contactSection = (document.getElementById(
    "contactsection"
  ).style.display = "none");
  let errorSection = (document.getElementById("errorsection").style.display =
    "none");
};

const contactPage = () => {
  var aboutSection = (document.getElementById("aboutsection").style.display =
    "none");
  let heroSection = (document.getElementById("herosection").style.display =
    "none");
  let contactSection = (document.getElementById(
    "contactsection"
  ).style.display = "block");
  let errorSection = (document.getElementById("errorsection").style.display =
    "none");
};

let ToggleTheme = false;

const ChangeTheme = () => {
  const ChangeThemebtn = document.querySelector("#ChangeTheme");
  const toDarkMenu = document.querySelector("ul.menu")

  moon = "☽";
  sun = "☀";

  ChangeThemebtn.innerText = !ToggleTheme ? moon : sun;

  document.body.style.backgroundColor = !ToggleTheme ? "black" : "";
  document.body.style.color = !ToggleTheme ? "white" : "";

  toDarkMenu.style.backgroundColor = !ToggleTheme ? "black" : "";
  toDarkMenu.style.color = !ToggleTheme ? "white" : "";
  
  
  !ToggleTheme ? (ToggleTheme = true) : (ToggleTheme = false);

};
//

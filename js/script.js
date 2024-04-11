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
  var ChangeThemebtn = document.querySelector("#ChangeTheme");
  var toDark = document.querySelector(".todark");

  moon = "☽";
  sun = "☀";

  ChangeThemebtn.innerText = !ToggleTheme ? moon : sun;
  ChangeThemebtn.className = !ToggleTheme ? "btnDark" : "btnlight";
  document.body.style.backgroundColor = !ToggleTheme ? "var(--shadow-dark)" : "";
  toDark.style.backgroundColor = !ToggleTheme ? "var(--shadow-dark)" : "";
  !ToggleTheme ? (ToggleTheme = true) : (ToggleTheme = false);
  
};
//

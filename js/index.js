// FOOTER , DATE , COPYRIGHT

const footer = document.createElement("footer");
footer.className = "footer_class";
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.className = "footer_par";
copyright.innerHTML = `© Olga Sessions ${thisYear}`;
footer.appendChild(copyright);

// SKILLS LIST
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Figma",
  "GSAP",
  "Bootstrap",
  "GitHub",
  "IT Help Desk Support",
];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = `${skills[i]}`;
  skillsList.appendChild(skill);
}

// toggle
const toggleBtn = document.querySelector(".toggle_btn");
const navbarLinks = document.querySelector(".nav_links");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// toggle end

// FOOTER , DATE , COPYRIGHT // START

const footer = document.createElement("footer");
footer.className = "footer_class";
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.className = "footer_par";
copyright.innerHTML = `© Olga Sessions ${thisYear}`;
footer.appendChild(copyright);
// // FOOTER , DATE , COPYRIGHT // END

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

// Message Form

// Function to remove message when there r no messages
function toggleMessagesSesction() {
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

toggleMessagesSesction();
// const messageForm = document.forms["leave_message"];
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log("Name", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}:</a><span>${usersMessage}</span>`;

  // Edit button
  const editButtom = document.createElement("button");
  editButtom.innerText = "edit";
  editButtom.className = "edit_btn";
  editButtom.type = "button";
  editButtom.addEventListener("click", function () {
    const messageSpan = newMessage.querySelector("span");
    const editedUserMessage = prompt(
      "Edit your message:",
      messageSpan.innerText
    );
    if (editedUserMessage !== 0) {
      messageSpan.innerText = editedUserMessage;
    }
  });
  newMessage.appendChild(editButtom);
  // end edit button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.className = "remove_btn";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
    toggleMessagesSesction();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  toggleMessagesSesction();
  messageForm.reset();
});

// Getting api from github

fetch("https://api.github.com/users/Olenka2101/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        "Request getting repositories failed, please try again later."
      );
    }
    return response.json();
  })
  .then((repositories) => {
    // repositories = JSON.parse(this.repositories)
    console.log("Repositories:", repositories);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    projectList.innerHTML = "";

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      const link = document.createElement("a");
      link.setAttribute("target", "_blank");
      link.href = repositories[i].html_url;
      link.textContent = repositories[i].name;
      // if we don't want to include forked repositories
      if (!repositories[i].fork) {
        project.appendChild(link);
        projectList.appendChild(project);
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
    const projectSection = document.getElementById("projects");
    const errorMessage = document.querySelector("p");
    errorMessage.innerHTML = "Unable to load projects. Please try again.";
    projectSection.appendChild(errorMessage);
  });

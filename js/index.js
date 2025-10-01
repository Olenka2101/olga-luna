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

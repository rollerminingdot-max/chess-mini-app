const soundToggle = document.getElementById("soundToggle");
const notifyToggle = document.getElementById("notifyToggle");
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

// Load settings
const settings = JSON.parse(localStorage.getItem("settings")) || {
  sound: false,
  notifications: true,
  theme: "dark"
};

soundToggle.checked = settings.sound;
notifyToggle.checked = settings.notifications;
document.body.classList.toggle("light", settings.theme === "light");

// Save
function save() {
  localStorage.setItem("settings", JSON.stringify(settings));
}

// Events
soundToggle.onchange = () => {
  settings.sound = soundToggle.checked;
  save();
};

notifyToggle.onchange = () => {
  settings.notifications = notifyToggle.checked;
  save();
};

lightBtn.onclick = () => {
  settings.theme = "light";
  document.body.classList.add("light");
  save();
};

darkBtn.onclick = () => {
  settings.theme = "dark";
  document.body.classList.remove("light");
  save();
};

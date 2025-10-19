const chanceInput = document.getElementById("chance");
const discordBtn = document.getElementById("discord");
const youtubeBtn = document.getElementById("youtube");

// Load saved value or set default 66
chrome.storage.local.get(["togoreChance"], (data) => {
  let chance = data.togoreChance;

  if (chance === undefined) {
    chance = 66; // default first-time value
    chrome.storage.local.set({ togoreChance: chance });
  }

  chanceInput.value = chance;
});

chanceInput.addEventListener("input", () => {
  let val = parseInt(chanceInput.value);

  // snap out-of-range numbers
  if (isNaN(val)) val = 0;
  if (val > 100) val = 100;
  if (val < 0) val = 0;

  chanceInput.value = val;
  chrome.storage.local.set({ togoreChance: val });
});

discordBtn.addEventListener("click", () => {
  chrome.tabs.create({ url: "https://discord.gg/g35qpTvytn" });
});

youtubeBtn.addEventListener("click", () => {
  chrome.tabs.create({ url: "https://www.youtube.com/channel/UCn0nSn00R4oF88ttXTZqDUA" });
});

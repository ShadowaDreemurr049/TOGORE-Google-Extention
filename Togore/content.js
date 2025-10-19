function spawnTogore() {
  const togore = document.createElement("img");
  togore.src = chrome.runtime.getURL("togore.png");
  togore.style.position = "fixed";
  togore.style.width = "150px";
  togore.style.height = "150px";
  togore.style.zIndex = "9999999";
  togore.style.pointerEvents = "auto";
  togore.style.cursor = "pointer";

  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);
  togore.style.left = `${x}px`;
  togore.style.top = `${y}px`;

  document.body.appendChild(togore);

  const audio = new Audio(chrome.runtime.getURL("togore.mp3"));

  togore.addEventListener("mouseenter", () => {
    audio.play();
    togore.remove();
  });
}

chrome.storage.local.get(["togoreChance"], (data) => {
  const chance = data.togoreChance ?? 30; // default 30%
  if (Math.random() * 100 < chance) {
    spawnTogore();
  }
});

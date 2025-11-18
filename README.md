<p align="center">
  <img src="assets/logo.png" width="200" />
</p>

<h1 align="center">React to Base</h1>

<p align="center">
  A futuristic reaction-time mini-game built for the Farcade ecosystem.
  <br />
  <strong>Tap as fast as you can when the screen turns Base-Blue.</strong>
</p>

---

## 🚀 Live Demo
Coming soon:  
https://coinisan.github.io/react-to-base/

(Enable GitHub Pages in Settings → Pages)

---

## 🎮 Gameplay
The rules are simple:

- Wait until the screen suddenly turns **Base Blue (#4FC3FF)**  
- Tap **as fast as possible**  
- Your score = reaction time in milliseconds  
- Fastest score wins  

Ideal for speed-run battles, leaderboard challenges and social competitions.

---

## ✨ Features

- ⚡ **Ultra-fast reaction timing** (ms precision)  
- 🎨 **Neon Base UI**  
- 📱 **Mobile-optimized layout**  
- 🔊 **Haptic Feedback** (via Farcade SDK)  
- 🔁 **Auto-restart** after each run  
- 🎯 **Minimal, clean, esports-ready design**

---

## 🧩 Farcade SDK Integration

The game automatically uses:

```js
window.FarcadeSDK.singlePlayer.actions.ready();
window.FarcadeSDK.singlePlayer.actions.hapticFeedback();
window.FarcadeSDK.singlePlayer.actions.gameOver({ score });
window.FarcadeSDK.on("play_again", () => startGame());


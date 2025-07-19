# 🧠 Memory Game

A simple React Memory Game that uses the [Giphy API](https://developers.giphy.com/) to fetch trending GIFs.  
Built with **React** and styled with **Tailwind CSS**.

---

## 🚀 Features

- Fetches trending GIFs from Giphy.
- Click unique cards to increase your score.
- Click the same card twice → game resets!
- Cards shuffle after each click.
- Scoreboard shows **Current Score** and **Best Score**.

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Card.jsx
 │    ├── CardGrid.jsx
 │    ├── Scoreboard.jsx
 ├── App.jsx
 ├── index.js
 └── index.css
```

---

## ⚙️ Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/memory-game.git
   cd memory-game
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Get a Giphy API key**

   - Sign up at [developers.giphy.com](https://developers.giphy.com/).
   - Create an app to get your API key.

4. **Add your API key**

   Open `src/App.jsx` and replace:

   ```js
   const API_KEY = "YOUR_GIPHY_API_KEY";
   ```

   with your actual API key.

5. **Run the app**

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

---

## 🖌️ Tech Stack

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Giphy API](https://developers.giphy.com/)

---

## 📄 License

This project is for learning purposes only.  
All GIFs are provided by Giphy under their [Terms of Service](https://developers.giphy.com/terms/).

---

## 🙌 Credits

- Giphy for the API and GIFs.
- React & Tailwind for the framework and styles.

---

**Have fun playing! 🚀**

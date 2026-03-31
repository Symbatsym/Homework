import Image from "next/image";

export default function Home() {
  return (
    <div>  
    <div className="App">
      <header className="header">
        <h1>Lotus Harmony</h1>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="main">
        <h2 className="title">Peace in Bloom</h2>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Pink_lotus_flower.jpg"
            alt="Lotus flower"
            className="image"
          />
          <p className="text">
            Лотос поднимается со дна воды, чистый и нетронутый.
             Его спокойное присутствие символизирует обновление, гармонию и духовное пробуждение.
              Природа напоминает нам, что истинная красота расцветает изнутри.
          </p>
        </div>
      </main>

      <footer className="footer">
        © 2025 Lotus Harmony | Inspired by Nature 🌸
      </footer>
    </div>
  
     
    </div>
  );
}

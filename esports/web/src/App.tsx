import "./styles/main.css";

import logoImg from "./assets/logo.png"
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex my-20 flex-col items-center">
      <img src={logoImg} />
      
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text">Duo</span> esta aqui</h1>
    </div>
  )
}

export default App;




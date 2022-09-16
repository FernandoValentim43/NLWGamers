import "./styles/main.css";

import logoImg from "./assets/logo.png"
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex my-20 flex-col items-center">
      <img src={logoImg} />
      
      <h1>Seu Duo esta aqui</h1>
    </div>
  )
}

export default App;

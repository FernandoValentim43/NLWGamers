import "./styles/main.css";

import logoImg from "./assets/logo.png";
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex my-20 flex-col items-center">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20 ">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          Duo
        </span>
        esta aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="/image 1.png" />
        </a>{" "}
        <a href="">
          <img src="/image 2.png" />
        </a>
        <a href="">
          <img src="/image 3.png" />
        </a>{" "}
        <a href="">
          <img src="/image 5.png" />
        </a>
        <a href="">
          <img src="/image 6.png" />
        </a>
        <a href="">
          <img src="/image 7.png" />
        </a>
      </div>
    </div>
  );
}

export default App;

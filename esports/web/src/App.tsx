import "./styles/main.css";

import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from "./assets/logo.png";
import { GameBanner } from "./components/GameBanner";
function App() {
  return (
    <div className="max-w-[1000px] mx-auto flex  my-8 flex-col items-center ">
      <img src={logoImg} width="250"  />

      <h1 className="text-5xl text-white font-black mt-6 ">Seu<span className="text-transparent bg-nlw-gradient bg-clip-text"> Duo </span>esta aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-8"  style={{ height: "190px"}}>
       
        <GameBanner bannerUrl="/image 1.png" title="League of Legends"  adsCount={1}  />
        <GameBanner bannerUrl="/image 2.png" title="Dota 2"  adsCount={1}  />
        <GameBanner bannerUrl="/image 3.png" title="CS: GO"  adsCount={3}  />
        <GameBanner bannerUrl="/image 4.png" title="Apex Legends"  adsCount={3}  />
        <GameBanner bannerUrl="/image 5.png" title="Fortnite"  adsCount={1}  />
        <GameBanner bannerUrl="/image 6.png" title="World of War Craft"  adsCount={2}  />
       
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-6 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-4 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

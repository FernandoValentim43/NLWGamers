import "./styles/main.css";
import { useEffect,useState } from "react";

import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from "./assets/logo.png";
import { GameBanner } from "./components/GameBanner";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: { 
    ads: number;
  }
}
function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch('http://localhost:3333/games').then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])


  return (
    <div className="max-w-[1000px] mx-auto flex  my-8 flex-col items-center ">
      <img src={logoImg} width="250"  />

      <h1 className="text-5xl text-white font-black mt-6 ">Seu<span className="text-transparent bg-nlw-gradient bg-clip-text"> Duo </span>esta aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-8"  style={{ height: "190px"}}>
       {games.map(game => {
        return (
          <GameBanner bannerUrl={game.bannerUrl} title={game.title}  adsCount={game._count.ads}  />
        )
       } )}
        
        
       
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

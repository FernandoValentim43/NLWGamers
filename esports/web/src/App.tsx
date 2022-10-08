import "./styles/main.css";
import { useEffect, useState } from "react";
import logoImg from "./assets/logo.png";
import { GameBanner } from "./components/GameBanner";
import { AdBanner } from "./components/Ad";
import { GameController } from "phosphor-react";

import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "./components/form/Input";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}
function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto flex  my-8 flex-col items-center ">
      <img src={logoImg} width="250" />

      <h1 className="text-5xl text-white font-black mt-6 ">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          {" "}
          Duo{" "}
        </span>
        esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-8" style={{ height: "190px" }}>
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <AdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed">
            <Dialog.Content className="bg-[#2A2634] py-8 px-10 text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl text-white font-black">
                Publique um anúncio
              </Dialog.Title>
              
                <form className="mt-8">
                  <div className="flex-col flex gap-2 ">
                    <label htmlFor="game" className="font-semibold">Qual o game</label>
                    <Input id="game" placeholder="Selectione o game que deseja"/>
                  </div>

                  <div>
                    <label htmlFor="name">Seu nome (ou nickname)</label>
                    <Input placeholder="Como te chamam dentro do game?"></Input>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="yearsPlaying">Joga a quantos anos</label>
                      <Input
                        id="yearsPlaying"
                        placeholder="Tudo bem ser Zero"
                        type="number"
                      />
                    </div>

                    <div>
                      <label htmlFor="discord">Qual seu Discord?</label>
                      <Input
                        id="yearsPlaying"
                        placeholder="Usuário#00000"
                        type="text"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="weekDays">Quando costuma jogar?</label>
                    </div>
                    <div>
                      <label htmlFor="hourStart">Qual horário do dia?</label>
                      <div>
                        <Input type="time" className="placeholder:text-zinc-500" placeholder="De" />
                        <Input type="time"  className="placeholder:text-zinc-500" placeholder="Até" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Input type="checkbox" />
                    Costumo me conectar ao chat de voz
                  </div>

                  <footer>
                    <button>Cancelar</button>
                    <button type="submit">
                      <GameController />
                      Encontrar Duo
                    </button>
                  </footer>
                </form>
              
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;

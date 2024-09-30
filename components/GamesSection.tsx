"use client";

import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CgPlayButtonO } from "react-icons/cg";
import axios from 'axios';
import SlotGamesList from "./Modals/SlotGamesList";

const categories = [
  "W Original",
  "Slots",
  "Live Casino",
  "Game Shows",
  "Trending",
  "Most Profitable",
  "New Games",
  "Poker",
  "Roulette",
  "Blackjack",
];

const allGames = [
  {
    id: 1,
    name: "Aviator",
    category: "W Original",
    image: "/images/games/game-card-1.png",
  },
  {
    id: 2,
    name: "Crash",
    category: "W Original",
    image: "/images/games/game-card-2.png",
  },
  {
    id: 3,
    name: "Dice",
    category: "W Original",
    image: "/images/games/game-card-3.png",
  },
  {
    id: 4,
    name: "Mines",
    category: "W Original",
    image: "/images/games/game-card-4.png",
  },
  {
    id: 5,
    name: "Plinko",
    category: "W Original",
    image: "/images/games/game-card-5.png",
  },
  {
    id: 6,
    name: "Wheel",
    category: "W Original",
    image: "/images/games/game-card-6.png",
  },
  {
    id: 7,
    name: "Blackjack",
    category: "Table Games",
    image: "/images/games/game-card-7.png",
  },
  {
    id: 8,
    name: "Roulette",
    category: "Table Games",
    image: "/images/games/game-card-8.png",
  },
  {
    id: 9,
    name: "Baccarat",
    category: "Table Games",
    image: "/images/games/game-card-9.png",
  },
  {
    id: 10,
    name: "Poker",
    category: "Table Games",
    image: "/images/games/game-card-10.png",
  },
  {
    id: 11,
    name: "HACKSAW",
    category: "Slots",
    image: "/images/games/hacksaw.png",
  },
  {
    id: 12,
    name: "Live Dealer",
    category: "Live Casino",
    image: "/images/games/game-card-12.png",
  },
];

const GamesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("W Original");
  const [games, setGames] = useState(allGames);
  const [isSlotGameModalOpen, setIsSlotGameModalOpen] = useState(false);
  const [slotGameData, setSlotGameData] = useState([]);
  const [isSlotGameLoading, setIsSlotGameLoading] = useState(false);
  const [selectedProviderCode, setSelectedProviderCode] = useState(false);

  const filterGames = (category: string) => {
    setSelectedCategory(category);
    if (category === "W Original") {
      setGames(allGames);
    } else {
      setGames(allGames.filter((game) => game.category === category));
    }
  };

  const onSlotProviderClick = async (providerCode: any) => {
    setIsSlotGameModalOpen(true);
    setIsSlotGameLoading(true);
    setSelectedProviderCode(providerCode);
    try {
      const url = "https://api.bestfun.io/gambling_api/game_list"
      const jsonBody = {
        "agent_code": "wecazoo",
        "agent_token": "374d451850b7eb55baf59c9ae16c2b08",
        "provider_code": providerCode,
        "lang": "en"
      };
      const res = await axios.post(url, jsonBody);
      setSlotGameData(res.data.games);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSlotGameLoading(false);
    }
  }

  const onSlotGameClick = async (gameData: any) => {
    try {
      let res = await axios.post(encodeURI("https://api.bestfun.io/gambling_api/game_launch"), {
        agent_code: "wecazoo",
        agent_token: "374d451850b7eb55baf59c9ae16c2b08",
        user_code: "test", // If the user pointed out by user_code does not exist, it is newly created.
        game_type: "slot",
        provider_code: selectedProviderCode,
        game_code: gameData.game_code,
        lang: "en",
      });

      window.open(res.data.launch_url, "_blank", "top=200,left=200,width=1280,height=720");
    } catch (err) {
      console.log(err);
    } finally {
      setIsSlotGameLoading(false);
    }
  }

  return (
    <section className="container my-12">
      <SlotGamesList isModalOpen={isSlotGameModalOpen} setIsModalOpen={setIsSlotGameModalOpen} isLoading={isSlotGameLoading} slotGameData={slotGameData} onSlotGameClick={onSlotGameClick} />
      <h2 className="text-3xl font-bold mb-6">Games</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-t-[10px] bg-[#1BB96B] h-18 md:h-20">
        <div className="flex w-max space-x-4 p-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant="link"
              className={`
                hover:text-foreground
                hover:no-underline
                text-lg md:text-2xl
                font-bold
                ${selectedCategory === category
                  ? "text-foreground"
                  : "text-[#130D25A6]"
                }
              `}
              onClick={() => filterGames(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="p-[42px] bg-[#1BB96B4D] rounded-b-[10px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-[45px] gap-x-4 min-h-[calc(2*300px)]">
          {games.length > 0 ? (
            games.map((game) => (
              <div
                key={game.id}
                className="relative aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => onSlotProviderClick(game.name)}
              >
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 flex flex-col items-center justify-end p-4">
                  <div className="absolute bottom-0 left-0 w-full bg-white/85 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 px-2 py-3.5 text-center">
                    <span className="text-sm font-bold text-background">
                      {game.name}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 rounded-full p-1 md:p-1.5 lg:p-2">
                    <CgPlayButtonO size={24} className="text-white/90" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center h-full">
              <p className="text-3xl font-bold text-muted mb-4">
                No games found
              </p>
              <p className="text-muted text-center">
                We're currently updating our game selection for this category.
                Please check back soon or try another category!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

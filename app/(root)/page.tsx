"use client";
import { useState, useEffect } from "react";
import { shuffleWordArray, createArrayBoard } from "@/utils";
import { IBoardItem } from "@/interfaces";
import Board from "@/components/board";
import GameState from "@/components/game-state";
import GameButtons from "@/components/game-buttons";

const RootPage = () => {
  const [board, setBoard] = useState<IBoardItem[]>([]);
  const [bonesCount, setBonesCount] = useState<number>(10);
  const [chickenCount, setChickenCount] = useState<number>(15);
  const [betAmount, setBetAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [startGame, setStartGame] = useState<boolean>(false);

  // Crea un array con cantidad de chickends Y bones
  const shuffleWord = shuffleWordArray(chickenCount, bonesCount);
  // Crea un array agrengado el id y el estado de visibilidad
  const boardElements = createArrayBoard(shuffleWord);

  useEffect(() => {
    setBoard(boardElements);
  }, []);

  // Muestra los items del board
  const showBoard = () => {
    setBoard(board.map((item: IBoardItem) => ({ ...item, visibled: true })));
  }

  // Muestra los items del board
  const resetBoard = () => {
    setBoard(boardElements);
  }

  const handleSelected = (selectedItem: IBoardItem) => {
    setBoard(
      board.map((item: IBoardItem) =>
        selectedItem.id === item.id ? { ...item, visibled: true } : item
      )
    );

    if (selectedItem.name === "bone") {
      setTimeout(() => {
        showBoard();
        setStartGame(false)
      }, 500);
    }
  };

  const handleBetButton = () => {
    if (!startGame) {
      setStartGame(true);
      resetBoard()
    } else {
      setStartGame(false);
      showBoard()
    }
  }

  return (
    <>
      <Board
        board={board}
        handleSelected={handleSelected}
        startGame={startGame}
      />
      <GameState bonesCount={bonesCount} chickenCount={chickenCount} />
      <GameButtons
        startGame={startGame}
        betAmount={betAmount}
        totalAmount={totalAmount}
        handleBetButton={handleBetButton}
      />
    </>
  );
};

export default RootPage;

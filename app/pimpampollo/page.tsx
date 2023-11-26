"use client";
import { useState, useEffect } from "react";
import moment from "moment";
import { shuffleWordArray, createArrayBoard } from "@/utils";
import { IBoardItem, IHistory } from "@/interfaces";
import {
  DEFAULT_CHICKEND,
  DEFAULT_BONES,
  MIN_BET_AMOUNT,
  DEFAULT_ODDS,
} from "@/constants";

import GameHeader from "@/components/game-header";
import GameBoard from "@/components/game-board";
import GameState from "@/components/game-state";
import GameButtons from "@/components/game-buttons";
import GameBetBox from "@/components/game-betbox";
import GameBoneBox from "@/components/game-bonebox";
import GameAmounts from "@/components/game-amounts";
import GameHistory from "@/components/game-history";

const PimPamPollo = () => {
  const [board, setBoard] = useState<IBoardItem[]>([]);
  const [histories, setHistories] = useState<IHistory[]>([]);
  const [bonesCount, setBonesCount] = useState<number>(DEFAULT_BONES);
  const [chickenCount, setChickenCount] = useState<number>(DEFAULT_CHICKEND);
  const [betAmount, setBetAmount] = useState<number>(0);
  const [totalWinAmount, setTotalWinAmount] = useState<number>(0);
  const [nextWinAmount, setNextWinAmount] = useState<number>(0);
  const [balance, setBalance] = useState<number>(120);
  const [odd, setOdd] = useState<number>(DEFAULT_ODDS[0]);
  const [nextOdd, setNextOdd] = useState<number>(DEFAULT_ODDS[1]);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [endGame, setEndGame] = useState<boolean>(false);
  const [chickenVisibled, setChickenVisibled] = useState<number>(1);

  // Crea un array con cantidad de chickends Y bones
  const shuffleWord = shuffleWordArray(chickenCount, bonesCount);
  // Crea un array agrengado el id y el estado de visibilidad
  const boardElements = createArrayBoard(shuffleWord);

  useEffect(() => {
    setBoard(boardElements);
    setOdd(
      bonesCount <= 1
        ? DEFAULT_ODDS[bonesCount - 1] + 1
        : DEFAULT_ODDS[bonesCount - 1]
    );
  }, []);


  // Muestra los items del board
  const showBoard = () =>
    setBoard(board.map((item: IBoardItem) => ({ ...item, visibled: true })));

  // Muestra los items del board
  const resetBoard = () => setBoard(boardElements);

  // Agrega nuevo registro al historial
  const addNewHistory = (status: string) => {
    const history = {
      id: 1,
      date: `${moment().format("DD/MM/YYYY, h:mm:ss a")}`,
      coefficient: status === "win" ? odd : 0,
      betAmount: betAmount,
      totalWinAmount: status === "win" ? totalWinAmount : 0,
      status: status,
    };
    setHistories([...histories, history]);
  };

  // Inicializador del juego
  const initGame = () => {
    setStartGame(true);
    setEndGame(false);
    resetBoard();
    // setBalance(balance - betAmount)
    setTotalWinAmount(betAmount);
  };

  // Juego Perdido
  const loseGame = () => {
    showBoard();
    setStartGame(false);
    setEndGame(true);
    setBetAmount(0);
    setOdd(bonesCount / chickenCount + 1);
    setBalance(balance - betAmount);
    setTotalWinAmount(0);
    setChickenVisibled(1);
    addNewHistory("lose");
  };

  // Retirar dinero
  const cashOut = () => {
    showBoard();
    setStartGame(false);
    setEndGame(true);
    setBetAmount(0);
    setBalance(balance + totalWinAmount);
    setOdd(bonesCount / chickenCount + 1);
    setTotalWinAmount(0);
    setChickenVisibled(1);
    addNewHistory("win");
  };

  // Selecciona cada item del board
  const handleSelected = (selectedItem: IBoardItem) => {
    setBoard(
      board.map((item: IBoardItem) =>
        selectedItem.id === item.id
          ? { ...item, visibled: true, revealed: true }
          : item
      )
    );

    if (selectedItem.name === "bone") {
      setTimeout(() => {
        loseGame();
      }, 500);
    }

    if (selectedItem.name === "chicken") {
      setChickenVisibled(chickenVisibled + 1);
      if (chickenVisibled === 1) {
        setOdd(bonesCount / chickenCount + 1);
        setTotalWinAmount(betAmount * odd);
      } else {
        setOdd(bonesCount / (chickenCount - chickenVisibled) + 1);
        setTotalWinAmount(totalWinAmount + odd);
      }

      //  setChickenCount(chickenCount - 1);
      //  setBonesCount(bonesCount + 1);
      //  if (chickenVisibled === 0) {
      //    setOdd(bonesCount / chickenCount);
      //    setTotalWinAmount(betAmount * odd + 10);
      //  } else {
      //    setOdd(bonesCount / chickenCount);
      //    setTotalWinAmount(totalWinAmount * (1 + odd));
      //  }
    }
  };

  // Boton de iniciar juego y retirar dinero
  const handleBetButton = () => {
    if (!startGame) {
      if (betAmount > balance) {
        alert("No tienes suficiente dinero para apostar")
      } else {
        initGame();
      }
    } else {
      cashOut();
    }
  };

  // Incrementa el valor de la apuesta
  const handleAmountIncrease = () => {
    setBetAmount(betAmount + MIN_BET_AMOUNT);
    // setBalance(balance - MIN_BET_AMOUNT);
  };

  // Decrementa el valor de la apuesta
  const handleAmountDecrease = () => {
    setBetAmount(betAmount - MIN_BET_AMOUNT);
    // setBalance(balance + MIN_BET_AMOUNT);
  };

  // Incrementa la cantidad de huesos y decrementa la de pollos
  const handleBoneIncrease = () => {
    setBonesCount(bonesCount + 1);
    setChickenCount(chickenCount - 1);

    setOdd(
      bonesCount <= 1
        ? DEFAULT_ODDS[bonesCount] + 1
        : DEFAULT_ODDS[bonesCount]
    );
  };

  // Decrementla cantidad de huesos y incrementa la de pollos
  const handleBoneDecrease = () => {
    setBonesCount(bonesCount - 1);
    setChickenCount(chickenCount + 1);

    setOdd(
      bonesCount < 3
        ? DEFAULT_ODDS[bonesCount - 2] + 1
        : DEFAULT_ODDS[bonesCount - 2]
    );
  };

  return (
    <>
      <GameHeader balance={balance} />
      <GameBoard
        board={board}
        handleSelected={handleSelected}
        startGame={startGame}
        endGame={endGame}
      />
      <GameState bonesCount={bonesCount} chickenCount={chickenCount} />
      <GameButtons
        startGame={startGame}
        betAmount={betAmount}
        totalWinAmount={totalWinAmount}
        handleBetButton={handleBetButton}
      />
      <GameBetBox
        betAmount={betAmount}
        balance={balance}
        handleAmountIncrease={handleAmountIncrease}
        handleAmountDecrease={handleAmountDecrease}
        startGame={startGame}
      />
      <GameBoneBox
        boneCount={bonesCount}
        handleBoneIncrease={handleBoneIncrease}
        handleBoneDecrease={handleBoneDecrease}
        startGame={startGame}
        initOdd={odd}
      />
      <GameAmounts
        nextWinAmount={nextWinAmount}
        odd={odd}
        nextOdd={nextOdd}
        totalWinAmount={totalWinAmount}
      />
      <GameHistory histories={histories} />
    </>
  );
};

export default PimPamPollo;

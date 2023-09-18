import { create } from 'zustand'

interface BoardStore{
    board:Board;
    getBoard:()=>void;
}

const useBoardStore = create<BoardStore>((set) => ({
  board: null,
  getBoard:()=>{

  }
}))
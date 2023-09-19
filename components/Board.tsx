"use client"

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {useState, useEffect} from 'react'
import { useBoardStore } from '@/store/BoardStore';
const Board = () => {
  const getBoard= useBoardStore((state)=>state.getBoard);
  useEffect(()=>{
    getBoard();
  },[getBoard])
  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //     <Droppable droppableId='board' direction='horizontal' type='column'>
    //         {(provided)=>(
    //             <div>
    //                 {/* Rendering all the columns */}
    //             </div>
    //         )}
    //     </Droppable>
    // </DragDropContext>
  )
}

export default Board
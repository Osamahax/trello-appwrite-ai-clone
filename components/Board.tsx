"use client"

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {useState, useEffect} from 'react'
const Board = () => {
  
  return (
    <DragDropContext>
        <Droppable droppableId='board' direction='horizontal' type='column'>
            {(provided)=>(
                <div>
                    {/* Rendering all the columns */}
                </div>
            )}
        </Droppable>
    </DragDropContext>
  )
}

export default Board
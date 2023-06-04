"use client";
import { useBordStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  const getBoard = useBordStore((state) => state.getBoard);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <h1>Hello</h1>
    // <div>
    //   <DragDropContext>
    //     <Droppable droppableId="board" direction="horizontal" type="column">
    //       {(provided) => <div> {/* rendering all the bored   */} </div>}
    //     </Droppable>
    //   </DragDropContext>
    // </div>
  );
}

export default Board;

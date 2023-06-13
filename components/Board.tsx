"use client";
import React, { useEffect } from "react";
import Column from "./Column";
import { useBordStore } from "@/store/BoardStore";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

function Board() {
  const [board, getBoard] = useBordStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleDragEnd = (result: DropResult) => {};

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              {...provided?.droppableProps}
              ref={provided?.innerRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            >
              {Array.from(board?.columns.entries())?.map(
                ([id, colums], index) => (
                  <Column
                    key={index}
                    id={id}
                    todos={colums?.todos}
                    index={index}
                  />
                )
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Board;

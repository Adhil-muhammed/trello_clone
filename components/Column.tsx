import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  done: "Done ",
  inprogress: "In Progress",
  todos: "To Do",
};

function Column({ id, index, todos }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* render dropable todos in column*/}
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-2 rounded-2xl shadow-md ${
                    snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                  }`}
                >
                  <h2 className=" flex justify-between font-bold text-lg p-2">
                    {idToColumnText[id]}
                    <span className=" text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                      {todos?.length}
                    </span>
                  </h2>
                </div>
              );
            }}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Board.scss";
import { v4 as uuidv4 } from "uuid";

const Board = () => {
  const [state, setState] = useState({
    todo: {
      title: "To Do",
      items: [
        { id: "1", content: "Task 1" },
        { id: "12", content: "Task 2" },
        { id: "13", content: "Task 3" },
      ],
    },
    inProgress: {
      title: "In Progress",
      items: [
        { id: "14", content: "Task 4" },
        { id: "15", content: "Task 5" },
      ],
    },
    completed: {
      title: "Completed",
      items: [
        { id: "16", content: "Task 6" },
        { id: "17", content: "Task 7" },
      ],
    },
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) return;

    // Reordering in the same list
    if (source.droppableId === destination.droppableId) {
      const items = Array.from(state[source.droppableId].items);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      const newState = {
        ...state,
        [source.droppableId]: {
          ...state[source.droppableId],
          items,
        },
      };

      setState(newState);
    } else {
      // Moving between lists
      const sourceItems = Array.from(state[source.droppableId].items);
      const [removedItem] = sourceItems.splice(source.index, 1);
      const destinationItems = Array.from(state[destination.droppableId].items);
      destinationItems.splice(destination.index, 0, removedItem);

      const newState = {
        ...state,
        [source.droppableId]: {
          ...state[source.droppableId],
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...state[destination.droppableId],
          items: destinationItems,
        },
      };

      setState(newState);
    }
  };

  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(state).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="list" // Updated to use the "list" class
              >
                <h3 className="list-title">{column.title}</h3> {/* Added "list-title" class */}
                {column.items.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="card" // Updated to use the "card" class
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Board;
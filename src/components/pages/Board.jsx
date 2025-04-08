import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Board.scss";

const Board = ({ tasks = [] }) => {
  const [state, setState] = useState({
    todo: {
      title: "To Do",
      items: [],
    },
    inProgress: {
      title: "In Progress",
      items: [],
    },
    completed: {
      title: "Completed",
      items: [],
    },
  });

  useEffect(() => {
    // Update the "To Do" list whenever tasks change
    setState((prevState) => ({
      ...prevState,
      todo: {
        ...prevState.todo,
        items: tasks.map((task) => ({ id: task._id, content: task.title })),
      },
    }));
  }, [tasks]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

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
                className="list"
              >
                <h3 className="list-title">{column.title}</h3>
                {column.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="card"
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
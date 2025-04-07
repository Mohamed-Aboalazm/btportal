import React, { useCallback, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getAllLeaves } from "../../utils/api";
import Board from "../pages/Board";

export default function Dashboard() {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [greeting, setGreeting] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const updateGreeting = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 12) {
      setGreeting("Good morning");
    } else if (hours >= 12 && hours < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  };

  useEffect(() => {
    updateGreeting();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const apiData = await getAllLeaves();
      if (apiData.error) {
      } else {
        setMainData(apiData.data);
      }
    } catch (err) {
      console.log("err", err);
    }
    setLoading(false);
  }, []);

  const transformedEvents = mainData?.map((event) => ({
    title: `${event.description} ${event?.userId?.firstName} ${event?.userId?.lastName}`,
    start: event.startDate,
    end: event.endDate,
    url: event.fileUpload,
    extendedProps: {
      description: event.description,
      feedback: event.feedback,
      status: event.status,
    },
  }));

  const handleAddTodo = () => {
    const newTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, isEditing: false },
    ];
    setTodos(newTodos);
    setNewTodo("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText, isEditing: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleEditState = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: !todo.isEditing };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-white" style={{ height: "100%" }}>
      <br />
      <br />
      <h2>{greeting}</h2>
      <div className="row">
        <div className="col-lg-6" style={{ height: "400px" }}>
          <Board />
        </div>
        <div className="col-lg-6" style={{ height: "400px" }}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            // events={transformedEvents}
            // eventClick={(info) => {
            //   alert(
            //     `Event: ${info.event.title}\nStart: ${info.event.start}\nEnd: ${info.event.end}\nDescription: ${info.event.extendedProps.description}\nFeedback: ${info.event.extendedProps.feedback}\nStatus: ${info.event.extendedProps.status}`
            //   );
            // }}
          />
        </div>
        <div className="col-lg-12" style={{ marginTop: "100px" }}>
          {/* <div className="todo-list mt-2 p-15">
            <h2>To Do List</h2>
            <div className="row">
              <div className="col-lg-7">
                <div className="input-group mb-3 p-15">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    aria-label="New todo"
                    aria-describedby="button-add"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary ml-2"
                      type="button"
                      id="button-add"
                      style={{ marginLeft: "10px" }}
                      onClick={handleAddTodo}
                      disabled={!newTodo}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 p-15">
                <ol className="list-group">
                  {todos.map((todo, i) => (
                    <li
                      key={todo.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {todo.isEditing ? (
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={todo.text}
                          onBlur={(e) =>
                            handleEditTodo(todo.id, e.target.value)
                          }
                        />
                      ) : (
                        <span>
                          {i + 1}) {todo.text}
                        </span>
                      )}

                      <div>
                        <button
                          onClick={() => toggleEditState(todo.id)}
                          className="btn btn-sm btn-secondary mr-4"
                          aria-label="Edit"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          onClick={() => handleDeleteTodo(todo.id)}
                          className="btn btn-sm btn-danger ml-2"
                          aria-label="Delete"
                          style={{ marginLeft: "10px" }}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

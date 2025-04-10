import React, { useCallback, useEffect, useState, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getAllLeaves } from "../../utils/api";
import Board from "../pages/Board";
import { TaskContext } from "../../context/TaskContext";

export default function Dashboard() {
  const { tasks, fetchTasks } = useContext(TaskContext); // Use TaskContext to get tasks
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
    fetchTasks(); // Fetch tasks when the component mounts
    getData();
  }, [fetchTasks]);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const apiData = await getAllLeaves();
      if (apiData.error) {
        console.error(apiData.error);
      } else {
        setMainData(apiData.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
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

  return (
    <div className="bg-white" style={{ height: "100%" }}>
      <br />
      <br />
      <h2 className="greeting-header">{greeting}</h2>
      <div className="row">
        <div className="col-lg-6" style={{ height: "400px" }}>
          <Board tasks={tasks} /> {/* Pass tasks to the Board component */}
        </div>
        <div className="col-lg-6" style={{ height: "400px", paddingRight: "25px" }}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            // events={transformedEvents}
          />
        </div>
        <div className="col-lg-12" style={{ marginTop: "12%" }}></div>
      </div>
    </div>
  );
}

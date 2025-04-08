import React, { useState, useContext, useEffect } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { TaskContext } from "../../context/TaskContext";
import Board from "./Board";

const TaskManager = () => {
  const { tasks, fetchTasks, addTask, updateTask, deleteTask } =
    useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [taskId, setTaskId] = useState(null);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateTask({ _id: taskId, title });
    } else {
      addTask({ _id: Date.now().toString(), title });
    }
    handleClose();
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setTaskId(task._id);
    setIsEdit(true);
    handleShow();
  };

  const handleAdd = () => {
    setTitle("");
    setIsEdit(false);
    handleShow();
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div>
      <h1>Task Manager</h1>
      <Button onClick={handleAdd}>Add Task</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(task)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => deleteTask(task._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit Task" : "Add Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTaskTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isEdit ? "Update" : "Create"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskManager;

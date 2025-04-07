import React, { useState, useCallback, useMemo, useEffect } from "react";
import styles from "./DataTable.module.scss";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import "react-data-table-component-extensions/dist/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./task.css";
import {
  getAllCities,
  addCity,
  updateCity,
  getProjectById,
  getUsers,
  createTask,
  updateTask,
  addTodoInTask,
  getTaskById,
  updateTodoById,
  addFilesInTask,
} from "../../utils/api";
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import Select from "react-select";

import {
  Button,
  Card,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Row,
  Table,
  InputGroup,
} from "react-bootstrap";
const headersColumn = (name, value2) => {
  return {
    Header: name.toUpperCase(),
    accessor: value2 ? value2 : "no",
    className: "text-center wd-15p border-bottom-0",
    id: name,
    // Cell: (props) => <div style={{textAlign:"left"}}>{value2}</div>,
  };
};

const TaskDetails = () => {
  function StatusPopup({
    onSelect,
    options = ["Status 1", "Status 2", "Status 3"],
  }) {
    return (
      <div className="status-popup">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => onSelect(option)}
            className="status-option"
          >
            {option}
          </div>
        ))}
      </div>
    );
  }
  let { id } = useParams();
  const navigate = useNavigate();

  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage1Update, setSelectedImage1Update] = useState(null);
  const [largeShow, setlargeShow] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [customersData, setCustomersData] = useState([]);

  const largemodalClose = () => setlargeShow(false);
  const largemodalShow = () => setlargeShow(true);
  const [InputShow, setInputShow] = useState(false);

  const [largeShow2, setlargeShow2] = useState(false);
  const largemodalClose2 = () => setlargeShow2(false);
  const largemodalShow2 = () => setlargeShow2(true);

  const handleClose3 = () => setInputShow(false);
  const handleShow3 = () => setInputShow(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [mainData, setMainData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleStatusClick = (value) => {
    setShowPopup(value);
    console.log("Popup should be:", !showPopup);
  };

  const setErrorToast = (errorFromBackend) => {
    toast.error(
      <p className="text-white tx-16 mb-0">
        Error: {error.length > 0 ? error : errorFromBackend}
      </p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: "colored",
      }
    );
  };

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      let payload = {
        id: id,
      };
      const apiData = await getTaskById(payload);
      if (apiData.error) {
        setError(apiData.error);
      } else {
        console.log("getData getTaskById", apiData.data);
        setMainData(apiData.data);
      }
      const apiData2 = await getUsers();
      if (apiData2.error) {
        setError(apiData2.error);
      } else {
        console.log("getCustomers", apiData2.data);

        const data = [];
        apiData2.data?.map((cData, i) => {
          let abc = {
            label: cData.firstName + cData.lastName,
            value: cData._id,
          };
          data.push(abc);
        });
        setCustomersData(data);
      }
    } catch (err) {
      console.log("err", err.name);
      if (err.response) {
        setError(err.response.data.message);
        setErrorToast(err.response.data.message);
      } else if (err.name === "AxiosError") {
        setError(err.message);
        setErrorToast(err.message);
      } else {
        setError("something went wrong");
        setErrorToast("something went wrong");
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [id]);

  const formsSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    if (selectedImage1) {
      formData.append("file", selectedImage1);
    }
    // if (selectedCustomer) {
    //   formData.append("assignee", selectedCustomer);
    // }
    // console.log("formData", formData);
    const formJson = Object.fromEntries(formData.entries());
    addData(formJson);
    setLoading(false);
  };
  const formsSubmit2 = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // if (selectedImage1) {
    //   formData.append("file", selectedImage1);
    // }
    // if (selectedCustomer) {
    //   formData.append("assignee", selectedCustomer);
    // }
    // console.log("formData", formData);
    const formJson = Object.fromEntries(formData.entries());
    addData2(formJson);
    setLoading(false);
  };
  const formsSubmitUpdate = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // if (selectedImage1) {
    //   formData.append("file", selectedImage1);
    // }
    // if (selectedCustomer) {
    //   formData.append("assignee", selectedCustomer);
    // }
    const formJson = Object.fromEntries(formData.entries());
    console.log("formJsonformJson", formJson);
    updateData(formJson);
    setLoading(false);
  };

  const addData = async (body) => {
    setError("");
    setSuccessMessage("");

    setLoading(true);

    try {
      const apiData = await addFilesInTask(body);
      if (apiData.error) {
        setError(apiData.error);
      } else {
        getData();
        handleClose3();
        setSelectedCustomer("");
        setSelectedImage1("");
        setModalData([]);
        toast.success(
          <p className="text-white tx-16 mb-0">
            Success : Data Added Successfully !
          </p>,
          {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: false,
            autoClose: 3000,
            theme: "colored",
          }
        );
      }
    } catch (err) {
      console.log("err", err.name);
      if (err.response) {
        setError(err.response.data.message);
        setErrorToast(err.response.data.message);
      } else if (err.name === "AxiosError") {
        setError(err.message);
        setErrorToast(err.message);
      } else {
        setError("something went wrong");
        setErrorToast("something went wrong");
      }
    }

    setLoading(false);
  };
  const addData2 = async (body) => {
    setError("");
    setSuccessMessage("");

    setLoading(true);

    try {
      const apiData = await addTodoInTask(body);
      if (apiData.error) {
        setError(apiData.error);
      } else {
        getData();
        console.log("apiData", apiData);
        // handleClose3();
        // setSelectedCustomer("");
        // setSelectedImage1("");
        // setModalData([]);
        // toast.success(
        //   <p className="text-white tx-16 mb-0">
        //     Success : Data Added Successfully !
        //   </p>,
        //   {
        //     position: toast.POSITION.TOP_RIGHT,
        //     hideProgressBar: false,
        //     autoClose: 3000,
        //     theme: "colored",
        //   }
        // );
      }
    } catch (err) {
      console.log("err", err.name);
      if (err.response) {
        setError(err.response.data.message);
        setErrorToast(err.response.data.message);
      } else if (err.name === "AxiosError") {
        setError(err.message);
        setErrorToast(err.message);
      } else {
        setError("something went wrong");
        setErrorToast("something went wrong");
      }
    }

    setLoading(false);
  };
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupName, setShowPopupName] = useState("");

  const handleStatusSelect = (status, name) => {
    // updateStatus(tData.id, status); // Assuming you have a method to update the status
    setShowPopup(true); // Hide popup after selection
    setShowPopupName(name); // Hide popup after selection
  };
  const updateData = async (body) => {
    setError("");
    setSuccessMessage("");

    setLoading(true);

    try {
      const apiData = await updateTodoById(body);
      if (apiData.error) {
        setError(apiData.error);
      } else {
        getData();
        setShowPopup(false);
        setShowPopupName("");
        largemodalClose();
        setSelectedCustomer("");
        setSelectedImage1("");
        setModalData([]);
        toast.success(
          <p className="text-white tx-16 mb-0">Success : Data Updated !</p>,
          {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: false,
            autoDlose: 3000,
            theme: "colored",
          }
        );
      }
    } catch (err) {
      console.log("err", err.name);
      if (err.response) {
        setError(err.response.data.message);
        setErrorToast(err.response.data.message);
      } else if (err.name === "AxiosError") {
        setError(err.message);
        setErrorToast(err.message);
      } else {
        setError("something went wrong");
        setErrorToast("something went wrong");
      }
    }

    setLoading(false);
  };

  const setModalFunction = (data) => {
    // console.log("modalData",data);
    // largemodalShow2();
    // setModalData(data);
    // setSelectedCustomer("");
    // setSelectedImage1("");
    navigate(`/taskDetails/subtask/${id}/${data._id}`);
  };
  return (
    <div className={styles.DataTable}>
      <PageHeader
        titles={`Task Details : ${mainData?.name}`}
        active="Retailers"
        items={["Tables"]}
      />

      <Row className="row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Task Name: {mainData && mainData?.name}
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Task Remark : {mainData && mainData?.remark}
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Sub Task:
                      </label>
                      <form
                        method="post"
                        onSubmit={formsSubmit2}
                        autocomplete="off"
                        encType="multipart/form-data"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-5">
                              <label htmlFor="">To Do Name</label>
                              <input
                                type="text"
                                name="name"
                                required
                                placeholder="Enter TO DO ( SUBTASK) "
                                className="form-control"
                              />
                              <input
                                type="hidden"
                                placeholder="Enter TO DO ( SUBTASK) "
                                name="id"
                                value={id}
                                className="form-control"
                              />
                            </div>
                            <div className="col-lg-5">
                              <label htmlFor="">To Do Status</label>
                              <select
                                className="form-control"
                                required
                                name="status"
                                id=""
                              >
                                <option value="TO DO">TO DO</option>
                                <option value="IN PROGRESS">IN PROGRESS</option>

                                <option value="DONE">DONE</option>
                                <option value="PAUSED">PAUSED</option>
                                <option value="NA">NA</option>
                              </select>
                            </div>
                            <div className="col-lg-2 mt-4">
                              <button
                                type="submit"
                                className="btn btn-primary mt-3"
                              >
                                Add <i className="fe fe-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <table className="table table-hover table-bordered">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>To Do</th>
                          <th>Status</th>
                          <th>File</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mainData &&
                          mainData.todo?.map((tData, i) => {
                            let color = "";
                            if (tData?.status === "TO DO") {
                              color = "bg-warning";
                            } else if (tData?.status === "IN PROGRESS") {
                              color = "bg-info";
                            } else if (tData?.status === "DONE") {
                              color = "bg-success";
                            } else if (tData?.status === "PAUSED") {
                              color = "bg-danger";
                            } else if (tData?.status === "NA") {
                              color = "bg-primary";
                            }

                            return (
                              <tr style={{ cursor: "pointer" }}>
                                <td
                                  onClick={() => {
                                    setModalFunction(tData);
                                  }}
                                >
                                  {i + 1}
                                </td>
                                <td
                                  onClick={() => {
                                    setModalFunction(tData);
                                  }}
                                >
                                  {tData?.name ? tData?.name : "Unknown"}
                                </td>
                                <td
                                  onClick={() => {
                                    handleStatusSelect(true, tData?.name);
                                  }}
                                  className={`${color} text-white`}
                                >
                                  {showPopup &&
                                  showPopupName === tData?.name ? (
                                    <select
                                      className={`form-control ${color} text-white`}
                                      required
                                      name="status"
                                      id=""
                                      onChange={(e) => {
                                        let obj = {
                                          name: tData?.name,
                                          todoId: tData && tData?._id,
                                          taskId: id,
                                          status: e.target.value,
                                        };
                                        updateData(obj);
                                      }}
                                    >
                                      <option
                                        selected={tData?.status === "TO DO"}
                                        value="TO DO"
                                      >
                                        TO DO
                                      </option>
                                      <option
                                        selected={
                                          tData?.status === "IN PROGRESS"
                                        }
                                        value="IN PROGRESS"
                                      >
                                        IN PROGRESS
                                      </option>

                                      <option
                                        selected={tData?.status === "DONE"}
                                        value="DONE"
                                      >
                                        DONE
                                      </option>
                                      <option
                                        selected={tData?.status === "PAUSED"}
                                        value="PAUSED"
                                      >
                                        PAUSED
                                      </option>
                                    </select>
                                  ) : (
                                    tData?.status
                                  )}
                                </td>
                                <td
                                // onClick={() => {
                                //   setModalFunction(tData);
                                // }}
                                >
                                  {tData?.files?.length}
                                </td>
                                <td
                                // onClick={() => {
                                //   setModalFunction(tData);
                                // }}
                                >
                                  <button
                                    onClick={() => {
                                      setModalData(tData);
                                      largemodalShow();
                                    }}
                                    className="btn btn-primary"
                                  >
                                    <i className="fe fe-edit"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>{" "}
                  <div className="col-lg-12">
                    {" "}
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Attachments
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <form
                      method="post"
                      onSubmit={formsSubmit}
                      autocomplete="off"
                      encType="multipart/form-data"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-5">
                            <label htmlFor="">Select File</label>
                            <input
                              type="file"
                              required
                              className="form-control"
                              accept="image/*"
                              onChange={(event) => {
                                console.log(
                                  "change image",
                                  event.target.files[0]
                                );
                                setSelectedImage1(event.target.files[0]);
                              }}
                            />
                            <input
                              type="hidden"
                              placeholder="Enter TO DO ( SUBTASK) "
                              name="id"
                              value={id}
                              className="form-control"
                            />
                          </div>

                          <div className="col-lg-2 mt-4">
                            <button
                              type="submit"
                              className="btn btn-primary mt-3"
                            >
                              Add Files<i className="fe fe-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <table className="table table-hover table-bordered">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mainData &&
                          mainData.files?.map((fData, i) => {
                            return (
                              <tr>
                                <td>{i + 1}</td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href={fData?.link}
                                    download={fData?.link}
                                  >
                                    Download <i className="fe fe-download"></i>
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal size="l" show={largeShow} onHide={largemodalClose}>
        <ModalHeader>
          <ModalTitle>Update</ModalTitle>
          <span className="d-flex ms-auto" onClick={largemodalClose}>
            <i className="fe fe-x ms-auto"></i>
          </span>
        </ModalHeader>
        <form
          method="post"
          onSubmit={formsSubmitUpdate}
          autocomplete="off"
          encType="multipart/form-data"
        >
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="">To Do Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    defaultValue={modalData && modalData?.name}
                    placeholder="Enter TO DO ( SUBTASK) "
                    className="form-control"
                  />
                  <input
                    type="hidden"
                    placeholder="Enter TO DO ( SUBTASK) "
                    name="todoId"
                    value={modalData && modalData?._id}
                    className="form-control"
                  />
                  <input
                    type="hidden"
                    placeholder="Enter TO DO ( SUBTASK) "
                    name="taskId"
                    value={id}
                    className="form-control"
                  />
                </div>
                <div className="col-lg-12">
                  <label htmlFor="">To Do Status</label>
                  <select className="form-control" required name="status" id="">
                    <option
                      selected={modalData && modalData?.status === "TO DO"}
                      value="TO DO"
                    >
                      TO DO
                    </option>
                    <option
                      selected={
                        modalData && modalData?.status === "IN PROGRESS"
                      }
                      value="IN PROGRESS"
                    >
                      IN PROGRESS
                    </option>

                    <option
                      selected={modalData && modalData?.status === "DONE"}
                      value="DONE"
                    >
                      DONE
                    </option>
                    <option
                      selected={modalData && modalData?.status === "PAUSED"}
                      value="PAUSED"
                    >
                      PAUSED
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </Modal.Body>
          <ModalFooter>
            <Button variant="secondary" onClick={largemodalClose}>
              Close
            </Button>

            <Button variant="primary" type="submit">
              {loading ? "Loading...." : "Update"}
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default TaskDetails;

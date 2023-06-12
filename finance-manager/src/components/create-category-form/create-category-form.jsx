import { useEffect } from "react";
import axios from "axios";

import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import "./create-category-form.css";

const CreateCategoryForm = ({ state, updateState, getData }) => {
  useEffect(() => {
    getData();
  }, []);

  // https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557

  const handleChanghe = ({ target }) => {
    const { name, value } = target;

    updateState({ [name]: value });
  };

  const submit = (event) => {
    event.preventDefault();

    const payload = {
      name: state.name,
      body: state.body,
      value: state.value,
    };

    axios({
      url: "/save",
      method: "POST",
      data: payload,
    })
      .then((resposne) => {
        console.log("data has been saved to the server", resposne.data);
        resetUserInputs();
        getData();
      })
      .catch(() => {
        console.log("internal server error");
      });
  };

  const submitEditing = (id) => {
    axios
      .put(`/edit/${id}`, {
        name: state.name,
        body: state.body,
        value: state.value,
      })
      .then((resposne) => {
        console.log("data has been updated", resposne.data);
        resetUserInputs();
        updateState({ isEditing: { status: false, id: "" } });
        getData();
      })
      .catch(() => {
        console.log("internal server error");
      });
  };

  const resetUserInputs = () => {
    updateState({
      name: "",
      body: "",
      value: "",
    });
  };

  if (state.isEditing.status) {
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          submitEditing(state.isEditing.id);
        }}
        className="form-container"
      >
        <hr
          style={{
            marginTop: "0",
          }}
        />
        <Alert variant="success">
          <Alert.Heading>Edit category</Alert.Heading>
        </Alert>
        <div className="form">
          <Row>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                required
                maxLength={15}
                onChange={handleChanghe}
              />
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                name="value"
                placeholder="Price"
                value={state.value}
                required
                maxLength={8}
                onChange={handleChanghe}
              />
            </Col>
          </Row>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{ marginTop: "1rem" }}
          >
            <Form.Control
              as="textarea"
              type="text"
              name="body"
              placeholder="Description"
              rows={1}
              maxLength={90}
              value={state.body}
              onChange={handleChanghe}
            />
          </Form.Group>
        </div>
        <div className="form-btns">
          <Button type="submit" variant="success" className="add-category-btn">
            SAVE CHANGES
          </Button>
          <Button
            variant="danger"
            className="add-category-btn"
            onClick={() => {
              resetUserInputs();
              updateState({ isEditing: { status: false, id: "" } });
            }}
          >
            CANCEL
          </Button>
        </div>
        <hr />
      </Form>
    );
  } else {
    return (
      <Form onSubmit={submit} className="form-container">
        <hr
          style={{
            marginTop: "0",
          }}
        />
        <Alert variant="primary">
          <Alert.Heading>Create new category</Alert.Heading>
        </Alert>
        <div className="form">
          <Row>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                required
                maxLength={15}
                onChange={handleChanghe}
              />
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                name="value"
                placeholder="Price"
                value={state.value}
                required
                maxLength={8}
                onChange={handleChanghe}
              />
            </Col>
          </Row>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{ marginTop: "1rem" }}
          >
            <Form.Control
              as="textarea"
              type="text"
              name="body"
              placeholder="Description"
              rows={1}
              maxLength={90}
              value={state.body}
              onChange={handleChanghe}
            />
          </Form.Group>
        </div>
        <div className="form-btns">
          <Button type="submit" variant="primary" className="add-category-btn">
            ADD CATEGORY
          </Button>
          <Button
            disabled={state.name || state.value || state.body ? false : true}
            variant="danger"
            className="add-category-btn"
            onClick={resetUserInputs}
          >
            CANCEL
          </Button>
        </div>
        <hr />
      </Form>
    );
  }
};

export default CreateCategoryForm;

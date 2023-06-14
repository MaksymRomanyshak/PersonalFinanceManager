import axios from "axios";

import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import "./create-category-form.css";

const CreateCategoryForm = ({ state, updateState, getData }) => {
  const { name, body, value, isEditing } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    updateState({ [name]: value });
  };

  const submit = () => {
    const payload = {
      name: name,
      body: body,
      value: value,
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
        name: name,
        body: body,
        value: value,
      })
      .then((response) => {
        console.log("data has been updated. Old data:", response.data);
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

  if (isEditing.status) {
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          submitEditing(isEditing.id);
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
                value={name}
                required
                maxLength={15}
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                name="value"
                placeholder="Price"
                value={value}
                required
                maxLength={8}
                onChange={(event) => {
                  handleChange(event);
                }}
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
              value={body}
              onChange={(event) => {
                handleChange(event);
              }}
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
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
        className="form-container"
      >
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
                value={name}
                required
                maxLength={15}
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                name="value"
                placeholder="Price"
                value={value}
                required
                onChange={(event) => {
                  handleChange(event);
                }}
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
              value={body}
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Form.Group>
        </div>
        <div className="form-btns">
          <Button type="submit" variant="primary" className="add-category-btn">
            ADD CATEGORY
          </Button>
          <Button
            disabled={name || value || body ? false : true}
            variant="danger"
            className="add-category-btn"
            onClick={() => {
              resetUserInputs();
            }}
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

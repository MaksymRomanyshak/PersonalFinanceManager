import { Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import "./create-category-formю.css";

const CreateCategoryForm = ({ state, updateState, getData }) => {
  useEffect(() => {
    getData();
  }, []);

  // const getData = () => {
  //   axios
  //     .get("./api")
  //     .then((resposne) => {
  //       updateState({ posts: resposne.data });
  //     })
  //     .catch((err) => {
  //       console.log(err.msg);
  //     });
  // };

  // const deleteData = () => {
  //   axios
  //     .delete("/delete")
  //     .then((resposne) => {
  //       updateState({ posts: resposne.data });
  //       getData();
  //     })
  //     .catch((err) => {
  //       console.log(err.msg);
  //     });
  // };

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

  const resetUserInputs = () => {
    updateState({
      name: "",
      body: "",
      value: "",
    });
  };

  return (
    <Form onSubmit={submit} className="form-container">
      <hr
        style={{
          marginTop: "0",
        }}
      />
      <h3>Create new category</h3>
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
      <Button type="submit" variant="dark" className="add-category-btn">
        ADD CATEGORY
      </Button>
      <hr />
    </Form>
  );
};

export default CreateCategoryForm;

import { Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

const CreateCategoryForm = ({ state, updateState }) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("./api")
      .then((resposne) => {
        updateState({ posts: resposne.data });
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
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
      .then(() => {
        console.log("data has been saved to the server");
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
    <Form onSubmit={submit}>
      <Row>
        <Col>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Categogy name"
            value={state.name}
            onChange={handleChanghe}
          />
        </Col>
        <Col>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            name="value"
            placeholder="Categogy sum"
            value={state.value}
            onChange={handleChanghe}
          />
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          type="text"
          name="body"
          placeholder="Description"
          rows={1}
          value={state.body}
          onChange={handleChanghe}
        />
      </Form.Group>
      <button>submit</button>
    </Form>
  );
};

export default CreateCategoryForm;

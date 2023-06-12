import { Button } from "react-bootstrap";
import { useEffect } from "react";

const CategoryItem = ({ category, deleteData, updateState, state }) => {
  const { _id, name, body, value, date } = category;

  useEffect(() => {
    if (state.isEditing.status) {
      displayValue();
    }
  }, [state.isEditing]);

  const displayValue = () => {
    const posts = state.posts;
    for (const el of posts) {
      if (el._id === state.isEditing.id) {
        updateState({
          name: el.name,
          body: el.body,
          value: el.value,
        });
      }
    }
  };

  return (
    <tbody>
      <tr>
        <td></td>
        <td>{name}</td>
        <td>{body}</td>
        <td>{value}$</td>
        <td>{date}</td>
        <td style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outline-success"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              updateState({ isEditing: { status: true, id: _id } });
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              deleteData(_id);
            }}
            variant="outline-danger"
          >
            Delete
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default CategoryItem;

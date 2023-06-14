import { Button } from "react-bootstrap";
import { useEffect } from "react";

const CategoryItem = ({ category, deleteData, updateState, state }) => {
  const { _id, name, body, value, date } = category;
  const { posts, isEditing } = state;

  useEffect(() => {
    if (isEditing.status) {
      displayValue();
    }
  }, [isEditing]);

  const displayValue = () => {
    for (const el of posts) {
      if (el._id === isEditing.id) {
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

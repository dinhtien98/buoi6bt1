import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewStudent, deleteStudent } from "../redux/listSlice";
import Add from "./Add";
import { Container, ListGroup, ListGroupItem ,Input} from "reactstrap";

export default function Todolist() {
  const [flag, setFlag] = useState("");
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const handle_add = (text) => {
    dispatch(addNewStudent(text));
  };
  const filterStudent = (list, flag) => {
    if (flag == "checked") {
      return list.filter((item) => item.checked);
    } else if (flag == "nochecked") {
      return list.filter((item) => !item.checked);
    } else {
      return list;
    }
  };
  return (
    <div>
      <Container>
        <Add handle_add={handle_add} />
        <ListGroup>
          {filterStudent(students, flag).map((item, index) => (
            <ListGroupItem key={index} className="my-1">
              <Input
                type="checkbox"
                checked={item.checked}
              />
              {item.name}
              <button onClick={() => dispatch(deleteStudent(item.id))}>
                X
              </button>
            </ListGroupItem>
          ))}
        </ListGroup>
        <button onClick={() => setFlag("checked")}>checked</button>
        <button onClick={() => setFlag("nochecked")}>nochecked</button>
        <button onClick={() => setFlag("")}>clear</button>
      </Container>
    </div>
  );
}

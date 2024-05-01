import { Col, Row, Input, Button, Select, Tag, Form } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actions";
import { v4 as uuidv4 } from "uuid";
import { todoRemainingSelector } from "../Redux/selectors";
import { todoSlice } from "../Todo/TodoSlice";

export default function TodoList({ form }) {
  const dispatch = useDispatch();
  const todoListStore = useSelector(todoRemainingSelector);
  const allStore = useSelector((state) => state);
  console.log('allStore:', allStore)

  console.log("todoListStore", todoListStore);

  const handleAddTodo = () => { 
    const formValues = form.getFieldsValue();

    if (formValues?.todoName && formValues?.todoPriority) {
      dispatch(
        todoSlice.actions.add({
          id: uuidv4(),
          content: formValues?.todoName,
          priority: formValues?.todoPriority,
          status: "Todo",
        })
      );
    }
    form.setFieldsValue({ todoName: "", todoPriority: "Medium" });
  };

  const renderTodoList = () => {
    if (todoListStore?.length === 0) return;

    return todoListStore.map((todo) => {
      return (
        <Todo
          key={todo?.id}
          name={todo?.content}
          prioriry={todo?.priority}
          id={todo?.id}
          completed={todo.completed}
        />
      );
    });
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24}>{renderTodoList()}</Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Form.Item name="todoName">
            <Input />
          </Form.Item>

          <Form.Item name="todoPriority" initialValue={"Medium"}>
            <Select>
              <Select.Option value="High" label="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="gray">Low</Tag>
              </Select.Option>
            </Select>
          </Form.Item>
          <Button type="primary" onClick={() => handleAddTodo()}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

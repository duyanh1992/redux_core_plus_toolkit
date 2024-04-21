import { Typography, Divider, Form } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Form form={form}>
        <Filters form={form} />
        <Divider />
        <TodoList form={form} />
      </Form>
    </div>
  );
}

export default App;

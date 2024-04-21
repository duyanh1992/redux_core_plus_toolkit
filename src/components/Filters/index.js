import { Col, Row, Input, Typography, Radio, Select, Tag, Form } from "antd";
import { onFilterStatus, onSearchTodo } from "../Redux/actions";
import { useDispatch } from "react-redux";

const { Search } = Input;

export default function Filters({ form }) {
  const dispatch = useDispatch();

  const handleSeaching = () => {
    const formValues = form.getFieldsValue();

    dispatch(onSearchTodo({ search: formValues?.filterSearch }));
  };

  const handleSelectStatus = () => {
    const formValues = form.getFieldsValue();

    if (formValues?.filterStatus) {
      dispatch(onFilterStatus({ status: formValues?.filterStatus }));
    }
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>

        <Form.Item name="filterSearch">
          <Search
            placeholder="Input search text"
            onSearch={() => handleSeaching()}
          />
        </Form.Item>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>

        <Form.Item name="filterStatus">
          <Radio.Group onChange={() => handleSelectStatus()}>
            <Radio value="All">All</Radio>
            <Radio value="Completed">Completed</Radio>
            <Radio value="Todo">To do</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>

        <Form.Item name="filterPriority">
          <Select
            mode="multiple"
            allowClear
            placeholder="Please select"
            style={{ width: "100%" }}
          >
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
      </Col>
    </Row>
  );
}

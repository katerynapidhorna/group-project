import React, { useState } from "react";

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./Snippet.css";

// import { selectToken } from "../../store/user/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, Link } from "react-router-dom";

export default function Snippet(props) {
  const [title, setTitle] = useState(props.snippet?.title);
  const [snippet, setSnippet] = useState(props.snippet?.snippet);

  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  // const history = useHistory();

  //   useEffect(() => {
  //     if (token === null) {
  //       history.push("/login");
  //     }
  //   }, [token, history]);

  return (
    <Container className="snippet">
      snippet component
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h4 className="mt-5 mb-5">some header</h4>
        <Form.Group controlId="formBasicName">
          <Form.Label>title</Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="snippet title here"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>snippet code</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={snippet}
            onChange={(event) => setSnippet(event.target.value)}
            type="text"
            placeholder="snippet here"
            required
          />

          <Form.Text className="text-muted">blabla</Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}

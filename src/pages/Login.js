import React, { useContext } from "react";
import { Form, Input, Card, Divider, Grid, Button } from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";
import { useHistory, Link } from "react-router-dom";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

function Login() {
  const context = useContext(AuthContext);
  const history = useHistory();

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      history.push("/");
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  const formRegister = (
    <Form onSubmit={onSubmit} className={loading ? "loading" : ""}>
      <Form.Field
        fluid
        control={Input}
        label="Username"
        name="username"
        type="text"
        value={values.username}
        placeholder="username"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="password"
        name="password"
        value={values.password}
        label="Password"
        placeholder="Password"
        onChange={onChange}
      />
      <Button.Group floated="right">
        <Button type="submit" color="blue" content="Login" />
        <Button.Or />
        <Button
          basic
          type="button"
          as={Link}
          to="/register"
          color="blue"
          content="Register"
        />
      </Button.Group>
    </Form>
  );

  return (
    <div>
      <div>
        <Divider hidden />
      </div>
      <div>
        <Divider hidden />
      </div>
      <div>
        <Divider hidden />
      </div>
      <div>
        <Divider hidden />
      </div>
      <Grid centered columns={2}>
        <Grid.Column>
          <Card fluid>
            <Card.Content header="Login" />
            <Card.Content description={formRegister} />
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

const LOGIN_USER = gql`
  mutation register($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      token
    }
  }
`;

export default Login;

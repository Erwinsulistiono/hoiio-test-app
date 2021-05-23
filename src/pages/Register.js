import React, { useContext } from "react";
import { Form, Input, Card, Divider, Grid, Button } from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

function Register() {
  const context = useContext(AuthContext);
  const history = useHistory();

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      history.push("/");
    },
    variables: values,
  });

  function registerUser() {
    addUser();
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
        name="email"
        type="email"
        value={values.email}
        label="E-Mail"
        placeholder="email"
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
      <Form.Field
        fluid
        control={Input}
        type="password"
        value={values.confirmPassword}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm Password"
        onChange={onChange}
      />
      <Button.Group floated="right">
        <Button
          type="button"
          basic
          as={Link}
          to="/login"
          color="blue"
          content="Login"
        />
        <Button.Or />
        <Button type="submit" color="blue" to="/add-call" content="Register" />
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
            <Card.Content header="Register" />
            <Card.Content description={formRegister} />
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      token
    }
  }
`;

export default Register;

import React, { useContext } from "react";
import { Form, Input, Card, Divider, Grid, Button } from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

function AddCall() {
  const context = useContext(AuthContext);
  const history = useHistory();

  const { onChange, onSubmit, values } = useForm(registerUser, {
    to: {
      key: "",
      label: "",
      number: "",
    },
    from: {
      key: "",
      label: "",
      number: "",
    },
    type: "",
    status: "",
    endTime: "",
    orgUuid: "",
    txnUuid: "",
    startTime: "",
    answerTime: "",
    webhookCode: "",
    durationInMinutes: "",
    durationInSeconds: "",
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
      <Form.Group inline>
        <label>To : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <Form.Field width={4}>
          <Input
            placeholder="Key"
            type="text"
            name="key"
            value={values.to.key}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field width={4}>
          <Input
            placeholder="Label"
            type="text"
            name="label"
            value={values.to.label}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field width={6}>
          <Input
            placeholder="Number"
            type="text"
            name="number"
            value={values.to.number}
            onChange={onChange}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group inline>
        <label>From : </label>
        <Form.Field width={4}>
          <Input
            placeholder="Key"
            type="text"
            name="key"
            value={values.from.key}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field width={4}>
          <Input
            placeholder="Label"
            type="text"
            name="label"
            value={values.from.label}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field width={6}>
          <Input
            placeholder="Number"
            type="text"
            name="number"
            value={values.from.number}
            onChange={onChange}
          />
        </Form.Field>
      </Form.Group>
      <Divider hidden />
      <Form.Field
        fluid
        control={Input}
        label="Type"
        name="type"
        type="text"
        value={values.type}
        placeholder="Type"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        name="status"
        type="text"
        value={values.status}
        label="Status"
        placeholder="Status"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="text"
        name="endTime"
        value={values.endTime}
        label="End Time"
        placeholder="End Time"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="text"
        value={values.orgUuid}
        name="orgUuid"
        label="orgUuid"
        placeholder="orgUuid"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="text"
        value={values.txnUuid}
        name="txnUuid"
        label="txnUuid"
        placeholder="txnUuid"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="text"
        value={values.startTime}
        name="startTime"
        label="Start Time"
        placeholder="Start Time"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="text"
        value={values.answerTime}
        name="answerTime"
        label="Answer Time"
        placeholder="Answer Time"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="text"
        value={values.webhookCode}
        name="webhookCode"
        label="Webhook Code"
        placeholder="Webhook Code"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="number"
        value={values.durationInMinutes}
        name="durationInMinutes"
        label="Duration (Minutes)"
        placeholder="Duration"
        onChange={onChange}
      />
      <Form.Field
        fluid
        control={Input}
        type="number"
        value={values.durationInSeconds}
        name="durationInSeconds"
        label="Duration (Seconds)"
        placeholder="Duration"
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
  mutation createCall(
    $to: InputTo
    $from: inputFrom
    $type: String!
    $status: String!
    $endTime: String!
    $orgUuid: String!
    $txnUuid: String!
    $startTime: String!
    $answerTime: String
    $webhookCode: String
    $durationInMinutes: String
    $durationInSeconds: String
  ) {
    call(
      createCall: {
        to: { key: $key, label: $label, number: $number }
        from: { key: $key, label: $label, number: $number }
        type: $type
        status: $status
        endTime: $endTime
        orgUuid: $orgUuid
        txnUuid: $txnUuid
        startTime: $startTime
        answerTime: $answerTime
        webhookCode: $webhookCode
        durationInMinutes: $durationInMinutes
        durationInSeconds: $durationInSeconds
      }
    ) {
      id
      to {
        key
        label
        number
      }
      from {
        key
        label
        number
      }
      type
      status
      endTime
      orgUuid
      txnUuid
      startTime
      answerTime
      webhookCode
      durationInMinutes
      durationInSeconds
    }
  }
`;

export default AddCall;

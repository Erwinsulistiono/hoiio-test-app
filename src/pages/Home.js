import React from "react";
import { Table, Divider, Header, Button } from "semantic-ui-react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import ShimmerHome from "../components/ShimmerHome";

function Home() {
  const { loading, error, data } = useQuery(FETCH_CALL_QUERY);
  let [
    ingoing,
    outgoing,
    answeredOut,
    answeredIn,
    unansweredOut,
    unansweredIn,
    failedOut,
    failedIn,
    busyOut,
    busyIn,
  ] = Array(10).fill(0);
  let durationIn = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  let durationOut = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  let totalDuration = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (loading) return <ShimmerHome />;
  if (data) {
    data.calls.forEach((el) => {
      if (el.type === "outgoing") outgoing++;
      if (el.type === "ingoing") ingoing++;
      if (el.status === "answered" && el.type === "outgoing") answeredOut++;
      if (el.status === "answered" && el.type === "ingoing") answeredIn++;
      if (el.status === "unanswered" && el.type === "outgoing") unansweredOut++;
      if (el.status === "unanswered" && el.type === "ingoing") unansweredIn++;
      if (el.status === "failed" && el.type === "outgoing") failedOut++;
      if (el.status === "failed" && el.type === "ingoing") failedIn++;
      if (el.status === "busy" && el.type === "outgoing") busyOut++;
      if (el.status === "busy" && el.type === "ingoing") busyIn++;
      if (el.type === "ingoing") {
        if (durationIn.minutes >= 60) {
          durationIn.hours += 1;
          durationIn.minutes -= 60;
        } else {
          durationIn.minutes += Number(el.durationInMinutes);
        }

        if (durationIn.seconds >= 60) {
          durationIn.minutes += 1;
          durationIn.seconds -= 60;
        } else {
          durationIn.seconds += Number(el.durationInSeconds);
        }
      }
      if (el.type === "outgoing") {
        if (durationOut.minutes >= 60) {
          durationOut.hours += 1;
          durationOut.minutes -= 60;
        } else {
          durationOut.minutes += Number(el.durationInMinutes);
        }

        if (durationOut.seconds >= 60) {
          durationOut.minutes += 1;
          durationOut.seconds -= 60;
        } else {
          durationOut.seconds += Number(el.durationInSeconds);
        }
      }
    });
  }

  totalDuration.hours = durationIn.hours + durationOut.hours;
  totalDuration.minutes = durationIn.minutes + durationOut.minutes;
  totalDuration.seconds = durationIn.seconds + durationOut.seconds;
  if (totalDuration.minutes >= 60) {
    totalDuration.hours += 1;
    totalDuration.minutes -= 60;
  }
  if (totalDuration.seconds >= 60) {
    totalDuration.minutes += 1;
    totalDuration.seconds -= 60;
  }

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
      <Header as="h1">Dashboard</Header>
      <div>
        <Divider hidden />
      </div>
      {error ? (
        <Header as="h4" textAlign="center">
          Cannot Fetch Data...
        </Header>
      ) : (
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Inbound</Table.HeaderCell>
              <Table.HeaderCell>Outbound</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Call</Table.Cell>
              <Table.Cell>{ingoing}</Table.Cell>
              <Table.Cell>{outgoing}</Table.Cell>
              <Table.Cell>{ingoing + outgoing}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Answered Status</Table.Cell>
              <Table.Cell>{answeredIn}</Table.Cell>
              <Table.Cell>{answeredOut}</Table.Cell>
              <Table.Cell>{answeredIn + answeredIn}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Unanswered Status</Table.Cell>
              <Table.Cell>{unansweredIn}</Table.Cell>
              <Table.Cell>{unansweredOut}</Table.Cell>
              <Table.Cell>{unansweredIn + unansweredOut}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Failed Status</Table.Cell>
              <Table.Cell>{failedIn}</Table.Cell>
              <Table.Cell>{failedOut}</Table.Cell>
              <Table.Cell>{failedIn + failedOut}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Busy Status</Table.Cell>
              <Table.Cell>{busyIn}</Table.Cell>
              <Table.Cell>{busyOut}</Table.Cell>
              <Table.Cell>{busyOut + busyIn}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Total Duration</Table.Cell>
              <Table.Cell>
                {durationIn.hours > 0 && `${durationIn.hours} Hours, `}
                {durationIn.minutes} Minutes, {durationIn.seconds} Seconds
              </Table.Cell>
              <Table.Cell>
                {durationOut.hours > 0 && `${durationOut.hours} Hours, `}
                {durationOut.minutes} Minutes, {durationOut.seconds} Seconds
              </Table.Cell>
              <Table.Cell>
                {totalDuration.hours > 0 && `${totalDuration.hours} Hours, `}
                {totalDuration.minutes} Minutes, {totalDuration.seconds} Seconds
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )}

      <div>
        <Divider hidden />
      </div>
      <div>
        <Button.Group floated="right" labeled icon>
          <Button
            color="blue"
            icon="plus"
            as={Link}
            to="/add-call"
            content="Add"
          />
        </Button.Group>
      </div>
    </div>
  );
}

const FETCH_CALL_QUERY = gql`
  {
    calls {
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

export default Home;

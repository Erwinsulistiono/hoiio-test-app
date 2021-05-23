import React from "react";
import { Table, Divider, Header } from "semantic-ui-react";

import "../App.css";

function ShimmerHome() {
  const skeletonFill = "comment br animate";

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

      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>
              <div className={skeletonFill}></div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div className={skeletonFill}></div>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <div className={skeletonFill}></div>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
            <Table.Cell>
              <div className={skeletonFill}></div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default ShimmerHome;

import React from "react";
import { Card, Row, Table } from "react-bootstrap";

export const List = ({ data, name }) => {
  return (
    <Row className="mt-5">
      <div className="col">
        <Card className="bg-default ">
          <Card.Header>
            <h3 className="text-white mb-0"> Les {name}</h3>
          </Card.Header>
          <Table responsive>
            <thead>
              <tr>
                {Object.keys(data[0]).map((a, i) => {
                  return (
                    <th key={a + i} scope="col">
                      {a}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {Array.from(data).map((a, i) => {
                return (
                  <tr key={a + i}>
                    {Object.keys(a).map((b, c) => {
                      return <td key={b + c}>{a[b]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </div>
    </Row>
  );
};

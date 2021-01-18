import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const FAQ = () => {
  return (
    <>
      {" "}
      <Collapse defaultActiveKey={[""]}>
        <Panel header="Where do you got the map data from?" key="1">
          <p>
            The data of the points on the map were exported from openStreetMap. They are regularly updated by us.
          </p>
        </Panel>
        <Panel header="Where do you got the chart data from?" key="2">
          <p>
            The data used for the various charts come from the following sources:
          </p>
          <ul>
            <li>Waste in Münster over the years:</li>
            <li>Waste of Private Households: </li>
            <li>Waste Amount Development:</li>
          </ul>
        </Panel>
        <Panel header="Will the app remain free of charge?" key="3">
          <p>
            The app is free for everyone and can be used without advertising. This will continue to be the case.
          </p>
        </Panel>
        <Panel header="Got any further questions?" key="4">
          <p>
            Contact us here!
          </p>
        </Panel>
      </Collapse>
    </>
  );
};

export default FAQ;

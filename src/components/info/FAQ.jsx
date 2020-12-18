import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const FAQ = () => {
  return (
    <>
      {" "}
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="first question?" key="1">
          <p>
          Answer
          </p>
        </Panel>
        <Panel header="second?" key="2">
          <p>
           Answer
          </p>
        </Panel>
        <Panel header="Got any further questions?" key="3" disabled>
          <p>
            Answer
          </p>
        </Panel>
      </Collapse>
    </>
  );
};

export default FAQ;

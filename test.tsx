import React from "react";
import ReactDOM from "react-dom";
import "./test.css";

interface ITestBoxProps {
  color?: string;
}

const TestBox: React.FunctionComponent<ITestBoxProps> = (
  props: ITestBoxProps
): JSX.Element => {
  return <div className={`box ${props.color ?? "blue"}`}></div>;
};

const defaultExport = {
  render: (parentId: string, props: ITestBoxProps) =>
    ReactDOM.render(
      <TestBox {...props}></TestBox>,
      document.getElementById(parentId)
    ),
};

export default defaultExport;

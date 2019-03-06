import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Welcome = props => <h1>Hello {props.name}!</h1>;

const Element = React.createElement(
  "h2",
  { className: "element" },
  "Element created with 'React.createElement'"
);

class Pure extends React.PureComponent {
  render() {
    return <div>The app contains Pure Components.</div>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.text = "This is an awesome React app";
  }

  render() {
    return (
      <div>
        <Welcome name="World" />
        <p>{this.text}</p>
        <Pure />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(Element, document.getElementById("element"));

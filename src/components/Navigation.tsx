import React from "react";

interface INavigationProps {}

interface INavigationState {
  updated: boolean;
  show: boolean;
  color: string;
}

export default class Navigation extends React.Component<
  INavigationProps,
  INavigationState
> {
  constructor(props: string) {
    super(props);
    this.state = {
      updated: true,
      show: true,
      color: "lightblue",
    };
    console.log("Constructor ran.");
  }
  componentDidMount() {
    // const button: HTMLButtonElement | null = document.querySelector("button");
    document.addEventListener("click", this.changeColor);
  }
  componentDidUpdate() {
    console.log('"componentDidUpdate()" ran.');
  }
  componentWillUnmount() {
    console.log('"componentWillUnmount()" ran.');
  }
  testUpdate = () => {
    this.setState({ updated: !this.state.updated });
  };
  removeMe = () => {
    this.setState({ show: false });
  };

  changeColor = () => {
    this.setState({
      color: "lightgreen",
    });
  };
  render() {
    console.log("Render ran.");
    if (this.state.show === true)
      return (
        <nav id="navigation" style={{ backgroundColor: this.state.color }}>
          <h2>Website Navigation</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" onClick={this.testUpdate}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={this.removeMe}>
                Services
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div>
            <button onClick={this.changeColor}>Change Color</button>
          </div>
        </nav>
      );
    else return null;
  }
}

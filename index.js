import React from "react";
import ReactDom from "react-dom";
import WeatherDisplay from "./WeatherDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <WeatherDisplay lat={this.state.lat} />;
    }
    return <Spinner />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));

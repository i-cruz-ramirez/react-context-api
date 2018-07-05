import React, { Component } from "react";
import ReactDOM from "react-dom";
import ButtonA from "../components/ButtonA.component";
import ButtonB from "../components/ButtonB.component";
import { SharedSnackbarProvider } from "../contexts/SharedSnackbar.context";

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
};

export default class Parent extends Component {
  render() {
    return (
      <div style={styles.app}>
        <SharedSnackbarProvider>
          <ButtonA />
          <ButtonB />
        </SharedSnackbarProvider>
      </div>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from "../List";
import FormAdd from "../Form/Add";
import FormEdit from "../Form/Edit";

import { setItems } from "../../redux/actions/";
import "./index.scss";

class App extends Component {
  componentDidMount() {
    this.props.setItems();
  }
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-box">
            <header className="app-header">
              <span className="app-title">Shopping Cart </span>
            </header>
            <Route exact path="/" component={List} />
            <Route exact path="/add" component={FormAdd} />
            <Route exact path="/edit/:id" component={FormEdit} />

            <footer className="app-footer">
              <span classname="footer-title" />
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  setItems: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setItems,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(App);

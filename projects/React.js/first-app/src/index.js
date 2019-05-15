import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
    render() {
        return <button> Click me! </button>
    }
}

ReactDOM.render( < Welcome /> , document.getElementById("root"));
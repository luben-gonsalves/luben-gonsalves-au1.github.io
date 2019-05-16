import React from "react";
import ReactDOM from "react-dom";

class Package1 extends React.Component {
  render() {
    return (
      <div className="col-sm ">
        <hr />
        <h5 className="offset-3">Package #1</h5>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSTPloBiHQBQpJIqBSFAF1JGP4seXPIHiycQZcowMf83DsY5QPQ"
          alt="First Plan"
          className="img-thumbnail"
        />
        <h3 className="offset-3">
          Goa
          <small className="text-muted">10,000Rs</small>
        </h3>
      </div>
    );
  }
}
class Package2 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <hr />
        <h5 className="offset-3">Package #2</h5>
        <img
          src="https://www.jetairways.com/Explore/Srinagar-2-1024x400.jpg"
          alt="First Plan"
          className="img-thumbnail"
        />
        <h3 className="offset-1">
          SriNagar
          <small className="text-muted">15,000Rs</small>
        </h3>
      </div>
    );
  }
}
class Package3 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <hr />
        <h5 className="offset-3">Package #3</h5>
        <img
          src="https://d1j3wd17d78ehn.cloudfront.net/system/images/000/050/094/cce898414f1447e2005bfa3165b5aa8b/original/Andaman-Nicobar-10.jpg?1519412734"
          alt="First Plan"
          className="img-thumbnail"
        />
        <h3 className="offset-1">
          Andaman
          <small className="text-muted">25,000Rs</small>
        </h3>
      </div>
    );
  }
}
class Package4 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <hr />
        <h5 className="offset-3">Package #4</h5>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1iD7iWm8JModjDUTkoVRvsomxaBUcK2_QZSQcXHL3t77jX8L"
          alt="First Plan"
          className="img-thumbnail"
        />
        <h3>
          Leh-ladakh
          <small className="text-muted">30,000Rs</small>
        </h3>
      </div>
    );
  }
}

class Heading extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="offset-5">MyTrip.com</h1>
        <hr />
        <br />
        <div className="row">
          <Package1 />
          <Package2 />
          <Package3 />
          <Package4 />
        </div>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Heading />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

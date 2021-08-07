import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import cannaTerra from "./img/canna-terra.jpg";

import CantidadSustrato from "./components/CantidadSustrato";
import CompraSustrato from "./components/CompraSustrato";

import CantidadSustratoHook from "./components/CantidadSustrato.hook";
import CompraSustratoHook from "./components/CompraSustrato.hook";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={cannaTerra} alt="sustrato" className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadSustrato />
                    </div>
                    <CompraSustrato />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={cannaTerra} alt="sustrato" className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadSustratoHook />
                    </div>
                    <CompraSustratoHook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

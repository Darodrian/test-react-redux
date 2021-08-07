import React, { Component } from 'react';
import { connect } from "react-redux";

import { buy_substratum_action, return_substratum_action } from "../redux/actions/substratumShopAction";

class CompraSustrato extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                    this.props.buy_substratum_action(1);
                }}>Comprar producto</button>
                <button className="btn btn-dark btn-sm" onClick={() => {
                    this.props.return_substratum_action(1);
                }}>Devolver producto</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    buy_substratum_action, 
    return_substratum_action
}

export default connect(null, mapDispatchToProps)(CompraSustrato);
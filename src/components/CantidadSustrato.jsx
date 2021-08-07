import React, { Component } from 'react';
import { connect } from "react-redux";

class CantidadSustrato extends Component {
    render() {
        return (
            <React.Fragment>
                Unidades: {this.props.substratum_shop.substratum}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        substratum_shop: state.substratum_shop
    }
}

export default connect(mapStateToProps)(CantidadSustrato);
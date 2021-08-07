import React from "react";
import { useSelector } from "react-redux";

const CantidadSustratoHook = () => {

    const substratum_shop = useSelector((state) => state.substratum_shop);

    return (
        <React.Fragment>
            Unidades: {substratum_shop.substratum}
        </React.Fragment>
    );
}

export default CantidadSustratoHook;
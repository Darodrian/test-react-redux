import React from "react";
import { useDispatch } from "react-redux";
import { buy_substratum_action, return_substratum_action } from "../redux/actions/substratumShopAction";

const CompraSustrato = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                dispatch(buy_substratum_action(1));
            }}>Comprar producto</button>
            <button className="btn btn-dark btn-sm" onClick={() => {
                dispatch(return_substratum_action(1));
            }}>Devolver producto</button>
        </div>
    );
}

export default CompraSustrato;
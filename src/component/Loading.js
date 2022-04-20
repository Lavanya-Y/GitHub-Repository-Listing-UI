import React from "react";
import loader from '../loader.gif'
import './Loading.css'
import {findAllByDisplayValue} from "@testing-library/react";

const Loading = () => (
    <div className="loading">
        <img src={loader} alt="loading" />
    </div>
)

export default Loading

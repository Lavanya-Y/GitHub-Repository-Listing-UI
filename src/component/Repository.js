import React from "react";

import "./Repositories.css";

const Repository = () => (
    <div className="repo">
        <div>
            <div className="title">
                <i className="fa fa-book pr-1" />
                <a href="#">
                    <span>Repo Name</span>
                </a>
            </div>
            <span className="desc">Description</span>
        </div>
        <div className="d-flex">
            <div className="subitem">
                <i className="fa fa-code pr-1" />
                <span>Language</span>
            </div>
            <div className="subitem">
                <i className="fa fa-star pr-1" />
                <span>Star</span>
            </div>
        </div>
    </div>
);

export default Repository;
import React from "react";

import "./Repositories.css";

const Repository = ({user, repo}) => (
    <div className="repo">
        <div>
            <div className="title">
                <i className="fa fa-book pr-1" />
                <a target="_blank" rel="noreferrer_noopener" href={repo.html_url}>
                    <span style={{marginLeft : "5px"}}>{repo.name}</span>
                </a>
            </div>
            <span className="desc">{repo.description}</span>
        </div>
        <div className="d-flex">
            <div className="subitem">
                {repo.language && (
                    <div>
                        <i className="fa fa-code pr-1" />
                        <span style={{marginLeft : "2.5px"}}>{repo.language}</span>
                    </div>
                )}
            </div>
            <div className="subitem">
                <i className="fa fa-star pr-1" />
                <span style={{marginLeft : "2.5px"}}>{repo.stargazers_count}</span>
            </div>
        </div>
    </div>
);

export default Repository;
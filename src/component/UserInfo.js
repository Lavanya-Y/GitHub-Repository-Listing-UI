import React from "react";
import "./UserInfo.css";

const UserInfo = () => (
    <div className="user_info">
        <img
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            className="p-2 avatar"
            width="130"
            height="130"
            alt="profileimage"
        />
        <div className="user_infoDetails">
            <h5>Username</h5>
            <div className="user_info_s">
                <div className="user_infoDetail">
                    <i className="fa fa-map-marker pr-1" />
                    <span>Location</span>
                </div>
                <div className="user_infoDetail">
                    <i className="fa fa-globe pr-1" />
                    <span>BlogURL</span>
                </div>
                <div className="user_infoDetail">
                    <i className="fa fa-twitter pr-1" />
                    <span>Twitter Userid</span>
                </div>
                <div className="user_infoDetail">
                    <i className="fa fa-envelope pr-1" />
                    <span>Email</span>
                </div>
                <div className="user_infoDetail">
                    <i className="fa fa-envelope pr-1" />
                    <span>Bio</span>
                </div>

            </div>
        </div>
    </div>
);

export default React.memo(UserInfo);
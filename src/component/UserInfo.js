import React from "react";
import "./UserInfo.css";

const UserInfo = ({ user }) => (
    <div className="user_info">
        <img
            src={user.avatar_url}
            className="p-2 avatar"
            width="130"
            height="130"
            alt="profileimage"
        />
        <div className="user_infoDetails">
            <h5 style={{fontSize : "30px"}}>{user.name}</h5>
            <div className="user_info_s">
                {user.bio && (
                    <div className="user_infoDetailBio">
                        <span>{user.bio}</span>
                    </div>
                )}
            </div>
            <div className="user_info_s">
                {user.location && (
                    <div className="user_infoDetail">
                        <i className="fa fa-map-marker pr-1" />
                        <span style={{marginLeft : "5px"}}>{user.location} ·</span>

                    </div>
                )}
                {user.blog && (
                    <div className="user_infoDetail">
                        <i className="fa fa-globe pr-1" />
                        <a target="_blank" rel="noreferrer_noopener" href={user.blog} style={{marginLeft : "5px", textDecorationColor : "gray"}}>{user.blog}</a>
                    </div>
                )}
                {user.twitter_username && (
                    <div className="user_infoDetail">
                        <i className="fa fa-twitter pr-1" />
                        <span style={{marginLeft : "5px"}}>{user.twitter_username} ·</span>
                    </div>
                )}
                {user.email && (
                    <div className="user_infoDetail">
                        <i className="fa fa-envelope pr-1" />
                        <span style={{marginLeft : "5px"}}>{user.email} ·</span>
                    </div>
                )}
                {user.html_url && (
                    <div className="user_infoDetail">
                        <i className="fa fa-github pr-1" />
                        <a target="_blank" rel="noreferrer_noopener" href={user.html_url} style={{marginLeft : "5px", textDecorationColor : "gray"}}>{user.html_url}</a>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default React.memo(UserInfo);
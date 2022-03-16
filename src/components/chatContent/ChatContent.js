import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://wallpaperaccess.com/full/1501239.jpg",
      type: "",
      msg: "Hi Jennie, Pa Kabar?",
    },
    {
      key: 2,
      image:
        "https://lh3.googleusercontent.com/2Bu5QVr92QaG5Qq1OXlpaHZBkiEwWA45YR3M225Fpz19McbRTsirlE0P3__o2R3GwU7aUQThy-_JxwWx397HhjXHrpB5kx3nbQ=w960-rj-nu-e365",
      type: "other",
      msg: "Gw baik.",
    },
    {
      key: 3,
      image:
        "https://lh3.googleusercontent.com/2Bu5QVr92QaG5Qq1OXlpaHZBkiEwWA45YR3M225Fpz19McbRTsirlE0P3__o2R3GwU7aUQThy-_JxwWx397HhjXHrpB5kx3nbQ=w960-rj-nu-e365",
      type: "other",
      msg: "Lu?",
    },
    {
      key: 4,
      image:
        "https://wallpaperaccess.com/full/1501239.jpg",
      type: "",
      msg: "Baik juga",
    },
    {
      key: 5,
      image:
        "https://lh3.googleusercontent.com/2Bu5QVr92QaG5Qq1OXlpaHZBkiEwWA45YR3M225Fpz19McbRTsirlE0P3__o2R3GwU7aUQThy-_JxwWx397HhjXHrpB5kx3nbQ=w960-rj-nu-e365",
      type: "other",
      msg: "Ada rencana gak mingdep?",
    },
    {
      key: 6,
      image:
        "https://wallpaperaccess.com/full/1501239.jpg",
      type: "",
      msg: "Mau ngapain emang?",
    },
    {
      key: 7,
      image:
        "https://lh3.googleusercontent.com/2Bu5QVr92QaG5Qq1OXlpaHZBkiEwWA45YR3M225Fpz19McbRTsirlE0P3__o2R3GwU7aUQThy-_JxwWx397HhjXHrpB5kx3nbQ=w960-rj-nu-e365",
      type: "other",
      msg: "Biasa.Tempat nongkrong warkop kita.",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://lh3.googleusercontent.com/2Bu5QVr92QaG5Qq1OXlpaHZBkiEwWA45YR3M225Fpz19McbRTsirlE0P3__o2R3GwU7aUQThy-_JxwWx397HhjXHrpB5kx3nbQ=w960-rj-nu-e365"
              />
              <p>Jennie</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

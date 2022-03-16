import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://lh3.googleusercontent.com/2Bu5QVr92QaG5Qq1OXlpaHZBkiEwWA45YR3M225Fpz19McbRTsirlE0P3__o2R3GwU7aUQThy-_JxwWx397HhjXHrpB5kx3nbQ=w960-rj-nu-e365",
      id: 1,
      name: "Jennie",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://lh3.googleusercontent.com/159NZUFcdYd25cNnP7qgRrN0NuuG_nSjptsXv3vmiR4VPnpRcOu-e6n3SQjzlLXjWg3X0v_0SMYMWbqZU1ay9HzBpVgsR_zL=w1600-rj",
      id: 2,
      name: "Lisa",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://lh3.googleusercontent.com/Z3kYE3B8zmhI_pg_SfpVSyabmKmfDM1BZb9bTpJ-KDpxOcZKTQNbY97udc4CaxvoiuOIKYxf0jlsooaNUhUxr6QKRqufCKWGSAQ=w1600-rj",
      id: 3,
      name: "Jisoo",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.u3QuwRR_mTveCylXB2VtpAHaLG?pid=ImgDet&rs=1",
      id: 4,
      name: "Irene",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.1YOXYPUMHE9M0IY08HWCuwHaLH?pid=ImgDet&rs=1",
      id: 5,
      name: "Jungkook",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://www.celebface.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-26-at-7.14.21-PM-1-829x1024.jpeg",
      id: 6,
      name: "Tae",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.0jRSSggyOVsKWHaFi4QL6gHaHa?pid=ImgDet&rs=1",
      id: 7,
      name: "Harutya",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.NBExLSq65AYHOaWlMeC4hQAAAA?pid=ImgDet&rs=1",
      id: 8,
      name: "Marin",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/d3/bd/64/d3bd64019789385e222881cdd91de98c.jpg",
      id: 9,
      name: "Kei",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

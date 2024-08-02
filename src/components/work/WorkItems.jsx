/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img
        src={item.image}
        alt=""
        className="work__img"
        style={{ width: "350px", height: "220px" }}
      />

      <h3 className="work__title">{item.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href={item.demo} target="blank" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        {item.private === false && (
          <a href={item.link} target="blank" className="work__button">
            GitHub Link
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkItems;

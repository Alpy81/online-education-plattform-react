import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val, index) => (
              <div className="box" key={index}>
                <div className="img">
                  <img src={val.cover} alt={val.courseName} />
                  <img
                    src={val.hoverCover}
                    alt={`${val.courseName} Hover`}
                    className="show"
                  />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;

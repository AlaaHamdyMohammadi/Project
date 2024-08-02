/* eslint-disable no-unused-vars */
import React from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = React.useState({ name: "all" });
  const [projects, setProjects] = React.useState([]);
  const [active, setActive] = React.useState(0);
  const [visibleProjects, setVisibleProjects] = React.useState(4);
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    let newProjects;
    if (item.name === "all") {
      newProjects = [...projectsData].reverse();
    } else {
      newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
    }
    setProjects(newProjects);
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const handleShowMore = () => {
    setIsExpanded(true);
    setVisibleProjects(projects.length); 
  };

  const handleShowLess = () => {
    setIsExpanded(false);
    setVisibleProjects(4); 
  };


  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.slice(0, visibleProjects).map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>

      {projects.length > 4 && (
        <button
          className="show-btn"
          onClick={isExpanded ? handleShowLess : handleShowMore}
        >
          {isExpanded ? "Show Less" : "Show More"}
          <i
            className={`uil ${
              isExpanded ? "uil-arrow-up" : "uil-arrow-down"
            } home__scroll-arrow`}
          ></i>
        </button>
      )}
    </div>
  );
};

export default Works;

import React from "react";
import "./index.css";

const skills = [
  {
    skill: "HTML+ CSS",
    level: "beginner",
    color: "#e34c26",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#f0db4f",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#61dafb",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#ff6b35",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#6cc644",
  },
  {
    skill: "TypeScript",
    level: "beginner",
    color: "#3178c6",
  },
];
function Project() {
  return (
    <div className="container">
      <Card
        image="https://picsum.photos/id/237/400/300"
        name="Mr. doggy"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo pariatur placeat soluta, omnis tempora voluptatem veritatis porro quibusdam mollitia."
        tags={skills}
      />
    </div>
  );
}
function Card(params) {
  return (
    <div className="card">
      <img className="img" src={params.image} alt="image" />
      <div className="card-content">
        <h3>{params.name}</h3>
        <p>{params.description}</p>
        <div className="tags">
          {params.tags.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{ backgroundColor: tag.color }}>
              {tag.skill}
              {tag.level === "beginner"
                ? " 👶"
                : tag.level === "intermediate"
                ? " 👍"
                : " 💪"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Project;

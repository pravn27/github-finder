import React from "react";
import {
  RepoCardContainer,
  RepoInfoContainer,
  DetailsContainer,
  CircleBullet,
} from "./UserStyled";

const getLanguageColor = (language) => {
  switch (language) {
    case "JavaScript":
      return "#f1e05a";
    case "TypeScript":
      return "#2b7489";
    case "Python":
      return "#3572A5";
    case "Objective-C":
      return "#438eff";
    case "Ruby":
      return "#701516";
    case "HTML":
      return "#e34c26";
    case "CSS":
      return "#563d7c";
    case "PHP":
      return "#4F5D95";
    default:
      return "#6c757d";
  }
};

const getCircleBullet = (language) => {
  const color = getLanguageColor(language);
  return <CircleBullet color={color} />;
};

const getLastUpdatedTime = (updatedAt) => {
  const dateDiffInDays = Number.parseInt(
    (Date.parse(new Date()) - Date.parse(updatedAt)) / (1000 * 60 * 60 * 24)
  );
  if (dateDiffInDays <= 31) {
    return `${dateDiffInDays} days ago`;
  } else {
    const updatedDaysList = new Date(updatedAt).toString().split(" ");
    return `${
      updatedDaysList[2] + " " + updatedDaysList[1] + " " + updatedDaysList[3]
    }`;
  }
};

const RepoItemCard = ({ repoInfo }) => {
  const { name, html_url, description, language, updated_at } = repoInfo;
  return (
    <RepoCardContainer className="card">
      <div className="card-body">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <h6>{name}</h6>
        </a>
        <p className="descriptionInfo text-muted">{description}</p>
        <RepoInfoContainer>
          {language ? (
            <DetailsContainer>
              {getCircleBullet(language)}
              {language}
            </DetailsContainer>
          ) : null}
          <DetailsContainer>
            Updated on {getLastUpdatedTime(updated_at)}
          </DetailsContainer>
        </RepoInfoContainer>
      </div>
    </RepoCardContainer>
  );
};

export default RepoItemCard;

import styled from "styled-components";

// Home Users grid container
export const HomeUsersContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding-bottom: 30px;

  // Small devices (mobiles)
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // Medium devices (tablets)
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  // Large devices (Desktop)
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  // Extra large devices (Large desktop)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

// Each User card - UserItem
export const UserCardContainer = styled.div`
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 4px;
  img {
    border-radius: 50%;
    width: 100px;
  }
  :hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

// User details page
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 250px;
    border-radius: 50%;
  }
`;
export const UserInfoSpan = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: #6c757d;
`;

// User details page repo list container
export const UserRepoContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 10px 20px 30px;

  // Small devices (mobiles)
  @media (min-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
  // Medium devices (tablets)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // Large devices (Desktop)
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  // Extra large devices (Large desktop)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// User each repo card
export const RepoCardContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  img {
    border-radius: 50%;
    width: 100px;
  }
  :hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  p.descriptionInfo {
    display: -webkit-box;
    height: 40px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const RepoInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6c757d;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const CircleBullet = styled.span`
  background: ${({ color }) => color};
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 4px;
`;

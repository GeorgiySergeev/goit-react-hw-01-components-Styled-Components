import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: rgb(201, 255, 237);
  width: 448px;
  color: red;
`;

export const Discription = styled.div`
  padding: 35px;
`;
export const UserImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 180px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

export const UserName = styled.h1`
  color: grey;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  font-size: 18px;
  color: #99aab5;
  text-align: center;
  margin-bottom: 10px;
`;

export const UserLocation = styled.p`
  color: #99aab5;
  font-size: 22px;
  text-align: center;
`;
export const UserStats = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #99aab5;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 15px 0px;
  }
  li:not(:last-child) {
    border-right: 1px solid #99aab5;
  }
`;

export const UserStatsLabel = styled.span`
  font-size: 12px;
  color: #99aab5;
`;
export const UserStatsQty = styled.span`
  font-size: 14px;
  color: #99aab5;
`;

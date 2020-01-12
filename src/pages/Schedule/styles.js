import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const MonthTitle = styled.h1`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  margin-left: 168px;
  margin-top: 73px;
  margin-bottom: 30px;
  /* identical to box height */

  text-align: center;

  width: 152px;
  height: 38px;

  color: #565656;
`;

export const NewEvent = styled.button`
  width: 207px;
  height: 50px;
  background: #f180c1;
  border-radius: 5px;
  margin-right: 216px;
  margin-top: 75px;
  margin-bottom: 32px;

  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
`;

export const ScheduleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const ScheduleWeek = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 1110px;
  height: 708px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const SideSchedule = styled.div`
  width: 80px;
  height: 708px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
  align-items: center;
  /* flex: 1; */
`;

export const CircleDay = styled.div`
  background: #f5a7d4;
  width: 53px;
  height: 53px;
  border-radius: 50%;
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const ContentLine = styled.div`
  /* background-color: #000000; */
  margin-bottom: 10px;
  margin-top: 36px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Content = styled.div`
  /* background-color: #000000; */
  display: flex;
  margin-top: 34px;
  flex-direction: row;
`;

export const Title = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #565656;
`;

export const Line = styled.div`
  background: #565656;
  opacity: 0.9;
  border-radius: 10px;
  /* transform: rotate(-90deg); */
  height: 4px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const LineVert = styled.div`
  width: 4px;
  background: #f4f4f4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
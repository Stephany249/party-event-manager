import styled from 'styled-components';
import joker from '../../assets/joker.svg';
import partner from '../../assets/partner2.jpeg';

export const Container = styled.div`
  z-index: -1;
  display: flex;
  flex: 1;
`;

export const ImgSide = styled.div`
  background: url(${partner});
  display: flex;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  width: 46.6vw;
  height: 94.23vh;

  @media (max-width: 671px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  width: 46.6vw;
  height: 94.23vh;
  max-height: 1024px;
  max-width: 671px;
  background: linear-gradient(161.88deg, #fc66a4 0%, #993cff 98.7%);
  opacity: 0.8;

  @media (max-width: 671px) {
    width: 100vw;
    height: 100vh;
  }
`;

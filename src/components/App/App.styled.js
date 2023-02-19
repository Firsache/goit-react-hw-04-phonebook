import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px 20px;

  min-width: 400px;
  max-width: 550px;
  /* border-radius: 10px; */
  overflow: hidden;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  /* border: 2px solid #000000; */
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 1.2px;
  color: #ff6b08;
  text-shadow: 6px 6px 6px #000;
  text-align: center;
`;

/* font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading}; */

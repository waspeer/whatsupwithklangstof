import TiltElement from 'react-parallax-tilt';
import styled, { withTheme } from 'styled-components';

export const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleText = withTheme(styled.div`
  font-weight: 300;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: black 1px -1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1.4rem;
  }
`);

export const Wrapper = styled.article`
  padding: 1.25rem;
  cursor: pointer;
  outline: none;
`;

export const Tilt = withTheme(styled(TiltElement)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transform-style: preserve-3d;

  .gatsby-image-wrapper {
    transition: all 0.2s;
  }

  ${TitleWrapper} {
    opacity: 0;
    transform: scale(0.8) translateZ(0);
    transition: all 0.2s;
    pointer-events: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    :hover {
      ${TitleWrapper} {
        opacity: 1;
        transform: scale(1) translateZ(20px);
      }

      .gatsby-image-wrapper {
        filter: blur(2px);
        transform: scale(0.85);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    ${TitleWrapper} {
      opacity: 1;
      transform: none;

      span {
        background: ${({ theme }) => theme.backgroundColor};
        padding: 0.2rem 0.2rem 0 0.2rem;
      }
    }
  }
`);

import styled from 'styled-components';

export const LogoWrapper = styled.h1`
  background: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-style: italic;
  font-size: 50px;
  position: relative;
  width: 340px;
  height: 80px;
  margin: auto;
  z-index: 10;
  transition: all 0.5s;
`;

export const TextLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  &:nth-of-type(1) span {
    color: white;
  }

  &:nth-of-type(2) span {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translate(-3px, 3px);
  }

  &:nth-of-type(3) span {
    color: ${({ theme }) => theme.colors.neutral};
    transform: translate(-6px, 6px);
  }
`;

export const LogoText = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 80px;
  text-align: center;
`;

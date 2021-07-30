import React from 'react';
import { Styled } from './styles';

function Container({children, title, size}) {
  switch (size) {
    case "lg":
      return (
        <Styled.ContainerLG>
          <Styled.Title>{title}</Styled.Title>
            {children}
        </Styled.ContainerLG>
      );
    case "sm":
      return (
        <Styled.ContainerSM>
          <Styled.Title>{title}</Styled.Title>
            {children}
        </Styled.ContainerSM>
      );
    case "pages":
      return (
        <Styled.ContainerPages>
          <Styled.Title>{title}</Styled.Title>
            {children}
        </Styled.ContainerPages>
      );
    default:
        break;
    
  }
}

export default Container;
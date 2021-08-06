import styled from "styled-components"
import { Button } from "react-bootstrap";
import { mixins } from "../../styles/mixins"
import { device } from "../../styles/device";

export const MainButton = styled(Button) `
    background: ${mixins.styles.gradiente};
    font-family: ${mixins.fonts.bold};
    font-size: ${mixins.typograph.paragraph};
    border: none;
    padding: 0.8rem;
    border-radius: 10px;
    box-shadow: ${mixins.styles.shadowButton};

    &:active {
        transform: scale(0.95);
    };

    &:hover {
      background: rgba(255, 255, 255, 0.2)
    }
`;

export const YellowButton = styled(MainButton)`
  background: ${mixins.colors.secondary};
  color: ${mixins.colors.dark};
  text-align: center;
  height: 40px;
  margin: 0.5rem;
  padding: 0;

  width: ${(props) => props.width || "300px"};
  font-size: ${(props) => props.fontSize || "18px"};

  &:active {
    transform: scale(0.95);
  }
`;

export const CancelButton = styled(YellowButton)`
    background: ${mixins.colors.dark};
    color: ${mixins.colors.secondary};
`
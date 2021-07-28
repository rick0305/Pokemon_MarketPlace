import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Styled = {
    Error: styled.p`
        align-self: center;
        justify-self: center;
        color: ${mixins.colors.third};
        font-family: ${mixins.fonts.semi_bold};
        font-size: ${mixins.typograph.campoObrigatorio};
    `,
  
}
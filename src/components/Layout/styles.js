import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
`;
export const SContain=styled.div`
    display:flex;
    width:100%;
`;
export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 6);
    width:81%;
    position: absolute;
    top: 70px;
    h1 {
        font-size: 14px;
    }
    background:#F1F1F1;
`;
export const SHeader=styled.header`

`
import styled from "styled-components";

export const ContainerStyled = styled.div`
    width: 231px;
    height: 389px;
    padding: 83px 0 83px 35px;
    background-color: var(--color-grey-4);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;

    h2{
        font-weight: 700;
        font-size: 16px;
        font-style: italic;
        text-transform: uppercase;
        color: var(--color-blue-1);
    }

    .blue-bar{
        width: 161px;
        height: 2px;
        background-color: var(--color-blue-0);
        margin: 4px 0 13px;
    }

    p{
        color: var(--color-blue-0);
        font-style: italic;
        font-weight: 400;
        font-size: 16px;

        span{
            font-weight: 700;
        }
    }

    .values{
        display: flex;
        flex-direction: column;
        padding: 13px 0;
        height: 184px;
        justify-content: space-between;
        align-items: flex-start;
    }

`

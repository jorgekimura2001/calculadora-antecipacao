import styled from "styled-components";

export const ContainerStyled = styled.div`
    
    background-color: var(--color-white);

    height: 100%;
    padding: 41px 71px 41px 56px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h1{
        font-size: 24px;
        color: var(--color-grey-3);
        margin-bottom: 22px;
        font-weight: 700;
    }

    .btn-days{
        margin-top: 10px;
        padding: 5px;
        font-size: 12px;
        border-radius: 4px;
        background-color: var(--color-blue-1);
        color: var(--color-grey-0);
    }

    form{

        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        label{
            font-size: 14px;
            color: var(--color-grey-3);
        }

        input{
            width: 251px;
            height: 37px;
            padding: 10px 0 10px 14px; 
            border: 1px solid var(--color-grey-1);
            border-radius: 4px;
            outline: none;
        }

        input::placeholder{
            font-size: 13px;
        }

        input:focus{
            border: 1px solid var(--color-blue-focus);
        }

        #amount{
            width: 223px;
        }

        .amount{
            margin-right: 10px;
        }
        .max{
            font-size: 11px;
            color: var(--color-grey-2);
        }
        p{
            color: var(--color-error);
            font-size: 10px;
            margin-bottom: 20px;
        }

        .input-day{
            width: 63px;
        }

        .days{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0 5px;
        }

        .input::-webkit-outer-spin-button,
        .input::-webkit-inner-spin-button,
        .input-day::-webkit-outer-spin-button,
        .input-day::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
        }
        .input[type=number], .input-day[type=number] {
        -moz-appearance: textfield;
        }
    
        .input-invisible{
            display: none;
        }
    }
`
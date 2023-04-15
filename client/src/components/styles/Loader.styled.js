import styled from "styled-components";
import { Loader } from "semantic-ui-react";

export const StyledLoader = styled(Loader)`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border: 5px solid #fff;
border-radius: 50%;
border-top-color: #000;
animation: spin 1s infinite ease-in-out;

@keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;
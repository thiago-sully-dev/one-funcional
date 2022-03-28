import { darken } from "polished";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  
`;

export const FooterContentTop = styled.div`
  background-color: ${({theme}) => theme.secondary};
  padding: 3.75rem 1rem;
`;

export const FooterContentBottom = styled.div`
  background-color: ${({theme}) => theme.primary};
  text-align: center;
  font-family: 'Mulish', sans-serif;
  padding: 0.5rem 1rem;
`;

export const FooterContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: ${({theme}) => theme.white};

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: 'Oswald', sans-serif !important;
  }

  li {
    margin-bottom: 0.93rem;

    a {
      color: ${({theme}) => theme.white};
      font-family: 'Mulish', sans-serif;
      transition: all 150ms ease-in-out;

      &:hover {
        color: ${({theme}) => darken(0.5, theme.white)};
      }
    }
  }

  .footer_colOne {
    max-width: 310px;
    width: 100%;

    p {
      font-family: 'Mulish', sans-serif;
      font-weight: 400;
      margin: 1.5rem 0;
      text-align: justify;
    }
  }

  .footer_colThree {
    max-width: 310px;
    width: 100%;

    .colThree__infos {
      p {
        margin-bottom: 1rem;
        color: ${({theme}) => theme.white};
        font-family: 'Mulish', sans-serif;
      }

      a {
        color: ${({theme}) => theme.white};
        transition: all 150ms ease-in-out;
      
        &:hover {
          color: ${({theme}) => darken(0.5, theme.white)};
        }
      }
    }
  }
`;

export const SocialMediaFooter = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  svg {
    font-size: 1.7rem;
    margin: 0 0.93rem;

    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      margin-left: 0;
    }
  }
`;
import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem;
  margin: -5.5rem 0px 4.5rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.baseProfile};
  border-radius: 10px;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    margin-block-end: 1.5rem;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
`;

export const BadgeSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    color: ${(props) => props.theme.colors.baseLabel};
  }
`;

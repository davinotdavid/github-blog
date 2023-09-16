import styled from "styled-components";

export const MainContainer = styled.main``;

export const StyledHeader = styled.header`
  padding: 2rem 2.5rem;
  margin-block-start: -5.5rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.baseProfile};
  border-radius: 10px;

  h1 {
    margin-block-end: 0.5rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 1.25rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.blue};
    border-block-end: 1px solid transparent;

    &:hover {
      border-block-end: 1px solid ${(props) => props.theme.colors.blue};
    }
  }
`;

export const BadgeContainer = styled.div`
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

export const FirstLetterCapsSpan = styled.span`
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const PostContentContainer = styled.div`
  padding: 2.5rem 2rem;

  /* Markdown styles */
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-block: 1rem;
  }

  p {
    margin-block-end: 0.5rem;

    &:has(code),
    &:has(img) {
      margin-block: 2rem;
    }
  }

  a {
    color: ${(props) => props.theme.colors.blue};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  code {
    background-color: ${(props) => props.theme.colors.basePost};
    padding: 1rem;
  }
`;

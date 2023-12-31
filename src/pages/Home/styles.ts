import styled from "styled-components";

export const MainContainer = styled.main`
  input[type="text"] {
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme.colors.baseText};
    background-color: ${(props) => props.theme.colors.baseInput};
    border-radius: 6px;
    width: 100%;
    margin-block-end: 3rem;
    border: 1px solid ${(props) => props.theme.colors.baseBorder};

    &:active {
      border: 1px solid ${(props) => props.theme.colors.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.baseLabel};
    }
  }
`;

export const PostsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 0.75rem;

  h2 {
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.baseSpan};
  }
`;

export const PostsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  overflow: hidden;
  margin-block-end: 3rem;

  a {
    color: inherit;
  }

  li {
    max-width: 26rem;
    max-height: 16.25rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.basePost};
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
      border: 2px solid ${(props) => props.theme.colors.baseLabel};
    }

    header {
      margin-block-end: 1.25rem;

      h3 {
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.baseTitle};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme.colors.baseSpan};
      }
    }

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }
  }
`;

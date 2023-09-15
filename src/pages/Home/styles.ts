import styled from "styled-components";

export const MainContainer = styled.main`
  input[type="text"] {
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme.colors.baseText};
    background-color: ${(props) => props.theme.colors.baseInput};
    border-radius: 1px solid ${(props) => props.theme.colors.baseBorder};
    width: 100%;
    margin-block-end: 3rem;

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

  li {
    max-height: 16.25rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.basePost};

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      margin-block-end: 1.25rem;

      h3 {
        flex: 1;
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.baseTitle};
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

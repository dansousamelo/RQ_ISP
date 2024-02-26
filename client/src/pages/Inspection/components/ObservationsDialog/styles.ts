import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;

  textarea {
    width: 100%;

    background-color: inherit;
    padding: 1rem;
    border-radius: 8px;
    color: white;
    resize: none;
  }

  textarea::placeholder {
    color: ${({ theme }) => theme.colors.neutral400};
    font-style: italic;
  }
`

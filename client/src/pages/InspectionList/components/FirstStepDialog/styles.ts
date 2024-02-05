import { styled } from 'styled-components'

export const RadioGroupWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral400};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[4]};

  label {
    width: 100% !important;
  }
`

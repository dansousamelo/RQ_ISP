import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:focus {
    outline: none;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: inherit;
  width: 12px;
  height: 12px;
  border-radius: 100%;

  border: 1px solid ${({ theme }) => theme.colors.blue500};

  &:focus {
    outline: none;
  }
`

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.blue500};
  }
`

export const Label = styled.label`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding-left: 15px;
  width: 18rem;
`

import { PrimaryButton } from '../PrimaryButton'
import { lightenColor } from '../../utils/colors'
import { keyframes, styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const contentShow = keyframes`
  from { opacity: 0; transform: translate(-50%, 100%); }
  to { opacity: 1; transform: translate(-50%, 75%); }
`

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206, 22%, 7%) 0px 10px 38px -10px,
    hsl(206, 22%, 7%) 0px 10px 20px -15px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-height: 25%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @media (min-width: 600px) {
    width: 65%;
    max-height: 20%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    color: ${({ theme }) => theme.colors.neutral900};
    font-size: 14px;

    a {
      color: inherit;
      text-decoration: underline;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.neutral900};
    font-size: 18px;
  }
`

export const ButtonStyled = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.blue500} !important;
  color: ${({ theme }) => theme.colors.neutral}!important;
  &:hover {
    background-color: ${({ theme }) =>
      lightenColor(theme.colors.blue500, 0.2)} !important;
  }
`

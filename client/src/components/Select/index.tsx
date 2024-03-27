import * as SelectRadix from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { styled } from 'styled-components'

const Trigger = styled(SelectRadix.Trigger)`
  display: flex;
  padding: 4px 8px 4px 12px;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 0.5px solid ${({ theme }) => theme.colors.neutral400};
  outline: none;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.neutral700};
  cursor: pointer;
  height: 32px;

  &:hover {
    filter: brightness(0.95);
  }
`

const Content = styled(SelectRadix.Content)`
  padding: 0;
  border-radius: ${({ theme }) => theme.fontSizes.sm};
  background: ${({ theme }) => theme.colors.neutral};
  overflow: hidden;
  z-index: 99999999;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

const Label = styled(SelectRadix.Label)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`
const Item = styled(SelectRadix.Item)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.neutral700};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  position: relative;
  user-select: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral};
    background: ${({ theme }) => theme.colors.blue500};
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.neutral400};
    pointer-events: none;
  }
`

const ItemText = styled(SelectRadix.ItemText)`
  width: 100%;
`

export const Select = {
  Root: SelectRadix.Root,
  Trigger,
  Value: SelectRadix.Value,
  Icon: SelectRadix.Icon,
  Portal: SelectRadix.Portal,
  Group: SelectRadix.Group,
  Content,
  Viewport: SelectRadix.Viewport,
  Label,
  Item,
  ItemText,
  ChevronDownIcon,
  ChevronUpIcon,
}

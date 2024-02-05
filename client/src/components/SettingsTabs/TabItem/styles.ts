import styled from 'styled-components'
import { Trigger as TabsTrigger } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export const StyledTrigger = styled(TabsTrigger)`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral400};
  background-color: transparent;
  border: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  text-align: initial;
  width: 100%;

  &:hover {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.blue500};
  }

  &[data-state='active'] {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.blue500};
  }
`

export const SelectedIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.blue500};
  border-radius: 7px;
`

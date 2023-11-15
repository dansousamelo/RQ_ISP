import { ComponentProps } from 'react'
import { keyframes, styled } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.svg`
  animation: ${spin} 1s linear infinite;
  width: 12px;
  height: 12px;
`

export type SpinnerProps = ComponentProps<typeof Container>

export function Spinner({
  customColor,
  ...props
}: SpinnerProps & { customColor?: string }) {
  return (
    <Container
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <defs>
        <filter id="grayFilter">
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    0.5 0"
          />
        </filter>
      </defs>

      <path
        opacity="0.1"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2.4 8C2.4 11.0928 4.90721 13.6 8 13.6C11.0928 13.6 13.6 11.0928 13.6 8C13.6 4.90721 11.0928 2.4 8 2.4C4.90721 2.4 2.4 4.90721 2.4 8Z"
        fill={customColor || 'white'}
      />
      <path
        d="M14.8 8C15.4627 8 16.0092 7.45979 15.9102 6.80449C15.8136 6.16523 15.6396 5.53856 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.4614 0.360423 9.83477 0.186448 9.19551 0.0898325C8.54021 -0.0092077 8 0.537258 8 1.2C8 1.86274 8.54326 2.38715 9.19084 2.52808C9.51571 2.59878 9.8344 2.69844 10.143 2.82627C10.8225 3.1077 11.4398 3.52019 11.9598 4.0402C12.4798 4.56021 12.8923 5.17755 13.1737 5.85697C13.3016 6.1656 13.4012 6.48429 13.4719 6.80916C13.6129 7.45674 14.1373 8 14.8 8Z"
        fill={customColor || 'white'}
      />
    </Container>
  )
}

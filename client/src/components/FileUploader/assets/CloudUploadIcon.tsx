import React, { SVGProps } from 'react'

export const CloudUploadIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  width = '42',
  height = '37',
  fill = 'none',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 27"
    fill={fill}
    {...props}
  >
    <path
      d="M15.5251 24.6666L15.5195 12.6666"
      stroke="#34CDFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.5317 20.2107C28.7228 18.67 29.6623 15.8868 28.8533 13.3333C28.0443 10.7799 25.5669 9.38094 22.8883 9.383H21.341C20.3295 5.44087 16.992 2.53048 12.9489 2.0648C8.90566 1.59912 4.994 3.67454 3.11273 7.28354C1.23146 10.8925 1.77016 15.2878 4.46729 18.3357"
      stroke="#34CDFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.7627 15.7572L15.52 11.5146L11.2773 15.7572"
      stroke="#34CDFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

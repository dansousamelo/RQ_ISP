import React, { SVGProps } from 'react'

export const DocumentIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  width = '12',
  height = '16',
  fill = 'none',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 12 16"
    fill={fill}
    {...props}
  >
    <path
      d="M2 14.5C1.725 14.5 1.5 14.275 1.5 14V2C1.5 1.725 1.725 1.5 2 1.5H7V4C7 4.55312 7.44688 5 8 5H10.5V14C10.5 14.275 10.275 14.5 10 14.5H2ZM2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V4.82812C12 4.29688 11.7906 3.7875 11.4156 3.4125L8.58438 0.584375C8.20938 0.209375 7.70312 0 7.17188 0H2ZM3.75 8C3.33437 8 3 8.33438 3 8.75C3 9.16562 3.33437 9.5 3.75 9.5H8.25C8.66562 9.5 9 9.16562 9 8.75C9 8.33438 8.66562 8 8.25 8H3.75ZM3.75 11C3.33437 11 3 11.3344 3 11.75C3 12.1656 3.33437 12.5 3.75 12.5H8.25C8.66562 12.5 9 12.1656 9 11.75C9 11.3344 8.66562 11 8.25 11H3.75Z"
      fill="#009988"
    />
  </svg>
)

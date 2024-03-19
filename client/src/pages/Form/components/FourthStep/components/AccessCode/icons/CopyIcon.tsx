import React, { SVGProps } from 'react'

export const CopyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_386_4536)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5625 0.75C3.25184 0.75 3 1.00184 3 1.3125V3H1.3125C1.00184 3 0.75 3.25184 0.75 3.5625V10.6875C0.75 10.9982 1.00184 11.25 1.3125 11.25H8.4375C8.74816 11.25 9 10.9982 9 10.6875V9H10.6875C10.9982 9 11.25 8.74816 11.25 8.4375V1.3125C11.25 1.00184 10.9982 0.75 10.6875 0.75H3.5625ZM9 8.25V3.5625C9 3.25184 8.74816 3 8.4375 3H3.75V1.5H10.5V8.25H9ZM1.5 10.5V3.75H8.25V10.5H1.5Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_386_4536">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

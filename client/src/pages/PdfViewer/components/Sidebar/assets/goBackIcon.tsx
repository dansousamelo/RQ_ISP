import React, { SVGProps } from 'react'

export const GoBackIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.7372 16.6668H10.1852L15.7352 11.1382C15.9958 10.8775 15.9958 10.4555 15.7352 10.1955C15.4745 9.93483 15.0525 9.93483 14.7925 10.1955L8.1925 16.7948C7.93583 17.0515 7.93583 17.4808 8.1925 17.7375L14.7925 24.3375C15.0532 24.5982 15.4752 24.5982 15.7352 24.3375C15.9958 24.0768 15.9958 23.6548 15.7352 23.3948L10.1852 18.0002H28.7372C29.1052 18.0002 29.4038 17.7015 29.4038 17.3335C29.4038 16.9655 29.1052 16.6668 28.7372 16.6668Z"
      fill="#34CDFF"
    />
    <circle cx="18" cy="18" r="17" stroke="#34CDFF" strokeWidth="2" />
  </svg>
)

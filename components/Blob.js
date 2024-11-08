import React from 'react';

export default function Blob({ fill = '#20bed6', backgroundImage }) {
  return (
    <svg id="10015.io" viewBox="0 0 480 480">
      <defs>
        <clipPath id="blob">
          <path
            fill="#474bff"
            d="M458.5,280.5Q449,321,432,360.5Q415,400,380,425.5Q345,451,302.5,455Q260,459,219,458Q178,457,137,444Q96,431,69,397Q42,363,24,323.5Q6,284,5.5,240Q5,196,27.5,159.5Q50,123,73.5,87Q97,51,137,34.5Q177,18,219,16Q261,14,300,27.5Q339,41,374,63.5Q409,86,434.5,120.5Q460,155,464,197.5Q468,240,458.5,280.5Z"
          />
        </clipPath>
      </defs>
      {backgroundImage && (
        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#blob)"
          xlinkHref={backgroundImage}
          preserveAspectRatio="xMidYMid slice"
        ></image>
      )}
    </svg>
  );
}

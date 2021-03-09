import styled from 'styled-components';

import vars from '../../styles/vars';

const Logo = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40.276"
      height="38.816"
      viewBox="0 0 40.276 38.816"
    >
      <g transform="translate(-139.874 -40)">
        <g transform="translate(0 -45)">
          <path
            d="M150.874,40h21.382L159.127,59.468l13.128,19.348H150.874Z"
            transform="translate(-11 45)"
            fill={vars.colorPrimary}
          />
          <path
            d="M182.859,40h8.291V78.631h-8.291L169.932,59.419Z"
            transform="translate(-11 45)"
            fill={vars.colorPrimary}
          />
        </g>
        <g transform="translate(0 -45)">
          <path
            d="M150.874,40h21.382L159.127,59.468h-8.253Z"
            transform="translate(-11 45)"
            fill="#7268b5"
          />
          <path
            d="M182.859,40h8.291V59.419H169.932Z"
            transform="translate(-11 45)"
            fill="#7268b5"
          />
        </g>
      </g>
    </Svg>
  );
};

const Svg = styled.svg`
  path {
    transition: fill 500ms ${vars.ease};
  }
`;

export default Logo;

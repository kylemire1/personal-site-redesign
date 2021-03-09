import styled from 'styled-components';
import Image from 'next/image';

import vars from '../../styles/vars';
import meSrc from '../../public/images/profile-pic.jpg';

const Me = () => {
  return (
    <StyledMe>
      <ImageWrapper>
        <Image
          src={meSrc}
          alt="Me smiling wearing a shirt with a floral pattern"
          layout="fill"
          objectFit="contain"
          objectPosition="bottom right"
        />
      </ImageWrapper>
    </StyledMe>
  );
};

const StyledMe = styled.div`
  display: none;

  @media (min-width: ${vars.breakpointMedium}) {
    display: flex;
    position: relative;
    z-index: 1;
    background-color: ${vars.colorWhite};
    margin-left: -2rem;
    padding-left: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default Me;

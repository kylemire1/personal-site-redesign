import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';
import { Wrapper, Heading, Container } from '../styled/global';

import vars from '../../styles/vars';
import Socials from './Socials';
import ContactSection from './ContactSection';

const ContactLayout = () => {
  return (
    <Layout>
      <ContactWrapper id="contact">
        <HeadingContainer>
          <ContactHeading>I can't wait to hear from you!</ContactHeading>
        </HeadingContainer>
        <Socials />
        <ContactSection />
      </ContactWrapper>
    </Layout>
  );
};

const ContactWrapper = styled(Wrapper)`
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 6rem 1fr;
  background-color: ${vars.colorPrimary};

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 8.75rem;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-template-columns: 1.6fr 1fr 1.5rem;
  }
`;

const HeadingContainer = styled(Container)`
  align-self: center;

  @media (min-width: ${vars.breakpointXXL}) {
    padding-left: 0;
  }
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeHeading3};
  text-transform: capitalize;

  @media (min-width: ${vars.breakpointMedium}) {
    font-size: min(8vw, 8.8rem);
    max-width: 48.875rem;
  }
`;

export default ContactLayout;

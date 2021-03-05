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
      <ContactWrapper>
        <Container>
          <ContactHeading>I can't wait to hear from you!</ContactHeading>
        </Container>
        <Socials />
        <ContactSection />
      </ContactWrapper>
    </Layout>
  );
};

const ContactWrapper = styled(Wrapper)`
  grid-template-columns: 1fr;
  grid-template-rows: auto 6rem 5fr;
  background-color: ${vars.colorPrimary};
  padding-top: 6em;

  @media (min-height: ${vars.breakpointMedium}) {
    grid-template-rows: auto 6rem 4rem 5fr;
  }
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeHeading3};
  text-transform: capitalize;
`;

export default ContactLayout;

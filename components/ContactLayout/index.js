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
  grid-template-rows: auto auto 6rem 1fr;
  background-color: ${vars.colorPrimary};

  @media (min-height: ${vars.breakpointMedium}) {
    grid-template-rows: auto auto 8rem 1fr;
  }
`;

const ContactHeading = styled(Heading)`
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeHeading3};
  text-transform: capitalize;
`;

export default ContactLayout;

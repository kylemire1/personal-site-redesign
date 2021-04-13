import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';

import Input from './Input';
import AnimatedCheckmark from '../icons/AnimatedCheckmark';

import { encodeFormData } from '../../utils/encodeFormData';
import vars from '../../styles/vars';

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeFormData({ 'form-name': 'contactme', ...data }),
        };

        fetch('/', options)
          .then((res) => console.log('Form successfully submitted', { res }))
          .catch((error) => alert(error));

        setSubmitting(false);
        setFormSubmitted(true);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <AnimatePresence exitBeforeEnter>
          {!formSubmitted ? (
            <motion.form
              name="contactme"
              onSubmit={handleSubmit}
              data-netlify="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: vars.easeFramer }}
              key="form"
            >
              <input type="hidden" name="form-name" value="contactme" />
              <Input name="name" type="text" label="Name" required />
              <Input name="email" type="email" label="Email" required />
              <Input name="message" type="textarea" label="Message" required />
              <div>
                <SubmitButton
                  type="submit"
                  style={{ opacity: isSubmitting ? '.75' : '1' }}
                  disabled={isSubmitting}
                >
                  Submit
                </SubmitButton>
              </div>
            </motion.form>
          ) : (
            <ThankYou
              key="thankyou"
              animate={{ opacity: 1, transform: 'translateY(0rem)' }}
              transition={{
                ease: vars.easeFramer,
                duration: 0.75,
                delay: 0.25,
              }}
            >
              <AnimatedCheckmark />
              <p>
                Hey, thanks! I've received your message and will get back to you
                as soon as I can.
              </p>
            </ThankYou>
          )}
        </AnimatePresence>
      )}
    </Formik>
  );
};

const SubmitButton = styled.button`
  background-color: ${vars.colorPrimary};
  border: none;
  border-radius: ${vars.borderRadiusSmall};
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeText};
  font-weight: ${vars.fontWeightBold};
  text-align: center;
  padding: 1.25em 1em;
  margin-top: 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 250ms ${vars.ease};
  transition-property: background-color, color;

  :hover,
  :focus {
    background-color: ${vars.colorHighlight};
    color: ${vars.colorPrimaryDark};
    transition: all 250ms ${vars.ease};
    transition-property: background-color, color;
  }
`;

const ThankYou = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(2rem);

  p {
    font-weight: ${vars.fontWeightBold};
    line-height: 1.2;
    margin-top: 1rem;
    margin-bottom: 0;
    text-align: center;
    font-size: ${vars.fontSizeHeading2};
  }
`;

export default ContactForm;

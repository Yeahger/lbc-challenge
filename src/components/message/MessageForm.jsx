import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label, Input } from 'reactstrap';

export default function MessageForm() {
  return (
    <FormContainer>
      <Title>Poster un commentaire</Title>
      <Formik
        initialValues={{
          isPublic: "1",
          text: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.text.trim()) {
            errors.text = 'Le message ne doit pas être vide';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form>
            <FormGroup>
              <BoldLabel>Visibilité</BoldLabel>
              <FormGroup check>
                <LabelRadio check>
                  <Input type="radio" name="isPublic" checked={values.isPublic === "1"} value="1" onChange={handleChange} />
                  Public
                </LabelRadio>
                <LabelRadio check>
                  <Input type="radio" name="isPublic" value="0" onChange={handleChange} />
                  Privé
                </LabelRadio>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <BoldLabel for="text">Message</BoldLabel>
              <Field as={Input} type="textarea" id="text" name="text" />
              <ErrorMessage name="text" component={StyledErrorMessage} />
            </FormGroup>
            <div className="clearfix">
              <StyledButton type="submit" disabled={isSubmitting} className="float-right">
                Poster votre message
              </StyledButton>
            </div>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  margin: 20px 0;
  padding: 10px 20px;
  
  background-color: #F4F6F7;
  box-shadow: 1px 1px 8px 1px #E0E0E0;
  
`;

const Title = styled.h2`
  font-size: 20px;
  color: #FF6E14;
`;

const StyledErrorMessage = styled.div`
  color: #CC0000;
`;

const BoldLabel = styled(Label)`
  font-weight: bold;
`;
const LabelRadio = styled(Label)`
  margin-right: 50px;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  background-color: #FF6E14;
  border: 1px solid #FF6E14;
  
  &:hover, &:not(:disabled):not(.disabled).active, &:not(:disabled):not(.disabled):active {
    background-color: #E05600;
    border: 1px solid #E05600;
  }
`;
import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import colors from '../../utils/colors';

export default function MessageForm({ saveMessage }) {
  return (
    <FormContainer>
      <Title>Poster un commentaire</Title>
      <Formik
        initialValues={{
          isPublic: '1',
          username: '',
          text: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.text.trim()) {
            errors.text = 'Votre message ne doit pas être vide.';
          }
          if (!values.username.trim()) {
            errors.username = 'Votre nom d\'utilisateur ne doit pas être vide.';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          saveMessage(values.isPublic, values.username, values.text);
          setSubmitting(false);
          resetForm();
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
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <BoldLabel for="username">Nom d'utilisateur</BoldLabel>
                  <Field as={Input} type="text" id="username" name="username" />
                  <ErrorMessage name="username" component={StyledErrorMessage} />
                </FormGroup>
              </Col>
            </Row>
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
  
  background-color: ${colors.normal.gray2};
  box-shadow: 1px 1px 8px 1px ${colors.shadow.dark};
  
`;

const Title = styled.h2`
  font-size: 20px;
  color: ${colors.normal.orange};
`;

const StyledErrorMessage = styled.div`
  color: ${colors.normal.red};
`;

const BoldLabel = styled(Label)`
  font-weight: bold;
`;
const LabelRadio = styled(Label)`
  margin-right: 50px;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  background-color: ${colors.normal.orange};
  border: 1px solid ${colors.normal.orange};
  
  &:hover, &:not(:disabled):not(.disabled).active, &:not(:disabled):not(.disabled):active {
    background-color: ${colors.dark.orange};
    border: 1px solid ${colors.dark.orange};
  }
`;
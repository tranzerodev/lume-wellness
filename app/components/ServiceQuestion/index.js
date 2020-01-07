/**
 *
 * ServiceQuestion
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Accordion, Card } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {
  Block,
  Container,
  QuestionTitle,
  QuestionSubtitle,
  QuestionContent,
  QuestionIcon,
  QuestionAccordion,
  EmailInstruction,
} from './styles';

const ServiceQuestion = props => (
  <Block>
    <Container>
      <QuestionTitle>{props.title}</QuestionTitle>
      <QuestionSubtitle>{props.subtitle}</QuestionSubtitle>

      <QuestionAccordion defaultActiveKey="0">
        {props.questions.map(item => (
          <Card key={item.id}>
            <Accordion.Toggle as={Card.Header} eventKey={item.id}>
              <QuestionContent>{item.question}</QuestionContent>
              <QuestionIcon icon={faPlus} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={item.id}>
              <Card.Body>{item.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </QuestionAccordion>
      <EmailInstruction>
        {props.note}
      </EmailInstruction>
    </Container>
  </Block>
);

ServiceQuestion.propTypes = {};

export default memo(ServiceQuestion);

import React from 'react';
import {
  More,
  ModalWrapper,
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalSubtitle,
  ModalH,
  ModalDescription,
  Benefits,
  BenefitsRow,
  BenefitsItem,
  Ingredients,
  IngredientsRow,
  IngredientsItem,
} from './styles';

const MenuPopup = ({ show, close, data}) => {
  const { name, subtitle, benefits, ingredients, description } = data;
  return (
    <ModalWrapper show={show} onHide={close} size="xl">
      <ModalHeader closeButton>
        <ModalTitle>{data.name}</ModalTitle>
        <ModalSubtitle>{data.subtitle}</ModalSubtitle>
        <More>
          <span />
          <span />
          <span />
        </More>
      </ModalHeader>
      <ModalBody>
        <Benefits>
          <ModalH>Benefits</ModalH>
          <BenefitsRow>
            {data.benifits.map(item => (
              <BenefitsItem>
                <span>{item}</span>
              </BenefitsItem>
            ))}
          </BenefitsRow>
        </Benefits>

        <Ingredients>
          <ModalH>Ingredients</ModalH>
          <IngredientsRow>
            {data.ingredients.map(({title, description}) => (
              <IngredientsItem>
                <strong>{title}</strong>: {description}
              </IngredientsItem>
            ))}
          </IngredientsRow>
        </Ingredients>

        <ModalDescription>{data.description}</ModalDescription>
      </ModalBody>
    </ModalWrapper>
  )
};

export default MenuPopup;
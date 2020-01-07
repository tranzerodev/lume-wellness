import React,{useState} from 'react'; 
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Col, Row } from 'react-bootstrap';

import {
	ClosePopup, 
	Popup, 
	Keywords, 
	BodySection, 
	BenifitTitle, 
	BenifitContent,
	BenifitButton 
} from './styles';

function MoreInfoModal(props){
	return (
	    <Popup
	      {...props}
	      size="xl"
	      aria-labelledby="contained-modal-title-vcenter"
	      centered
	    >
	      <Modal.Header>
      		<Col md={11} sm={11} xs={10}>
		        <Modal.Title id="contained-modal-title-vcenter">
		          IMMUNITY
		        </Modal.Title>
		        <Keywords>
		          MOOD, ENERGY, HYDRATION
		        </Keywords>
	        </Col>
	        <Col md={1} sm={1} xs={2}>
	        	<ClosePopup onClick={props.onHide} />
	        </Col>
	      </Modal.Header>

	      <Modal.Body>
	        <BodySection>
	          	<BenifitTitle>
	          		Benifits
	          	</BenifitTitle>
	          
				<Row>
					<BenifitButton>
						HYRATION 
					</BenifitButton>

					<BenifitButton>
						FASTER ILLNESS RECOVERY
					</BenifitButton>

					<BenifitButton>
						INCREASE IMMUNE FUNCTION
					</BenifitButton>

					<BenifitButton>
						CELL HEALING & REPAIR
					</BenifitButton>

					<BenifitButton>
						BENEFIT
					</BenifitButton>
				</Row>
	        </BodySection>
	        
	        <BodySection>
	          <BenifitTitle> Ingredients </BenifitTitle>
	          <BenifitContent>
		          Give your body the fuel it needs to stay healthy and on the go. 
		          The Immunity Drip is a cold and flu booster, and improves both 
		          immune health and mental clarity. It includes a high dosage of Vitamin C, B vitamins, and Zinc combined with nutrients that help keep common illnesses at bay. This is the perfect drip for the busy business person or the continental world traveler.
		      </BenifitContent>
	        </BodySection>
	        
	        <BodySection>
	          <BenifitContent>
		          Give your body the fuel it needs to stay healthy and on the go. 
		          The Immunity Drip is a cold and flu booster, and improves both 
		          immune health and mental clarity. It includes a high dosage of Vitamin C, B vitamins, and Zinc combined with nutrients that help keep common illnesses at bay. This is the perfect drip for the busy business person or the continental world traveler.
		      </BenifitContent>
	        </BodySection>
	      </Modal.Body>
	    </Popup>
  	);
}

MoreInfoModal.propTypes = {};

export default MoreInfoModal;

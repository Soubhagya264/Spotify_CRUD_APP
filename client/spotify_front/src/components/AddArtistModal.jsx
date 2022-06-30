import React from "react";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { ModalBackground, ModalContainer, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalBodyContainer,  ModalBodyInput, ModalBodyInputText, ModalBodyInputTextArea, ModalBodyTitleText, ModalBodyTitle, ModalFooter, ModalFooterButton, ModalFooterButtonText,closeStyle } from "../style/AddArtistModel_Styled";

const AddArtistModal = ({ setOpenModal,modalOpen }) => {
    if (!modalOpen) {
        return null;
    }

    
  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Add Artist</ModalTitle>
            <ModalClose
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <CloseIcon className="close" style={closeStyle} />
            </ModalClose>
          </ModalHeader>
          <ModalBody>
            <ModalBodyContainer>
              <ModalBodyTitle>
                <ModalBodyTitleText>Artist Name</ModalBodyTitleText>
              </ModalBodyTitle>
              <ModalBodyInput>
                <ModalBodyInputText />
              </ModalBodyInput>
              <ModalBodyTitle>
                <ModalBodyTitleText>Artist DOB</ModalBodyTitleText>
              </ModalBodyTitle>
              <ModalBodyInput>
                <ModalBodyInputText type="date" />
              </ModalBodyInput>
              <ModalBodyTitle>
                <ModalBodyTitleText>Artist BIO</ModalBodyTitleText>
              </ModalBodyTitle>
              <ModalBodyInput>
                <ModalBodyInputTextArea />
              </ModalBodyInput>
            </ModalBodyContainer>
          </ModalBody>
          <ModalFooter>
            <ModalFooterButton
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <ModalFooterButtonText>Cancel</ModalFooterButtonText>
            </ModalFooterButton>
            <ModalFooterButton>
              <ModalFooterButtonText>Add</ModalFooterButtonText>
            </ModalFooterButton>
          </ModalFooter>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default AddArtistModal;

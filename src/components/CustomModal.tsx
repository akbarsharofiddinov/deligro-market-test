import React from "react";

interface IProps {
  children: React.ReactNode;
}

const CustomModal: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <>
      <div className="custom-modal">
        <div className="modal-inner">{children}</div>
      </div>
    </>
  );
};

export default CustomModal;

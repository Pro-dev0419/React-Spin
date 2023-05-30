import React from "react";
import { Container } from "reactstrap";
import TermsDoc from "../../components/TermsDoc/TermsDoc";
import "./Terms.scss";

const Terms = () => {
  return (
    <Container>
      <div className="terms-page">
        <TermsDoc />
      </div>
    </Container>
  );
};

export default Terms;

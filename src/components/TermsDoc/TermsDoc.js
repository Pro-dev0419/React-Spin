import React from "react";

import "./TermsDoc.scss";
const TermsDoc = () => {
  return (
    <>
      <div class="card">
        <h1 class="primary-heading">Terms of Service</h1>
        <div className="terms-container">
          <h3 className="heading">1. Introduction and Acceptance</h3>
          <p className="paragraph">
            <span className="bold">These Terms of Service ("Terms")</span>{" "}
            govern your access to and use of the website{" "}
            <a className="terms-link" href="https://www.degendrop.io">
              www.degendrop.io
            </a>{" "}
            ("DegenDrop", "Website", "we", "us", or "our"), owned and operated
            by DegenLabs LLC ("DegenLabs"). DegenDrop is an online mystery box
            platform that allows users to pay for mystery box wheel spins using
            Solana cryptocurrency for a chance to win NFTs and other prizes. By
            accessing, using, or participating in any services offered on the
            Website, you agree to be bound by these Terms. If you do not agree
            to these Terms, please do not access or use the Website.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">2. Eligibility</h3>
          <p className="paragraph">
            You must be at least 18 years of age to use DegenDrop. By using the
            Website, you represent and warrant that you have the legal capacity
            to enter into a binding agreement and that you are not barred from
            using the Website under any applicable laws.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">3. Account Registration</h3>
          <p className="paragraph">
            To access and participate in DegenDrop, you must create an account.
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. You agree to immediately notify us of any unauthorized use
            of your account or any other breach of security.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">4. Payment and Cryptocurrency</h3>
          <p className="paragraph">
            DegenDrop accepts Solana cryptocurrency as the only form of payment.
            Users are responsible for ensuring they have a compatible wallet and
            sufficient funds to participate in the mystery box wheel spins. We
            are not responsible for any lost or stolen funds, errors in
            transactions, or fluctuations in cryptocurrency value.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">5. Mystery Box Wheel Spins and Prizes </h3>
          <p className="paragraph">
            DegenDrop offers a chance to win NFTs and other prizes through
            mystery box wheel spins. The odds of winning vary and are determined
            by the specific mystery box. We do not guarantee that you will win
            any particular prize or that the value of any prize will meet or
            exceed the cost of the mystery box wheel spin.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">6. Intellectual Property Rights</h3>
          <p className="paragraph">
            All content on the Website, including but not limited to text,
            graphics, logos, images, and software, is the property of DegenLabs
            or its content suppliers and is protected by international copyright
            and intellectual property laws. Unauthorized use or reproduction of
            any content is strictly prohibited.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">7. Prohibited Conduct</h3>
          <p className="paragraph">
            You agree not to engage in any prohibited conduct, including but not
            limited to: hacking, spamming, fraudulent activities, harassment, or
            any other activity that is harmful or disruptive to the Website or
            its users.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">8. Limitation of Liability</h3>
          <p className="paragraph">
            In no event shall DegenLabs, its affiliates, or their respective
            officers, directors, employees, or agents be liable for any direct,
            indirect, incidental, special, consequential, or punitive damages
            arising out of or in connection with your use of the Website,
            including but not limited to damages for loss of profits, goodwill,
            data, or other intangible losses.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">9. Changes to Terms</h3>
          <p className="paragraph">
            We reserve the right to modify or update these Terms at any time
            without prior notice. Your continued use of the Website constitutes
            your acceptance of any changes to the Terms.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">10. Governing Law and Dispute Resolution</h3>
          <p className="paragraph">
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which DegenLabs is incorporated. Any
            disputes arising out of or in connection with these Terms shall be
            resolved through binding arbitration under the rules of a recognized
            arbitration institution.
          </p>
        </div>
        <div className="terms-container">
          <h3 className="heading">11. Contact Information</h3>
          <p className="paragraph">
            If you have any questions or concerns about these Terms or the
            Website, please contact us at{" "}
            <a className="terms-link " href="https://discord.gg/DegenLabs">
              https://discord.gg/DegenLabs
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsDoc;

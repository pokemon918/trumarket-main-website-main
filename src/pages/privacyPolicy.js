import React, { useEffect, useState } from "react";
import Loader from "../components/lottiesItems/Loader";

const PrivacyPolicy = ({ onHandleClick }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onHandleClick("privacy-policy");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  return (
    <div className="whoweare-main privacy-terms">
      <Loader loading={loading} />
      <section className="whoweare-section">
        <div className="custom-container ">
          <div className="online-platform">
            <p>
              At TRU MARKET, we are committed to protecting the privacy and
              security of our users' personal information. This Privacy Policy
              outlines how we collect, use, and share information, as well as
              the choices available to our users regarding our use of their
              personal information. By using TRU MARKET's services, you are
              consenting to the terms of this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>

            <p>
              We may collect personal information such as your name, email
              address, phone number, and address, as well as business
              information such as your company name, billing information, and
              shipping information. Additionally, we may collect information
              about the transactions you conduct through our platform, including
              the details of the products and services purchased, the amount
              paid, and the date and time of the transaction.
            </p>

            <p>
              We may also collect information from third-party sources such as
              social media, marketing platforms, and publicly available data
              sources.
            </p>

            <h2>Use of Information</h2>

            <p>
              We use the information we collect for a variety of purposes,
              including:
            </p>

            <ul>
              <li>To provide, improve, and maintain our services.</li>
              <li>To process transactions and provide customer support.</li>
              <li>
                To communicate with you about your account, transactions, and
                services.
              </li>
              <li>
                To personalize your experience and provide recommendations and
                advertisements.
              </li>
              <li>
                To generate market intelligence and use the information we
                gather from the operations to monetize it.
              </li>
            </ul>

            <h2>Sharing of Information</h2>

            <p>
              We may share your information with third parties in the following
              circumstances:
            </p>

            <ul>
              <li>
                With service providers who assist us in providing our services,
                such as payment processors, shipping companies, and marketing
                agencies.
              </li>
              <li>
                With third-party advertisers and marketing partners for the
                purpose of delivering targeted advertisements and offers.
              </li>
              <li>
                In response to a subpoena or other legal request, or if we
                believe it is necessary to comply with a legal process or to
                protect the rights, property, or safety of TRU MARKET, our
                users, or the public.
              </li>
              <li>
                In the event of a merger, acquisition, reorganization, or other
                similar event, in which case your information may be transferred
                to the successor entity.
              </li>
            </ul>

            <h2>Security of Information</h2>

            <p>
              We take the security of your information very seriously and have
              implemented appropriate technical and organizational measures to
              protect your information from unauthorized access, disclosure,
              alteration, or destruction. However, no system can be completely
              secure and we cannot guarantee that your information will never be
              disclosed, altered, or destroyed in a manner that is inconsistent
              with this Privacy Policy.
            </p>

            <h2>Your Choices</h2>

            <p>
              You may control the information that we collect and use by
              adjusting your account settings, opting out of marketing
              communications, and deleting your account.
            </p>

            <h2>Changes to this Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or the law. If we make any material
              changes, we will notify you by posting a notice on our website or
              through other means. By continuing to use our services after the
              changes are effective, you are consenting to the revised Privacy
              Policy.
            </p>

            <h2>Contact Us</h2>

            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at <a href="mailto:contact@trumarket.tech">contact@trumarket.tech</a>
            </p>

            <h2>Introduction</h2>
            <p>
              These terms and conditions (the "Terms") govern your use of TRU
              MARKET's platform and services, including the creation and
              execution of smart contracts, and access to market intelligence.
              By using TRU MARKET, you agree to be bound by these Terms and our
              Privacy Policy. If you do not agree to these Terms, you may not
              use TRU MARKET.
            </p>

            <h2>Services</h2>

            <p>
              TRU MARKET provides a platform for buyers and sellers to create,
              execute, and manage smart contracts for the sale and purchase of
              goods. Our platform also allows for real-time traceability of the
              transactions and milestones and the creation of market
              intelligence from the data gathered.
            </p>

            <h2>User Accounts</h2>

            <p>
              To use TRU MARKET, you must create an account and provide accurate
              and complete information about yourself. You are solely
              responsible for maintaining the confidentiality of your account
              and password and for restricting access to your computer, and you
              agree to accept responsibility for all activities that occur under
              your account or password.
            </p>

            <h2>Smart Contracts</h2>

            <p>
              TRU MARKET allows you to create, execute, and manage smart
              contracts for the sale and purchase of goods. The terms of the
              smart contracts, including payment terms and delivery dates, will
              be agreed upon between the buyer and seller and recorded on the
              blockchain. TRU MARKET will monitor and document the transactions,
              but will not be responsible for any disputes or misunderstandings
              between the parties.
            </p>

            <p>
              TRU MARKET gathers data from the transactions and milestones of
              the smart contracts executed on the platform to create market
              intelligence. TRU MARKET reserves the right to use and monetize
              this data, subject to our Privacy Policy.
            </p>

            <h2>Payments</h2>

            <p>
              TRU MARKET does not handle any payments or transfer of funds
              between the parties. All payments will be made directly between
              the buyer and seller as specified in the smart contract.
            </p>

            <h2>Disclaimers</h2>
            <p>
              TRU MARKET provides the platform and services "as is" and makes no
              representations or warranties of any kind, express or implied, as
              to the operation of the platform or the information, content,
              materials, or products included on the platform. TRU MARKET does
              not guarantee the accuracy, completeness, or reliability of any
              information on the platform.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              TRU MARKET shall not be liable for any damages of any kind arising
              from the use of the platform or services, including, but not
              limited to, direct, indirect, incidental, punitive, and
              consequential damages.
            </p>

            <h2>Indemnification</h2>

            <p>
              You agree to indemnify and hold TRU MARKET harmless from and
              against any claims, damages, expenses, and costs (including, but
              not limited to, attorneys' fees) arising from or in connection
              with your use of the platform and services.
            </p>

            <h2>Changes to Terms</h2>

            <p>
              TRU MARKET reserves the right to modify these Terms at any time
              and without prior notice. Your continued use of the platform and
              services after any changes to the Terms shall be deemed your
              acceptance of such changes.
            </p>

            <h2>Governing Law</h2>

            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which TRU MARKET is headquartered,
              without giving effect to any principles of conflicts of law.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from or in connection with these Terms or
              your use of TRU MARKET shall be resolved through binding
              arbitration in accordance with the arbitration rules of the
              jurisdiction in which TRU MARKET is headquartered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

import React, { useEffect, useState } from "react";
import Loader from "../components/lottiesItems/Loader";

const TermsConditions = ({ onHandleClick }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onHandleClick("terms-conditions");
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
              Welcome to TRU MARKET! Please read these terms of service
              carefully as they govern your use of our platform. By creating an
              account and using our platform, you agree to these terms of
              service.
            </p>

            <h2>General Information</h2>

            <p>
              TRU MARKET is a B2B marketplace that connects fruit exporters and
              importers. Our platform allows users to create accounts and
              classify themselves as buyers or sellers. To create an account,
              users must authenticate through Google. TRU MARKET charges a
              commission of 8% of the FOB value of any operation conducted
              through our marketplace. Additionally, TRU MARKET uses the
              information generated on our platform to offer market intelligence
              services to our users.
            </p>

            <h2>User Obligations</h2>

            <p>
              By using TRU MARKET, you agree to comply with all applicable laws
              and regulations. You also agree to use our platform in good faith
              and in a manner that does not harm TRU MARKET, our users, or any
              third parties. Users are responsible for ensuring the accuracy and
              completeness of any information they provide on our platform.
              Additionally, users are responsible for maintaining the
              confidentiality of their account credentials and for any activity
              that occurs on their account.
            </p>

            <h2>TRU MARKET’s Role</h2>

            <p>
              TRU MARKET is a platform that facilitates transactions between
              buyers and sellers. We do not take ownership of any products
              listed on our platform, and we do not have control over the
              quality or safety of any products. We do not guarantee the
              accuracy of any information provided by users or any third
              parties, including but not limited to pricing, product
              descriptions, and shipping information. TRU MARKET is not
              responsible for any loss or damage resulting from the use of our
              platform.
            </p>

            <h2>Payments and Fees</h2>

            <p>
              TRU MARKET charges a commission of 8% of the FOB value of any
              operation conducted through our marketplace. We reserve the right
              to change our commission rates at any time. TRU MARKET will handle
              all payments made through our platform, and we will provide
              transaction records to both buyers and sellers. TRU MARKET is not
              responsible for any currency conversion fees or bank charges.
            </p>

            <h2>Intellectual Property</h2>

            <p>
              TRU MARKET is the sole owner of all intellectual property related
              to our platform, including but not limited to trademarks, logos,
              and copyrighted materials. Users are not allowed to use any of TRU
              MARKET’s intellectual property without our prior written consent.
            </p>

            <h2>Termination</h2>

            <p>
              TRU MARKET reserves the right to terminate any user’s account at
              any time, for any reason, without prior notice. Users may
              terminate their accounts at any time by contacting TRU MARKET
              customer service. Termination of an account does not release users
              from any obligations they may have incurred before termination.
            </p>

            <h2>Limitation of Liability</h2>

            <p>
              TRU MARKET is not liable for any indirect, incidental, or
              consequential damages, including but not limited to lost profits,
              lost data, or business interruption. TRU MARKET’s liability is
              limited to the amount of the commission charged on the operation
              in question.
            </p>

            <h2>Governing Law</h2>

            <p>
              These terms of service are governed by and construed in accordance
              with the laws of the jurisdiction in which TRU MARKET is based.
              Any disputes arising from these terms of service will be resolved
              in the courts of that jurisdiction.
            </p>

            <h2>Changes to Terms of Service</h2>

            <p>
              TRU MARKET reserves the right to modify these terms of service at
              any time, without prior notice. Users will be notified of any
              changes via email or through our platform. By continuing to use
              our platform after any changes have been made, users agree to the
              new terms of service.
            </p>

            <p>
              If you have any questions or concerns about these terms of
              service, please contact TRU MARKET customer service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;

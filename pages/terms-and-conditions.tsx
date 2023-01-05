import { PageHero, Container, Seo } from "@/components/Shared";

const TermsAndConditions = () => {
  return (
    <>
      <Seo pageTitle="Terms and Conditions" />
      <h1 className="sr-only">Terms and Conditions</h1>
      <PageHero title="Terms & conditions" />
      <Container>
        <div className="mb-16">
          <div className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up" data-aos-delay="100">
            <p>
              Please read these Terms of Service (“Terms”), which set forth the legally binding terms and conditions
              between you and Juiice Inc (’the Company’ or ‘Juice Track’ or ‘we’ ‘our’ or ‘us’). It governs your access
              to and the use of Juice Track’s website, mobile application and the services provided by Juice.
            </p>
            <p>
              Our collection and use of your personal information in connection with your use of our services is
              described in our Privacy Policy.
            </p>
            <p>
              Your access to use our services is conditioned on your acceptance of and compliance with these Terms.
              These Terms apply to all visitors, users, Merchants, and any other person who access or use our services.
              Our website is not directed at you if we are prohibited by any law of any jurisdiction from making the
              information on our website available to you and is not intended for any use that would be contrary to your
              local law or regulation. By accessing or using our services, you agree to be bound by these Terms. If you
              disagree with any part of the terms then you may not access our services.
            </p>
          </div>
          <ul>
            {/* definitions */}
            <li className="mt-16">
              <div className="mb-4">
                <h5 className="text-lg font-bold" data-aos="fade-up">
                  Definitions
                </h5>
                <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                  In these terms
                </p>
              </div>
              <ul className="flex flex-col space-y-10">
                <li>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    “Account”
                  </p>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    means a unique personified account registered in the name of the User and which contains details of
                    the User’s transactions/operations on the Platform (as defined below).
                  </p>
                </li>
                <li>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    “Applicable Laws”
                  </p>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    means all applicable regulations, laws, codes, guidelines, policies, rules, and directives of any
                    competent regulatory authority in the Federal Republic of Nigeria.
                  </p>
                </li>
                <li>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    “Mobile Application”
                  </p>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    means any mobile application developed by Juice Track.
                  </p>
                </li>
                <li>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    “Platform”
                  </p>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    means, collectively Juice Track’s website, mobile application and other related applications
                    provided by Juice Track.
                  </p>
                </li>
                <li>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    “Service(s)”
                  </p>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    means all products and services provided to you by Juice Inc and as described in clause 3 of these
                    Terms.
                  </p>
                </li>
                <li>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    “Merchants”
                  </p>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    means any businesses engaged by Juice Inc to provide financial services to.
                  </p>
                </li>
                <li>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    “User”
                  </p>
                  <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                    means persons, customers and visitors who access the Service.
                  </p>
                </li>
              </ul>
            </li>

            {/* acceptance of terms */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Acceptance of terms
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                The Service is offered subject to acceptance of all the terms and conditions contained in these Terms
                and all other operating rules, policies, and procedures that may be published on the Platform, which are
                incorporated by reference, including operating rules, policies, and procedures of third-party service
                providers to the Platform that are referenced herein. These Terms apply to every user of the Service. In
                addition, some Services offered through the Platform may be subject to additional terms and conditions
                adopted by the Platform. Your use of those Services is subject to those additional terms and conditions,
                which are incorporated into these Terms by this reference.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc reserves the right, at its sole discretion, to modify or replace these Terms from time to time
                by posting the updated terms on the Platform. It is your responsibility to check the Terms periodically
                for changes. If you object to any such changes, your sole recourse will be to cease using the Platform
                and the Service. Your continued use of the Service following the posting of any changes to the Terms
                will indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions
                of such changes.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc reserves the right to change, suspend, or discontinue the Service (including, but not limited
                to, the availability of any feature, database, or Content) at any time for any reason. Juiice Incmay
                also impose limits on certain features and Services or restrict your access to parts of or the entire
                Platform without notice or liability.
              </p>
            </li>

            {/* Scope of Juice Track’s Services  */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Scope of Juice Track’s Services{" "}
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc. is an logistics technology company that provides a means for merchants to track their shipped
                goods in realtime.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Our Services can be accessed through a web and mobile applications.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                To access the Service, a User is required to sign up on the Platform and create an account (Juiice
                IncAccount) by providing the User’s name, email and password.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                A User is granted access to use the Platform and has a responsibility to ensure that no third party
                shall gain access to the User’s account information.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc may make the access to the Platform and the Services, or certain areas or features of the
                Platform, subject to certain conditions or requirements, such as, meeting specific eligibility criteria
                (KYC verification).
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You must be at least 18 years old and able to enter into legally binding contracts to access and use of
                the Services. By accessing or using the Platform, you represent and warrant that you are 18 or older and
                have the legal capacity and authority to enter into a contract.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc. will ask users to provide a form of legal or government identification for verification.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You agree to strictly observe the security and authentication procedures of the Platform and you will
                log out from the Platform at the end of every visit.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                When you create an account with us, you must provide us with information that is accurate, complete, and
                current at all times. Failure to do so constitutes a breach of these Terms, which may result in
                immediate termination of your account on our Platform and the Service.
              </p>
            </li>

            {/* Users’ Representations & Warranties  */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Users’ Representations & Warranties
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Representations and warranties are statements and promises made by you to Juice Track, which we rely on
                as being accurate in our dealings with you. You make the following representations and warranties to us
                at the time of agreeing to these Terms and every time you use the Services; <br />
                you are over the age of 18 years; <br />
                you are of sound mind and have the capacity to enter into a legally binding contract; <br />
                all personal information that you provide about yourself is accurate and true to the best of your
                knowledge; <br />
                all information that you provide about your company is accurate and true; <br />
                all information that you provide about your government identification data(s) is accurate and true;{" "}
                <br />
                you shall not create more than one account or create an account for anyone other than yourself <br />
                you are not breaching any Applicable Laws or regulations that are applicable to you or any company,
                trust or partnership.
              </p>
            </li>

            {/* Payment */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Payment
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Our shipment tracking software is provided via a subscription-based arrangement for which you shall be
                required to pay the stipulated subscription fee based on your subscription.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Payment for shipment tracking shall be made within 30 (thirty), 90 (ninety) or 180 (one hundred and
                eighty) days of receiving an invoice from Juice Track, based on your preferred subscription option, and
                the services shall only be provided after the invoice is settled.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc reserves the right to adjust its pricing where necessary.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Payments to Juice Inc shall be made only through virtual card charging.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You warrant that you shall provide complete and accurate payment information.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                By providing your credit or debit card and other payment information accepted by our payment service
                provider, you are expressly agreeing that we are authorized to charge the relevant fees for your use of
                the Service, together with any applicable taxes.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                For its subscription-based services, Juice Inc will automatically renew your subscription on each
                (depending on your choice of subscription) monthly, quarterly or annual anniversary of the date that
                Juice Inc first charges your credit or debit card for the first subscription fee and, as authorized by
                you during the subscription ordering process. Juice Inc will charge your credit or debit card with the
                applicable monthly, quarterly or annual subscription fee and any applicable taxes that may be imposed on
                your subscription fee (unless you cancel prior to the anniversary date).
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Each subscription’s automatic renewal is for the same period of time as your original subscription. You
                may cancel your subscription at any time by contacting Juice Inc at info@Juiceafrica.com. Any
                subscription fees charged prior to the effective date of cancellation will not be refunded, in whole.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You will not be eligible for a pro-rated refund of any portion of the subscription fees paid for any
                unused days of the then-current subscription term. If you cancel your subscription, you will enjoy your
                subscription benefits until the expiration of the then-current subscription term for which you have
                paid, and your subscription benefits will expire at the end of the then-current subscription term.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                If you disagree with any payment transaction, you are to submit such complaint to info@Juiceafrica.com
                within 30 (thirty) days of the payment transaction (“Dispute Period”).
              </p>
            </li>

            {/* Merchants */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Merchants
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You acknowledge that Juice Inc may use payment providers and partners within its network to provide its
                Services to you and you hereby authorize Juice Inc to refer its integrate with these financial providers
                for the provision of its Services to you.
              </p>
            </li>

            {/* Intellectual Property */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Intellectual Property
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                The Service and all rights in our product name, trade names, logos, service marks, slogans, product
                packaging, its original content, features and functionality are and will remain the exclusive property
                of Juice Track. Our trademarks may not be used in connection with any product or service without our
                prior written consent.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc may, at its sole discretion, enable Users to (i) create, upload, post, send, receive and store
                content, such as text, photos, audio, video, or other materials and information on or through the
                Platform (&quot;User Content&quot;); and (ii) access and view User Content and any content that Juice
                Inc itself makes available on or through the Platform, including proprietary content and any content
                licensed or authorized for use by or through Juice Inc from a third party (&quot;Juice Track’s
                Content&quot; and together with User Content, &quot;Collective Content&quot;).
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You will not use, copy, adapt, modify, prepare derivative works of, distribute, license, sell, transfer,
                publicly display, publicly perform, transmit, broadcast or otherwise exploit the Platform or Collective
                Content, except to the extent that you are the legal owner of certain User Content or as expressly
                permitted in these Terms. No licenses or rights are granted to you by implication or otherwise under any
                intellectual property rights owned or controlled by Juice Inc or its licensors, except for the licenses
                and rights expressly granted in these Terms.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Subject to your compliance with these Terms, Juice Inc grants you a limited, non-exclusive, non-sub
                licensable, revocable, non-transferable license to access and view any Collective Content made available
                on or through the Platform and accessible to you, solely for your personal and non-commercial use.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Users shall not directly or indirectly: (i) decipher, decompile, disassemble, reverse engineer, or
                otherwise attempt to derive any source code or underlying ideas or algorithms of any part of the
                Service, except to the extent applicable laws specifically prohibit such restriction; (ii) modify,
                translate, or otherwise create derivative works of any part of the Service; or (iii) copy, rent, lease,
                distribute, or otherwise transfer any of the rights that you receive hereunder. Special Provisions for
                Mobile Applications
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc may make available Mobile Applications to access the Services via a mobile device. To use the
                Mobile Application, you must have a mobile device that is compatible with the mobile service.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc does not warrant that the Mobile Application will be compatible with your mobile device. Juice
                Inc hereby grants to you a non-exclusive, non-transferable, revocable license to use an object code copy
                of the Mobile Application for one registered account on one mobile device owned or leased solely by you,
                for your personal use.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You may not: (i) modify, disassemble, decompile or reverse engineer the Mobile Application; (ii) rent,
                lease, loan, resell, sublicense, distribute or otherwise transfer the Mobile Application to any
                third-party or use the Mobile Application to provide time sharing or similar services for any
                third-party; (iii) make any copies of the Mobile Application; (iv) remove, circumvent, disable, damage
                or otherwise interfere with security-related features of the Mobile Application, features that prevent
                or restrict use or copying of any content accessible through the Mobile Application, or features that
                enforce limitations on use of the Mobile Application; or (v) delete the copyright and other proprietary
                rights notices on the Mobile Application.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You acknowledge that Juice Inc may from occasionally issue upgraded versions of the Mobile Application,
                and may automatically electronically upgrade the version of the Mobile Application that you are using on
                your mobile device. You consent to such automatic upgrading on your mobile device, and agree that these
                Terms will apply to all such upgrades. Standard data charges from your mobile network or internet
                service provider may apply to your use of the Mobile Application. The following additional terms and
                conditions apply with respect to any Mobile Application that Juice Inc provides to you designed for use
                on an Apple iOS-powered mobile device (an “iOS App”):
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You acknowledge that these Terms are between you and Juice Inc only, and not with Apple, Inc. (“Apple”).
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Your use of Juice Track’s iOS App must comply with Apple’s current App Store Terms of Service.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Track, and not Apple, is solely responsible for our iOS App and the Services and related content
                available on our iOS App. You acknowledge that Apple has no obligation to provide maintenance and
                support services with respect to our iOS App.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                To the maximum extent permitted by applicable law, Apple will have no warranty obligation whatsoever
                with respect to our iOS App.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You agree that Juice Track, and not Apple, is responsible for addressing any claims by you or any
                third-party relating to our iOS App or your possession and/or use of our iOS App, including, but not
                limited to: (i) product liability claims; (ii) and claims arising under consumer protection or similar
                legislation, and all such claims are governed solely by these Terms and any law applicable to us as
                provider of the iOS App.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You agree that Juice Track, and not Apple, shall be responsible, to the extent required by these Terms,
                for the investigation, defense, settlement and discharge of any third-party intellectual property
                infringement claim related to our iOS App or your possession and use of our iOS App.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government
                embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and
                (ii) You are not listed on any U.S. Government list of prohibited or restricted parties.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                The following additional terms and conditions apply with respect to any Mobile Application that Juice
                Inc provides to you designed for use on an Android-powered mobile device (an “Android App”):
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You acknowledge that these Terms are between you and Juice Inc only, and not with Google, Inc.
                (“Google”).
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Your use of Juice Track’s Android App must comply with Google’s current Android Market Terms of Service.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Google is only a provider of the Android Market where you obtained the Android App. Juice Track, and not
                Google, are solely responsible for Juice Track’s Android App and the Services and content available
                thereon. Google has no obligation or liability to you with respect to Juice Track’s Android App or these
                Terms.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You acknowledge and agree that Google is a third-party beneficiary to the Terms as they relate to Juice
                Track’s Android App.
              </p>
            </li>

            {/* Prohibited Activities */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Prohibited Activities
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You shall not use the Platform for any purpose that is prohibited by these Terms. You are responsible
                for all of your activity in connection with the Service. Violation of our rules may result in the
                termination and cancellation of your Account. You acknowledge and agree that we may terminate any Juiice
                IncAccount at any time for any reason (including, but not limited to, our independent assessment or the
                receipt of claims or allegations from third parties or authorities).
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Users shall not utilize the Platform or the Services for any illegal purpose.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Users shall not utilize the Platform or the Services for any illegal purpose. You are solely responsible
                for compliance with any and all laws, rules, regulations, and tax obligations that may apply to your use
                of the Services. In connection with your use of the Platform, you will not and will not assist or enable
                others to: breach or circumvent any applicable laws or regulations, agreements with third-parties,
                third-party rights, or our Terms; use the Platform or any content therein for any commercial or other
                purposes that are not expressly permitted by these Terms or in a manner that falsely implies
                endorsement, partnership or otherwise misleads others as to your affiliation with Juice Track; <br />
                copy, store or otherwise access or use any information, including personally identifiable information
                about any other User, contained on the Platform in any way that is inconsistent with Juice Track’s
                Privacy Policy or these Terms or that otherwise violates the privacy rights of Users or third parties;{" "}
                <br />
                use the Platform in connection with the distribution of unsolicited commercial messages
                (&quot;spam&quot;); offer as a trader; <br />
                use the Platform with the intention to circumvent any subscription fees or for any other reason; <br />
                request, accept or make any payment for orders outside of the Platform. If you do so, you acknowledge
                and agree that you: (i) would be in breach of these Terms; (ii) accept all risks and responsibility for
                such payment, and (iii) hold Juice Inc harmless from any liability for such payment; <br />
                discriminate against or harass anyone on the basis of race, tribe, origin, religion, gender, physical or
                mental disability, medical condition, marital status, or age, or otherwise engage in any abusive or
                disruptive behaviour; <br />
                use, display, mirror or frame the Platform or Collective Content, or any individual element within the
                Platform, Juice Track’s name, any trademark, logo or other proprietary information belonging to Juice
                Track, or the layout and design of any page or form contained on a page in the Platform, without Juice
                Track’s express written consent; <br />
                dilute, tarnish or otherwise harm Juice Track’s brand in any way, including through unauthorized use of
                Collective Content, registering and/or using derivative terms in domain names, trade names, trademarks
                or other source identifiers, or registering and/or using domains names, trade names, trademarks or other
                source identifiers that closely imitate or are confusingly similar to Juice Track’s domains, trademarks,
                taglines, promotional campaigns or Collective Content; <br />
                use any robots, spider, crawler, scraper or other automated means or processes to access, collect data
                or other content from or otherwise interact with the Platform for any purpose; <br />
                avoid, bypass, remove, deactivate, impair, descramble, or otherwise attempt to circumvent any
                technological measure implemented by Juice In cor any of Juice Track’s providers or any other third
                party to protect the Platform; <br />
                attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the
                Platform; take any action that damages or adversely affects, or could damage or adversely affect the
                performance or proper functioning of the Platform; <br />
                violate or infringe anyone else’s rights or otherwise cause harm to anyone. <br />
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                violate or infringe anyone else’s rights or otherwise cause harm to anyone. You acknowledge that Juice
                Inc has no obligation to monitor the access to or use of the Platform by any User or to review, disable
                access to, or edit any User Content, but has the right to do so to (i) operate, secure and improve the
                Platform (including without limitation for fraud prevention, risk assessment, investigation and customer
                support purposes); (ii) ensure Users’ compliance with these Terms; (iii) comply with applicable law or
                the order or requirement of a court, law enforcement or other administrative agency or governmental
                body; (iv) respond to User Content that it determines is harmful or objectionable; or (v) as otherwise
                set forth in these Terms. Users agree to cooperate with and assist Juice Inc in good faith, and to
                provide Juice Inc with such information and take such actions as may be reasonably requested by Juice
                Inc with respect to any investigation undertaken by Juice Inc or a representative of Juice Inc regarding
                the use or abuse of the Platform.
              </p>
            </li>

            {/* Damages and Theft */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Damages and Theft
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc shall not be responsible for any loss of or damage to your shipment(s) due to or arising from
                fire, weather, theft or any other cause except the sole negligence of Juice Inc from accurately tracking
                the goods in question. Any item left in your shipment(s) which have not been synchronized with Juice
                track, are left at your own risk and Juice Inc shall not be responsible for any loss or damage to any
                personal property left in your shipment(s) or for loss or damage to any cargo, materials or supplies
                carried on or in such shipment(s), whatever the cause.
              </p>
            </li>

            {/* Links to Other Websites */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Links to Other Websites
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                The Platform may contain links to third-party websites or services that are not owned or controlled by
                Juice Track.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc has no control over, and assumes no responsibility for the content, privacy policies, or
                practices of any third-party websites or services. You further acknowledge and agree that Juice Inc
                shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to
                be caused by or in connection with use of or reliance on any such content, goods or services available
                on or through any such websites or services. We strongly advise you to read the terms and conditions and
                privacy policies of any third-party websites or services that you visit.
              </p>
            </li>

            {/* Termination */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Termination
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                We may terminate or suspend our Service to you immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Upon termination, your right to use the Platform and our Service will immediately cease. If you wish to
                terminate your transaction, you may simply send an email to info@Juiceafrica.com.
              </p>
            </li>

            {/* Indemnity */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Indemnity
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                You agree to indemnify and hold harmless Juice Track, its affiliates and subsidiaries, its officers,
                directors, employees and agents, against all liabilities, costs, expenses, damages and losses (including
                any direct, indirect or consequential losses, loss of profit, loss of reputation and all interest
                penalties and legal and other reasonable professional costs and expenses) suffered or incurred as a
                result of: <br />
                your fraudulent or illegal use of the Services or the Platform; <br />
                your negligence or any default by you of any of these Terms; <br />
                any inaccurate or incomplete information that you have knowingly provided to us; <br />
                you allowing any other person to access your account either with your permission or as a result of your
                failure to keep your username and password private; <br />
                any claim made against you for actual or alleged infringement of Juice Track’s Intellectual Property or
                any actual or alleged infringement of a third party’s Intellectual Property arising out of or in
                connection with our Services or your use of the Platform.
              </p>
            </li>

            {/* Limitation of Liability */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Limitation of Liability
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                In no event shall Juice Track, its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from: <br />
                your use of the Platform or the Services or your inability to use the Platform or the Services; <br />
                any conduct or content of any third party on the Platform; <br />
                any unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
                contract, tort (including negligence) or any other legal theory, whether or not we have been informed of
                the possibility of such damage, and even if a remedy set forth herein is found to have failed of its
                essential purpose; <br />
                any legal proceedings between the you and any third parties.
              </p>
            </li>

            {/* Disclaimer */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Disclaimer
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Your use of the Service is at your sole risk. The Platform is provided on an “AS IS” and “AS AVAILABLE”
                basis. The Platform is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Track, its subsidiaries, affiliates, and its licensors do not warrant that a) the Platform will
                function uninterrupted, secure or available at any particular time or location; b) any errors or defects
                will be corrected; c) the Platform is free of viruses or other harmful components; or d) the results of
                using the Platform will meet your requirements.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                For the digital health check report services provided by Juice Track, Juice Inc shall not be responsible
                for any damage that occurs to your shipment(s) where, after receiving a digital health report on your
                shipment(s), such report is taken to an external Merchants for subsequent tracking.
              </p>
            </li>

            {/* Governing Law */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Governing Law
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                These Terms shall be governed and construed in accordance with the laws of the Federal Republic of
                Nigeria, without regard to its conflict of law provisions.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
                regarding our Service, and supersede and replace any prior agreements we might have between us regarding
                the Service.
              </p>
            </li>

            {/* Dispute Resolution */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Dispute Resolution
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Any disputes arising under or in connection with the validity, interpretation and performance of this
                Terms between you and Juice Inc or between Juiice Inc and any third party that cannot be resolved
                amicably by the parties through negotiation within 30 (thirty) days shall be resolved by Arbitration at
                the Lagos Court of Arbitration (LCA) before a single arbitrator in accordance with the Arbitration and
                Conciliation Act, Cap A18, Laws of the Federation of Nigeria.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                The Parties shall endeavour in good faith to mutually agree on the selection of an arbitrator. If the
                Parties cannot mutually agree on the selection of an arbitrator within ten (10) days of the request,
                they shall apply to the LCA to appoint an arbitrator. Arbitration proceedings shall be conducted in
                Lagos. The arbitrator will be requested to render an award within ninety (90) days and to provide, in
                writing the reasoning for the award. The decision of any such arbitrator shall be final and binding on
                the parties.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Each party shall bear its cost in connection with the Arbitration and the arbitrator’s fees shall be
                split equally between both parties.
              </p>
            </li>

            {/* Force Majeure */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Force Majeure
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc shall not be liable for failure to perform, or for delay in performing its obligations
                hereunder if such failure or delay shall be due to natural disasters, war, riot, civil commotion,
                weather, pandemics, epidemics, labour disputes, failure of sub-contractors or any other cause beyond its
                reasonable control and whether or not of a similar nature to the foregoing.
              </p>
            </li>

            {/* Feedback */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Feedback
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                We welcome and encourage you to provide feedback, comments and suggestions for improvements to Juice
                Track’s Platform or Services. You may submit your feedback by emailing us at info@Juicetrack.org. Any
                feedback you submit to us will be considered non-confidential and non-proprietary to you. By submitting
                your feedback to us, you grant us a non-exclusive, worldwide, royalty-free, irrevocable, sub-licensable,
                perpetual license to use and publish those ideas and materials for any purpose, without compensation to
                you.
              </p>
            </li>

            {/* Changes to Terms & Conditions */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Changes to Terms & Conditions
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                Juice Inc reserves the right, in its sole discretion, to change the Terms of Service. Juiice Inc
                encourages you to periodically review the Terms to stay informed of our updates.
              </p>
            </li>

            {/* Changes to Terms & Conditions */}
            <li className="mt-16">
              <h5 className="text-lg font-bold mb-4" data-aos="fade-up">
                Contact Us
              </h5>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                If you have any questions about these Terms, please contact us at info@Juicetrack.org.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                This document was last updated on 1st June, 2022.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default TermsAndConditions;

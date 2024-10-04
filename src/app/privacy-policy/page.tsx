'use client';

import PageCard from '../ui/Cards/PageCard';
import {ListComp} from '../ui/ListComp';
import {
	contactList,
	firstList,
	list4,
	secondList,
	thirdList,
} from './privacyDocs';

function PrivacyPage() {
	return (
		<>
			<>
				<PageCard className="min-h-[calc(70vh-5rem)]">
					<div className="px-3 lg:px-0 lg:w-3/5 text-center">
						<h1 className="text-3xl sm:text-5xl w-full">
							Retrust Microfinance Bank Limited Privacy Policy
						</h1>
						<h4 className="mt-5 text-TColor-150 lg:text-lg">
							Effective Date: 1st September 2024
						</h4>
					</div>
				</PageCard>
			</>

			<div className="px-3 md:px-10 xl:px-28 py-5 md:py-10 xl:py-20">
				<p>
					At Retrust Microfinance Bank Limited, we are committed to
					safeguarding the privacy and security of our customers&#39;
					personal information. This Privacy Policy explains how we
					collect, use, share, and protect your information when you
					use our services, access our website, or interact with our
					digital platforms. By engaging with our services, you agree
					to the terms outlined in this policy.
				</p>
				<div className="my-5">
					<h4>1. Introduction We Collect</h4>
					<div className="my-5">
						We collect various types of information to provide and
						improve our services. The information we may collect
						includes{' '}
						<ul className="my-5 pl-5">
							{firstList.map((e, i) => (
								<ListComp
									key={i}
									description={e.description}
									title={e.title}
								/>
							))}
						</ul>
					</div>
					<h4>2. How We Use Your Information</h4>
					<div className="my-5">
						Retrust Microfinance Bank Limited uses your information
						to:{' '}
						<ul className="my-5 pl-5">
							{secondList.map((e, i) => (
								<ListComp key={i} description={e.description} />
							))}
						</ul>
					</div>
					<h4>3. Sharing Your Information</h4>
					<div className="my-5">
						We may share your personal information in the following
						circumstances:{' '}
						<ul className="my-5 pl-5">
							{thirdList.map((e, i) => (
								<ListComp
									key={i}
									description={e.description}
									title={e.title}
								/>
							))}
						</ul>
					</div>
					<h4>4. Data Security</h4>
					<div className="my-5">
						Retrust Microfinance Bank Limited takes the security of
						your information seriously. We implement
						industry-standard security measures, including
						encryption, firewalls, and secure access controls, to
						protect your data from unauthorized access, loss, or
						disclosure.
						<p className="my-5">
							While we strive to protect your personal
							information, we cannot guarantee absolute security
							arising from our customer&#39;s interaction with all
							of our digital platforms. We encourage you to
							safeguard your account information and not share any
							sensitive bank information and/or data to anyone.
							Notify us immediately if you suspect any
							unauthorized activity.
						</p>
					</div>
					<h4>5. Data Retention</h4>
					<p className="my-5">
						We retain your personal information for as long as
						necessary to provide you with our services and comply
						with legal and regulatory requirements. Once your
						information is no longer required for these purposes, it
						will be securely deleted.
					</p>
					<h4>6. Your Privacy Rights</h4>
					<div className="my-5">
						As a customer, you have certain rights regarding your
						personal information:{' '}
						<ul className="my-5 pl-5">
							{list4.map((e, i) => (
								<ListComp
									key={i}
									description={e.description}
									title={e.title}
								/>
							))}
						</ul>
					</div>
					<h4>7. Third-Party Links</h4>
					<p className="my-5">
						Our website or digital platforms may contain links to
						third-party websites or services. Please note that this
						Privacy Policy does not apply to those third-party
						services. We encourage you to review their privacy
						policies before providing any personal information.
					</p>
					<h4>8. Children&#39;s Privacy</h4>
					<p className="my-5">
						Our services are not intended for individuals under the
						age of 18. We do not knowingly collect or process
						personal data from minors. If we become aware that we
						have inadvertently collected such information, we will
						take steps to delete it promptly.
					</p>
					<h4>9. Changes to this Privacy Policy</h4>
					<p className="my-5">
						Retrust Microfinance Bank Limited may update this
						Privacy Policy from time to time to reflect changes in
						our practices, legal requirements, or industry
						standards. Any updates will be posted on our website,
						and we encourage you to review this policy regularly to
						stay informed of any changes.
					</p>
					<h4>10. Contact Us</h4>
					<div className="my-5">
						If you have any questions, concerns, or requests
						regarding this Privacy Policy or how your personal
						information is handled, please contact our Data
						Protection Officer (DPO) at:{' '}
						<ul className="my-5 pl-5">
							{contactList.map((e, i) => (
								<ListComp
									key={i}
									description={e.description}
									title={e.title}
								/>
							))}
						</ul>
					</div>
					<div className="mb-20">
						By continuing to use our services, you acknowledge and
						agree to this Privacy Policy. Thank you for trusting
						Retrust Microfinance Bank Limited with your personal
						information.
					</div>
				</div>
			</div>
		</>
	);
}

export default PrivacyPage;

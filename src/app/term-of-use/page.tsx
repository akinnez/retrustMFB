'use client';

import PageCard from '@/app/ui/Cards/PageCard';
import {ListComp} from '@/app/ui/ListComp';

import {
	digitalPlatformList,
	disputeList,
	serviceList,
	contactList,
	accountSuspension,
} from '@/app/term-of-use/terms';

function TermsOfUsePage() {
	return (
		<>
			<>
				<PageCard className="min-h-[calc(70vh-5rem)]">
					<div className=" px-3 lg:px-0 lg:w-3/5 text-center">
						<h1 className="text-3xl sm:text-5xl w-full">
							Retrust Microfinance Bank Limited Terms of Use
						</h1>
						<h5 className="mt-5 text-TColor-150 lg:text-lg">
							Effective Date: 1st September 2024
						</h5>
					</div>
				</PageCard>
			</>
			<div className="px-3 md:px-10 xl:px-28 py-5 md:py-10 xl:py-20">
				<p>
					Welcome to Retrust Microfinance Bank Limited. By accessing
					and using our banking services, website, mobile
					applications, and other digital platforms (collectively
					referred to as “Services”), you agree to comply with these
					Terms of Use. These terms govern your relationship with
					Retrust Microfinance Bank Limited, and we encourage you to
					read them carefully.
				</p>
				<div className="my-10">
					<h4>1. Acceptance of Terms</h4>
					<p className="my-5">
						By accessing or using any of Retrust Microfinance Bank’s
						Services, you accept and agree to be bound by these
						Terms of Use and any other policies, rules, or
						guidelines we may post. If you are using these Services
						on behalf of a company or entity, you represent that you
						have the authority to bind that entity to these terms.
					</p>
					<h4>2. Eligibility</h4>
					<p className="my-5">
						To use Retrust Microfinance Bank’s Services, you must be
						at least 18 years of age or the legal age required in
						your country to engage in financial services. By
						accessing the Services, you represent and warrant that
						you meet these eligibility requirements.
					</p>
					<h4>3. Account Registration and Security</h4>
					<div className="my-5">
						When you register for an account with Retrust
						Microfinance Bank, you agree to provide accurate,
						current, and complete information. You are responsible
						for maintaining the confidentiality of your account
						credentials (username, password, etc.) and for all
						activities that occur under your account.
						<p className="my-5">
							You agree to notify us immediately of any
							unauthorized use of your account or any other breach
							of security.
						</p>
					</div>
					<h4>4. Services Offered</h4>
					<div className="my-5">
						Retrust Microfinance Bank provides a range of financial
						products and services, including but not limited to:{' '}
						<ul className="my-5 pl-5">
							{serviceList.map((e, i) => (
								<ListComp
									key={i}
									description={e.description}
									title={e.title}
								/>
							))}
						</ul>
						<p className="my-5">
							We reserve the right to modify, suspend, or
							discontinue any service at any time without prior
							notice. You agree that Retrust Microfinance Bank
							will not be liable to you or any third party for any
							changes to our Services.
						</p>
					</div>
					<h4>5. How We Use Your Information</h4>
					<div className="my-5">
						When using Retrust Microfinance Bank’s website, mobile
						applications, or any other digital platforms, you agree
						to comply with the following:{' '}
						<ul className="my-5 pl-5">
							{digitalPlatformList.map((e, i) => (
								<ListComp key={i} description={e.description} />
							))}
						</ul>
					</div>
					<h4>6. Fees and Charges</h4>
					<div className="my-5">
						By using our Services, you agree to pay all applicable
						fees, charges, and taxes associated with your use of the
						Services. Retrust Microfinance Bank reserves the right
						to update or change its fees at any time, and such
						changes will be communicated to you through the
						appropriate channels.
					</div>
					<h4>7. Third-Party Links and Services</h4>
					<p className="my-5">
						Our Services may contain links to third-party websites,
						services, or products that are not owned or controlled
						by Retrust Microfinance Bank. We do not endorse or
						assume any responsibility for any third-party websites
						or services. Your interactions with any third-party
						sites or services are solely between you and the third
						party. We encourage you to read the terms and conditions
						and privacy policies of any third-party websites you
						visit.
					</p>
					<h4>8. Privacy and Data Protection</h4>
					<p className="my-5">
						Your privacy is important to us. Please review our
						privacy policy (insert link) to understand how we
						collect, use, and protect your personal information.
					</p>
					<p className="my-5">
						By using our Services, you consent to the collection and
						processing of your personal data in accordance with our
						Privacy Policy and any applicable laws.
					</p>
					<h4>9. Dispute Resolution</h4>
					<div>
						In the event of any disputes arising from your use of
						Retrust Microfinance Bank’s Services, you agree to:{' '}
						<ul className="my-5 pl-5">
							{disputeList.map((e, i) => (
								<ListComp
									key={i}
									description={e.description}
									title={e.title}
								/>
							))}
						</ul>
					</div>

					<h4>10. Account Suspension and Termination</h4>
					<div className="my-5">
						Retrust Microfinance Bank reserves the right to suspend
						or terminate your account at any time if:{' '}
						<ul className="my-5 pl-5">
							{accountSuspension.map((e, i) => (
								<ListComp
									key={i}
									description={e.description}
									title={e.title}
								/>
							))}
						</ul>
						<p className="my-5">
							Upon termination, your right to use our Services
							will immediately cease, and we may delete any data
							associated with your account.:{' '}
						</p>
					</div>

					<h4>11. Limitation of Liability</h4>
					<p className="my-5">
						To the fullest extent permitted by law, Retrust
						Microfinance Bank shall not be liable for any direct,
						indirect, incidental, special, or consequential damages
						arising out of your use of, or inability to use, our
						Services. This includes, but is not limited to, damages
						for loss of profits, data, or goodwill, even if we have
						been advised of the possibility of such damages.
					</p>
					<h4>12. Indemnification</h4>
					<p className="my-5">
						You agree to indemnify, defend, and hold harmless
						Retrust Microfinance Bank, its affiliates, officers,
						directors, employees, and agents from any claims,
						liabilities, damages, losses, or expenses (including
						legal fees) arising out of or related to your use of the
						Services, your violation of these Terms of Use, or your
						violation of any applicable laws or regulations.
					</p>
					<h4>13. Modification of Terms</h4>
					<p className="my-5">
						Retrust Microfinance Bank reserves the right to modify
						or update these Terms of Use at any time. Changes will
						be effective upon posting the updated terms on our
						website or notifying you through other means. Your
						continued use of our Services after such changes
						constitutes your acceptance of the revised terms.
					</p>

					<h4>14. Contact Information</h4>
					<div className="my-5">
						If you have any questions, concerns, or comments about
						these Terms of Use or our Services, please contact us
						at:{' '}
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
						By using our Services, you acknowledge that you have
						read, understood, and agree to these Terms of Use. Thank
						you for choosing Retrust Microfinance Bank Limited for
						your banking.
					</div>
				</div>
			</div>
		</>
	);
}

export default TermsOfUsePage;

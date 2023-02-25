import "./appFooter.scss";

export function AppFooter() {
	return (
		<footer className="footer">
			<a href='https://www.homebuddy.com/' className='text-logo' target="_blank" rel="noreferrer">
				<div className="text-logo__top">
					HomeBuddy
					<span className="text-logo__dot">.</span>
				</div>
			</a>
			<ul className="footerList">
				<li className="footerList__item">
					<a href="/" className="anchor">Terms of Use</a>
				</li>
				<li className="footerList__item">
					<a href="/" className="anchor">Privacy Policy</a>
				</li>
				<li className="footerList__item">
					<a href="/" className="anchor">Cookie Policy</a>
				</li>
				<li className="footerList__item">
					<a href="/" className="anchor">Do Not Sell My Personal Information</a>
				</li>
				<li className="footerList__item">
					<a href="/" className="anchor">Contact us</a>
				</li>
			</ul>
		</footer>
	);
}

import "./zipCode.scss";

export function ZipCode({ openModal = (f) => f }) {
	return (
		<section className="zipCode" id="zipCode">
			<div className="piggyLabel">
				<span>You will be surprised how affordable gutter guards are!</span>
			</div>
			<h2 className='zipCode__heading'>See How Much Gutter Guards Cost In The XX, XXX Area</h2>
			<form onSubmit={openModal} className="container container_zipCode">
				<div className="zipCodeForm">
					<div className="zipCodeForm__wrapper">
						<label className="zipCodeForm__label">What is your ZIP Code?</label>
						<div className="input-wrapper">
							<input
								className="input"
								type="text"
								required={true}
								pattern="\d{4,6}"
								minLength={4}
								maxLength={6}
								placeholder="  Enter ZIP Code"
							/>
							<span>Enter ZIP Code</span>
						</div>
						<small className="zipCodeForm__small">
							Free, no-obligation estimates.
						</small>
						<button type="submit" className="button">
							Get estimate
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}

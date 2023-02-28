import "../assets/styles/main.scss";

import { useState } from "react";
import { AppHeader } from "./AppHeader/AppHeader";
import { Features } from "./Features/Features";
import { ZipCode } from "./ZipCode/ZipCode";
import { AppFooter } from "./AppFooter/AppFooter";
import { Modal } from "./Modal/Modal";

function App() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [step, setStep] = useState(1);
	const [answer, setAnswer] = useState(true);

	const submitZip = (event) => {
		event.preventDefault();
		setModalOpen(true);
	};

	const closeModal = (event) => {
		event.stopPropagation();
		setModalOpen(false);
	};

	const onSubmitNext = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (answer === true || answer === false) {
			setStep(step + 1);
		} else {
			alert("Choose your answer, please");
		}
		if (step === 2) {
			setModalOpen(false);
		}
	};

	const onYes = (event) => {
		event.stopPropagation();
		setAnswer(true);
	};

	const onNo = (event) => {
		event.stopPropagation();
		setAnswer(false);
	};

	return (
		<div className="app">
			<AppHeader />
			<main>
				<Features />
				<ZipCode openModal={submitZip} />
			</main>
			<AppFooter />
			<Modal
				open={isModalOpen}
				closeModal={closeModal}
				onSubmitNext={onSubmitNext}
				step={step}
				onYes={onYes}
				onNo={onNo}
				answer={answer}
			/>
		</div>
	);
}

export default App;

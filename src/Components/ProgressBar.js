import React from "react";
import ProgressCircle from "./ProgressCircle";
import "./ProgressBar.css";

const ProgressBar = () => {
	const maxValue = 500;
	const currentValue = 500;
	const currentProgress = Math.round((currentValue * 100) / maxValue);
	console.log("currentProgress: ", currentProgress);

	return (
		<div className="progress_bar">
			<div className="progress_bar__outer_circle"></div>
			<div className="progress_bar__currentProgress">
				<h4 className="currentProgress__text">{currentProgress}%</h4>
			</div>
			<ProgressCircle
				maxValue={maxValue}
				currentValue={currentValue}
				currentProgress={currentProgress}
			/>
		</div>
	);
};

export default ProgressBar;

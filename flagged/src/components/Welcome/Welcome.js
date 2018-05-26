import React from 'react';

const Welcome = () => {

	return(
		<div>
			<h1 className="f3 f2-m f1-l fw4 black-90 mv3">Welcome to Flagged</h1>
			<h4 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">How many flags do you recognize? Discover the flags around the world. Have fun!</h4>
			<h4 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">Your current score is <span>1/100</span></h4>
		</div>
	);
}

export default Welcome;
import React from 'react';
import './Flags.css';
const Flags = () => {
	return(
		<div>
			<img width="128px" height="auto" src="http://www.countryflags.io/AR/shiny/64.png" alt="flag"/>
			<div class="stairs h4 mw5 mw7-ns center pa2 ph5-ns">
				<input class ="fl w-100 h3" type="text" placeholder="Country"/>
				<div class="pa1 flex fl w-100">
					<button class="fl w-60 grow dib f3-ns no-underline bg-green black-90 pa2 br3" type="submit">Check</button>
					<button class="fl w-60 grow dib f3-ns no-underline bg-red black-90 pa2 br3" type="submit">Skip</button>
				</div>
			</div>			
		</div>
	);
}

export default Flags;
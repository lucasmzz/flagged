import React from 'react';
import './Flags.css';
const Flags = ({onFlagCheck}) => {
	return(
		<div>
			<img width="550px" height="auto" src="https://restcountries.eu/data/arg.svg" alt="flag"/>
			<div className="h4 mw5 mw7-ns center pa3 ph5-ns">
				<input id="countryBox" className ="tc f3 fl w-100 h3" type="text" placeholder="Country"/>
				<div className="pa1 flex fl w-100">
					<p onClick={onFlagCheck} className="fl w-60 grow dib f6 link dim ph3 pv2 mb2 dib white bg-green">Check</p>
					<p className="fl w-60 grow dib f6 link dim ph3 pv2 mb2 dib white bg-red">Skip</p>

				</div>
			</div>			
		</div>
	);
}

export default Flags;
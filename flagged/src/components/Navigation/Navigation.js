import React from 'react';

const Navigation = () => {
	return(
		<nav className="db dt-l w-100 border-box pa3 ph5-l">
		  <p className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
		    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
		  </p>
		  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
		    <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Press">Ranking</p>
		    <p className="link dim dark-gray f6 f5-l dib" href="#" title="Contact">Sign Out</p>
		  </div>
		</nav>
	);
}

export default Navigation;
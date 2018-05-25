import React from 'react';

const Navigation = () => {
	return(
		<nav class="db dt-l w-100 border-box pa3 ph5-l">
		  <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
		    <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name" />
		  </a>
		  <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
		    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Press">Ranking</a>
		    <a class="link dim dark-gray f6 f5-l dib" href="#" title="Contact">Sign Out</a>
		  </div>
		</nav>
	);
}

export default Navigation;
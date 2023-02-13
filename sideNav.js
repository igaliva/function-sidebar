const LINKS = {
	ABOUT: 'About',
	CONTACT: 'Contact',
	HOME: 'Home',
};

function sideNav() {
	const sidebar = document.createElement('div');
	sidebar.className = 'sidebar';
	//
	for (const link in LINKS) {
		const createLink = document.createElement('a');
		createLink.innerHTML = LINKS[link];
		createLink.setAttribute('href', LINKS[link] + '.html');
		sidebar.appendChild(createLink);
	}
	//
	document.body.appendChild(sidebar);
}

sideNav();

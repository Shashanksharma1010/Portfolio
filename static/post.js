// Handling Dynamic Post Page.

		// set links up to load new page.
		document.querySelectorAll('.nav-link').forEach(link => {
            link.onclick = () => {
                load_page(link.dataset.page);
                window.location = "/post"
                return false;
            };
        });

        // Renders contents of new page in main view
        function load_page(name) {
            const request  = new XMLHttpRequest();
            request.open('POST', `/middle`)

	        // Add data to send with request
	        const data = new FormData();
	        data.append('postNo', name);

	        // Send request
	        request.send(data);
	        return false;
	    }

        // Plan Card Link Manage.
        document.querySelectorAll('.plan-card').forEach((card) => {
            card.addEventListener('click', () => {
                window.location = '#Contact';
                }) 
            })
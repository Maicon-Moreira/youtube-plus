chrome.extension.sendMessage({}, function (response) {
	const readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			console.log('Youtube Plus enabled')

			let lastHref = null

			setInterval(() => {
				const currentHref = window.location.href

				if (lastHref != currentHref) {
					lastHref = currentHref

					// pagina inicial
					if (currentHref == 'https://www.youtube.com/'){
						window.location.replace('https://www.google.com.br')
						
						console.log('redirected')
					}
					else {
						const sidebar = document.getElementById('secondary')
						sidebar.parentNode.removeChild(sidebar)

						console.log('removed')
					}

					console.log(currentHref)
				}
			}, 10)
		}
	}, 10);
});
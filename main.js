if (window.Telegram && Telegram.WebApp) {
	// Wait for Telegram WebApp API to be ready
	window.Telegram.WebApp.ready();

	const sendBtn = document.getElementById('sendBtn');
	const statusText = document.getElementById('status');

	// Event listener for the button
	sendBtn.addEventListener('click', () => {
		// Sending data to the bot via Telegram WebApp API
		Telegram.WebApp.sendData('Hello from Mini App');

		// Update the status
		statusText.textContent = 'Data sent to Telegram!';

		// Disable the button after sending data
		sendBtn.disabled = true;
	});

	// Customizing the appearance of the Telegram WebApp (optional)
	Telegram.WebApp.MainButton.setText('Send to Telegram');
	Telegram.WebApp.MainButton.show(); console.log('Opened inside Telegram');
} else {
	// Outside Telegram
	console.log('Opened outside Telegram');
}
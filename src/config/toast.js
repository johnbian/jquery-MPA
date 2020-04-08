export function Toast(msg, duration) {
	// eslint-disable-next-line no-restricted-globals
	const durationLocal = isNaN(duration) ? 3000 : duration;
	const m = document.createElement('div');
	m.id = 'Toast';
	m.innerHTML = msg;
	m.style.cssText = 'opacity: 0.7;padding: 7px 10px; -webkit-transform: translateX(-50%);transform: translateX(-50%);color: rgb(255, 255, 255);line-height: 20px;text-align: center;border-radius: 5px;position: fixed;top: 40%;left:50%;z-index: 999999;background: rgb(0, 0, 0);font-size: 12px;';
	document.body.appendChild(m);
	setTimeout(() => {
		const d = 0.5;
		m.style.webkitTransition = `-webkit-transform ${d}s ease-in, opacity ${d}s ease-in`;
		m.style.opacity = '0';
		setTimeout(() => {
			if ($('#Toast').length > 0) {
				$('#Toast').remove();
			}
		}, d * 1000);
	}, durationLocal);
}

export function ToastHide() {
	if ($('#Toast').length > 0) {
		$('#Toast').remove();
	}
}

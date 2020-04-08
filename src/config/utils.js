import config from './config';

// 获取token
export function getToken() {
	if (config.isAndroidXZ) {
		// eslint-disable-next-line no-undef
		kht.getTokenAndUserId();
	} else if (config.isiOSXZ) {
		window.webkit.messageHandlers.getIssureToken.postMessage({});
	}
}

/**
 * 原生路由跳转
 * @param authorization number 1: 需要实名认证
 * @param detail string
 * @param loginStatus number 1: 登录 0: 不用登录
 * @param pageType string  RN HTML native
 * @param tagUrl string
 */
export function khtAppRouteRequest(authorization, detail,
	loginStatus, pageType, tagUrl) {
	if (config.isAndroidXZ) {
		// eslint-disable-next-line no-undef
		kht.khtAppRouteRequest(
			authorization,
			detail,
			loginStatus,
			pageType,
			tagUrl,
		);
	} else if (config.isiOSXZ) {
		window.webkit.messageHandlers.khtAppRouteRequest.postMessage({
			authorization,
			detail,
			loginStatus,
			pageType,
			tagUrl,
		});
	}
}

/**
 * 原生唤起是否登录
 */
export function login() {
	if (config.isAndroidXZ) {
		// eslint-disable-next-line no-undef
		khtAppRouteRequest(0, '', 0, 'native', 'LogIn');
	} else if (config.isiOSXZ) {
		khtAppRouteRequest(0, '', 0, 'native', 'LogIn');
	}
}

/**
 * 获取数组对应值
 * @param arr
 * @param value
 */
export function choiceArr(arr, value, valueName = 'value') {
	return arr.findIndex((element) => (element[valueName] === value));
}

/**
 * 转base64
 * @param {*} img
 * @param {*} width
 * @param {*} height
 */
export function getBase64Image(img) {
	const canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	const ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0, img.width, img.height);
	const dataURL = canvas.toDataURL('image/png');
	return dataURL;
}

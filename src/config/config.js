const ENV = 'SIT';
// const ENV = 'PRO';

const urlList = {
	SIT: 'https://www.easy-mock.com/mock/5a0294396be3e9439ddfdec1/hospital',
	PRO: 'https://www.easy-mock.com/mock/5a0294396be3e9439ddfdec1/hospital',
};

const baseUrl = urlList[ENV];

const responseCode = {
	businessError: ['9794', '9894', '9896', '9797', '9796', '9795', '9793'],
	networkError: '网络不稳定，请稍后再试',
	systemError: '系统繁忙，请稍后再试',
};

const uXZ = navigator.userAgent;
const isAndroidXZ = uXZ.indexOf('Android') > -1 || uXZ.indexOf('Linux') > -1; // android终端或者uc浏览器
const isiOSXZ = !!uXZ.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
const isKhtAPP = uXZ.indexOf('kehutong') > -1;
const uaXZ = window.navigator.userAgent.toLowerCase();
const isWeixin = uaXZ.indexOf('micromessenger') !== -1;

export default {
	responseCode,
	baseUrl,
	ENV,
	isAndroidXZ,
	isiOSXZ,
	isWeixin,
	isKhtAPP,
};

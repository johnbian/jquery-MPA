const ENV = 'SIT';
// const ENV = 'UAT';
// const ENV = 'PRO';

const urlList = {
	SIT: 'https://ecustomer.tp95589.com/sit',
	UAT: 'https://ecustomer.tp95589.com',
	// SIT: 'http://localhost:3000/sit',
	PRO: 'https://ecustomer.cntaiping.com',
};

const fileUrl = {
	SIT: 'https://ecustomer.tp95589.com',
	UAT: 'https://ecustomer.tp95589.com',
	// SIT: 'http://localhost:8080',
	// UAT: 'http://localhost:8080',
	PRO: 'https://ecustomer.cntaiping.com',
};

const shenceUrl = {
	SIT: 'https://yhxwtz_test.ft.cntaiping.com:8111/sa?project=tpt_test',
	PRO: 'https://cd.life.cntaiping.com:8106/sa?project=chinataiping',
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
	fileUrl,
	ENV,
	isAndroidXZ,
	isiOSXZ,
	isWeixin,
	shenceUrl,
	isKhtAPP,
};

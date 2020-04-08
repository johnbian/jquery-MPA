import fetch from './fetch';
import config from './config';

// 微信分享
export default function shareInwx(wxCommonShareInfo) {
	const params = {
		url: '/commonms/weixin/sign',
		data: {
			url: window.location.href.split('#')[0],
		},
		noLoading: true,
	};
	fetch.post(params).then((res) => {
		if (res) {
			const { noncestr, signature, timestamp } = res;
			const { wx } = window;

			wx.config({
				appId: config.ENV === 'SIT' ? 'wx23545612bdc40140' : 'wx2766839a4991bd6b',
				timestamp, // 必填，生成签名的时间戳
				nonceStr: noncestr, // 必填，生成签名的随机串
				signature, // 必填，签名
				jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
			});

			// eslint-disable-next-line prefer-arrow-callback
			wx.ready(function () {
				wx.updateAppMessageShareData({ // 分享好友
					title: wxCommonShareInfo.title,
					desc: wxCommonShareInfo.content,
					link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: wxCommonShareInfo.imgUrl, // 分享图标
					success() {
						// 用户点击了分享后执行的回调函数
					},
				});
				wx.updateTimelineShareData({ // 分享朋友圈
					title: wxCommonShareInfo.title,
					link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: wxCommonShareInfo.imgUrl, // 分享图标
					success() {
						// 用户点击了分享后执行的回调函数
					},
				});
			});

			// eslint-disable-next-line prefer-arrow-callback
			wx.error(function (errMsg) {
				console.log(errMsg);
			});
		}
	});
}

import './index.scss';
import config from '../../config/config';
import fetch from '../../config/fetch';
import shareInwx from '../../config/shareInwx';

require('../../config/shareDownLoad.js');
require('../../assets/js/shence.js');

const img = new Image();
// eslint-disable-next-line import/no-unresolved
img.src = require('../../assets/images/bg_inline-show_1.png');

img.onload = () => {
	$('.inline-show').css('backgroundImage', `url(${img.src})`);
};

$('#btnInline').on('click', () => {
	window.location.href = 'https://m.zaojiu.com/V2/action/channel/contentTplife.html';
});

// 分享
const commonShareInfo = {
	title: '直播：经济学家邵宇上线太平通，看全球疫情下的经济走向',
	imgUrl: 'https://ecustomer.cntaiping.com/static/rn/src/img/pic_weixin_share_three.png',
	content: '看直播，更有一波福利赶来',
};

// 微信分享
if (config.isWeixin) {
	shareInwx(commonShareInfo);
}

// 计算参与活动人数
function getNewsDetail(newsId) {
	const params = {
		url: '/campaignsms/essay/queryEssayDetail',
		data: {
			essayId: newsId,
		},
	};
	return fetch.post(params);
}
getNewsDetail(293);

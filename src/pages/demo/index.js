import './index.scss';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import MeScroll from 'mescroll.js';
import 'mescroll.js/mescroll.min.css';
import fetch from '../../config/fetch';
import {
	getToken, login, choiceArr,
} from '../../config/utils';
import { Toast } from '../../config/toast';
import config from '../../config/config';

require('../../assets/js/shence.js');

const TYPEID = 29; // 太平优视

const PAGESIZE = 12; // 每页数目

const cards = {};

const pageNos = {};

let tabname = '';

let tabChineseName = '';

let essayTypeList = [];

let loadTimes = 1;

let educationLinkPath = '';

const mescrollArr = {};

function getUrl(key) {
	const params = {
		url: '/campaignsms/homePagePath/fetchPath',
		data: {
			key,
		},
	};
	return fetch.post(params);
}

const userInfo = {
	_token: '',
	get token() { return this._token; },
	set token(n) {
		this._token = n;
		if (loadTimes > 1) {
			if (n) {
				getUrl(educationLinkPath).then((res) => {
					if (res.url) {
						window.location.href = res.url;
					}
				}).catch(() => {
					Toast('系统繁忙，请稍后再试', 2000);
				});
			} else {
				login();
			}
		}
	},
};

window.getTokenAndUserId = (token, userId) => {
	if (token && token !== userInfo.token) {
		sessionStorage.setItem('token', token);
		sessionStorage.setItem('userId', userId);
		userInfo.token = token;
	} else {
		userInfo.token = '';
	}
};

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {
	loop: true, // 循环模式选项
	pagination: '.swiper-pagination',
	autoplay: true,
	paginationClickable: true,
});

const bannerList = [];

function queryEssayList(pageNo, tableId, typeId) {
	const params = {
		url: '/campaignsms/essay/queryEssayList',
		data: {
			pageNo,
			pageSize: PAGESIZE,
			tableId,
			typeId,
		},
	};
	const res = fetch.post(params);
	return res;
}

function upCallback() {
	pageNos[tabname] += pageNos[tabname];
	const id = tabname.replace('tab', '');
	queryEssayList(pageNos[tabname], Number(id), TYPEID).then((res) => {
		if (res.essayList) {
			cards[tabname] = [...cards[tabname], ...res.essayList];
			mescrollArr[`mescroll${id}`].endSuccess(res.essayList.length);
			res.essayList.forEach((card) => {
				$(`#mescroll${id}>div.videos`).append(`<div class="${card.topicType === 4 ? 'item-line' : 'item'}" onclick="goDetail('${card.linkPath}','${card.linkType}','${card.title}','${card.subTitle}')"><img src=${card.imageUrls[0]} />
				<div class="left">
					<h3 class="name">${card.title}</h3>
					<span class="price">${card.subTitle}</span>
				</div>
				</div>`);
			});
		}
	}).catch(() => {
		mescrollArr[`mescroll${id}`].endErr();
		Toast('系统繁忙，请稍后再试', 2000);
	});
}

function initTabCard(name, desName) {
	tabChineseName = desName;
	window.sensors.track('tabClick', { tab_name: tabChineseName, page_title: '太平优视' });
	tabname = name;
	if (cards[name].length === 0) {
		const id = name.replace('tab', '');
		queryEssayList(pageNos[tabname], Number(id), TYPEID).then((res) => {
			if (res.essayList) {
				cards[tabname] = res.essayList;
				mescrollArr[`mescroll${id}`].endSuccess(res.essayList.length);
				res.essayList.forEach((card) => {
					$(`#mescroll${id}>div.videos`).append(`<div class="${card.topicType === 4 ? 'item-line' : 'item'}" onclick="goDetail('${card.linkPath}','${card.linkType}','${card.title}','${card.subTitle}')"><img src=${card.imageUrls[0]} />
					<div class="left">
						<h3 class="name">${card.title}</h3>
						<span class="price">${card.subTitle}</span>
					</div>
					</div>`);
				});
			}
		}).catch(() => {
			mescrollArr[`mescroll${id}`].endErr();
			Toast('系统繁忙，请稍后再试', 2000);
		});
	}
}

function initBanner() {
	bannerList.forEach((item) => {
		$('.swiper-container .swiper-wrapper').append(`<div class="swiper-slide" onclick="goDetail('${item.linkPath}','${item.pageType}')">
		<img src=${item.img} />
		</div>`);
	});
}

function initList(tableIndex) {
	$($('.nav ul li')[tableIndex]).addClass('active');
	const { offsetLeft, offsetWidth } = $('.nav ul li')[tableIndex];
	$('.line').css({ transform: `translateX(${offsetLeft + offsetWidth / 2 - 12}px)`, width: '24px' });
	$($('body div.list')[tableIndex]).addClass('active');
}

function queryString(name) {
	const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
	const r = window.location.search.substr(1).match(reg);
	if (r !== null) {
		return Number(unescape(r[2]));
	}
	return -1;
}

function initTableId() {
	const tableId = queryString('tableId');
	if (tableId > -1) {
		const tableIndex = choiceArr(essayTypeList, tableId, 'id');
		initList(tableIndex);
		initTabCard(`tab${tableId}`, essayTypeList[tableIndex].name);
	} else {
		initList(0);
	}
}

function initEssayTypeList() {
	queryEssayList(1, 0, TYPEID).then((res) => {
		essayTypeList = res.essayTypeList;
		bannerList.push({
			img: res.img,
			pageType: res.pageType,
			linkPath: res.tagUrl,
		});
		tabname = `tab${essayTypeList[0].id}`;
		essayTypeList.forEach((tabPane) => {
			cards[`tab${tabPane.id}`] = [];
			pageNos[`tab${tabPane.id}`] = 1;
			$('.nav ul').append(`<li id=tab${tabPane.id}>${tabPane.name}</li>`);
			$('body').append(`<div class="mescroll list" id=mescroll${tabPane.id}><div class="videos"></div></div>`);
			if (tabname === `tab${tabPane.id}`) {
				cards[tabname] = res.essayList;
				cards[tabname].forEach((card) => {
					$(`#mescroll${tabPane.id}>div.videos`).append(`<div class="${card.topicType === 4 ? 'item-line' : 'item'}" onclick="goDetail('${card.linkPath}','${card.linkType}','${card.title}','${card.subTitle}')"><img src=${card.imageUrls[0]} />
					<div class="left">
						<h3 class="name">${card.title}</h3>
						<span class="price">${card.subTitle}</span>
					</div>
					</div>`);
				});
			}
			mescrollArr[`mescroll${tabPane.id}`] = new MeScroll(`mescroll${tabPane.id}`, {
				down: {
					isLock: true,
				},
				up: {
					noMoreSize: PAGESIZE - 1,
					htmlNodata: '<p class="upwarp-nodata">已加载所有视频</p>',
					auto: false, // 是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
					isBounce: false, // 此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
					callback: upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
				},

			});
		});
		initBanner();
		initTableId();
	}).catch(() => {
		Toast('系统繁忙，请稍后再试', 2000);
	});
}

function tptShareForTargetURL({
	targetUrl, title, imgUrl, url, content,
}) {
	if (config.isAndroidXZ && kht.tptShareForTargetURL) {
		/* eslint no-undef: 0 */
		kht.tptShareForTargetURL(targetUrl, title, imgUrl, url, content);
	} else if (config.isiOSXZ && window.webkit.messageHandlers.tptShareForTargetURL) {
		window.webkit.messageHandlers.tptShareForTargetURL.postMessage({
			targetUrl,
			title,
			imgUrl,
			url,
			content,
		});
	}
}

window.goDetail = (linkPath, linkType, title, subTitle) => {
	window.sensors.track('videoClick', { tab_name: tabChineseName, video_name: title });
	if (linkPath) {
		if (linkType === '1') {
			educationLinkPath = linkPath;
			if (sessionStorage.getItem('token')) {
				getUrl(linkPath).then((res) => {
					if (res.url) {
						window.location.href = res.url;
					}
				}).catch(() => {
					Toast('系统繁忙，请稍后再试', 2000);
				});
			} else {
				loadTimes += loadTimes;
				getToken();
			}
		} else if (linkType === '2' || linkType === 'HTML') {
			const shareInfo = {
				targetUrl: linkPath,
				title,
				imgUrl: 'https://ecustomer.cntaiping.com/static/rn/src/img/pic_weixin_share_three.png',
				url: linkPath,
				content: subTitle,
			};
			tptShareForTargetURL(shareInfo);
			window.location.href = linkPath;
		}
	}
};

$('.nav ul').on('click', 'li', (event) => {
	$(event.target).addClass('active');
	$(event.target).siblings().removeClass('active');
	const { offsetLeft, offsetWidth } = $(event.target)[0];
	$('.line').css({ transform: `translateX(${offsetLeft + offsetWidth / 2 - 12}px)`, width: '24px' });
	$('body div.list').eq($(event.target).index()).addClass('active');
	$('body div.list').eq($(event.target).index()).siblings().removeClass('active');
	initTabCard(event.target.id, event.target.innerHTML);
});

initEssayTypeList();

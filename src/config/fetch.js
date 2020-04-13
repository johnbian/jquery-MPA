import * as TPTJS from 'tpt-js-sdk';
import config from './config';
import { Toast } from './toast';
import '../assets/js/dialog.min';

const loadingGif = require('../assets/images/loading.gif');

class Fetch {
	constructor() {
		this.loading = undefined;
		this.loadingNumber = 0;
	}

	loading

	loadingNumber

	cleanLoading = () => {
		this.loading.close();
		this.loadingNumber = 0;
		this.loading = undefined;
	}

	handleResponse = (params, res, resolve) => {
		if (config.responseCode.businessError.indexOf(res.code) !== -1) {
			if (this.loadingNumber > 0 && !params.noLoading) {
				this.cleanLoading();
			}
			TPTJS.khtAppRouteRequest('0', '', '0', 'native', 'LogIn');
		} else if (res.code !== '0000') {
			if (!params.notToast) {
				Toast(res.desc, 3000);
			}
			if (this.loadingNumber > 0 && !params.noLoading) {
				this.cleanLoading();
			}
			if (params.errorFuc) {
				params.errorFuc();
			}
		} else {
			if (!params.keepLoading && this.loadingNumber > 0 && !params.noLoading) {
				this.cleanLoading();
			}
			resolve(res.data);
		}
	}

	commonErrorHandle = (params, err, reject) => {
		if (this.loadingNumber > 0) {
			this.cleanLoading();
		}
		reject(err);
		if (params.errorFuc) {
			params.errorFuc();
		}
	}

	post = (params) => new Promise((resolve, reject) => {
		const that = this;
		if (that.loadingNumber < 1 && !params.noLoading) {
			that.loadingNumber += 1;
			that.loading = $(document).dialog({
				type: 'toast',
				infoIcon: loadingGif,
				infoText: '正在加载中',
			});
		}
		$.ajax({
			url: `${params.baseUrl ? params.baseUrl : config.baseUrl}${params.url ? params.url : 'url'}`,
			contentType: 'application/json',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				anonymousId: sessionStorage.getItem('anonymousId'),
				'x-ac-token-ticket': sessionStorage.getItem('token') || '',
			},
			data: JSON.stringify(params.data),
			success(res) {
				that.handleResponse(params, res, resolve);
			},
			error(err) {
				that.commonErrorHandle(params, err, reject);
			},
		});
	});

	get = (params) => new Promise((resolve, reject) => {
		const that = this;
		if (that.loadingNumber < 1 && !params.noLoading) {
			that.loadingNumber += 1;
			that.loading = $(document).dialog({
				type: 'toast',
				infoIcon: loadingGif,
				infoText: '正在加载中',
			});
		}
		$.ajax({
			url: `${config.baseUrl}${params.url ? params.url : 'url'}`,
			contentType: 'application/json',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				anonymousId: sessionStorage.getItem('anonymousId'),
				'x-ac-token-ticket': sessionStorage.getItem('token') || '',
			},
			success(res) {
				that.handleResponse(params, res, resolve);
			},
			error(err) {
				that.commonErrorHandle(params, err, reject);
			},
		});
	});
}

const fetch = new Fetch();
export default fetch;

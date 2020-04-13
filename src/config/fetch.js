import * as TPTJS from 'tpt-js-sdk';
import config from './config';
import { Toast } from './toast';
import { login } from './utils';
import '../assets/js/dialog.min';

const loadingGif = require('../assets/images/loading.gif');

let loading;
let loadingNumber = 0;

class Fetch {
	post(params) {
		return new Promise((resolve, reject) => {
			if (loadingNumber < 1 && !params.noLoading) {
				loadingNumber += 1;
				loading = $(document).dialog({
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
					this.handleResponse(params,res);
				},
				error(err) {
					this.commonErrorHandle(params, err);
				},
			});
		});
	}

	get(params) {
		return new Promise((resolve, reject) => {
			if (loadingNumber < 1 && !params.noLoading) {
				loadingNumber += 1;
				loading = $(document).dialog({
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
					this.handleResponse(params,res);
				},
				error(err) {
					this.commonErrorHandle(params, err);
				},
			});
		});
	}

	cleanLoading() {
		loading.close();
		loadingNumber = 0;
		loading = undefined;
	}

	handleResponse(params, res) {
		if (config.responseCode.businessError.indexOf(res.code) !== -1) {
			if (loadingNumber > 0 && !params.noLoading) {
				this.cleanLoading();
			}
			login();
		} else if (res.code !== '0000') {
			if (!params.notToast) {
				Toast(res.desc, 3000);
			}
			if (loadingNumber > 0 && !params.noLoading) {
				this.cleanLoading();
			}
			if (params.errorFuc) {
				params.errorFuc();
			}
		} else {
			if (!params.keepLoading && loadingNumber > 0 && !params.noLoading) {
				this.cleanLoading();
			}
			resolve(res.data);
		}
  }

  commonErrorHandle(params, err) {
    if (loadingNumber > 0) {
			this.cleanLoading();
		}
		reject(err);
		if (params.errorFuc) {
			params.errorFuc();
		}
  }	
}

const fetch = new Fetch();
export default fetch;

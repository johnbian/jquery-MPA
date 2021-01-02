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

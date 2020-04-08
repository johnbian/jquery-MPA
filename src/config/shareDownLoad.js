/* eslint-disable no-irregular-whitespace */
import fetch from './fetch';
import { Toast } from './toast';
import config from './config';
import '../pages/style/downloadInwx.scss';

require('../assets/js/gt.js');

(function () {
	// eslint-disable-next-line global-require
	const logoImg = require('../assets/images/logo.png');
	$('body').append(`<div class="share-download-wx"><div class="nav down-top row">
  <div class="row nav-left">
    <img src=${logoImg} class="logo-small" />
    <div class="col">
      <h3 class="font-size-24 font-color-ccc" style="line-height: 1.1">太平通</h3>
      <p class="font-size-24 font-color-ccc" style="line-height: 1.1">太平生活 一触即通</p>
    </div>
  </div>
  <button class="btn download font-color-white bg-color-blue">下载</button>
</div></div>`);
	$('.share-download-wx').append(`<div class="nav down-bottom row">
  <div class="row nav-left">
    <img src=${logoImg} class="logo-small" />
    <div class="col">
      <h3 class="font-size-24 font-color-ccc" style="line-height: 1.1">太平通</h3>
      <p class="font-size-24 font-color-ccc" style="line-height: 1.1">太平生活 一触即通</p>
    </div>
  </div>
  <button class="btn download font-color-white bg-color-blue">下载</button>
</div>`);
	$('.share-download-wx').append(`<div id="dialogSignIn" class="sign-up-content">
<div class="dialog-overlay"></div>
<div class="dialog-content"></div>
</div>`);
	$('body').append(`<div id="xyContent">
    <div class="modal-content">
      <div class="row modal-header">
        <h3 class="modal-title">《太平集团用户服务协议》</h3>
        <span class="kht kht-close-o"></span>
      </div>
      <div class="modal-body">
        <div class="indent">
          欢迎注册成为中国太平保险集团有限责任公司（以下简称“太平集团”）用户，请您注册前仔细阅读本协议，勾选“我已阅读并同意《太平集团用户服务协议》（本平台用户注册协议）”，当您点击“同意”按钮即表示您确认完全理解本协议内容并自愿遵守本协议。
        </div>
        <div class="indent">
          太平集团用户服务由太平集团及其关联公司（包括但不限于太平人寿保险有限公司、太平财产保险有限公司、太平养老保险股份有限公司、太平金融服务有限公司、太平金融科技有限公司，以下同）提供，服务内容为保单基础服务、增值服务、保险服务、生态服务等各平台实际提供服务。自您完成注册起，本协议即在您与太平集团及其关联公司间生效，您在本平台的注册账户亦可在太平集团统一身份认证支持的相关平台登录使用。您在本平台完成注册后，将同时成为太平集团会员，享受更多会员服务。
        </div>
        <div class="indent">
          如您不同意本协议的部分或全部内容，请不要注册本平台账号，使用本平台服务。本协议自您确认同意之日起实施。
        </div>
        <div class="indent">
          用户在此确认知悉并同意本平台有权根据需要不时修改、增加或删减本协议。本平台将采用在网站、APP公告或站内消息等方式通知用户修改、增加或删减的内容，不再向用户个别通知。一经本平台通过上述方式通知，即视为上述内容已经通知到用户。若用户在本协议及各类规则变更后继续使用本平台服务的，视为用户已仔细认真阅读、充分理解并同意接受修改后的服务协议及各类规则。太平集团及其关联公司保留中止、终止或限制用户继续使用本平台服务的权利，但该等中止、终止或限制行为并不豁免用户已经进行的交易下所应承担的责任。
        </div>
        <div class="indent" style="font-weight: bold">
          第一条 用户须知
        </div>
        <div class="indent">
          1、注册者资格
        </div>
        <div class="indent">
          您确认，在您完成注册程序或使用本平台服务时，您应当是具备完全民事行为能力的自然人、法人或其他组织。若您不具备前述主体资格，则您及您的监护人应承担因此而导致的一切后果。
        </div>
        <div class="indent">
          2、用户信息
        </div>
        <div class="indent">
          （1）在完成注册、激活或验证流程时，您应当按照相应页面的提示提供您的身份信息及资料，以使之真实、及时、完整和准确；
        </div>
        <div class="indent">
          （2）当您的身份信息及资料发生变化时，您应当及时更新并准确提供您的身份信息及资料。
        </div>
        <div class="indent">3、账户安全</div>
        <div class="indent">
          （1）您应对您在本平台的登录名和密码保密，且须对您在该登录名和密码下发生的所有活动（包括但不限于发布信息、点击同意或提交购买、接受各类产品或服务等）承担责任。
        </div>
        <div class="indent">
          （2）您了解并同意：如发现任何人未经授权使用您的本平台登录名和密码，您应当立即通知本平台，授权本平台经过必要身份识别措施后更改密码或作出其他应对措施。但本平台不会对因您未能遵守本款规定而发生的任何损失负责。无论使用您的本平台登录名和密码登录并使用本平台的是否为您本人，该等行为之后果均由您和实际操作者承担连带责任。
        </div>
        <div class="indent">4、账户管理
        </div>
        <div class="indent">
          除非有法律规定或司法裁判，否则您的登录名和密码不得以任何方式转让、赠予或继承。
        </div>
        <div class="indent" style="font-weight: bold">第二条 用户的权利和义务
        </div>
        <div class="indent">
          1、在遵守本协议的前提下，您将享有本平台提供的用户服务，并将收到本平台最新的优惠产品和服务的相关信息。
        </div>
        <div class="indent">
          2、用户应保证其提供的个人资料的真实、准确、完整、有效，如有变更，应及时通知本平台并按照本平台的要求办理变更手续。如用户未按照本平台的规定提交相关真实、有效的信息，或者本平台有合理的理由怀疑用户提交的信息为错误、虚假或不完整的，本平台有权拒绝为用户提供服务。因用户提交的信息错误、虚假或不完整对本平台或第三方造成的全部损失由用户承担。
        </div>
        <div class="indent">
          3、用户不得通过本平台从事任何违法行为（包括但不限于发布违法或破坏性的信息等），不得干扰平台系统的正常运作。
        </div>
        <div class="indent">
          4、用户应对与用户本平台账户绑定的银行卡账户拥有合法的使用权，如用户因故对银行卡账号丧失使用权的，则本平台可停止为用户提供服务，同时，用户可以以其另外提供的有效银行卡账户向平台申请更换用户本平台账户。
        </div>
        <div class="indent">
          5、用户必须提供真实、准确、完整的资料，并且授予本平台基于提高服务的目的，对其提供资料的真实性进行第三方校验的权利。
        </div>
        <div class="indent">
          6、在未经本平台事先书面同意的情况下，不以复制、传播等任何方式使用本平台上展示的资料、信息或数据。
        </div>
        <div class="indent">
          7、因用户违反本协议造成本平台损失的，用户应当承担对本平台全部损失（包括直接损失、间接损失）的赔偿责任。
        </div>
        <div class="indent">
          8、无论本协议是否存在约定，因用户过错造成本平台损失的，用户应当承担对本平台全部损失（包括直接损失、间接损失）的赔偿责任。
        </div>
        <div class="indent" style="font-weight: bold">第三条  本平台的权利与义务</div>
        <div class="indent">
          1、本平台有权根据用户所提供注册资料的真实性、准确性、完整性、有效性以及是否符合本公司规定的其他条件，决定用户的注册成功与否。
        </div>
        <div class="indent">
          2、本平台有权基于单方独立判断，在其认为可能发生危害交易安全等情形时，不经通知而先行暂停、中断或终止向用户提供本协议项下的全部或部分用户服务（包括收费服务），且无需对用户或任何第三方承担任何责任。前述情形包括但不限于：
        </div>
        <div class="indent">
          1）本平台认为用户提供的个人资料不具有真实性、准确性、有效性或完整性；
        </div>
        <div class="indent">
          2）本平台发现异常交易或有疑义或有违法之虞时；
        </div>
        <div class="indent">
          3）本平台认为用户账户涉嫌洗钱、套现、传销、被冒用或本公司认为有风险之情形；
        </div>
        <div class="indent">
          4）本平台认为用户已经违反本协议中规定的各类规则及要求；
        </div>
        <div class="indent">
          5）用户在使用本平台收费服务时未按规定平台支付相应的服务费用；
        </div>
        <div class="indent">
          6）用户本平台账户已连续三年未实际使用。
        </div>
        <div class="indent">
          7）其他本平台合理认为应当先行暂停、中断或终止向用户提供本协议项下的全部或部分用户服务的情形。
        </div>
        <div class="indent">
          3、本平台有权基于交易安全等方面的考虑不时设定涉及交易的相关事项，包括但不限于交易限额、交易次数等。
        </div>
        <div class="indent">
          4、用户存在任何恶意诋毁或损害本平台声誉、攻击本平台相关系统、利用本平台用户身份从事违反国家法律法规活动等行为的，本平台有权单方面终止用户的权利，并保留追究用户法律责任的权利。
        </div>
        <div class="indent">
          5、本平台在法律范围内做好平台服务、维护及管理相关工作，不得从事任何违法行为（包括但不限于发布违法或破坏性的信息等）。
        </div>
        <div class="indent" style="font-weight: bold">第四条 服务费用</div>
        <div class="indent">
          1、当用户使用本平台提供的服务时，平台会向用户收取相关平台服务费用。各项服务费用详见本平台所列之收费方式说明。本平台保留单方面制定及调整服务费用的权利，新服务费用的生效时间以本平台将来公告中所述的时间为准。
        </div>
        <div class="indent">
          2、用户在使用本平台服务过程中（如充值或取现等）可能需要向第三方机构（如银行或第三方支付公司等）支付一定的费用，具体收费标准详见第三方机构网站相关页面，或本平台的提示。用户与第三方机构之间就费用支付事项产生的纠纷与本平台无关。
        </div>
        <div class="indent" style="font-weight: bold">第五条   隐私条款</div>
        <div class="indent">
          本平台采取严格的隐私政策，尊重并保护用户隐私，请会员仔细阅读并了解。
        </div>
        <div class="indent">1、收集个人信息的目的及其使用
          本平台可能将用户所提供的个人信息用于以下一项或多项目的：
        </div>
        <div class="indent">1) 帮助您完成注册
        </div>
        <div class="indent">2) 向您提供商品或服务
        </div>
        <div class="indent">3) 向您推送商品及服务相关的消息
        </div>
        <div class="indent">4) 更准确的身份确认
        </div>
        <div class="indent">5) 为您提供安全保障；
        </div>
        <div class="indent">6) 改进我们的服务。
        </div>
        <div class="indent">2、本平台对个人信息安全的承诺
        </div>
        <div class="indent">
          为保持数据的准确性，防止擅自入侵及确保个人信息的正确使用，本平台采取了适当的硬件、电子及管理措施以保障本平台收集个人资料的保密性。通过内部安全管理规范、技术手段、加密处理等各种措施保证信息安全并承诺不对个人信息进行非法处理。
        </div>
        <div class="indent">3、本平台所收集的资料
        </div>
        <div class="indent">个人信息包括但不限于：</div>
        <div class="indent">1) 您提供的信息
        </div>
        <div class="indent">
          （1）您在注册账户或使用我们的服务时，向我们提供的相关个人信息，例如姓名、证件类型和证件号码、电话号码、电子邮件、联系地址、职业等。
        </div>
        <div class="indent">
          （2）您通过我们的服务向其他方提供的共享信息，以及您使用我们的服务时所储存的信息。
        </div>
        <div class="indent">3) 我们获取的您的信息
        </div>
        <div class="indent">
          为使本平台服务更加贴合用户的需求，了解产品的适配性、识别账号的异常状态等，我们会收集、汇总、记录的信息，例如日志信息、设备信息、位置信息等。
        </div>
        <div class="indent">4、如何查询或修改用户的个人信息
        </div>
        <div class="indent">
          用户可在“我的”或用户中心项下的“个人信息”中查询并修改个人信息。每当用户的个人信息有所变化时，应当及时更新。
        </div>
        <div class="indent">5、保护用户的隐私权
        </div>
        <div class="indent">
          本平台完全遵守相关法律条例的要求，确保用户隐私。本平台会将个人信息的收集和使用限制在必须范围之内，以便管理业务、为用户提供最高质量的服务以及提供各项优惠信息。用户知悉并不可撤销地授权以下事宜：本平台所属太平集团（官网：http://www.cntaiping.com/）及其关联公司，可以收集、整理、分析、使用及保存您的个人信息，并可在太平集团及其关联公司内部相互提供、分析和使用，还可基于为您提供服务而与第三方合作，将您的个人信息提供给第三方使用，例如将您的个人信息提供给第三方进行身份认证。为确保用户信息的安全，太平集团及其关联公司对上述信息负有保密义务，并采取合理措施保证信息安全。如果用户不希望收到第三方推送的信息，不希望用户个人信息被除太平集团及其关联公司外的其他第三方使用，可以在提供个人信息时或其他任何时候向本平台明示告知，本平台将不会将明示的客户信息交给任何第三方，但若因此导致用户无法使用本平台的所有或部分服务，本平台不承担任何责任。如涉及个人信息隐私投诉，可致电中国太平官方热线95589。
        </div>
        <div class="indent">6、隐私政策的更改</div>
        <div class="indent">
          一旦本平台更改了隐私申明，将采用在网站、APP公告或站内消息等方式通知用户修改、增加或删减的内容，不承担事先单独通知义务。一经本平台通过上述方式通知，即视为上述内容已经通知到用户。若用户在本协议及各类规则变更后继续使用本平台服务的，视为用户已仔细认真阅读、充分理解并同意接受修改后的隐私声明。
        </div>
        <div class="indent" style="font-weight: bold">第六条  除外责任
        </div>
        <div class="indent">
          1、因用户自身的原因导致的任何损失或责任，由用户自行负责，本平台不承担任何责任。本平台不承担责任的情形包括但不限于：
        </div>
        <div class="indent">
          1）用户未按照本协议或本平台公布的规则进行操作导致的任何损失或责任；
        </div>
        <div class="indent">
          2）用户使用未经认证的银行卡或使用非用户本人的银行卡，用户的银行卡被冻结、挂失等导致的任何损失或责任；
        </div>
        <div class="indent">
          3）用户本平台账户及银行账户内余额不足导致的任何损失或责任；
        </div>
        <div class="indent">
          4）其他非因本平台过错导致的损失及责任。
        </div>
        <div class="indent">
          2、在任何情况下，对于用户使用涉及由第三方提供相关服务的责任由该第三方承担，本平台不承担任何责任。该等情形包括但不限于：
        </div>
        <div class="indent">
          1）因银行、第三方支付公司等第三方未按照用户和/或本公司指令进行操作引起的任何损失或责任；
        </div>
        <div class="indent">
          2）因银行、第三方支付公司等第三方原因导致资金未能及时到账而引起的任何损失或责任；
        </div>
        <div class="indent">
          3）因银行、第三方支付公司等第三方对交易限额或次数限制而引起的任何损失或责任；
        </div>
        <div class="indent">
          4）因其他第三方的行为或原因导致的任何损失或责任。
        </div>
        <div class="indent">
          3、在任何情况下，本平台均不对由于信息网络正常的设备维护、信息网络连接故障、手机、通讯或其他系统的故障、电力故障、罢工、暴乱、起义、骚乱、火灾、洪水、风暴、爆炸、战争、政府行为、司法行政机关的命令或第三方的不作为而造成的不能服务或延迟服务承担责任；
        </div>
        <div class="indent">
          4、为了提高服务质量，本平台可能暂停服务以调整或升级系统。在暂停服务前，本平台将在网站、APP等渠道提前公告暂停服务的时间。在任何情况下，本平台无须为暂停用户服务承担违约责任。
        </div>
        <div class="indent">
          5、用户经由本平台上的服务而使用、下载或取得任何资料，应由用户自行考量且自负风险，因资料的下载而导致的任何损失由用户自行承担。
        </div>
        <div class="indent" style="font-weight: bold">第七条  风险提示</div>
        <div class="indent">
          1、用户了解并认可，任何通过本平台进行的交易并不能避免以下风险的产生，本平台不能也没有义务为如下风险负责：
        </div>
        <div class="indent">
          1）宏观经济风险：因宏观经济形势变化，可能引起价格等方面的异常波动，用户有可能遭受损失；
        </div>
        <div class="indent">
          2）政策风险：有关法律、法规及相关政策、规则发生变化，可能引起价格等方面异常波动，用户有可能遭受损失；
        </div>
        <div class="indent">
          3）违约风险：因其他交易方无力或无意愿按时足额履约，用户有可能遭受损失；
        </div>
        <div class="indent">
          4）利率风险：市场利率变化可能对购买或持有产品的实际收益产生影响；
        </div>
        <div class="indent">
          5）操作风险：任一方使用的计算机系统被第三方侵入、宕机，或火灾、恐怖攻击灾难发生等，用户有可能遭受损失；
        </div>
        <div class="indent">
          6）因用户的过错导致的任何损失，该过错包括但不限于：决策失误、操作不当、遗忘或泄露密码、密码被他人破解、用户委托他人代理交易时他人恶意或不当操作而造成的损失。
        </div>
        <div class="indent">
          7）其他非因本平台过错导致的风险。
        </div>
        <div class="indent">
          2、本平台不对任何用户及/或任何交易提供任何担保或条件，无论是明示还是默示。本平台不能也不试图对用户发布的信息进行实质控制，对该等信息，本平台不承担任何形式的证明、鉴定服务。本平台不能完全保证平台内容的真实性、充分性、可靠性、准确性、完整性和有效性，并且无需承担任何由此引起的法律责任。用户应基于自己的独立判断进行交易，用户应对其作出的判断承担全部责任，本平台不对用户的判断导致的结果承担任何责任。
        </div>
        <div class="indent">
          3、以上并不能揭示用户通过本平台所进行交易的全部风险及市场的全部情形。用户在做出交易决策前，应全面了解相关交易，谨慎决策，并自行承担全部风险。
        </div>
        <div class="indent" style="font-weight: bold">第八条  知识产权保护条款
        </div>
        <div class="indent">
          1、本平台上提供的所有内容（包括但不限于文字、音频、视频、图片、图表、广告、本平台向用户发送的电子邮件）的知识产权归本平台及相关权利人所有。
        </div>
        <div class="indent">
          2、除另有声明外，本平台提供服务时所依托的软件著作权和专利权归本平台及相关权利人所有。
        </div>
        <div class="indent">
          3、未经本平台授权，用户不得以任何方式擅自修改、复制、存储、传送、抄袭、分发上述内容。
        </div>
        <div class="indent">
          4、未经本平台授权，用户不得将本平台包含的任何内容用作商业或其它公开用途。任何未经本平台授权对本平台内容的使用均属于违法行为。
        </div>
        <div class="indent" style="font-weight: bold">第九条 法律适用</div>
        <div class="indent">
          1、本协议的订立、生效、履行、解释以及由此产生的所有事项均适用中华人民共和国法律；
        </div>
        <div class="indent">
          2、本协议中的部分条款无效，不影响其它条款的效力。若上述无效条款构成本协议目的之条款或核心条款，则该条款应被尽可能接近各方意图、能够保留本协议要求的目的且为有效的新条款所取代。在此情况下，本协议的其它条款仍然有效。
        </div>
        <div class="indent" style="font-weight: bold">第十条 争议解决
        </div>
        <div class="indent">
          凡因履行本协议所引起的任何争议，您和太平集团双方同意首先以友好协商的方式解决。协商不成的，任一方均可向太平集团所在地有管辖权的人民法院提起诉讼。争议解决期间，未涉争议的条款双方应当继续履行。
        </div>
      </div>
  </div>
</div>`);
	// 绑定邀请人
	const captchaServer = 'http://api.geetest.com';
	let activeCaptchaObj = null;
	let secondInterval = null;
	let referralUserId = '';
	let username = '';
	let sourceNew = '';
	let organFlag = '';
	let organId = '';
	let organName = '';
	let utmCampaign = '';
	let utmSource = '';
	let utmMedium = '';
	let utmTerm = '';
	let utmContent = '';
	const locationUrl = window.location.search;
	let downloadHref = '';

	function getInfo() {
		const theRequest = {};
		if (locationUrl.indexOf('?') !== -1) {
			const str = locationUrl.substr(1);
			const strs = str.split('&');
			strs.forEach((ele) => {
				const arr = ele.split('=');
				// eslint-disable-next-line prefer-destructuring
				theRequest[arr[0]] = arr[1];
			});
		}
		if (theRequest.userId) {
			referralUserId = theRequest.userId;
		}
		if (theRequest.username) {
			username = decodeURIComponent(theRequest.username);
		}
		if (theRequest.utm_campaign) {
			utmCampaign = decodeURIComponent(theRequest.utm_campaign);
		}
		if (theRequest.utm_source) {
			utmSource = decodeURIComponent(theRequest.utm_source);
		}
		if (theRequest.utm_medium) {
			utmMedium = decodeURIComponent(theRequest.utm_medium);
		}
		if (theRequest.utm_term) {
			utmTerm = decodeURIComponent(theRequest.utm_term);
		}
		if (theRequest.utm_content) {
			utmContent = decodeURIComponent(theRequest.utm_content);
		}
		const pathKey = decodeURIComponent(theRequest.pathKey);
		if (theRequest.source) {
			sourceNew = theRequest.source;
			if (sourceNew !== 'undefind' && sourceNew !== 'null' && sourceNew !== '') {
				sourceNew = theRequest.source;
			} else {
				sourceNew = '2';
			}
		}
		if (pathKey !== 'undefined') {
			const params = {
				url: '/campaignsms/organization/getAppendPath',
				data: {
					pathKey: theRequest.pathKey,
				},
			};
			fetch.post(params).then((res) => {
				if (res && res.organId) {
					organFlag = res.organFlag;
					organId = res.organId;
					organName = res.organName;
					if ((organId.substr(0, 1) === '1' || organId.substr(0, 5) === 'dept_' || organId.substr(0, 4) === 'rsnq') && res.affiliateCompany === '01') {
						username = '太平人寿';
					} else if ((organId.substr(0, 2) === '03')) {
						username = '太平财险';
					// eslint-disable-next-line no-empty
					} else if (organId.substr(0, 9) === 'tcnq1003') {
						username = '太平财险（内勤）';
					} else if (organId.substr(0, 7) === 'yl1024') {
						username = '太平养老';
					} else {
						username = organName;
					}
				}
			});
		}
		sourceNew = '';
		downloadHref = `${config.fileUrl[config.ENV]}/static/download/?${utmCampaign ? `utm_campaign=${utmCampaign}` : ''}${utmSource ? `&utm_source=${utmSource}` : ''}${utmMedium ? `&utm_medium=${utmMedium}` : ''}${utmTerm ? `&utm_term=${utmTerm}` : ''}${utmContent ? `&utm_content=${utmContent}` : ''}#xiaZaiAPP`;
	}

	getInfo();

	// 控制下载按钮
	function initNeedDownload() {
		$('.nav.down-top').css('visibility', 'visible');
		$('.nav.down-bottom').css('visibility', 'visible');
	}

	if (!config.isKhtAPP) {
		initNeedDownload();
	}

	function watchScroll(scrollTop) {
		if (scrollTop > 150) {
			$('.nav.down-bottom').addClass('show');
			$('.nav.down-top').addClass('di');
		} else if (scrollTop <= 150) {
			$('.nav.down-bottom').removeClass('show');
			$('.nav.down-top').removeClass('di');
		}
	}

	// 修改下载效果展示
	$(window).on('scroll', () => {
		const scrollTop = $(window).scrollTop();
		watchScroll(scrollTop);
	});
	$('body').on('scroll', () => {
		const scrollTop = $('body').scrollTop();
		watchScroll(scrollTop);
	});

	function restKeyWords() {
		let seconds = 60;
		$('#getKeywords').text(`${seconds}s后重新获取`);
		$('#getKeywords').attr('disabled', 'true');
		secondInterval = setInterval(() => {
			if (seconds > 1) {
				seconds -= 1;
				$('#getKeywords').text(`${seconds}s后重新获取`);
			} else {
				$('#getKeywords').text('获取验证码');
				$('#getKeywords').attr('disabled', 'false');
				clearInterval(secondInterval);
			}
		}, 1000);
	}

	// 获取手机验证码接口
	function sendMobileVeryCode() {
		const phoneNumber = $('input[name="phoneNumber"]').val();
		const internatCode = $('select[name="internatCode"]').val();
		const params = {
			url: '/userms/auth/sendMobileVeryCode',
			data: {
				phone: phoneNumber,
				type: '17',
				internatCode,
			},
		};
		fetch.post(params).then((res) => {
			if (res && res.shortmsgVerycodeTimeout) {
				restKeyWords();
			}
		});
	}

	// 验证短信验证码
	function saveNewPersion() {
		const recommendMobile = $('input[name="phoneNumber"]').val();
		const internatCode = $('select[name="internatCode"]').val();
		const code = $('input[name="keywords"]').val();
		const params = {
			url: '/campaignsms/getRewardForInvit/saveNewPersion',
			data: {
				code,
				recommendMobile,
				referralUserId,
				type: '17',
				internatCode,
				organFlag: organFlag || '0',
				organId: organId || '',
				organName: organName || '',
				registSource: sourceNew,
			},
			errorFuc: () => {
				if (secondInterval) {
					clearInterval(secondInterval);
				}
				window.location.href = downloadHref;
			},
		};
		fetch.post(params).then(() => {
			if (secondInterval) {
				clearInterval(secondInterval);
			}
			window.location.href = downloadHref;
		}).catch(() => {
			if (secondInterval) {
				clearInterval(secondInterval);
			}
			window.location.href = downloadHref;
		});
	}

	function handlerPopupMobile(captchaObj) {
	// 将验证码加到id为captcha的元素里
	// captchaObj.appendTo('#popup-captcha-mobile');
	// 拖动验证成功后两秒(可自行设置时间)自动发生跳转等行为
		captchaObj.onReady(() => {
			captchaObj.verify();
		}).onSuccess(() => {
			const phoneNumber = $('input[name="phoneNumber"]').val();
			const internatCode = $('select[name="internatCode"]').val();
			const validate = captchaObj.getValidate();
			const params = {
				url: '/userms/captchaV3/validate',
				data: {
					type: 17,
					accountName: phoneNumber,
					internatCode,
					geetestChallenge: validate.geetest_challenge,
					geetestSeccode: validate.geetest_seccode,
					geetestValidate: validate.geetest_validate,
				},
			};
			fetch.post(params).then((res) => {
				if (res && res.status === 'success') {
					sendMobileVeryCode();
				} else if (res && res.status === 'fail') {
					Toast('验证失败', 2000);
				}
			});
		});
		captchaObj.onClose(() => {
		// 用户把验证关闭了，这时你可以提示用户需要把验证通过后才能进行后续流程
			Toast('验证通过后才能进行发送验证码', 2000);
		});
		activeCaptchaObj = captchaObj;
	}

	function needLoign() {
	// eslint-disable-next-line global-require
		const logo = require('../assets/images/big_log.png');
		$('#dialogSignIn').show(200);
		$('#dialogSignIn .dialog-content').append(`<div class="sign-up">
	<div class="row sign-up-header">
		<span class="kht kht-close-o"></span>
	</div>
	<div class="row sign-up-logo">
		<img src=${logo} />
		<div class="col logo-dec">
			<p>太平生活</p>
			<p>一触即通</p>
		</div>
	</div>
	<div class="sign-up-welcome font-size-28 font-color-999" style="text-align: center;">
		${username}，邀请您使用太平通
	</div>
	<div class="sign-up-input">
		<div class="row line">
			<select class="outline-select" name="internatCode">
				<option value="0086">中国大陆（86）</option>
				<option value="00852">中国香港（852）</option>
				<option value="00853">中国澳门（853）</option>
			</select>
			<input
				name="phoneNumber"     
				class="outline-input"
				maxlength="11" 
				type="tel"
				placeholder="请输入11位手机号码"
			/>
		</div>
		<div class="row line">
			<input
				name="keywords"     
				class="outline-input"
				maxlength="6" 
				type="tel"
				placeholder="请输入短信验证码"
			/>
			<button id="getKeywords" class="btn font-color-white bg-color-blue" disabled="true">获取验证码</button>
		</div>
	</div>
	<div class="row sign-up-xy">
		<input id="checkXy" class="input-check" value="1" checked="checked" type="checkbox">
		<label for="checkXy" class="kht"></label >
		<p>我已阅读并同意<span id="readXy">《太平集团用户服务协议》</span></p>
	</div>
	<button id="downloadNow" class="btn font-size-32 font-color-white bg-color-blue full" disabled="true">立即下载</button>
</div>`);
	}

	function getKeywords() {
		const phoneNumber = $('input[name="phoneNumber"]').val();
		const internatCode = $('select[name="internatCode"]').val();
		const params = {
			url: '/userms/captchaV3/register',
			data: {
				accountName: phoneNumber,
				internatCode,
			},
		};
		fetch.post(params).then((data) => {
			const res = JSON.parse(data);
			const cfg = {
				gt: res.gt,
				challenge: res.challenge,
				https: true,
				product: 'bind',
				api_server: captchaServer,
				offline: !res.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
			// 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
			};
			if (!activeCaptchaObj) {
				window.initGeetest(cfg, handlerPopupMobile);
			} else {
				activeCaptchaObj.verify();
			}
		});
	}

	// 控制下载按钮是否可以点击
	function watchCanDownload() {
		if ($('input[name="keywords"]').val() && $('#checkXy')[0].checked) {
			$('#downloadNow').removeAttr('disabled');
		} else {
			$('#downloadNow').attr('disabled', 'true');
		}
	}

	$('#dialogSignIn').on('click', 'span.kht-close-o', () => {
		$('#dialogSignIn').hide();
		$('#dialogSignIn .dialog-content').empty();
		$('body').css('overflow', '');
		$('body').css('position', '');
		$('body').css('top', '');
		$('body').css('bottom', '');
		$('body').css('left', '');
		$('body').css('right', '');
		$(window).on('scroll', () => {
			const scrollTop = $(window).scrollTop();
			watchScroll(scrollTop);
		});
		$('body').on('scroll', () => {
			const scrollTop = $('body').scrollTop();
			watchScroll(scrollTop);
		});
		if (secondInterval) {
			clearInterval(secondInterval);
		}
	});

	$('#dialogSignIn').on('click', '#getKeywords', () => {
		getKeywords();
	});

	$('#dialogSignIn').on('click', '#downloadNow', () => {
		saveNewPersion();
	});

	$('#dialogSignIn').on('input', 'input[name="keywords"]', () => {
		$('input[name="keywords"]').val($('input[name="keywords"]').val().replace(/[^\d]/g, ''));
		watchCanDownload();
	});

	$('#dialogSignIn').on('change', '#checkXy', () => {
		watchCanDownload();
	});

	$('#dialogSignIn').on('input', 'input[name="phoneNumber"]', () => {
		$('input[name="phoneNumber"]').val($('input[name="phoneNumber"]').val().replace(/[^\d]/g, ''));
		if ($('input[name="phoneNumber"]').val()) {
			$('#getKeywords').removeAttr('disabled');
		} else {
			$('#getKeywords').attr('disabled', 'true');
		}
	});

	$('#dialogSignIn').on('click', 'span#readXy', () => {
		$('#xyContent').show(300);
	});
	$('#xyContent').on('click', 'span.kht-close-o', () => {
		$('#xyContent').hide();
	});
	// 下载逻辑
	window.onDownLoad = () => {
		if (username || organName) {
			needLoign();
			$(window).unbind('scroll');
			$('body').unbind('scroll');
			$('body').css('overflow', 'hidden');
			$('body').css('position', 'fixed');
			$('body').css('top', '0');
			$('body').css('bottom', '0');
			$('body').css('left', '0');
			$('body').css('right', '0');
		} else {
			window.location.href = downloadHref;
		}
	};
	// 下载绑定
	$('.download').on('click', () => {
		window.onDownLoad();
	});
}());

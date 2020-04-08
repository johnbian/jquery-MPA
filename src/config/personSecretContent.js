import '../pages/style/personSecret.scss';

(function () {
	$('body').append(`<div id="ysxyContent" class="sign-up-content">
  <div class="dialog-overlay"></div>
  <div class="dialog-content">
    <div class="modal-content">
      <div class="row modal-header">
        <h3 class="modal-title">《太平集团用户隐私条款》</h3>
        <span class="kht kht-close-o"></span>
      </div>
      <div class="modal-body">
        <div class="indent" style="font-weight:bold">本平台采取严格的隐私政策，尊重并保护用户隐私，请会员仔细阅读并了解。
        </div>
        <div class="indent" style="font-weight:bold">1、收集个人信息的目的及其使用
        </div>
        <div class="indent" style="font-weight:bold">本平台可能将用户所提供的个人信息用于以下一项或多项目的：
        </div>
        <div class="indent" style="font-weight:bold">1) 帮助您完成注册；
        </div>
        <div class="indent" style="font-weight:bold">2) 向您提供商品或服务；
        </div>
        <div class="indent" style="font-weight:bold">3) 向您推送商品及服务相关的消息；
        </div>
        <div class="indent" style="font-weight:bold">4) 更准确的身份确认；
        </div>
        <div class="indent" style="font-weight:bold">5) 为您提供安全保障；
        </div>
        <div class="indent" style="font-weight:bold">6) 改进我们的服务。
        </div>
        <div class="indent" style="font-weight:bold">2、本平台对个人信息安全的承诺
        </div>
        <div class="indent" style="font-weight:bold">
            为保持数据的准确性，防止擅自入侵及确保个人信息的正确使用，本平台采取了适当的硬件、电子及管理措施以保障本平台收集个人资料的保密性。通过内部安全管理规范、技术手段、加密处理等各种措施保证信息安全并承诺不对个人信息进行非法处理。
        </div>
        <div class="indent" style="font-weight:bold">3、本平台所收集的信息
        </div>
        <div class="indent" style="font-weight:bold">个人信息包括但不限于：
        </div>
        <div class="indent" style="font-weight:bold">1) 您提供的信息
        </div>
        <div class="indent" style="font-weight:bold">（1）您在注册账户或使用我们的服务时，向我们提供的相关个人信息，例如姓名、证件类型和证件号码、电话号码、电子邮件、联系地址、职业等。
        </div>
        <div class="indent" style="font-weight:bold">（2）您通过我们的服务向其他方提供的共享信息，以及您使用我们的服务时所储存的信息。
        </div>
        <div class="indent" style="font-weight:bold">2) 我们获取的您的信息
        </div>
        <div class="indent" style="font-weight:bold">
            为使本平台服务更加贴合用户的需求，了解产品的适配性、识别账号的异常状态等，我们会收集、汇总、记录的信息，例如日志信息、设备信息、位置信息等。
        </div>
        <div class="indent" style="font-weight:bold">4、如何查询或修改用户的个人信息
        </div>
        <div class="indent" style="font-weight:bold">用户可在“我的”或用户中心项下的“个人信息”中查询并修改个人信息。每当用户的个人信息有所变化时，应当及时更新。
        </div>
        <div class="indent" style="font-weight:bold">5、保护用户的隐私权
        </div>
        <div class="indent" style="font-weight:bold">
            本平台完全遵守相关法律条例的要求，确保用户隐私。本平台会将个人信息的收集和使用限制在必须范围之内，以便管理业务、为用户提供最高质量的服务以及提供各项优惠信息。用户知悉并不可撤销地授权以下事宜：本平台所属太平集团（官网：http://www.cntaiping.com/）及其关联公司，可以收集、整理、分析、使用及保存您的个人信息，并可在太平集团及其关联公司内部相互提供、分析和使用，还可基于为您提供服务而与第三方合作，将您的个人信息提供给第三方使用，例如将您的个人信息提供给第三方进行身份认证。为确保用户信息的安全，太平集团及其关联公司对上述信息负有保密义务，并采取合理措施保证信息安全。如果用户不希望收到第三方推送的信息，不希望用户个人信息被除太平集团及其关联公司外的其他第三方使用，可以在提供个人信息时或其他任何时候向本平台明示告知，本平台将不会将明示的客户信息交给任何第三方，但若因此导致用户无法使用本平台的所有或部分服务，本平台不承担任何责任。如涉及个人信息隐私投诉，可致电中国太平官方热线95589。
        </div>
        <div class="indent" style="font-weight:bold">6、隐私政策的更改
        </div>
        <div class="indent" style="font-weight:bold">
            一旦本平台更改了隐私申明，将采用在网站、APP公告或站内消息等方式通知用户修改、增加或删减的内容，不承担事先单独通知义务。一经本平台通过上述方式通知，即视为上述内容已经通知到用户。若用户在本协议及各类规则变更后继续使用本平台服务的，视为用户已仔细认真阅读、充分理解并同意接受修改后的隐私声明。
        </div>
      </div>
    </div>
  </div>
</div>`);
	$('#ysxyContent').on('click', 'span.kht-close-o', () => {
		$('body').css('overflow', '');
		$('body').css('position', '');
		$('body').css('top', '');
		$('body').css('bottom', '');
		$('body').css('left', '');
		$('body').css('right', '');
		$('#ysxyContent').hide();
	});
}());

import React, { FC, ReactElement } from 'react';
import Header from "components/header/Header";
import './agreement.less'


const Agreement: FC = (): ReactElement => {

    console.log(" =========== Agreement 协议 =========== ");

    return (
        <div className="agreement">
            <Header>协议</Header>
            <div className="agreement-con">
                <div className="agreement-tit">厚鸟软件使用及服务协议书</div>
                <div>尊敬的企业用户：</div>
                <div>欢迎您使用本软件及服务！</div>
                <div>【首页及宣导】</div>
                <div>为使用本软件及服务，企业应当阅读并遵守《厚鸟科技软件许可及服务协议》（以下简称“本协议”），以及
                    《厚鸟软件服务协议》、《厚鸟软件许可及服务协议》、《厚鸟软件企业帐号使用规范》、《厚鸟软件隐私政策》。请企业务必审慎阅读、充分理解各条款内容，特别是免除或者限制厚鸟软件责任的条款、对用户权利进行限制的条款、约定争议解决方式和司法管辖的条款（第15.2条、第15.3条约定）等，以及开通或使用某项服务的单独协议。限制、免责条款或者其他涉及企业重大权益的条款可能以加粗、加下划线或其他形式提示企业重点注意。
                </div>
                <div>除非企业已充分阅读并接受本协议所有条款，否则企业无权下载、安装或使用本软件或相关服务。企业点击同意、下一步或企业的下载、安装、使用、登录等行为或者企业以其他任何方式使用本软件和/或相关服务的，即视为企业已阅读本协议并同意本协议的约束。本协议即在企业与厚鸟软件之间产生法律效力，成为对双方均具有法律约束力的法律文件。阅读本协议的过程中，如果用户不同意本协议或其中任何条款约定，用户应立即停止注册程序。</div>
                <div>如果企业因年龄、智力等因素而不具有完全民事行为能力，请在监护人的陪同下阅读本协议。</div>
                <div>一、协议的范围</div>
                <div>1.1 协议适用主体范围</div>
                <div>本协议是企业与厚鸟软件之间关于企业下载、安装、使用、复制本软件，以及使用本服务所订立的协议。</div>
                <div>1.2
                    本协议，包括本协议正文、《厚鸟软件服务协议》、《厚鸟软件许可及服务协议》、《厚鸟软件企业帐号使用规范》、《厚鸟软件隐私政策》以及厚鸟软件可能不时发布并修订的关于本软件及本服务的相关协议、规则、规范、公告或通知等。
                </div>
                <div>二、关于本软件及本服务</div>
                <div>2.1 【关于本软件】</div>
                <div>本软件是指厚鸟科技开发并按照本协议授权用户下载、安装、使用的软件。</div>
                <div>2.2 【本服务的内容和形式】</div>
                <div>本服务内容是指厚鸟通过本软件向用户提供的相关服务（简称“本服务”），具体服务内容以厚鸟提供的为准。企业知晓并同意，厚鸟可能会根据需要更新服务的内容。厚鸟有权随时对本协议条款进行修改，有权随时变更、中断或终止部分或全部网络服务，并不需对用户或任何第三方负责和为此承担任何责任。修改后的服务条款一旦公布即有效代替原来的服务条款。用户可随时登录软件查阅最新版服务条款。公司随时发布的与该服务相关的规则或说明，这些规则或说明均为构成本服务条款的一部分。用户如果不同意服务条款的修改，可以主动取消已经获得的网络服务；如果用户继续使用网络服务，则视为用户已经接受服务条款的修改。</div>
                <div>企业可能可以通过电脑、手机等终端以及厚鸟支持的其他形式使用本服务，具体以厚鸟提供的为准。同时，厚鸟会不断丰富企业使用本服务的终端、形式等。当企业使用本服务时，企业应选择与企业的终端、系统等相匹配的本软件版本，否则，企业可能无法正常使用本服务。</div>
                <div>2.3 本软件中如存在厚鸟的其他应用插件，企业也可以通过本软件下载或使用相关插件，</div>
                <div>2.4 【许可的范围】</div>
                <div>2.4.1 厚鸟给予企业一项企业的、不可转让及非排他性的许可，以按照本协议相关规定使用本软件。企业的企业可以为非商业目的在单一台终端设备上下载、安装、使用、登录本软件。</div>
                <div>2.4.2 企业的企业账号，申请通过后且正式使用后，可以制作本软件的一个副本，仅用作备份。备份副本必须包含原软件中含有的所有著作权信息。</div>
                <div>2.4.3 本条及本协议其他条款未明示授权的其他一切权利仍由厚鸟保留，企业在行使这些权利时须另外取得厚鸟的书面许可。厚鸟如果未行使前述任何权利，并不构成对该权利的放弃。</div>
                <div>三、软件的获取</div>
                <div>3.1 企业可以直接从厚鸟的官方网站、官方应用分发平台以及厚鸟授权的第三方网站、应用分发平台等厚鸟官方或厚鸟授权的渠道获取本软件。</div>
                <div>3.2 如果企业从未经厚鸟授权的第三方获取本软件或与本软件名称相同的安装程序，厚鸟无法保证该软件能够正常使用，并对因此给企业造成的损失不予负责。</div>
                <div>四、软件的安装与卸载</div>
                <div>4.1 厚鸟可能为不同的终端、系统等开发不同的软件版本，企业应当根据实际情况选择下载合适的版本进行安装。</div>
                <div>4.2 下载安装程序后，企业需要按照该程序提示的步骤正确安装。</div>
                <div>4.3 为提供更加优质、安全的服务，在本软件安装时厚鸟可能推荐企业安装其他软件，企业可以选择安装或不安装。</div>
                <div>4.4 如果企业不再需要使用本软件或者需要安装新版软件，可以自行卸载。如果企业愿意帮助厚鸟改进产品服务，请告知卸载的原因。</div>
                <div>五、软件的更新</div>
                <div>5.1 为了增进用户体验、完善服务内容，厚鸟将不断努力开发新的服务，并为企业不时提供软件更新（这些更新可能会采取软件替换、修改、功能强化、版本升级等形式）。</div>
                <div>5.2 为了改善用户体验或提高服务安全性、保证功能的一致性，厚鸟有权对软件进行更新，或者对软件的部分功能效果进行改变。</div>
                <div>5.3
                    本软件新版本发布后，旧版本的软件可能无法使用。厚鸟不保证旧版本软件继续可用及继续对旧版本软件提供相应的客户服务，请企业随时核对并下载最新版本，因企业未下载最新版本，导致全部或部分服务无法使用或数据丢失的，厚鸟概不负责，由企业自行承担责任。
                </div>
                <div>六、用户个人信息保护</div>
                <div>6.1
                    保护用户个人信息是厚鸟的一项基本原则，厚鸟将按照本协议及《厚鸟隐私政策》、有关本软件及服务的隐私保护指引（如有）的规定收集、使用、储存和分享企业的个人信息。本协议对个人信息保护相关内容未作明确规定的，均应以《厚鸟隐私政策》、有关本软件及服务的隐私保护指引（如有）的内容为准。
                </div>
                <div>6.2
                    企业的企业在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规或政策规定，需要企业提供或填写真实身份信息的（包括但不限于身份证号、手机号等信息），企业应当按要求提供或填写。若企业填写的信息不完整、不真实或不符合国家相关规定，则可能无法使用本服务或在使用过程中受到限制。
                </div>
                <div>企业不得以他人企业资料进行实名注册。否则，厚鸟有权终止为企业提供服务，并有权对企业的帐号采取包括但不限于警告、限制或禁止使用帐号全部或部分功能、删除帐号相关数据或信息、帐号封禁等处理措施，因此造成的一切后果由企业自行承担。</div>
                <div>为了更好地向企业提供本服务，厚鸟公司会收集、使用企业的一些相关信息。如厚鸟可对企业帐号或帐号中的昵称、头像以及在本服务中的相关操作等信息（以下称“该等信息”。该等信息具体包括但不限于企业的登录状态、企业信息、企业上传的图片、视频及其他信息等）进行使用。同时，为了提供更优质的服务，可能需要企业提供或展示企业的终端设备型号或名称以完成本软件与设备对接、适配等。</div>
                <div>6.3
                    如本服务向企业提供一些与地理位置、兴趣爱好等相关功能或服务的（如基于非好友用户之间的交友、拓展好友的功能），需要获取、使用企业的地理位置、兴趣爱好等信息才能提供。如企业使用这些功能的，即表示企业同意本服务获取、使用企业的地理位置、兴趣爱好等信息。同时，企业理解并同意：在前述相关功能中，相关信息的发布由用户自行发布，并自行确保其合法、健康、真实以及自行承担相关法律责任；企业应自行通过各种手段认真核实相关用户及其发布信息的合法性、真实性，若企业与其他用户涉及线下见面、约会或交友等各种实体活动的，在进行线下活动时，要注意保护好企业的财产安全；同时，厚鸟在前述相关功能中，仅提供技术支持和平台服务，基于互联网虚拟的特性，厚鸟无法核实相关用户及发布信息的真实性，也无法向企业提供任何保证，若由于前述相关功能，导致企业在线上、线下有任何人身、财产损失的，企业同意自行承担全部责任，法律另有强制性规定的除外。
                </div>
                <div>6.4 厚鸟将尽力运用各种安全技术和程序建立完善的管理制度来保护企业的个人信息，以免遭受未经授权的访问、使用或披露。</div>
                <div>6.5 厚鸟不会将企业的个人及企业信息转移或披露给任何第三方，除非：</div>
                <div>（1）相关法律法规或司法机关、行政机关要求；或</div>
                <div>（2）为完成合并、分立、收购或资产转让而转移；或</div>
                <div>（3）为提供企业要求的服务所必需或本协议另有约定，或</div>
                <div>（4）为维护社会公众的利益；或</div>
                <div>（5）为维护本公司的合法权益。</div>
                <div>6.6 厚鸟非常重视对个人及企业信息的保护。若企业不具备完全民事行为能力，在使用本服务前，应事先取得企业的法定监护人的同意。</div>
                <div>七、主权利义务条款</div>
                <div>7.1 帐号使用规范</div>
                <div>7.1.1
                    企业如果需要使用和享受本服务，则企业需要将企业享有使用权的企业帐号作为应用帐号。企业对该企业号码和帐号的申请、使用等行为应符合厚鸟不时修订并公布的《厚鸟软件许可及服务协议》、《厚鸟企业账号使用规范》等相应协议或规范。同时，企业承担以前述全部企业帐号为标识进行的全部行为的法律责任。
                </div>
                <div>如存在个人操作模式的，企业知悉并同意，在个人操作模式下可能无法进行相应充值或消费。且一旦企业卸载或重装本软件，或企业更换手机、电脑等终端设备或该等终端设备损坏的，企业在该个人模式下所有相关数据可能都将会被清空，且无法查询和恢复。如因此造成企业任何损失的，均由企业自行承担。</div>
                <div>7.1.2 企业应当做好帐号和密码的保密措施。
                    因企业保密措施不当或企业的其他行为，致使上述口令、密码等丢失或泄漏所引起的一切损失和后果，均由企业自行承担。当在企业怀疑他人在使用企业的帐号时，企业应立即通知厚鸟公司。
                </div>
                <div>7.1.3
                    用户应当通过真实身份信息认证注册账号，且用户提交的账号名称、头像和简介等注册信息中不得出现违法和不良信息，经厚鸟审核，如存在上述情况，厚鸟将不予注册；同时，在注册后，如发现用户以虚假信息骗取账号名称注册，或其账号头像、简介等注册信息存在违法和不良信息的，厚鸟有权不经通知单方采取限期改正、暂停使用、注销登记、收回等措施。
                </div>
                <div>7.2 用户注意事项</div>
                <div>7.2.1
                    企业理解并同意：为了向企业提供有效的服务，企业在此许可厚鸟利用企业电脑及移动通讯终端的处理器和带宽等资源。本软件使用过程中可能产生数据流量的费用，用户需自行向运营商了解相关资费信息，并自行承担相关费用。
                </div>
                <div>7.2.2
                    企业充分理解并同意：企业在使用本服务某一特定服务时，本服务可以使用企业终端设备的相关权限、接口及相关信息等以实现相应的功能，某些特定服务可能还需同意单独的协议、规则等，企业在使用该项服务前请仔细阅读前述相关协议、规则。
                </div>
                <div>7.2.3 企业可以选择不向厚鸟提供企业的某些信息，或者根据产品设置取消厚鸟收集某些信息的权利，但因此可能会导致相关服务功能无法实现。</div>
                <div>7.2.4
                    企业在使用本软件某一特定服务时，该服务可能会另有单独的协议、相关业务规则等（以下统称为“单独协议”），企业在使用该项服务前请阅读并同意相关的单独协议；企业使用前述特定服务，即视为你接受相关单独协议。
                </div>
                <div>7.2.5 用户在使用本软件及服务时，须自行承担如下包括但不限于厚鸟不可掌控的风险内容：</div>
                <div>7.2.5.1 由于不可抗力引起的个人信息丢失、泄漏等风险；</div>
                <div>7.2.5.2 用户在使用本软件访问第三方网站或应用时遇到内容质量及安全问题等。</div>
                <div>7.2.5.3 由于网络信号不稳定、网络带宽小等原因，所引起的本软件登录失败、资料同步不完整、页面打开速度慢等风险；</div>
                <div>7.2.6
                    企业理解并同意：厚鸟将依法并会尽其商业上的合理努力保障企业在本软件及服务中的数据存储安全，但是厚鸟并不能就此提供完全保证。厚鸟不对由于非厚鸟原因造成的企业在本软件及服务中相关数据的删除或储存失败负责。企业应自行备存储在本软件及服务中的数据、信息或与本软件及服务相关的数据、信息，双方另有约定的按相应约定执行。
                </div>
                <div>如果企业停止使用本软件及服务，或因企业违反法律法规规定或本协议相关约定而被取消或终止本服务，厚鸟将按照本协议第13.6条约定处理企业的数据。</div>
                <div>7.2.7 企业同意厚鸟可以在提供服务的过程中自行或由第三方广告商通过短信、电子邮件或电子信息等多种方式向企业发送广告、推广或宣传信息（包括商业与非商业信息）。</div>
                <div>7.3 第三方产品和服务</div>
                <div>7.3.1 企业在使用本软件第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。厚鸟和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。</div>
                <div>除法律另有强制性规定外，厚鸟不对第三方提供的服务及内容的安全性、准确性、有效性承担保证或连带责任，由此若引发的任何争议及损害，由该第三方承担。</div>
                <div>7.3.2 如果企业使用第三方产品或服务的，企业在使用的过程中可能需向该第三方披露企业的相关个人信息。厚鸟在此提醒企业在披露企业的个人信息时谨慎决定。</div>
                <div>八、用户行为规范</div>
                <div>8.1 信息内容规范</div>
                <div>8.1.1
                    如企业使用本软件及服务上传、发表或发布观点、数据、文字、信息、用户名、图片、照片、个人信息、音频、视频文件、链接及其他内容的（以下统称“信息内容”），企业必须保证，企业有完全的权利上传、发表或发布该等信息内容或已获得相关权利人的合法授权，该等信息内容未侵犯厚鸟及任何第三方合法权益，也不存在任何违法违规情形。
                </div>
                <div>8.1.2 企业在使用本服务时须遵守法律法规，不得制作、复制、发布、传播含有下列内容的信息内容或从事相关行为，也不得为制作、复制、发布、传播含有下列内容的信息内容或从事相关行为提供便利：</div>
                <div>（1）反对宪法所确定的基本原则的；</div>
                <div>（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</div>
                <div>（3）损害国家荣誉和利益的；</div>
                <div>（4）煽动民族仇恨、民族歧视，破坏民族团结的；</div>
                <div>（5）破坏国家宗教政策，宣扬邪教和封建迷信的；</div>
                <div>（6）散布谣言，扰乱社会秩序，破坏社会稳定的；</div>
                <div>（7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</div>
                <div>（8）侮辱或者诽谤他人，侵害他人合法权益的；</div>
                <div>（9）违反法律法规底线、社会主义制度底线、国家利益底线、公民合法权益底线、社会公共秩序底线、道德风尚底线和信息真实性底线的“七条底线”要求的；</div>
                <div>（10）相关法律法规或本协议、相关协议、规则等禁止的。</div>
                <div>8.2 软件使用规范</div>
                <div>除非法律允许或厚鸟书面许可，企业使用本软件过程中不得从事下列行为：</div>
                <div>（1）删除本软件及其副本上关于著作权的信息；</div>
                <div>（2）对本软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本软件的源代码；</div>
                <div>（3）对厚鸟拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；</div>
                <div>（4）对本软件或者本软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及本软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非厚鸟授权的第三方工具/服务接入本软件和相关系统；</div>
                <div>（5）通过修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的；</div>
                <div>（6）通过非厚鸟开发、授权的第三方软件、插件、外挂、系统，登录或使用厚鸟软件及服务，或制作、发布、传播上述工具；</div>
                <div>（7）自行或者授权他人、第三方软件对本软件及其组件、模块、数据进行干扰；</div>
                <div>（8）其他未经厚鸟明示授权的行为；</div>
                <div>8.3
                    你理解并同意，基于用户体验、运营安全、规则要求及健康发展等综合因素，厚鸟有权选择提供服务的对象，有权决定功能设置，有权决定功能开放对象和范围。如用户行为存在以下情形之一的，有权视具体情况中止或终止提供本服务：
                </div>
                <div>（1）违反法律法规或本协议规定的；</div>
                <div>（2）影响服务体验的；</div>
                <div>（3）存在安全隐患的；</div>
                <div>（4）不符合厚鸟其他管理要求的。</div>
                <div>8.4 对自己行为负责</div>
                <div>企业充分了解并同意，企业必须为自己使用本服务及注册帐号下的一切行为负责，包括企业所发表的任何内容以及由此产生的任何后果。企业应对本服务中的内容自行加以判断，并自行承担因使用内容而引起的所有风险。</div>
                <div>如果厚鸟收到权利人通知，主张企业发送或传播的内容侵犯其相关权利的，企业同意厚鸟有权进行独立判断并采取删除、屏蔽或断开链接等措施。企业使用本服务或本软件时不得违反国家法律法规、侵害他人合法权益。</div>
                <div>企业理解并同意，如企业被他人投诉侵权或企业投诉他人侵权，厚鸟有权将争议中相关方的主体、联系方式、投诉相关内容等必要信息提供给其他争议方或相关部门，以便及时解决投诉纠纷，保护他人或企业的合法权益。</div>
                <div>8.5 违约处理</div>
                <div>8.5.1
                    企业理解并同意：若企业违反法律法规或本协议约定的，厚鸟有权随时单方根据相应情形采取以下一项或多项措施（为方便描述，以下称“处罚”。处罚的具体时间长短由厚鸟根据企业的违法违约情节确定），并公告处理结果：
                </div>
                <div>（1）警告；</div>
                <div>（2）限制或终止企业使用本软件或本服务部分或全部功能；</div>
                <div>（3）删除、屏蔽相关内容或断开链接；</div>
                <div>（4）中止、终止企业对相应帐号的使用(即“封号”) ；</div>
                <div>（5）注销企业的帐号；</div>
                <div>（6）要求企业赔偿厚鸟因此受到的损失。</div>
                <div>8.5.2
                    企业理解并同意，厚鸟有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此而产生的一切法律责任。
                </div>
                <div>8.5.3 企业理解并同意，因企业违反本协议或相关服务条款的规定，导致或产生第三方主张的任何索赔、要求或损失，企业应当独立承担责任；厚鸟因此遭受损失的，企业也应当一并赔偿。</div>
                <div>8.6 数据获取使用</div>
                <div>为了保护数据安全， 企业不得从事包括但不限于以下行为，也不得为其提供便利：</div>
                <div>（1）未经其他用户明确同意且未向其他用户如实披露数据用途、使用范围等相关信息，收集、复制、存储、使用或传输其他用户数据，侵害其它用户合法权益。</div>
                <div>（2）将其他用户帐号、手机号、电子邮箱地址和出生日期等个人隐私信息用于任何未经用户及厚鸟授权的用途。</div>
                <div>（3）企图进行反射查找、跟踪、关联、挖掘、获取用户帐号、手机号、电子邮箱地址和出生日期等个人隐私信息。</div>
                <div>（4）通过各种程序、软件等抓取任何用户信息或与本服务、本软件相关的任何信息、数据。</div>
                <div>（5）未经厚鸟授权使用任何第三方软件、插件、外挂、系统等查看、获取本软件或服务中所包含的厚鸟、厚鸟合作伙伴或用户的任何相关信息、数据等内容。</div>
                <div>（6）其他危害数据安全的行为。</div>
                <div>九、知识产权声明</div>
                <div>9.1
                    厚鸟是本软件的知识产权权利人。本软件的一切著作权、商标权、专利权、商业秘密等知识产权，以及与本软件相关的所有信息内容（包括但不限于文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律法规和相应的国际条约保护，厚鸟享有上述知识产权，但相关权利人依照法律规定应享有的权利除外。
                </div>
                <div>9.2 未经厚鸟或相关权利人书面同意，企业不得为任何商业或非商业目的自行或许可任何第三方实施、利用、转让上述知识产权。</div>
                <div>十、终端安全责任</div>
                <div>10.1
                    企业理解并同意，本软件同大多数互联网软件一样，可能会受多种因素影响（包括但不限于用户原因、网络服务质量、社会环境等）；也可能会受各种安全问题的侵扰（包括但不限于他人非法利用用户资料，进行现实中的骚扰；用户下载安装的其他软件或访问的其他网站中可能含有病毒、木马程序或其他恶意程序，威胁企业的终端设备信息和数据的安全，继而影响本软件的正常使用等）。因此，企业应加强信息安全及个人信息的保护意识，注意密码保护，以免遭受损失。
                </div>
                <div>10.2 企业不得制作、发布、使用、传播用于窃取用户帐号及他人个人信息、财产的恶意程序。</div>
                <div>10.3 维护软件安全与正常使用是厚鸟和企业的共同责任，厚鸟将按照行业标准合理审慎地采取必要技术措施保护企业的终端设备信息和数据安全，但是厚鸟不能就此提供任何保证。</div>
                <div>10.4 在任何情况下，企业不应轻信借款、索要密码或其他涉及财产的网络信息。涉及财产操作的，请一定先核实对方身份，并请经常留意厚鸟有关防范诈骗犯罪的提示。</div>
                <div>十一、第三方软件或技术</div>
                <div>11.1 本软件可能会使用第三方软件或技术（包括本软件可能使用的开源代码和公共领域代码等，下同），这种使用已经获得合法授权。</div>
                <div>11.2
                    本软件如果使用了第三方的软件或技术，厚鸟可按照相关法规或约定，对相关的协议或其他文件，可能通过本协议附件、在本软件安装包特定文件夹中打包等形式进行展示，它们可能会以“软件使用许可协议”、“授权协议”、“开源代码许可证”或其他形式来表达。企业应当遵守前述通过各种形式展现的相关协议或其他文件。如果企业没有遵守这些要求，该第三方或者国家机关可能会对企业提起诉讼、罚款或采取其他制裁措施，并要求厚鸟给予协助，企业应当自行承担法律责任。
                </div>
                <div>11.3
                    如因本软件使用的第三方软件或技术引发的任何纠纷，应由该第三方负责解决，厚鸟不承担任何责任，但法律另有强制性规定除外。厚鸟不对第三方软件或技术提供客服支持，若企业需要获取支持，请与第三方联系。
                </div>
                <div>十二、关于免责</div>
                <div>12.1 企业理解并同意：鉴于网络服务的特殊性，厚鸟有权根据本软件的整体运营情况或相关运营规范、规则等，变更、中止或终止部分或全部的服务。</div>
                <div>12.2
                    企业理解并同意：为了向企业提供更完善的服务，厚鸟有权定期或不定期地对提供本服务的平台或相关设备进行检修、维护、升级等，此类情况可能会造成相关服务在合理时间内中断或暂停，厚鸟不对企业因此受到的损失承担责任，但法律另有强制性规定除外。
                </div>
                <div>12.3
                    企业理解并同意：厚鸟的服务是按照现有技术和条件所能达到的现状提供的。厚鸟会尽最大努力向企业提供服务，确保服务的连贯性和安全性；但厚鸟不能保证其所提供的服务毫无瑕疵，也无法随时预见和防范技术以及其他风险可能导致的服务中断、数据丢失以及其他的损失和风险。即使厚鸟提供的服务存在瑕疵，但上述瑕疵是当时行业技术水平所无法避免的，其将不被视为厚鸟违约，除法律另有强制性规定外，厚鸟不对企业因此受到的损失承担责任。
                </div>
                <div>12.4
                    企业理解并同意，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、国家行为(包括立法机关、行政机关、司法机关以及国家法律、法规或政策授权的具有管理公共事务职能的组织等实施的行为)等。出现上述情况时，厚鸟将努力在第一时间与相关单位配合，争取及时进行修复，但是由此给企业造成的损失厚鸟在法律允许的范围内免责。
                </div>
                <div>12.5 在法律允许的范围内，厚鸟对以下情形导致的服务中断或受阻不承担责任：</div>
                <div>（1）受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏；</div>
                <div>（2）用户或厚鸟的电脑软件、系统、硬件和通信线路出现故障；</div>
                <div>（3）用户操作不当；</div>
                <div>（4）用户通过非厚鸟授权的方式使用本服务；</div>
                <div>（5）用户使用的程序版本过时、设备的老化，和/或其兼容性问题；</div>
                <div>（6）其他厚鸟无法控制或合理预见的情形。</div>
                <div>12.6 厚鸟依据本协议约定获得处理违法违规内容的权利，该权利不构成厚鸟的义务或承诺，厚鸟不能保证及时发现违法行为或进行相应处理。</div>
                <div>十三、服务的中止或终止</div>
                <div>13.1 如企业书面通知厚鸟不接受本协议或对其的修改，厚鸟有权随时中止或终止向企业提供全部或部分本服务。</div>
                <div>13.2 因不可抗力因素导致企业无法继续使用本服务或厚鸟无法提供本服务的，任何一方均有权随时终止协议。</div>
                <div>13.3 本协议约定的其他中止或终止条件发生或实现的，厚鸟有权随时中止或终止向企业提供全部或部分本服务。</div>
                <div>13.4 如果一方及其债权人或任何其他合法方申请清算、破产、重组、和解或解除或一方资金无法维持公司正常运作；或一方无法赔偿任何应尽债务；或一方的债权人接管一方的经营，则相对方可终止本协议。
                </div>
                <div>13.5 由于企业违反本协议约定，厚鸟依约终止向企业提供本服务后，如企业后续再直接或间接，或以他人名义注册使用本服务的，厚鸟有权直接单方面暂停或终止提供本服务。</div>
                <div>13.6
                    如果企业停止使用本软件及服务，或如本协议或本服务因为任何原因终止的，对于企业的帐号中的全部数据或企业因使用本服务而存储在厚鸟服务器中的数据等任何信息，厚鸟可将该等信息保留或删除，包括服务终止前企业尚未完成的任何数据，厚鸟也没有义务向企业返还任何数据。但法律另有强制性规定的除外。
                </div>
                <div>十四、关于通知</div>
                <div>14.1
                    厚鸟可能会以网页公告、网页提示、电子邮箱、手机短信、QQ、微信、常规的信件传送、企业注册的本服务帐户的管理系统内发送站内信等方式中的一种或多种，向企业送达关于本服务的各种规则、通知、提示等信息，该等信息一经厚鸟采取前述任何一种方式公布或发送，即视为送达，对企业产生约束力。若企业不接受的，请企业书面通知厚鸟，否则视为企业已经接受、同意。
                </div>
                <div>14.2 若企业有事项需要通知厚鸟的，应当按照本服务对外正式公布的联系方式通知厚鸟。</div>
                <div>十五、拒绝担保条款</div>
                <div>用户对厚鸟平台软件的使用承担风险。厚鸟对此不作任何类型的担保，无论明确或隐含的。但厚鸟不对商业性的隐含担保、特定目的和不违反规定的适当担保作限制。厚鸟无法保障服务内容满足用户的要求，也无法担保服务不会中断，对服务的及时性，安全性均不作保证。公司对用户在厚鸟上得到的任何信息服务或交易进程均不作担保。</div>
                <div>十六、其他</div>
                <div>15.1
                    企业使用本软件或服务即视为企业已阅读本协议并接受本协议的约束。厚鸟有权在必要时修改本协议条款。企业可以在相关服务页面查阅最新版本的协议条款。本协议条款变更后，如果企业继续使用厚鸟提供的软件或服务，即视为企业已接受变更后的协议。
                </div>
                <div>15.2 本协议签订地为中华人民共和国北京市大兴区亦庄经济技术开发区。本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。</div>
                <div>15.3 若企业和厚鸟之间发生任何与本协议有关的纠纷或争议，首先应友好协商解决；协商不成的，企业同意将纠纷或争议提交本协议签订地（即北京市大兴区亦庄经济技术开发区）有管辖权的人民法院管辖。
                </div>
                <div>15.4 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。</div>
                <div>15.5 本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。</div>
            </div>
        </div>
    )
}


export default Agreement

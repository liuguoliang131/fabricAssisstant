(self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[]).push([[34],{2034:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(9348),l=n(717),c=n(3109),r=n.n(c),o=n(8066),s=n.n(o),i=n(47),u=n.n(i),m=n(7294),p=n(3042),h=n(3379),v=n.n(h),d=n(6529),f={insert:"head",singleton:!1},b=(v()(d.Z,f),d.Z.locals,n(7809)),g=n(3748),E=n(1850),w=function(){var e=localStorage.getItem("userInfo"),t=JSON.parse(e).userCompanyOut.companyId,n=new Date,c=n.getFullYear().toString(),o=(n.getMonth()+1).toString(),i=1===o.length?"0".concat(o):o,h=(0,m.useState)(i),v=(0,l.Z)(h,2),d=v[0],f=v[1],w=(0,m.useState)(c),y=(0,l.Z)(w,2),x=y[0],N=y[1];(0,m.useEffect)((function(){R(c,i)}),[]);var k=(0,m.useState)([]),S=(0,l.Z)(k,2),Z=S[0],C=S[1],F=(0,m.useState)([]),I=(0,l.Z)(F,2),A=I[0],L=I[1],R=function(){var e=(0,a.Z)(r().mark((function e(n,a){var l,c,o,i,m,p,h;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.Yu)(s()(l=s()(c=s()(o="".concat(E.SF,"?companyId=")).call(o,t,"&date=")).call(c,n,"-")).call(l,a));case 3:(i=e.sent).success?i.model&&(p=[],h=[],u()(m=i.model).call(m,(function(e){p.push(e.customerName),h.push(e.price)})),C(p),L(h)):alert(i.msg),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0,alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),z={grid:{left:0,bottom:0,right:100,containLabel:!0},xAxis:{type:"value",show:!1},yAxis:{type:"category",data:Z,boundaryGap:!1,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},series:[{data:A,type:"bar",label:{show:!0,formatter:function(e){var t=e.data;return"￥ ".concat(t)},position:"right",fontSize:14,color:"#333"},barMinHeight:1,barWidth:30,color:"#7FA9FF",smooth:!1}]};return m.createElement("div",{className:"customer"},m.createElement(p.Z,null,"客户统计"),m.createElement("div",{className:"main",style:{background:"#ffffff",overflow:"hidden"}},m.createElement("div",{className:"customer-content"},m.createElement("div",{className:"customer-search"},m.createElement("div",{className:"title title-black"},"客户消费排行"),m.createElement("div",{className:"customer-searchRight"},m.createElement("div",{className:"select"},m.createElement("select",{onChange:function(e){N(e.target.value),R(e.target.value,d)},value:x},m.createElement("option",{label:"全部",value:""},"全部"),m.createElement("option",{label:"2021",value:"2021"},"2021"),m.createElement("option",{label:"2022",value:"2022"},"2022"),m.createElement("option",{label:"2023",value:"2023"},"2023"),m.createElement("option",{label:"2024",value:"2024"},"2024"),m.createElement("option",{label:"2025",value:"2025"},"2025")),m.createElement("span",null)),m.createElement("div",{className:"select"},m.createElement("select",{onChange:function(e){f(e.target.value),R(x,e.target.value)},value:d},m.createElement("option",{label:"全部",value:""},"全部"),m.createElement("option",{label:"1月",value:"01"},"1月"),m.createElement("option",{label:"2月",value:"02"},"2月"),m.createElement("option",{label:"3月",value:"03"},"3月"),m.createElement("option",{label:"4月",value:"04"},"4月"),m.createElement("option",{label:"5月",value:"05"},"5月"),m.createElement("option",{label:"6月",value:"06"},"6月"),m.createElement("option",{label:"7月",value:"07"},"7月"),m.createElement("option",{label:"8月",value:"08"},"8月"),m.createElement("option",{label:"9月",value:"09"},"9月"),m.createElement("option",{label:"10月",value:"10"},"10月"),m.createElement("option",{label:"11月",value:"11"},"11月"),m.createElement("option",{label:"12月",value:"12"},"12月")),m.createElement("span",null)))),m.createElement("div",{className:"customer-main"},A.length?m.createElement(b.Z,{option:z,style:{width:"100%",height:200+40*A.length}}):m.createElement("div",{className:"noData"},"暂无数据")))))}},6529:function(e,t,n){"use strict";var a=n(3645),l=n.n(a)()((function(e){return e[1]}));l.push([e.id,".customer {\n  width: 100%;\n  height: 100%;\n}\n\n.customer .customer-content {\n  box-sizing: border-box;\n  padding: 0.4rem;\n}\n\n.customer .customer-content .customer-search {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.customer .customer-content .customer-search .customer-searchRight {\n  display: flex;\n  line-height: 0.666667rem;\n}\n\n.customer .customer-content .customer-search .customer-searchRight .select {\n  margin-left: 0.266667rem;\n}\n\n.customer .customer-content .customer-main {\n  height: calc(100vh - 2.666667rem);\n  overflow-x: hidden;\n}",""]),t.Z=l}}]);
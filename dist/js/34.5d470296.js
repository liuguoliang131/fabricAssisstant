(self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[]).push([[34],{2034:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(9348),l=n(717),c=n(3109),r=n.n(c),o=n(8066),s=n.n(o),u=n(47),i=n.n(u),m=n(7294),h=n(3042),p=n(3379),f=n.n(p),v=n(5481),d={insert:"head",singleton:!1},b=(f()(v.Z,d),v.Z.locals,n(7809)),g=n(3748),E=n(1850),w=function(){var e=localStorage.getItem("userInfo"),t=JSON.parse(e).userCompanyOut.companyId,n=new Date,c=n.getFullYear(),o=(n.getMonth()+1).toString(),u=1===o.length?"0".concat(o):o,p=(0,m.useState)(o),f=(0,l.Z)(p,2),v=f[0],d=f[1];(0,m.useEffect)((function(){C(u)}),[]);var w=(0,m.useState)([]),y=(0,l.Z)(w,2),x=y[0],k=y[1],N=(0,m.useState)([]),Z=(0,l.Z)(N,2),S=Z[0],F=Z[1],C=function(){var e=(0,a.Z)(r().mark((function e(n){var a,l,o,u,m,h,p;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.Yu)(s()(a=s()(l=s()(o="".concat(E.SF,"?companyId=")).call(o,t,"&date=")).call(l,c,"-")).call(a,n));case 3:(u=e.sent).success?u.model&&(h=[],p=[],i()(m=u.model).call(m,(function(e){h.push(e.customerName),p.push(e.price)})),k(h),F(p)):alert(u.msg),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0,alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),I={grid:{left:0,bottom:0,containLabel:!0},xAxis:{type:"value",show:!1},yAxis:{type:"category",data:x,boundaryGap:!1,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},series:[{data:S,type:"bar",label:{show:!0,formatter:function(e){var t=e.data;return"￥ ".concat(t)},fontSize:16,color:"#fff"},barWidth:30,color:"#7FA9FF",smooth:!1}]};return m.createElement("div",{className:"customer"},m.createElement(h.Z,null,"客户统计"),m.createElement("div",{className:"main",style:{background:"#ffffff",overflow:"hidden"}},m.createElement("div",{className:"customer-content"},m.createElement("div",{className:"customer-search"},m.createElement("div",{className:"title title-black"},"客户消费排行"),m.createElement("div",{className:"customer-searchRight"},m.createElement("div",null,"2021年"),m.createElement("div",{className:"select"},m.createElement("select",{onChange:function(e){d(e.target.value),C(e.target.value)},value:v},m.createElement("option",{label:"1月",value:"01"},"1月"),m.createElement("option",{label:"2月",value:"02"},"2月"),m.createElement("option",{label:"3月",value:"03"},"3月"),m.createElement("option",{label:"4月",value:"04"},"4月"),m.createElement("option",{label:"5月",value:"05"},"5月"),m.createElement("option",{label:"6月",value:"06"},"6月"),m.createElement("option",{label:"7月",value:"07"},"7月"),m.createElement("option",{label:"8月",value:"08"},"8月"),m.createElement("option",{label:"9月",value:"09"},"9月"),m.createElement("option",{label:"10月",value:"10"},"10月"),m.createElement("option",{label:"11月",value:"11"},"11月"),m.createElement("option",{label:"12月",value:"12"},"12月")),m.createElement("span",null)))),m.createElement("div",{className:"customer-main"},S.length?m.createElement(b.Z,{option:I,style:{width:"100%",height:200+40*S.length}}):m.createElement("div",{className:"noData"},"暂无数据")))))}},5481:function(e,t,n){"use strict";var a=n(3645),l=n.n(a)()((function(e){return e[1]}));l.push([e.id,".customer {\n  width: 100%;\n  height: 100%;\n}\n\n.customer .customer-content {\n  box-sizing: border-box;\n  padding: 0.4rem;\n}\n\n.customer .customer-content .customer-search {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.customer .customer-content .customer-search .customer-searchRight {\n  display: flex;\n  line-height: 0.666667rem;\n}\n\n.customer .customer-content .customer-search .customer-searchRight .select {\n  margin-left: 0.266667rem;\n}\n\n.customer .customer-content .customer-main {\n  height: calc(100vh - 2.666667rem);\n  overflow-x: hidden;\n}",""]),t.Z=l}}]);
(self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[]).push([[748],{1850:function(t,r,n){"use strict";n.d(r,{ym:function(){return e},eV:function(){return i},JR:function(){return o},SF:function(){return u},RI:function(){return s},pM:function(){return c},Yi:function(){return a},Nx:function(){return f},sl:function(){return d},UO:function(){return l},rB:function(){return p},p1:function(){return S},d0:function(){return h}});n(2017).CT;var e="/orderStatistics/login",i="/orderStatistics/orderCategoryCount",o="/orderStatistics/orderMonitor",u="/orderStatistics/customerStatistics",s="/orderStatistics/findStaffRatio",c="/orderStatistics/findStaffProcedureAll",a="/orderStatistics/findStaffRatioAll",f="/orderStatistics/stockStatistics",d="/orderStatistics/revenueTrend",l="/orderStatistics/todayOrderBalancer",p="/orderStatistics/todayOrderIncomer",S="/orderStatistics/todayOrderStatistics",h="/orderStatistics/allEquipmentList"},2017:function(t,r,n){"use strict";n.d(r,{CT:function(){return e}});var e="http://factory.ouryou.cn"},3748:function(t,r,n){"use strict";n.d(r,{Yu:function(){return c},qC:function(){return a}});var e=n(9798),i=n.n(e),o=n(9669),u=n.n(o),s=(n(1850),n(2017));u().defaults.timeout=36e7,u().defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",u().defaults.headers.put["Content-Type"]="application/json;charset=UTF-8",u().defaults.withCredentials=!1,u().defaults.baseURL=s.CT,u().interceptors.response.use((function(t){return t.data}),(function(t){return i().reject("网络异常，请您联系系统管理员!")})),u().interceptors.request.use((function(t){return t}),(function(t){return i().reject(t)}));var c=function(t){return u()({method:"get",url:t})},a=function(t,r){return u()({method:"post",url:t,data:r})}}}]);
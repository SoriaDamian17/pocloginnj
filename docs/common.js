(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{ODzb:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("CcnG"),i=function(){function t(){}return t.ngInjectableDef=r.defineInjectable({factory:function(){return new t},token:t,providedIn:"root"}),t}()},hmTx:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("F/XL"),i=function(){function t(t){this.http=t}return t.prototype.login=function(){return Object(r.a)()},t}()},i4Na:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e("mrSG"),i=e("zRNk"),a={data:null,pending:null,error:null,isFetchCompleted:null};function u(t,n){switch(void 0===t&&(t=a),n.type){case i.a.LOGIN_PENDING:return r.a({},t,{pending:!0});case i.a.LOGIN_FULFILLED:return r.a({},t,{pending:!1,isFetchCompleted:!0,error:!1,data:n.payload});case i.a.LOGIN_ERROR:case i.a.LOGIN_ERROR_AUTH0:return r.a({},t,{pending:!1,isFetchCompleted:!1,error:!0,data:null});case i.a.CLEAR_DATA:return a;default:return t}}},s9mj:function(t,n,e){"use strict";e.d(n,"a",function(){return L});var r=e("mrSG"),i=e("jYNz"),a=e("F/XL"),u=e("67Y/"),o=e("15JJ"),c=e("9Z1F"),s=e("zRNk"),L=function(){function t(t,n){var e=this;this.actions$=t,this.loginService=n,this.getCountries$=this.actions$.pipe(Object(i.d)(s.a.LOGIN_PENDING)).pipe(Object(u.a)(function(t){return t.payload}),Object(o.a)(function(t){return e.loginService.login().pipe(Object(u.a)(function(t){return{type:s.a.LOGIN_FULFILLED,payload:t}}),Object(c.a)(function(t){return Object(a.a)({type:s.a.LOGIN_ERROR,payload:t})}))}))}return r.b([Object(i.b)(),r.d("design:type",Object)],t.prototype,"getCountries$",void 0),t}()},zRNk:function(t,n,e){"use strict";var r;e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i}),function(t){t.LOGIN_PENDING="[LOGIN: PENDING]",t.LOGIN_FULFILLED="[LOGIN:  FULFILLED] Last",t.LOGIN_ERROR="[LOGIN: ERROR]  Last",t.LOGIN_ERROR_AUTH0="[LOGIN: ERROR_AUTH0]  Last",t.CLEAR_DATA="[LOGIN] CLEAR DATA"}(r||(r={}));var i=function(){return function(t){this.payload=t,this.type=r.LOGIN_PENDING}}()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{279:function(t,e,n){"use strict";var r=n(280);r.a.apps.length||r.a.initializeApp({apiKey:"AIzaSyApv1cipu4uBoh1Fz74yV9ek4S4GPS_kEA",authDomain:"fir-pj-f00cf.firebaseapp.com",projectId:"fir-pj-f00cf",storageBucket:"fir-pj-f00cf.appspot.com",messagingSenderId:"647124263227",appId:"1:647124263227:web:8086f0230337f7f709d71e",measurementId:"G-9XTJFXTB75"}),e.a=r.a},294:function(t,e,n){"use strict";n.r(e);var r=n(279),o={data:function(){return{message:"ログインができておりません"}},created:function(){var t=this;r.a.auth().onAuthStateChanged((function(e){e&&(t.message="ログイン済みです")}))}},c=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("ホーム")]),t._v(" "),n("p",[t._v(t._s(t.message))]),t._v(" "),n("NuxtLink",{attrs:{to:"/register"}},[t._v("新規登録")]),t._v(" "),n("br"),t._v(" "),n("NuxtLink",{attrs:{to:"/login"}},[t._v("ログイン")]),t._v(" "),n("br"),t._v(" "),n("NuxtLink",{attrs:{to:"/logout"}},[t._v("ログアウト")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);
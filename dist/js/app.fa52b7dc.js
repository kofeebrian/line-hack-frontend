(function(t){function e(e){for(var s,c,r=e[0],l=e[1],o=e[2],d=0,v=[];d<r.length;d++)c=r[d],i[c]&&v.push(i[c][0]),i[c]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(v.length)v.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},n=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var m=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0dba":function(t,e,a){"use strict";var s=a("5566"),i=a.n(s);i.a},"20ad":function(t,e,a){"use strict";var s=a("9916"),i=a.n(s);i.a},"212d":function(t,e,a){},"3d46":function(t,e,a){},"537d":function(t,e,a){},5566:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=a("1881"),n=a.n(i),c=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen-container"},[a("div",{staticClass:"header-container"},[a("div",{staticClass:"header-icons"},[a("icon-base",{staticClass:"icon",staticStyle:{"margin-right":"24px"},attrs:{"icon-name":"camera",width:"24px",height:"22px"}},[a("icon-camera")],1),a("icon-base",{staticClass:"icon",attrs:{"icon-name":"camera",width:"28px",height:"24px"}},[a("icon-search")],1)],1),a("div",{staticClass:"header-heading mb-4"},[t._v("Explore")]),a("CataList",{attrs:{catas:t.catagories}})],1),a("main",[a("div",{staticClass:"list-container"},[t._m(0),a("ItemHori",{attrs:{items:t.items}})],1),a("div",{staticClass:"list-container"},[t._m(1),a("ItemHori",{attrs:{items:t.items}})],1),a("div",{staticClass:"list-container"},[t._m(2),a("ItemHori",{attrs:{items:t.items}})],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-header"},[a("h2",[t._v("Feature")]),a("a",{attrs:{href:"#"}},[t._v("VIEW ALL ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-header"},[a("h2",[t._v("Trending")]),a("a",{attrs:{href:"#"}},[t._v("VIEW ALL ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-header"},[a("h2",[t._v("Recommend For You")]),a("a",{attrs:{href:"#"}},[t._v("VIEW ALL ")])])}],o=a("2f62"),m=a("11c1"),d=a.n(m);const v="ADD_AMOUNT",u="REMOVE_AMOUNT",p="REMOVE_CART_ITEM";let h={items:[],plants:[],cartItems:[]};const _={id:"",img:"https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"XYZ Flower",price:80,shop:1,rating:4.5,favouriteBy:[],orderedBy:[],reviews:[],promoCode:{CODE:{price:45}}};for(let Pe=0;Pe<20;Pe++)h.items.push({..._,id:d()(),shop:"OK Shop",name:`Shop ${Pe} Flower`});for(let Pe=0;Pe<3;Pe++)h.cartItems.push({..._,id:d()(),shop:"OK Shop",name:`Shop ${Pe} Flower`,amount:1});s["a"].use(o["a"]),window.store=new o["a"].Store({state:h,mutations:{[v](t,{itemId:e,amount:a}){const s=t.cartItems.findIndex(t=>t.id===e);t.cartItems[s].amount+=a},[u](t,{itemId:e,amount:a}){const s=t.cartItems.findIndex(t=>t.id===e);t.cartItems[s].amount-=a},[p](t,{itemId:e}){const a=t.cartItems.findIndex(t=>t.id===e);t.cartItems.splice(a,1)}},getters:{subTotal:t=>{let e=0;return t.cartItems.forEach(t=>{e+=t.price*t.amount}),e}},actions:{add_amount_by_one:(t,e)=>{t.commit(v,e)},remove_amount_by_one:(t,e)=>{t.commit(u,e)},remove_cart_item:(t,e)=>{t.commit(p,e)}}});var C=window.store;function f(){let t={};for(let e in h)t[e]=e;return Object(o["b"])(t)}var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-hori-container"},t._l(t.items,(function(t,e){return a("div",{staticClass:"item-hori-child"},[a("Item",{key:e,attrs:{item:t}})],1)})),0)},b=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-container",on:{click:t.navigateToInfo}},[a("div",{staticClass:"item-img-container"},[a("img",{staticClass:"item-img",attrs:{src:t.item.img}})]),a("div",{staticClass:"item-name"},[t._v(t._s(t.item.name))]),t._m(0),a("div",{staticClass:"item-rating-container lcrbox"},[a("div",{staticClass:"item-rating"},[t._v(t._s(t.item.rating))]),a("i",{staticClass:"fas fa-star ml-1"})]),a("div",{staticClass:"item-price"},[t._v(t._s(t.item.price)+" ฿")])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-shop-container lcrbox"},[a("div",{staticClass:"item-shop-name"},[t._v("OK Shop")])])}],x={name:"Item",store:C,computed:{...f()},props:["item","itemi"],methods:{navigateToInfo:function(){this.$router.push({path:`/items/${this.$props.item.id}`})}}},I=x,w=(a("7a10"),a("0c7c")),E=Object(w["a"])(I,g,k,!1,null,"47bd341c",null),$=E.exports,O={name:"ItemHori",props:["items"],components:{Item:$}},S=O,j=(a("a680"),Object(w["a"])(S,y,b,!1,null,null,null)),M=j.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"catas-list-container"},t._l(t.catas,(function(t,e){return a("div",{staticClass:"catas-list-child"},[a("Cata",{key:e,attrs:{cata:t}})],1)})),0)},H=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cata-container"},[a("div",{staticClass:"cata-img-container"},[a("img",{staticClass:"cata-img",attrs:{src:t.cata.img}})]),a("div",{staticClass:"cata-desc"},[a("div",{staticClass:"cata-name"},[t._v(t._s(t.cata.name))])])])},T=[],N={name:"Cata",props:["cata"]},z=N,P=(a("d259"),Object(w["a"])(z,A,T,!1,null,"39cf2b71",null)),R=P.exports,D={name:"CataList",props:["catas"],components:{Cata:R}},V=D,B=(a("7b6c"),Object(w["a"])(V,L,H,!1,null,"91ef6414",null)),Y=B.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 24 24","aria-labelledby":t.iconName,role:"presentation"}},[a("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),a("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])},U=[],G={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}},K=G,W=(a("8216"),Object(w["a"])(K,F,U,!1,null,"03303fc2",null)),J=W.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("circle",{attrs:{cx:"12",cy:"12",r:"3.2"}}),a("path",{attrs:{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}}),a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},Z=[],q={},Q=Object(w["a"])(q,X,Z,!1,null,null,null),tt=Q.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("path",{attrs:{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}}),a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},at=[],st={},it=Object(w["a"])(st,et,at,!1,null,null,null),nt=it.exports;let ct=[{name:"Rose",img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peach-rose-royalty-free-image-648161008-1548273443.jpg"},{name:"Cactus",img:"https://www.potterybarn.com/pbimgs/rk/images/dp/wcm/201922/0088/faux-potted-mini-cactus-c.jpg"},{name:"Fern",img:"https://www.adairs.com.au/globalassets/imported-assets/homewares/home-republic/home-republic/43817_fishbone/43817_fishbone_zoom_01.jpg"},{name:"Calendula",img:"https://cdn.pixabay.com/photo/2018/07/10/11/11/marigold-3528402__340.jpg"},{name:"Lily",img:"https://www.gardeners.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw68196a61/Articles/Gardening/Hero_Thumbnail/5326-lily-pxhere.jpg"},{name:"Sansevierias",img:"https://realornamentals.com/plant-store/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/r/o/robusta-snake-plant-small-ornamental-plant-sanseveria-robusta-realornamentals.com-web.jpg"}];var rt={name:"ExploreScreen",store:C,computed:{...f()},data(){return{catagories:ct}},components:{ItemHori:M,CataList:Y,IconBase:J,IconCamera:tt,IconSearch:nt}},lt=rt,ot=(a("5b54"),Object(w["a"])(lt,r,l,!1,null,"0b8825a4",null)),mt=ot.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen-container"},[t._m(0),a("div",{staticClass:"items-container"},[t._l(t.cartItems,(function(t,e){return[a("cart-item",{key:e,attrs:{item:t}})]}))],2),a("section",{staticClass:"conclusion-container"},[a("div",{staticClass:"conclusion-detail"},[a("div",{staticClass:"conclusion-text-key"},[t._v("Subtotal")]),a("div",{staticClass:"conclusion-text-value"},[t._v(t._s(t.subtotal+" baht"))])]),t._m(1),a("div",{staticClass:"conclusion-detail"},[a("div",{staticClass:"conclusion-text-key"},[t._v("Total Amount")]),a("div",{staticClass:"conclusion-text-value"},[t._v(t._s(t.subtotal+" baht"))])])]),t._m(2)])},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-container"},[a("div",{staticClass:"header-icons"},[a("span",{staticClass:"material-icons icon"},[t._v("search")])]),a("div",{staticClass:"header-heading mb-4"},[t._v("Shopping Cart")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"conclusion-detail"},[a("div",{staticClass:"conclusion-text-key"},[t._v("Discount Coupouns")]),a("div",{staticClass:"conclusion-text-value material-icons"},[t._v("add")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cta w-100"},[a("button",{staticClass:"btn-checkout"},[t._v("Checkout")])])}],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-img-container"},[a("img",{staticClass:"item-img",attrs:{src:t.item.img}})]),a("div",{staticClass:"item-detail"},[a("div",{staticClass:"item-name"},[t._v(t._s(t.item.name))]),a("div",{staticClass:"item-shop"},[t._v(t._s(t.item.shop))]),a("div",{staticClass:"item-price"},[t._v(t._s(t.item.price+" ฿"))])]),a("div",{staticClass:"item-cta"},[a("div",{staticClass:"item-amount"},[a("span",{staticClass:"material-icons icon",on:{click:t.add_amount_by_one}},[t._v("add_circle")]),a("span",[t._v(t._s(t.item.amount))]),a("span",{staticClass:"material-icons icon",on:{click:t.remove_amount_by_one}},[t._v("remove_circle")])]),a("div",{staticClass:"delete-item"},[a("span",{staticClass:"material-icons",on:{click:t.remove_item}},[t._v("clear")])])])])},pt=[],ht={name:"CartItem",props:["item"],methods:{add_amount_by_one:function(){this.$store.dispatch("add_amount_by_one",{itemId:this.$props.item.id,amount:1})},remove_amount_by_one:function(){this.$store.dispatch("remove_amount_by_one",{itemId:this.$props.item.id,amount:1})},remove_item:function(){window.confirm(`Do you sure to remove this ${this.$props.item.name}?`)&&this.$store.dispatch("remove_cart_item",{itemId:this.$props.item.id})}}},_t=ht,Ct=(a("637e"),Object(w["a"])(_t,ut,pt,!1,null,"738a442c",null)),ft=Ct.exports,yt={name:"ExploreScreen",store:C,computed:{...f(),subtotal(){return C.getters.subTotal},totalAmount(){return 1}},components:{IconBase:J,IconSearch:nt,CartItem:ft}},bt=yt,gt=(a("0dba"),Object(w["a"])(bt,dt,vt,!1,null,"0cc03132",null)),kt=gt.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"checkout-screen-1"},[a("div",{staticClass:"topbar lcrbox"},[a("div",[t._v("<")]),a("div",{staticClass:"topbar-title"},[t._v("CHECKOUT")])]),a("div",{staticClass:"body-container"},[a("div",{staticClass:"payment-step-container"},[a("div",{staticClass:"payment-step active"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("PAYMENT")])]),a("div",{staticClass:"payment-step"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("SHIPPING")])]),a("div",{staticClass:"payment-step"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("ORDER")])])]),a("div",{staticClass:"payment-detail-block"},[a("div",{staticClass:"payment-detail-head"},[t._v("CONTACT")]),a("div",{staticClass:"lrbox payment-detail-container"},[a("div",{staticClass:"payment-detail-title"},[t._v("FIRST NAME")]),a("div",{staticClass:"payment-detail-value"},[t._v("Chomtana")])]),a("div",{staticClass:"lrbox payment-detail-container"},[a("div",{staticClass:"payment-detail-title"},[t._v("LAST NAME")]),a("div",{staticClass:"payment-detail-value"},[t._v("Chanjaraswichai")])])]),a("div",{staticClass:"payment-detail-block"},[a("div",{staticClass:"payment-detail-head"},[t._v("ADDRESS")]),a("div",{staticClass:"lrbox payment-detail-container"},[a("div",{staticClass:"payment-detail-title"},[t._v("ADDRESS LINE 1")]),a("div",{staticClass:"payment-detail-value"},[t._v("blah")])]),a("div",{staticClass:"lrbox payment-detail-container"},[a("div",{staticClass:"payment-detail-title"},[t._v("ADDRESS LINE 2")]),a("div",{staticClass:"payment-detail-value"},[t._v("blah blah")])])]),a("router-link",{staticClass:"payment-next-btn",attrs:{to:"/checkout/2"}},[t._v("CONTINUE")])],1)])])},It=[],wt={name:"CheckoutScreen1",store:C,computed:{...f()}},Et=wt,$t=(a("9087"),Object(w["a"])(Et,xt,It,!1,null,"9c2091b0",null)),Ot=$t.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout-screen-1"},[t._m(0),a("div",{staticClass:"body-container"},[t._m(1),t._m(2),a("div",{staticClass:"payment-block"},[t._m(3),t._l(t.cartItems,(function(t,e){return[a("cart-item-view",{key:e,attrs:{item:t}})]}))],2),a("div",{staticClass:"payment-block"},[t._m(4),a("div",{staticClass:"lrbox"},[a("div",[t._v("Thai post (2 days)")]),a("div",[t._v(t._s(t.postCost)+" Baht")])])]),a("div",{staticClass:"payment-summary"},[a("div",{staticClass:"payment-summary-item"},[a("div",[t._v(" ")]),a("div",{staticClass:"payment-summary-title"},[t._v("Item cost ("+t._s(t.cartItems.length)+")")]),a("div",{staticClass:"payment-summary-value"},[t._v(t._s(t.itemCost)+" Baht")])]),a("div",{staticClass:"payment-summary-item",staticStyle:{"font-weight":"bold"}},[a("div",[t._v(" ")]),a("div",{staticClass:"payment-summary-title"},[t._v("Total amount")]),a("div",{staticClass:"payment-summary-value"},[t._v(t._s(t.itemCost+t.postCost)+" Baht")])])]),a("router-link",{staticClass:"payment-next-btn",attrs:{to:"/checkout/3"}},[t._v("PAY NOW")])],1)])},jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar lcrbox"},[a("div",[t._v("<")]),a("div",{staticClass:"topbar-title"},[t._v("CHECKOUT")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-step-container"},[a("div",{staticClass:"payment-step active"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("PAYMENT")])]),a("div",{staticClass:"payment-step active"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("SHIPPING")])]),a("div",{staticClass:"payment-step"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("ORDER")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-block"},[a("div",{staticClass:"payment-block-head lrbox"},[a("div",{staticClass:"payment-block-head-text"},[t._v("SHIPPING TO")]),a("div",{staticClass:"payment-block-head-edit"},[a("span",{staticClass:"material-icons"},[t._v("edit")])])]),a("div",[t._v("บ้านของ Chomtana")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-block-head lrbox"},[a("div",{staticClass:"payment-block-head-text"},[t._v("ORDER")]),a("div",{staticClass:"payment-block-head-edit"},[a("span",{staticClass:"material-icons"},[t._v("edit")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-block-head lrbox"},[a("div",{staticClass:"payment-block-head-text"},[t._v("DELIVERY")]),a("div",{staticClass:"payment-block-head-edit"},[a("span",{staticClass:"material-icons"},[t._v("edit")])])])}],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-img-container"},[a("img",{staticClass:"item-img",attrs:{src:t.item.img}})]),a("div",{staticClass:"item-detail"},[a("div",{staticClass:"item-name"},[t._v(t._s(t.item.name))]),a("div",{staticClass:"item-shop"},[t._v(t._s(t.item.shop))]),t._e()]),a("div",{staticClass:"item-cta"},[a("div",{staticClass:"item-total-price"},[t._v(t._s(t.item.price*t.item.amount)+" Baht")])])])},Lt=[],Ht={name:"CartItemView",props:["item"],methods:{add_amount_by_one:function(){this.$store.dispatch("add_amount_by_one",{itemId:this.$props.item.id,amount:1})},remove_amount_by_one:function(){this.$store.dispatch("remove_amount_by_one",{itemId:this.$props.item.id,amount:1})},remove_item:function(){this.$store.dispatch("remove_cart_item",{itemId:this.$props.item.id})}}},At=Ht,Tt=(a("20ad"),Object(w["a"])(At,Mt,Lt,!1,null,"597e4458",null)),Nt=Tt.exports,zt={name:"CheckoutScreen1",store:C,computed:{...f(),itemCost(){return this.cartItems.reduce((t,e)=>t+e.price*e.amount,0)}},components:{CartItemView:Nt},data(){return{postCost:30}},methods:{}},Pt=zt,Rt=(a("b80f"),Object(w["a"])(Pt,St,jt,!1,null,"7240082e",null)),Dt=Rt.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout-screen-1"},[t._m(0),a("div",{staticClass:"body-container"},[t._m(1),t._m(2),a("div",{staticClass:"payment-block"},[t._m(3),t._l(t.cartItems,(function(t,e){return[a("cart-item-view",{key:e,attrs:{item:t}})]}))],2),t._m(4),a("div",{staticClass:"payment-summary"},[a("div",{staticClass:"payment-summary-item"},[a("div",[t._v(" ")]),a("div",{staticClass:"payment-summary-title"},[t._v("Item cost ("+t._s(t.cartItems.length)+")")]),a("div",{staticClass:"payment-summary-value"},[t._v(t._s(t.itemCost)+" Baht")])])]),a("router-link",{staticClass:"payment-next-btn",attrs:{to:"/checkout/3"}},[t._v("PAY NOW")])],1)])},Bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar lcrbox"},[a("div",[t._v("<")]),a("div",{staticClass:"topbar-title"},[t._v("CHECKOUT")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-step-container"},[a("div",{staticClass:"payment-step active"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("PAYMENT")])]),a("div",{staticClass:"payment-step active"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("SHIPPING")])]),a("div",{staticClass:"payment-step"},[a("div",{staticClass:"payment-check-container"},[a("div",{staticClass:"payment-line payment-line-left"}),a("div",{staticClass:"payment-check"},[a("span",{staticClass:"material-icons"},[t._v("check")])]),a("div",{staticClass:"payment-line payment-line-right"})]),a("div",{staticClass:"payment-text"},[t._v("ORDER")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-block"},[a("div",{staticClass:"payment-block-head lrbox"},[a("div",{staticClass:"payment-block-head-text"},[t._v("SHIPPING TO")]),a("div",{staticClass:"payment-block-head-edit"},[a("span",{staticClass:"material-icons"},[t._v("edit")])])]),a("div",[t._v("บ้านของ Chomtana")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-block-head lrbox"},[a("div",{staticClass:"payment-block-head-text"},[t._v("ORDER")]),a("div",{staticClass:"payment-block-head-edit"},[a("span",{staticClass:"material-icons"},[t._v("edit")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-block"},[a("div",{staticClass:"payment-block-head lrbox"},[a("div",{staticClass:"payment-block-head-text"},[t._v("DELIVERY")]),a("div",{staticClass:"payment-block-head-edit"},[a("span",{staticClass:"material-icons"},[t._v("edit")])])]),a("div",{staticClass:"lrbox"},[a("div",[t._v("Thai post (2 days)")]),a("div",[t._v("30 Baht")])])])}],Yt={name:"CheckoutScreen1",store:C,computed:{...f(),itemCost(){return this.cartItems.reduce((t,e)=>t+e.price*e.amount,0)}},components:{CartItemView:Nt},methods:{}},Ft=Yt,Ut=(a("a508"),Object(w["a"])(Ft,Vt,Bt,!1,null,"653135cf",null)),Gt=Ut.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-info-screen"},[t.currentItem?[a("div",{staticClass:"topbar lcrbox"},[a("div",{staticClass:"material-icons"},[t._v("arrow_back_ios")]),a("div",{staticClass:"topbar-title"},[t._v(t._s(t.currentItem&&t.currentItem.name))])]),a("div",{staticClass:"img-section"},[a("div",{staticClass:"img-container"},[a("img",{staticClass:"img",attrs:{src:t.currentItem.img}})])]),a("div",{staticClass:"detail-section lrbox"},[a("div",{staticClass:"description"},[a("div",{staticClass:"item-name"},[t._v(t._s(t.currentItem.name))]),a("div",{staticClass:"item-rating"},[a("div",{staticClass:"stars"},t._l(Math.round(t.currentItem.rating),(function(e){return a("span",{staticClass:"material-icons"},[t._v("star")])})),0),a("div",{staticClass:"rating"},[t._v(t._s(t.currentItem.rating)+"/5")]),a("div",{staticClass:"status"},[t._v("In Stock")])]),a("div",{staticClass:"item-shop"},[t._v(t._s(t.currentItem.shop))])]),a("div",{staticClass:"description-cta"},[t._m(0),a("div",{staticClass:"item-price"},[t._v(t._s(t.currentItem.price)+" Baht           ")])]),a("div",{staticClass:"cta"})]),a("div",{staticClass:"information-section"},[a("div",{staticClass:"navigate"},t._l(t.links,(function(e){return a("div",{class:{active:t.isActive(e.name)},on:{click:function(a){return t.setActive(e.name)}}},[t._v(t._s(e.name))])})),0),t._m(1),t._m(2)])]:[t._m(3)]],2)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icons"},[a("span",{staticClass:"material-icons favorite-icon"},[t._v("favorite_border")]),a("span",{staticClass:"material-icons share-icon"},[t._v("share")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-to lrbox"},[a("button",{staticClass:"add-to-wishlist flex-grow"},[t._v("Add to wishlist")]),a("button",{staticClass:"add-to-cart flex-grow"},[t._v("ADD TO CART")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar lcrbox"},[a("div",{staticClass:"material-icons"},[t._v("arrow_back_ios")]),a("div",{staticClass:"topbar-title"},[t._v("Not found")])])}],Jt={name:"ItemInfoScreen",store:C,computed:{...f(),currentItem:function(){return this.$store.state.items[0]}},components:{},methods:{isActive:function(t){return t===this.activeLink},setActive:function(t){this.activeLink=t}},data(){return{isFound:null,activeLink:"Description",links:[{name:"Description"},{name:"Information"},{name:"Seller"},{name:"Review"}]}}},Xt=Jt,Zt=(a("fee0"),Object(w["a"])(Xt,Kt,Wt,!1,null,"eb240444",null)),qt=Zt.exports;window.router=new c["a"]({mode:"history",base:"/",routes:[{path:"/",component:mt},{path:"/cart",component:kt},{path:"/checkout/1",component:Ot},{path:"/checkout/2",component:Dt},{path:"/checkout/3",component:Gt},{path:"/items/:itemId",component:qt}]});var Qt=window.router,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("NavMobile")],1)},ee=[],ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-container"},t._l(t.list,(function(e){return a("router-link",{key:e.name,staticClass:"nav-item",attrs:{to:e.href},on:{click:function(a){return t.setActive(e.name)}}},[a("icon-base",{attrs:{"icon-name":e.name,width:"24px",height:"24px"}},[a(e.icon,{tag:"component"})],1)],1)})),1)},se=[],ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),a("path",{attrs:{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"}})])},ne=[],ce={},re=Object(w["a"])(ce,ie,ne,!1,null,null,null),le=re.exports,oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),a("path",{attrs:{d:"M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"}})])},me=[],de={},ve=Object(w["a"])(de,oe,me,!1,null,null,null),ue=ve.exports,pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),a("path",{attrs:{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}})])},he=[],_e={},Ce=Object(w["a"])(_e,pe,he,!1,null,null,null),fe=Ce.exports,ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),a("path",{attrs:{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}})])},be=[],ge={},ke=Object(w["a"])(ge,ye,be,!1,null,null,null),xe=ke.exports,Ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",[a("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),a("path",{attrs:{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}})])},we=[],Ee={},$e=Object(w["a"])(Ee,Ie,we,!1,null,null,null),Oe=$e.exports;let Se=[{name:"home",icon:le,href:"/"},{name:"favorite",icon:fe,href:"#"},{name:"cart",icon:Oe,href:"/cart"},{name:"shop",icon:ue,href:"/explore"},{name:"profile",icon:xe,href:"#"}];var je={name:"NavMobile",data(){return{list:Se}},components:{IconBase:J,IconHome:le,IconStore:ue},methods:{}},Me=je,Le=(a("f5b1"),Object(w["a"])(Me,ae,se,!1,null,"696e8a78",null)),He=Le.exports,Ae={name:"App",props:["title"],components:{NavMobile:He}},Te=Ae,Ne=(a("5c0b"),Object(w["a"])(Te,te,ee,!1,null,null,null)),ze=Ne.exports;s["a"].use(c["a"]),s["a"].use(n.a),s["a"].config.productionTip=!1,window.vm=new s["a"]({render:t=>t(ze),router:Qt,store:C}).$mount("#app"),setInterval(()=>{window.vm.$forceUpdate()},500)},"5b54":function(t,e,a){"use strict";var s=a("537d"),i=a.n(s);i.a},"5c0b":function(t,e,a){"use strict";var s=a("ea9a"),i=a.n(s);i.a},"607d":function(t,e,a){},"637e":function(t,e,a){"use strict";var s=a("3d46"),i=a.n(s);i.a},7465:function(t,e,a){},"7a10":function(t,e,a){"use strict";var s=a("b8ec"),i=a.n(s);i.a},"7b6c":function(t,e,a){"use strict";var s=a("7465"),i=a.n(s);i.a},8216:function(t,e,a){"use strict";var s=a("bab5"),i=a.n(s);i.a},"8f14":function(t,e,a){},9087:function(t,e,a){"use strict";var s=a("c85d"),i=a.n(s);i.a},9916:function(t,e,a){},a508:function(t,e,a){"use strict";var s=a("bb03"),i=a.n(s);i.a},a680:function(t,e,a){"use strict";var s=a("bdf2"),i=a.n(s);i.a},b80f:function(t,e,a){"use strict";var s=a("8f14"),i=a.n(s);i.a},b8ec:function(t,e,a){},bab5:function(t,e,a){},bb03:function(t,e,a){},bdf2:function(t,e,a){},bf65:function(t,e,a){},c85d:function(t,e,a){},d259:function(t,e,a){"use strict";var s=a("bf65"),i=a.n(s);i.a},ea9a:function(t,e,a){},f5b1:function(t,e,a){"use strict";var s=a("607d"),i=a.n(s);i.a},fee0:function(t,e,a){"use strict";var s=a("212d"),i=a.n(s);i.a}});
//# sourceMappingURL=app.fa52b7dc.js.map
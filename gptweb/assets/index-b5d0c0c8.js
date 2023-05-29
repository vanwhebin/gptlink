import{d as K,r as n,b as ee,B as te,D as U,E as g,H as l,J as se,C as u,F as e,G as i,_ as V,aq as ae,P as I,a8 as A,a3 as c,S as q,K as W,aL as v,ac as oe,Y as le,al as ne,a7 as ie,aI as y,aM as de,af as re,aN as ce,a9 as C,a4 as D,T as ue,an as pe,Z as xe,$ as me,ar as _e,ap as J,am as ve,U as ge}from"./index-4f5d7f8d.js";import{g as fe}from"./index-31c42854.js";import{H as ye}from"./index-b0022267.js";import{N as he}from"./InputGroup-06ae9adf.js";const we={class:"bg-white w-11/12 sm:w-96 pb-6 rounded-lg"},be={class:"text-xl text-[#4f555e] dark:text-white"},ke=e("div",{class:"text-lg text-center py-2"}," 充值记录 ",-1),Ie={class:"py-2 px-2 w-full"},$e={class:"overflow-x-auto"},Be={class:"inline-block min-w-full py-2 align-middle"},Ce={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5"},Se={class:"w-full divide-y divide-gray-300"},Oe=e("thead",{class:"bg-black"},[e("tr",null,[e("th",{scope:"col",class:"whitespace-nowrap text-center py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"}," 名称 "),e("th",{scope:"col",class:"whitespace-nowrap text-center px-3 py-3.5 text-left text-sm font-semibold text-white"}," 问答机会 "),e("th",{scope:"col",class:"whitespace-nowrap text-center px-3 py-3.5 text-left text-sm font-semibold text-white"}," 日期 ")])],-1),Re={class:"divide-y divide-gray-200 bg-white"},Me={class:"py-4 pl-4 pr-3 text-xs text-center font-medium text-gray-900 align-middle"},Ne={class:"px-3 py-4 text-xs text-center text-gray-500 align-middle"},Le={class:"px-3 py-4 text-xs text-center text-gray-500 align-middle"},Ue=K({__name:"Bill",props:{visible:{type:Boolean}},emits:["update:visible"],setup(f,{emit:h}){const p=f,w=n([]),d=ee({get(){return p.visible},set(x){h("update:visible",x)}});te(()=>d.value,()=>{d.value&&b()});const b=async()=>{const x=await v.getUserRecord();w.value=x};return(x,r)=>(u(),U(l(W),{show:l(d),"onUpdate:show":r[1]||(r[1]=o=>se(d)?d.value=o:null),"auto-focus":!1},{default:g(()=>[e("div",we,[i(l(ae),{tooltip:"关闭",class:"absolute top-0 right-0",onClick:r[0]||(r[0]=o=>d.value=!1)},{default:g(()=>[e("span",be,[i(l(V),{icon:"material-symbols:close"})])]),_:1}),ke,e("div",Ie,[e("div",$e,[e("div",Be,[e("div",Ce,[e("table",Se,[Oe,e("tbody",Re,[(u(!0),I(q,null,A(w.value,o=>(u(),I("tr",{key:o.id},[e("td",Me,c(o.package_name),1),e("td",Ne," +"+c(o.num===-1?`${o.expired_day}天`:`${o.num}次`),1),e("td",Le,c(o.created_at),1)]))),128))])])])])])])])]),_:1},8,["show"]))}}),S=f=>(xe("data-v-3bb318ef"),f=f(),me(),f),We={class:"bg-white h-page xl:pt-10"},Ee={class:"mx-auto max-w-7xl py-12 pt-2 px-6"},Pe={class:"sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 sm:max-w-none xl:max-w-none xl:grid-cols-4 flex flex-wrap justify-between xs:block"},Te={class:"p-4 text-center sm:p-6"},De={class:"text-lg font-medium leading-6 text-gray-900 h-12"},Je={class:"mt-4 sm:mt-8"},Ke={class:"font-bold tracking-tight text-gray-900 text-2xl sm:text-4xl"},Ve=S(()=>e("span",{class:"text-base font-medium text-gray-500"},"元",-1)),Ae={class:"text-sm h-6 text-red-500"},qe=["href","onClick"],Ge={class:"my-6"},Qe={class:"px-6 pt-6 pb-8"},ze={class:"text-sm font-medium text-gray-900 flex items-center justify-between"},He={class:"flex items-center"},je=S(()=>e("ul",{role:"list",class:"mt-6 space-y-4"},[e("li",{class:"flex space-x-3"}," 1.账户充值仅限微信在线支付方式，充值金额实时到账 "),e("li",{class:"flex space-x-3"}," 2.账户有效次数自充值日起至用完为止 ")],-1)),Fe={class:"bg-white w-5/6 xl:w-2/5 sm:w-3/5 pb-6 rounded-lg"},Ye=S(()=>e("div",{class:"mx-auto text-2xl max-w-5xl pt-6 sm:px-6 lg:px-8 text-center"}," 套餐已到账 ",-1)),Ze={class:"text-xl max-w-5xl py-6 sm:px-6 lg:px-8 text-center"},Xe={class:"text-center"},et={class:"bg-white w-5/6 sm:w-2/5 pb-20 rounded-lg"},tt=S(()=>e("div",{class:"text-2xl max-w-5xl pt-6 sm:px-6 lg:px-8 text-center"}," 微信扫码 ",-1)),st={class:"text-xl max-w-5xl py-6 sm:px-6 lg:4px-8 text-center"},at=K({__name:"index",setup(f){const h=n(null),p=n(!0),w=n([]),d=n(null),b=ue(),{query:x}=pe(),r=oe(),{isMobile:o}=le();let m=null;const k=n(""),O=n(null),$=n(!1),B=n(!1),R=n(null),M=n(!1),E=()=>/MicroMessenger/i.test(window.navigator.userAgent),G=async()=>{try{const s=await v.getPackageList();w.value=s}catch{}},N=()=>{y.set("levelDomainBusinessId",null),window.history.length>2?b.back():b.replace({name:"Root"})},P=()=>{m&&(m.destroy(),m=null)},T=s=>{if(window.WeixinJSBridge&&s){const{appId:a,timeStamp:t,nonceStr:_,signType:F,paySign:Y}=s,Z={appId:a,timeStamp:t,nonceStr:_,signType:F,paySign:Y,package:s.package};window.WeixinJSBridge.invoke("getBrandWCPayRequest",Z,X=>{X.err_msg==="get_brand_wcpay_request:ok"&&(r.success("套餐购买成功",{duration:600}),setTimeout(()=>{N()},1e3)),p.value=!0,P()})}},L=()=>{B.value=!1,clearInterval(h.value),h.value=null},Q=async s=>{h.value=setInterval(async()=>{(await v.getOrderStatus({id:s})).status===2&&(L(),r.success("套餐购买成功",{duration:600}),setTimeout(()=>{N()},1e3))},1e3*2)},z=async s=>{if(p.value){p.value=!1,m=r.loading("支付中...",{duration:0}),d.value=s;const a=y.get("userKeyOpenId");try{const t=await v.createOrder({package_id:s.id,channel:"wechat",pay_type:E()&&o.value?"JSAPI":"NATIVE",user_id:a||"",platform:1,business_id:y.get("levelDomainBusinessId")}),_=await v.orderPay({id:t.id});E()&&o.value?typeof window.WeixinJSBridge>"u"?document.addEventListener&&document.addEventListener("WeixinJSBridgeReady",T(_.data)):T(_.data):_.err_code||(R.value=_,B.value=!0,P(),Q(t.id))}catch{p.value=!0,m&&(m.destroy(),m=null)}}else setTimeout(()=>{p.value=!0},400)};ne(()=>{L()});const H=async()=>{if(!k.value)return r.error("请先输入正确兑换码");try{const s=await v.cdkExchange({cdk:k.value});s.err_code||(O.value=s,$.value=!0)}catch{}},j=()=>{$.value=!1,k.value=""};return ie(async()=>{if(x.businessid){y.set("levelDomainBusinessId",x.businessid),b.replace({path:"/redirect/combo"});return}G();const s=fe("code");if(!(de("userKeyOpenId")||y.get("userKeyOpenId"))&&s)try{const t=await v.getWechatOpenId({code:s,type:re()&&o.value?"weixin":"weixinweb"});y.set("userKeyOpenId",t.user),ce("userKeyOpenId",t.user)}catch{}}),(s,a)=>(u(),I("div",We,[i(l(ye),{"custom-back":N,title:"套餐"}),e("div",Ee,[e("div",Pe,[(u(!0),I(q,null,A(w.value,t=>(u(),I("div",{key:t.id,class:"divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm w-48-100 sm:w-auto mb-4 sm:mb-0"},[e("div",Te,[e("h2",De,c(t.name),1),e("p",Je,[e("span",Ke,c(t.price),1),C(" "+c(" ")+" "),Ve]),e("div",Ae,c(t.identity===2?"开发者专享":""),1),e("a",{href:t.href,class:"mt-2 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900",onClick:_=>z(t)}," 购买 ",8,qe)])]))),128))]),e("div",Ge,[i(l(he),null,{default:g(()=>[i(l(_e),{value:k.value,"onUpdate:value":a[0]||(a[0]=t=>k.value=t),style:{width:"100%"},placeholder:"请输入正确的兑换码",size:"large"},null,8,["value"]),i(l(J),{type:"primary",class:"border-gray-800 !bg-gray-800",size:"large",onClick:H},{default:g(()=>[C(" 立即兑换 ")]),_:1})]),_:1})]),e("div",Qe,[e("h3",ze,[e("div",He,[i(l(V),{icon:"material-symbols:book-outline-rounded",class:"mr-2"}),C("充值说明 ")]),e("div",{class:"cursor-pointer text-gray-500",onClick:a[1]||(a[1]=t=>M.value=!0)}," 充值记录 > ")]),je])]),i(Ue,{visible:M.value,"onUpdate:visible":a[2]||(a[2]=t=>M.value=t)},null,8,["visible"]),O.value?(u(),U(l(W),{key:0,show:$.value,"onUpdate:show":a[3]||(a[3]=t=>$.value=t),"auto-focus":!1},{default:g(()=>[e("div",Fe,[Ye,e("div",Ze,c(O.value.name),1),e("div",Xe,[i(l(J),{type:"primary",style:{width:"90px"},strong:"",color:"#1f2937",onClick:j},{default:g(()=>[C(" 确定 ")]),_:1})])])]),_:1},8,["show"])):D("",!0),R.value?(u(),U(l(W),{key:1,show:B.value,"onUpdate:show":a[4]||(a[4]=t=>B.value=t),"auto-focus":!1,"on-after-leave":L},{default:g(()=>[e("div",et,[tt,e("div",st," ￥ "+c(d.value.price),1),i(ve,{class:"mx-auto",value:R.value.data.code_url,size:220},null,8,["value"])])]),_:1},8,["show"])):D("",!0)]))}});const dt=ge(at,[["__scopeId","data-v-3bb318ef"]]);export{dt as default};

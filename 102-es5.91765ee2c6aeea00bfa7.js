(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{W9p6:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_toast",(function(){return b}));var i=o("mrSG"),r=o("ae0+"),n=(o("ttJE"),o("wSPg"),o("FX7f")),a=o("CTpc"),s=o("Jky2"),c=o("zwjO"),d=function(t,e){var o=Object(n.a)(),i=Object(n.a)(),r=t.host||t,a=t.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":i.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var s=Math.floor(r.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return o.addElement(r).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(i)},l=function(t,e){var o=Object(n.a)(),i=Object(n.a)(),r=t.host||t,a=t.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":i.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return o.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)},u=function(t,e){var o=Object(n.a)(),i=Object(n.a)(),r=t.host||t,a=t.querySelector(".toast-wrapper");switch(i.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",i.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(r.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",i.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",i.fromTo("opacity",.01,1)}return o.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(i)},p=function(t){var e=Object(n.a)(),o=Object(n.a)(),i=t.host||t,r=t.querySelector(".toast-wrapper");return o.addElement(r).fromTo("opacity",.99,0),e.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},b=function(){function t(t){Object(r.l)(this,t),this.presented=!1,this.mode=Object(r.d)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,Object(a.e)(this.el),this.didPresent=Object(r.e)(this,"ionToastDidPresent",7),this.willPresent=Object(r.e)(this,"ionToastWillPresent",7),this.willDismiss=Object(r.e)(this,"ionToastWillDismiss",7),this.didDismiss=Object(r.e)(this,"ionToastDidDismiss",7)}return t.prototype.present=function(){return Object(i.b)(this,void 0,void 0,(function(){var t=this;return Object(i.e)(this,(function(e){switch(e.label){case 0:return[4,Object(a.f)(this,"toastEnter",d,u,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return t.dismiss(void 0,"timeout")}),this.duration)),[2]}}))}))},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.g)(this,t,e,"toastLeave",l,p,this.position)},t.prototype.onDidDismiss=function(){return Object(a.h)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(a.h)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this,e=this.buttons?this.buttons.map((function(t){return"string"==typeof t?{text:t}:t})):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e},t.prototype.buttonClick=function(t){return Object(i.b)(this,void 0,void 0,(function(){var e;return Object(i.e)(this,(function(o){switch(o.label){case 0:return e=t.role,Object(a.j)(e)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return o.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}}))}))},t.prototype.callButtonHandler=function(t){return Object(i.b)(this,void 0,void 0,(function(){var e;return Object(i.e)(this,(function(o){switch(o.label){case 0:if(!t||!t.handler)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Object(a.p)(t.handler)];case 2:return!1===o.sent()?[2,!1]:[3,4];case 3:return e=o.sent(),console.error(e),[3,4];case 4:return[2,!0]}}))}))},t.prototype.renderButtons=function(t,e){var o,i=this;if(0!==t.length){var n=Object(r.d)(this),a=((o={"toast-button-group":!0})["toast-button-group-"+e]=!0,o);return Object(r.i)("div",{class:a},t.map((function(t){return Object(r.i)("button",{type:"button",class:h(t),tabIndex:0,onClick:function(){return i.buttonClick(t)}},Object(r.i)("div",{class:"toast-button-inner"},t.icon&&Object(r.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===n&&Object(r.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}},t.prototype.render=function(){var t,e,o=this.getButtons(),i=o.filter((function(t){return"start"===t.side})),n=o.filter((function(t){return"start"!==t.side})),a=Object(r.d)(this),d=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(r.i)(r.a,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign((e={},e[a]=!0,e),Object(s.a)(this.color)),Object(s.b)(this.cssClass)),{"toast-translucent":this.translucent})},Object(r.i)("div",{class:d},Object(r.i)("div",{class:"toast-container"},this.renderButtons(i,"start"),Object(r.i)("div",{class:"toast-content"},void 0!==this.header&&Object(r.i)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(r.i)("div",{class:"toast-message",innerHTML:Object(c.a)(this.message)})),this.renderButtons(n,"end"))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.activated{opacity:.4}@media (any-hover:hover){.toast-button:hover{opacity:.6}}"},enumerable:!0,configurable:!0}),t}(),h=function(t){var e;return Object.assign(((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,e["ion-focusable"]=!0,e["ion-activatable"]=!0,e),Object(s.b)(t.cssClass))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{pQ3O:function(t,n,e){"use strict";e.r(n);var l=e("8Y7J");class i{}var s=e("pMnS"),o=e("oBZk"),r=e("ZZ/e"),u=e("s7LF"),a=e("SVse"),c=(e("mrSG"),function(t){return t[t.ing=0]="ing",t[t.pause=1]="pause",t[t.stop=2]="stop",t[t.done=3]="done",t}({}));let d=(()=>class{constructor(t){this.ngZone=t,this.fns=[],this.commands=[],this.ing=!1}start(){!0!==this.ing&&(this.ing=!0,this.nextTime=+new Date,this.ngZone.runOutsideAngular(()=>{this.process()}))}process(){for(;this.commands.length;)this.commands.shift()();let t=+new Date-this.nextTime;const n=1+Math.floor(t/100);t=100-t%100,this.nextTime+=100*n;for(let e=0,l=this.fns.length;e<l;e+=2){let t=this.fns[e+1];if(0===t)this.fns[e](n);else{t+=2*n-1;const l=Math.floor(t/20);l>0&&this.fns[e](l),this.fns[e+1]=t%20+1}}this.ing&&setTimeout(()=>this.process(),t)}add(t,n){return this.commands.push(()=>{this.fns.push(t),this.fns.push(1e3===n?1:0),this.ing=!0}),this}remove(t){return this.commands.push(()=>{const n=this.fns.indexOf(t);-1!==n&&this.fns.splice(n,2),this.ing=this.fns.length>0}),this}})(),h=(()=>{let t=class{constructor(t){this.locale=t,this.demand=!1,this.leftTime=0,this.format="HH:mm:ss",this.timezone="+0000",this.formatDate=({date:t,formatStr:n,timezone:e})=>Object(a.t)(new Date(t),n,this.locale,e||this.timezone||"+0000")}};return t.ngInjectableDef=Object(l.Qb)({factory:function(){return new t(Object(l.Rb)(l.s))},token:t,providedIn:"root"}),t})(),b=(()=>class{constructor(t,n,e,i,s){this.locale=t,this.timer=n,this.defCog=e,this.cdr=i,this.ngZone=s,this.frequency=1e3,this._notify={},this._left=0,this.status=c.ing,this.isDestroy=!1,this.i={},this.event=new l.m}get left(){return this._left}begin(){this.status=c.ing,this.callEvent("start")}restart(){this.status!==c.stop&&this.destroy(),this.init(),this.callEvent("restart")}stop(){this.status!==c.stop&&(this.status=c.stop,this.destroy(),this.callEvent("stop"))}pause(){this.status!==c.stop&&this.status!==c.pause&&(this.status=c.pause,this.callEvent("pause"))}resume(){this.status!==c.stop&&this.status===c.pause&&(this.status=c.ing,this.callEvent("resume"))}callEvent(t){this.event.emit({action:t,left:this._left,status:this.status,text:this.i.text})}init(){const{locale:t,defCog:n}=this,e=this.config=Object.assign({},new h(t),n,this.config),l=this.frequency=~e.format.indexOf("S")?100:1e3;this.status=e.demand?c.pause:c.ing,this.getLeft();const i=this.reflow;this.reflow=(t=0,n=!1)=>i.apply(this,[t,n]),Array.isArray(e.notify)&&e.notify.forEach(t=>{if(t<1)throw new Error("The notify config must be a positive integer.");t*=1e3,this._notify[t-=t%l]=!0}),this.timer.add(this.reflow,l).start(),this.reflow(0,!0)}destroy(){return this.timer.remove(this.reflow),this}reflow(t=0,n=!1){if(this.isDestroy)return;const{status:e,config:l,_notify:i}=this;if(!n&&e!==c.ing)return;const s=this._left=this._left-this.frequency*t;this.i={value:s,text:l.formatDate({date:s,formatStr:l.format,timezone:l.timezone})},"function"==typeof l.prettyText&&(this.i.text=l.prettyText(this.i.text)),this.cdr.detectChanges(),(0===l.notify||i[s])&&this.ngZone.run(()=>{this.callEvent("notify")}),s<1&&this.ngZone.run(()=>{this.status=c.done,this.callEvent("done"),this.destroy()})}getLeft(){const{config:t,frequency:n}=this;let e=1e3*t.leftTime;const l=t.stopTime;!e&&l&&(e=l-(new Date).getTime()),this._left=e-e%n}ngOnInit(){this.init(),this.config.demand||this.begin()}ngOnDestroy(){this.isDestroy=!0,this.destroy()}ngOnChanges(t){t.config.firstChange||this.restart()}})(),p=(()=>class{})();var g=l.pb({encapsulation:2,styles:[],data:{}});function f(t){return l.Nb(0,[(t()(),l.rb(0,0,null,null,1,null,null,null,null,null,null,null)),(t()(),l.rb(1,0,null,null,0,"span",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(t,n){t(n,1,0,n.component.i.text)}))}function m(t){return l.Nb(0,[(t()(),l.rb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function v(t){return l.Nb(2,[(t()(),l.gb(16777216,null,null,1,null,f)),l.qb(1,16384,null,0,a.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(t()(),l.gb(16777216,null,null,2,null,m)),l.qb(3,540672,null,0,a.p,[l.M],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),l.Gb(4,{$implicit:0})],(function(t,n){var e=n.component;t(n,1,0,!e.render);var l=t(n,4,0,e.i);t(n,3,0,l,e.render)}),null)}var x=e("HDdC"),w=e("quSY");class y extends w.a{constructor(t,n){super()}schedule(t,n=0){return this}}class C extends y{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){if(this.closed)return this;this.state=t;const e=this.id,l=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(l,e,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(l,this.id,n),this}requestAsyncId(t,n,e=0){return setInterval(t.flush.bind(t,this),e)}recycleAsyncId(t,n,e=0){if(null!==e&&this.delay===e&&!1===this.pending)return n;clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const e=this._execute(t,n);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let e=!1,l=void 0;try{this.work(t)}catch(i){e=!0,l=!!i&&i||new Error(i)}if(e)return this.unsubscribe(),l}_unsubscribe(){const t=this.id,n=this.scheduler,e=n.actions,l=e.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==l&&e.splice(l,1),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null}}let k=(()=>{class t{constructor(n,e=t.now){this.SchedulerAction=n,this.now=e}schedule(t,n=0,e){return new this.SchedulerAction(this,t).schedule(e,n)}}return t.now=()=>Date.now(),t})();class _ extends k{constructor(t,n=k.now){super(t,()=>_.delegate&&_.delegate!==this?_.delegate.now():n()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,n=0,e){return _.delegate&&_.delegate!==this?_.delegate.schedule(t,n,e):super.schedule(t,n,e)}flush(t){const{actions:n}=this;if(this.active)return void n.push(t);let e;this.active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=n.shift());if(this.active=!1,e){for(;t=n.shift();)t.unsubscribe();throw e}}}const O=new _(C);var M=e("DH7j");function B(t=0,n=O){var e;return e=t,(Object(M.a)(e)||!(e-parseFloat(e)+1>=0)||t<0)&&(t=0),n&&"function"==typeof n.schedule||(n=O),new x.a(e=>(e.add(n.schedule(q,t,{subscriber:e,counter:0,period:t})),e))}function q(t){const{subscriber:n,counter:e,period:l}=t;n.next(e),this.schedule({subscriber:n,counter:e+1,period:l},l)}class I{constructor(t,n){this.renderer=t,this.router=n,this.choiceMade=new l.m,this.mySubscription=B(5e3).subscribe(t=>{this.cards.length?this.swipe():this.router.navigateByUrl("/thanks")})}ngOnInit(){this.mySubscription=B(5e3).subscribe(t=>{this.swipe()})}userClickedButton(t,n){if(t.preventDefault(),!this.cards.length)return!1;n?(this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate("+this.moveOutWidth+"px, -100px) rotate(-30deg)"),this.toggleChoiceIndicator(!1,!0),this.emitChoice(n,this.cards[0])):(this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate(-"+this.moveOutWidth+"px, -100px) rotate(30deg)"),this.toggleChoiceIndicator(!0,!1),this.emitChoice(n,this.cards[0])),this.shiftRequired=!0,this.transitionInProgress=!0}swipe(){this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate(-"+this.moveOutWidth+"px, -100px) rotate(30deg)"),this.toggleChoiceIndicator(!0,!1),this.emitChoice(!1,this.cards[0]),this.shiftRequired=!0,this.transitionInProgress=!0}handlePan(t){0===t.deltaX||0===t.center.x&&0===t.center.y||!this.cards.length||(this.transitionInProgress&&this.handleShift(),this.renderer.addClass(this.tinderCardsArray[0].nativeElement,"moving"),t.deltaX>0&&this.toggleChoiceIndicator(!1,!0),t.deltaX<0&&this.toggleChoiceIndicator(!0,!1),this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate("+t.deltaX+"px, "+t.deltaY+"px) rotate("+.03*t.deltaX*(t.deltaY/80)+"deg)"),this.shiftRequired=!0)}handlePanEnd(t){if(this.toggleChoiceIndicator(!1,!1),this.cards.length){if(this.renderer.removeClass(this.tinderCardsArray[0].nativeElement,"moving"),Math.abs(t.deltaX)<80||Math.abs(t.velocityX)<.5)this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform",""),this.shiftRequired=!1;else{let n=Math.max(Math.abs(t.velocityX)*this.moveOutWidth,this.moveOutWidth),e=t.deltaX>0?n:-n,l=Math.abs(t.velocityY)*this.moveOutWidth;this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate("+e+"px, "+((t.deltaY>0?l:-l)+t.deltaY)+"px) rotate("+.03*t.deltaX*(t.deltaY/80)+"deg)"),this.shiftRequired=!0,this.emitChoice(!!(t.deltaX>0),this.cards[0])}this.transitionInProgress=!0}}toggleChoiceIndicator(t,n){this.crossVisible=t,this.heartVisible=n}handleShift(){this.transitionInProgress=!1,this.toggleChoiceIndicator(!1,!1),this.shiftRequired&&(this.shiftRequired=!1,this.cards.shift())}emitChoice(t,n){this.choiceMade.emit({choice:t,payload:n})}ngAfterViewInit(){this.moveOutWidth=1.5*document.documentElement.clientWidth,this.tinderCardsArray=this.tinderCards.toArray(),this.tinderCards.changes.subscribe(()=>{this.tinderCardsArray=this.tinderCards.toArray(),this.countdown.restart()})}radioGroupChange(t){console.log("radioGroupChange",t.detail),this.selectedRadioGroup=t.detail}radioFocus(){console.log("radioFocus")}radioSelect(t){console.log("radioSelect",t.detail),this.selectedRadioItem=t.detail}radioBlur(){console.log("radioBlur")}handleEvent(t){console.log(t)}}var A=e("iInd"),P=l.pb({encapsulation:0,styles:[[".tinder[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;background-color:rgba(0,0,0,.4);position:absolute;left:0;top:0}.tinder--status[_ngcontent-%COMP%]{position:absolute;top:50%;margin-top:-30px;z-index:2;width:100%;text-align:center;pointer-events:none}.tinder--cards[_ngcontent-%COMP%]{text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%;overflow:hidden}.tinder--card[_ngcontent-%COMP%]{display:inline-block;width:260px;height:70%;background:#fff;padding-bottom:40px;border-radius:8px;overflow:hidden;position:absolute;will-change:transform;-webkit-transition:.3s ease-in-out;transition:all .3s ease-in-out;cursor:-webkit-grab;cursor:grab}.moving.tinder--card[_ngcontent-%COMP%]{-webkit-transition:none;transition:none;cursor:-webkit-grabbing;cursor:grabbing}.tinder--status[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-transition:.3s ease-in-out;transition:all .3s ease-in-out}.tinder--status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{-webkit-transition:.3s ease-in-out;transition:all .3s ease-in-out;position:absolute;width:100px;margin-left:-50px}.tinder--card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:75%;pointer-events:none;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}.tinder--card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:16px;font-size:24px;padding:0 16px;pointer-events:none}.tinder--card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:24px;font-size:16px;padding:0 16px;pointer-events:none}.tinder--buttons[_ngcontent-%COMP%]{position:absolute;-webkit-box-flex:0;flex:0 0 100px;text-align:center;bottom:20px;left:0;right:0}.tinder--buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:50%;line-height:50px;width:50px;height:50px;border:0;background:#fff;display:inline-block;padding-top:10px;margin:0 12px}.tinder--buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:0}"]],data:{}});function D(t){return l.Nb(0,[(t()(),l.rb(0,0,null,null,8,"ion-item",[],null,[[null,"ionFocus"],[null,"ionSelect"],[null,"ionBlur"]],(function(t,n,e){var l=!0,i=t.component;return"ionFocus"===n&&(l=!1!==i.radioFocus()&&l),"ionSelect"===n&&(l=!1!==i.radioSelect(e)&&l),"ionBlur"===n&&(l=!1!==i.radioBlur()&&l),l}),o.U,o.r)),l.qb(1,49152,null,0,r.G,[l.h,l.k,l.x],null,null),(t()(),l.rb(2,0,null,0,2,"ion-label",[],null,null,null,o.V,o.s)),l.qb(3,49152,null,0,r.M,[l.h,l.k,l.x],null,null),(t()(),l.Lb(4,0,["",""])),(t()(),l.rb(5,0,null,0,3,"ion-radio",[["slot","start"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(t,n,e){var i=!0;return"ionBlur"===n&&(i=!1!==l.Db(t,8)._handleBlurEvent(e.target)&&i),"ionSelect"===n&&(i=!1!==l.Db(t,8)._handleIonSelect(e.target)&&i),i}),o.Z,o.v)),l.Ib(5120,null,u.b,(function(t){return[t]}),[r.Kb]),l.qb(7,49152,null,0,r.Z,[l.h,l.k,l.x],{checked:[0,"checked"],color:[1,"color"],disabled:[2,"disabled"],name:[3,"name"],value:[4,"value"]},null),l.qb(8,16384,null,0,r.Kb,[l.k],null,null)],(function(t,n){t(n,7,0,l.vb(1,"",n.context.$implicit.checked,""),l.vb(1,"",n.context.$implicit.color,""),l.vb(1,"",n.context.$implicit.disabled,""),l.vb(1,"",n.context.$implicit.name,""),l.vb(1,"",n.context.$implicit.value,""))}),(function(t,n){t(n,4,0,n.context.$implicit.text)}))}function S(t){return l.Nb(0,[(t()(),l.rb(0,0,[[3,0],["tinderCard",1]],null,22,"div",[["class","tinder--card"]],null,[[null,"transitionend"]],(function(t,n,e){var l=!0;return"transitionend"===n&&(l=!1!==t.component.handleShift()&&l),l}),null,null)),l.Ib(512,null,a.x,a.y,[l.k,l.r,l.B]),l.qb(2,278528,null,0,a.o,[a.x],{ngStyle:[0,"ngStyle"]},null),l.Gb(3,{zIndex:0,transform:1}),(t()(),l.rb(4,0,[["tinderCardImage",1]],null,0,"img",[["src","card.img"]],null,[[null,"load"]],(function(t,n,e){var i=!0;return"load"===n&&(i=!1!==(l.Db(t,4).style.opacity=1)&&i),i}),null,null)),(t()(),l.rb(5,0,null,null,2,"countdown",[],[[2,"count-down",null]],[[null,"event"]],(function(t,n,e){var l=!0;return"event"===n&&(l=!1!==t.component.handleEvent(e)&&l),l}),v,g)),l.qb(6,770048,[[2,4],["cd",4]],0,b,[l.s,d,h,l.h,l.x],{config:[0,"config"]},{event:"event"}),l.Gb(7,{leftTime:0}),(t()(),l.rb(8,0,null,null,14,"ion-content",[],null,null,null,o.L,o.i)),l.qb(9,49152,null,0,r.t,[l.h,l.k,l.x],null,null),(t()(),l.rb(10,0,null,0,12,"ion-list",[],null,null,null,o.X,o.t)),l.qb(11,49152,null,0,r.N,[l.h,l.k,l.x],null,null),(t()(),l.rb(12,0,null,0,10,"ion-radio-group",[["allow-empty-selection","true"],["name","radio-group"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(t,n,e){var i=!0,s=t.component;return"ionBlur"===n&&(i=!1!==l.Db(t,15)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==l.Db(t,15)._handleChangeEvent(e.target)&&i),"ionChange"===n&&(i=!1!==s.radioGroupChange(e)&&i),i}),o.Y,o.w)),l.Ib(5120,null,u.b,(function(t){return[t]}),[r.Mb]),l.qb(14,49152,null,0,r.ab,[l.h,l.k,l.x],{name:[0,"name"]},null),l.qb(15,16384,null,0,r.Mb,[l.k],null,null),(t()(),l.rb(16,0,null,0,4,"ion-list-header",[],null,null,null,o.W,o.u)),l.qb(17,49152,null,0,r.O,[l.h,l.k,l.x],null,null),(t()(),l.rb(18,0,null,0,2,"ion-label",[],null,null,null,o.V,o.s)),l.qb(19,49152,null,0,r.M,[l.h,l.k,l.x],null,null),(t()(),l.Lb(20,0,["",""])),(t()(),l.gb(16777216,null,0,1,null,D)),l.qb(22,278528,null,0,a.k,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){var e=t(n,3,0,n.component.cards.length-n.context.index,"scale("+(20-n.context.index)/20+") translateY(-"+20*n.context.index+"px)");t(n,2,0,e);var l=t(n,7,0,n.context.$implicit.time);t(n,6,0,l),t(n,14,0,"radio-group"),t(n,22,0,n.context.$implicit.options)}),(function(t,n){t(n,5,0,!0),t(n,20,0,n.context.$implicit.title)}))}function E(t){return l.Nb(0,[l.Jb(671088640,1,{radioGroup:0}),l.Jb(671088640,2,{countdown:0}),l.Jb(671088640,3,{tinderCards:1}),(t()(),l.rb(3,0,null,null,14,"div",[["class","tinder"]],[[8,"hidden",0]],null,null,null,null)),(t()(),l.rb(4,0,null,null,6,"div",[["class","tinder--status"]],null,null,null,null,null)),(t()(),l.rb(5,0,null,null,2,"div",[],[[4,"opacity",null]],null,null,null,null)),(t()(),l.rb(6,0,null,null,1,":svg:svg",[["viewBox","0 0 512 512"],["width","200px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(t()(),l.rb(7,0,null,null,0,":svg:path",[["d","M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"],["fill","#CDD6DD"]],null,null,null,null,null)),(t()(),l.rb(8,0,null,null,2,"div",[],[[4,"opacity",null]],null,null,null,null)),(t()(),l.rb(9,0,null,null,1,":svg:svg",[["viewBox","0 0 512 512"],["width","200px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(t()(),l.rb(10,0,null,null,0,":svg:path",[["d","M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"],["fill","#FFACE4"]],null,null,null,null,null)),(t()(),l.rb(11,0,null,null,2,"div",[["class","tinder--cards"]],null,[[null,"pan"],[null,"panend"]],(function(t,n,e){var l=!0,i=t.component;return"pan"===n&&(l=!1!==i.handlePan(e)&&l),"panend"===n&&(l=!1!==i.handlePanEnd(e)&&l),l}),null,null)),(t()(),l.gb(16777216,null,null,1,null,S)),l.qb(13,278528,null,0,a.k,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(t()(),l.rb(14,0,null,null,3,"div",[["class","tinder--buttons"]],null,null,null,null,null)),(t()(),l.rb(15,0,null,null,2,"button",[],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.userClickedButton(e,!1)&&l),l}),null,null)),(t()(),l.rb(16,0,null,null,1,":svg:svg",[["viewBox","0 0 512 512"],["width","30px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(t()(),l.rb(17,0,null,null,0,":svg:path",[["d","M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"],["fill","#CDD6DD"]],null,null,null,null,null))],(function(t,n){t(n,13,0,n.component.cards)}),(function(t,n){var e=n.component;t(n,3,0,!e.cards.length),t(n,5,0,e.crossVisible?"1":"0"),t(n,8,0,e.heartVisible?"1":"0")}))}class T{constructor(){this.cards=[],this.time=5}ngOnInit(){this.loadTinderCards()}loadTinderCards(){this.cards=[{img:"https://placeimg.com/300/300/people",title:"Your favourite restaurant?",time:5,option1:"A2B",option2:"Pizza hut",option3:"wow momos",option4:"A2B",options:[{id:"1",name:"radio_list",value:"radio_1",text:"One",disabled:!1,checked:!1,color:"primary"},{id:"2",name:"radio_list",value:"radio_2",text:"Two",disabled:!1,checked:!0,color:"secondary"},{id:"3",name:"radio_list",value:"radio_3",text:"Three",disabled:!1,checked:!1,color:"danger"},{id:"4",name:"radio_list",value:"radio_4",text:"Four",disabled:!1,checked:!1,color:"warn"}]},{img:"https://placeimg.com/300/300/people",title:"Your favourite hangout place ?",time:5,option1:"A2B",option2:"Pizza hut",option3:"wow momos",option4:"A2B",options:[{id:"1",name:"radio_list",value:"radio_1",text:"One",disabled:!1,checked:!1,color:"primary"},{id:"2",name:"radio_list",value:"radio_2",text:"Two",disabled:!1,checked:!0,color:"secondary"},{id:"3",name:"radio_list",value:"radio_3",text:"Three",disabled:!1,checked:!1,color:"danger"},{id:"4",name:"radio_list",value:"radio_4",text:"Four",disabled:!1,checked:!1,color:"warn"}]},{img:"https://placeimg.com/300/300/people",title:"Your favourite car?",time:5,option1:"A2B",option2:"Pizza hut",option3:"wow momos",option4:"A2B",options:[{id:"1",name:"radio_list",value:"radio_1",text:"One",disabled:!1,checked:!1,color:"primary"},{id:"2",name:"radio_list",value:"radio_2",text:"Two",disabled:!1,checked:!0,color:"secondary"},{id:"3",name:"radio_list",value:"radio_3",text:"Three",disabled:!1,checked:!1,color:"danger"},{id:"4",name:"radio_list",value:"radio_4",text:"Four",disabled:!1,checked:!1,color:"warn"}]}]}logChoice(t){console.log(t)}}var z=l.pb({encapsulation:0,styles:[[""]],data:{}});function F(t){return l.Nb(0,[(t()(),l.rb(0,0,null,null,5,"ion-header",[],null,null,null,o.Q,o.n)),l.qb(1,49152,null,0,r.A,[l.h,l.k,l.x],null,null),(t()(),l.rb(2,0,null,0,3,"ion-toolbar",[["color","primary"]],null,null,null,o.fb,o.C)),l.qb(3,49152,null,0,r.Bb,[l.h,l.k,l.x],{color:[0,"color"]},null),(t()(),l.rb(4,0,null,0,1,"ion-title",[],null,null,null,o.eb,o.B)),l.qb(5,49152,null,0,r.zb,[l.h,l.k,l.x],null,null),(t()(),l.rb(6,0,null,null,4,"ion-content",[["padding",""]],null,null,null,o.L,o.i)),l.qb(7,49152,null,0,r.t,[l.h,l.k,l.x],null,null),l.qb(8,16384,null,0,r.d,[l.k],null,null),(t()(),l.rb(9,0,null,0,1,"tinder-ui",[],null,[[null,"choiceMade"]],(function(t,n,e){var l=!0;return"choiceMade"===n&&(l=!1!==t.component.logChoice(e)&&l),l}),E,P)),l.qb(10,4308992,null,0,I,[l.B,A.m],{time:[0,"time"],cards:[1,"cards"]},{choiceMade:"choiceMade"}),(t()(),l.rb(11,0,null,null,1,"ion-footer",[],null,null,null,o.O,o.l)),l.qb(12,49152,null,0,r.y,[l.h,l.k,l.x],null,null)],(function(t,n){var e=n.component;t(n,3,0,"primary"),t(n,10,0,e.time,e.cards)}),null)}function Y(t){return l.Nb(0,[(t()(),l.rb(0,0,null,null,1,"app-questions",[],null,null,null,F,z)),l.qb(1,114688,null,0,T,[],null,null)],(function(t,n){t(n,1,0)}),null)}var j=l.nb("app-questions",T,Y,{},{},[]);class G{}e.d(n,"QuestionsPageModuleNgFactory",(function(){return X}));var X=l.ob(i,[],(function(t){return l.Ab([l.Bb(512,l.j,l.Z,[[8,[s.a,j]],[3,l.j],l.v]),l.Bb(4608,a.n,a.m,[l.s,[2,a.A]]),l.Bb(4608,u.d,u.d,[]),l.Bb(4608,r.b,r.b,[l.x,l.g]),l.Bb(4608,r.Gb,r.Gb,[r.b,l.j,l.p]),l.Bb(4608,r.Jb,r.Jb,[r.b,l.j,l.p]),l.Bb(4608,d,d,[l.x]),l.Bb(1073742336,a.c,a.c,[]),l.Bb(1073742336,u.c,u.c,[]),l.Bb(1073742336,u.a,u.a,[]),l.Bb(1073742336,r.Db,r.Db,[]),l.Bb(1073742336,A.o,A.o,[[2,A.t],[2,A.m]]),l.Bb(1073742336,G,G,[]),l.Bb(1073742336,p,p,[]),l.Bb(1073742336,i,i,[]),l.Bb(1024,A.k,(function(){return[[{path:"",component:T}]]}),[])])}))}}]);
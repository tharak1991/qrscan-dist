(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{pQ3O:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),r=e("oBZk"),u=e("ZZ/e"),s=e("gIcY"),a=e("Ip0R"),d=e("6blF"),c=e("mrSG"),h=function(n){function t(t,e){var l=n.call(this,t,e)||this;return l.scheduler=t,l.work=e,l.pending=!1,l}return c.d(t,n),t.prototype.schedule=function(n,t){if(void 0===t&&(t=0),this.closed)return this;this.state=n;var e=this.id,l=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(l,e,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(l,this.id,t),this},t.prototype.requestAsyncId=function(n,t,e){return void 0===e&&(e=0),setInterval(n.flush.bind(n,this),e)},t.prototype.recycleAsyncId=function(n,t,e){if(void 0===e&&(e=0),null!==e&&this.delay===e&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(n,t);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,t){var e=!1,l=void 0;try{this.work(n)}catch(i){e=!0,l=!!i&&i||new Error(i)}if(e)return this.unsubscribe(),l},t.prototype._unsubscribe=function(){var n=this.id,t=this.scheduler,e=t.actions,l=e.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==l&&e.splice(l,1),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null},t}(function(n){function t(t,e){return n.call(this)||this}return c.d(t,n),t.prototype.schedule=function(n,t){return void 0===t&&(t=0),this},t}(e("pugT").a)),p=function(){function n(t,e){void 0===e&&(e=n.now),this.SchedulerAction=t,this.now=e}return n.prototype.schedule=function(n,t,e){return void 0===t&&(t=0),new this.SchedulerAction(this,n).schedule(e,t)},n.now=function(){return Date.now()},n}(),b=new(function(n){function t(e,l){void 0===l&&(l=p.now);var i=n.call(this,e,(function(){return t.delegate&&t.delegate!==i?t.delegate.now():l()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return c.d(t,n),t.prototype.schedule=function(e,l,i){return void 0===l&&(l=0),t.delegate&&t.delegate!==this?t.delegate.schedule(e,l,i):n.prototype.schedule.call(this,e,l,i)},t.prototype.flush=function(n){var t=this.actions;if(this.active)t.push(n);else{var e;this.active=!0;do{if(e=n.execute(n.state,n.delay))break}while(n=t.shift());if(this.active=!1,e){for(;n=t.shift();)n.unsubscribe();throw e}}},t}(p))(h),g=e("isby");function f(n,t){var e;return void 0===n&&(n=0),void 0===t&&(t=b),e=n,(Object(g.a)(e)||!(e-parseFloat(e)+1>=0)||n<0)&&(n=0),t&&"function"==typeof t.schedule||(t=b),new d.a((function(e){return e.add(t.schedule(v,n,{subscriber:e,counter:0,period:n})),e}))}function v(n){var t=n.subscriber,e=n.counter,l=n.period;t.next(e),this.schedule({subscriber:t,counter:e+1,period:l},l)}var m=function(){function n(n,t){var e=this;this.renderer=n,this.router=t,this.choiceMade=new l.m,this.mySubscription=f(5e3).subscribe((function(n){e.cards.length?e.swipe():e.router.navigateByUrl("/thanks")}))}return n.prototype.ngOnInit=function(){var n=this;this.mySubscription=f(5e3).subscribe((function(t){n.swipe()}))},n.prototype.userClickedButton=function(n,t){if(n.preventDefault(),!this.cards.length)return!1;t?(this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate("+this.moveOutWidth+"px, -100px) rotate(-30deg)"),this.toggleChoiceIndicator(!1,!0),this.emitChoice(t,this.cards[0])):(this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate(-"+this.moveOutWidth+"px, -100px) rotate(30deg)"),this.toggleChoiceIndicator(!0,!1),this.emitChoice(t,this.cards[0])),this.shiftRequired=!0,this.transitionInProgress=!0},n.prototype.swipe=function(){this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate(-"+this.moveOutWidth+"px, -100px) rotate(30deg)"),this.toggleChoiceIndicator(!0,!1),this.emitChoice(!1,this.cards[0]),this.shiftRequired=!0,this.transitionInProgress=!0},n.prototype.handlePan=function(n){0===n.deltaX||0===n.center.x&&0===n.center.y||!this.cards.length||(this.transitionInProgress&&this.handleShift(),this.renderer.addClass(this.tinderCardsArray[0].nativeElement,"moving"),n.deltaX>0&&this.toggleChoiceIndicator(!1,!0),n.deltaX<0&&this.toggleChoiceIndicator(!0,!1),this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate("+n.deltaX+"px, "+n.deltaY+"px) rotate("+.03*n.deltaX*(n.deltaY/80)+"deg)"),this.shiftRequired=!0)},n.prototype.handlePanEnd=function(n){if(this.toggleChoiceIndicator(!1,!1),this.cards.length){if(this.renderer.removeClass(this.tinderCardsArray[0].nativeElement,"moving"),Math.abs(n.deltaX)<80||Math.abs(n.velocityX)<.5)this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform",""),this.shiftRequired=!1;else{var t=Math.max(Math.abs(n.velocityX)*this.moveOutWidth,this.moveOutWidth),e=n.deltaX>0?t:-t,l=Math.abs(n.velocityY)*this.moveOutWidth;this.renderer.setStyle(this.tinderCardsArray[0].nativeElement,"transform","translate("+e+"px, "+((n.deltaY>0?l:-l)+n.deltaY)+"px) rotate("+.03*n.deltaX*(n.deltaY/80)+"deg)"),this.shiftRequired=!0,this.emitChoice(!!(n.deltaX>0),this.cards[0])}this.transitionInProgress=!0}},n.prototype.toggleChoiceIndicator=function(n,t){this.crossVisible=n,this.heartVisible=t},n.prototype.handleShift=function(){this.transitionInProgress=!1,this.toggleChoiceIndicator(!1,!1),this.shiftRequired&&(this.shiftRequired=!1,this.cards.shift())},n.prototype.emitChoice=function(n,t){this.choiceMade.emit({choice:n,payload:t})},n.prototype.ngAfterViewInit=function(){var n=this;this.moveOutWidth=1.5*document.documentElement.clientWidth,this.tinderCardsArray=this.tinderCards.toArray(),this.tinderCards.changes.subscribe((function(){n.tinderCardsArray=n.tinderCards.toArray()}))},n.prototype.radioGroupChange=function(n){console.log("radioGroupChange",n.detail),this.selectedRadioGroup=n.detail},n.prototype.radioFocus=function(){console.log("radioFocus")},n.prototype.radioSelect=function(n){console.log("radioSelect",n.detail),this.selectedRadioItem=n.detail},n.prototype.radioBlur=function(){console.log("radioBlur")},n}(),x=e("ZYCi"),y=l.rb({encapsulation:0,styles:[[".tinder[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;background-color:rgba(0,0,0,.4);position:absolute;left:0;top:0}.tinder--status[_ngcontent-%COMP%]{position:absolute;top:50%;margin-top:-30px;z-index:2;width:100%;text-align:center;pointer-events:none}.tinder--cards[_ngcontent-%COMP%]{text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%;overflow:hidden}.tinder--card[_ngcontent-%COMP%]{display:inline-block;width:260px;height:70%;background:#fff;padding-bottom:40px;border-radius:8px;overflow:hidden;position:absolute;will-change:transform;-webkit-transition:.3s ease-in-out;transition:all .3s ease-in-out;cursor:-webkit-grab;cursor:grab}.moving.tinder--card[_ngcontent-%COMP%]{-webkit-transition:none;transition:none;cursor:-webkit-grabbing;cursor:grabbing}.tinder--status[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-transition:.3s ease-in-out;transition:all .3s ease-in-out}.tinder--status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{-webkit-transition:.3s ease-in-out;transition:all .3s ease-in-out;position:absolute;width:100px;margin-left:-50px}.tinder--card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:75%;pointer-events:none;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}.tinder--card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:16px;font-size:24px;padding:0 16px;pointer-events:none}.tinder--card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:24px;font-size:16px;padding:0 16px;pointer-events:none}.tinder--buttons[_ngcontent-%COMP%]{position:absolute;-webkit-box-flex:0;flex:0 0 100px;text-align:center;bottom:20px;left:0;right:0}.tinder--buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:50%;line-height:50px;width:50px;height:50px;border:0;background:#fff;display:inline-block;padding-top:10px;margin:0 12px}.tinder--buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:0}"]],data:{}});function w(n){return l.Pb(0,[(n()(),l.tb(0,0,null,null,8,"ion-item",[],null,[[null,"ionFocus"],[null,"ionSelect"],[null,"ionBlur"]],(function(n,t,e){var l=!0,i=n.component;return"ionFocus"===t&&(l=!1!==i.radioFocus()&&l),"ionSelect"===t&&(l=!1!==i.radioSelect(e)&&l),"ionBlur"===t&&(l=!1!==i.radioBlur()&&l),l}),r.Y,r.s)),l.sb(1,49152,null,0,u.G,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,2,"ion-label",[],null,null,null,r.Z,r.t)),l.sb(3,49152,null,0,u.M,[l.h,l.k,l.z],null,null),(n()(),l.Nb(4,0,["",""])),(n()(),l.tb(5,0,null,0,3,"ion-radio",[["slot","start"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,t,e){var i=!0;return"ionBlur"===t&&(i=!1!==l.Fb(n,8)._handleBlurEvent(e.target)&&i),"ionSelect"===t&&(i=!1!==l.Fb(n,8)._handleIonSelect(e.target)&&i),i}),r.eb,r.x)),l.Kb(5120,null,s.b,(function(n){return[n]}),[u.Kb]),l.sb(7,49152,null,0,u.Z,[l.h,l.k,l.z],{checked:[0,"checked"],color:[1,"color"],disabled:[2,"disabled"],name:[3,"name"],value:[4,"value"]},null),l.sb(8,16384,null,0,u.Kb,[l.k],null,null)],(function(n,t){n(t,7,0,l.xb(1,"",t.context.$implicit.checked,""),l.xb(1,"",t.context.$implicit.color,""),l.xb(1,"",t.context.$implicit.disabled,""),l.xb(1,"",t.context.$implicit.name,""),l.xb(1,"",t.context.$implicit.value,""))}),(function(n,t){n(t,4,0,t.context.$implicit.text)}))}function C(n){return l.Pb(0,[(n()(),l.tb(0,0,[[2,0],["tinderCard",1]],null,19,"div",[["class","tinder--card"]],null,[[null,"transitionend"]],(function(n,t,e){var l=!0;return"transitionend"===t&&(l=!1!==n.component.handleShift()&&l),l}),null,null)),l.Kb(512,null,a.v,a.w,[l.k,l.t,l.D]),l.sb(2,278528,null,0,a.o,[a.v],{ngStyle:[0,"ngStyle"]},null),l.Ib(3,{zIndex:0,transform:1}),(n()(),l.tb(4,0,[["tinderCardImage",1]],null,0,"img",[["src","card.img"]],null,[[null,"load"]],(function(n,t,e){var i=!0;return"load"===t&&(i=!1!==(l.Fb(n,4).style.opacity=1)&&i),i}),null,null)),(n()(),l.tb(5,0,null,null,14,"ion-content",[],null,null,null,r.P,r.j)),l.sb(6,49152,null,0,u.t,[l.h,l.k,l.z],null,null),(n()(),l.tb(7,0,null,0,12,"ion-list",[],null,null,null,r.bb,r.u)),l.sb(8,49152,null,0,u.N,[l.h,l.k,l.z],null,null),(n()(),l.tb(9,0,null,0,10,"ion-radio-group",[["allow-empty-selection","true"],["name","radio-group"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,t,e){var i=!0,o=n.component;return"ionBlur"===t&&(i=!1!==l.Fb(n,12)._handleBlurEvent(e.target)&&i),"ionChange"===t&&(i=!1!==l.Fb(n,12)._handleChangeEvent(e.target)&&i),"ionChange"===t&&(i=!1!==o.radioGroupChange(e)&&i),i}),r.db,r.y)),l.Kb(5120,null,s.b,(function(n){return[n]}),[u.Mb]),l.sb(11,49152,null,0,u.ab,[l.h,l.k,l.z],{name:[0,"name"]},null),l.sb(12,16384,null,0,u.Mb,[l.k],null,null),(n()(),l.tb(13,0,null,0,4,"ion-list-header",[],null,null,null,r.ab,r.v)),l.sb(14,49152,null,0,u.O,[l.h,l.k,l.z],null,null),(n()(),l.tb(15,0,null,0,2,"ion-label",[],null,null,null,r.Z,r.t)),l.sb(16,49152,null,0,u.M,[l.h,l.k,l.z],null,null),(n()(),l.Nb(17,0,["",""])),(n()(),l.ib(16777216,null,0,1,null,w)),l.sb(19,278528,null,0,a.k,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var e=n(t,3,0,t.component.cards.length-t.context.index,"scale("+(20-t.context.index)/20+") translateY(-"+20*t.context.index+"px)");n(t,2,0,e),n(t,11,0,"radio-group"),n(t,19,0,t.context.$implicit.options)}),(function(n,t){n(t,17,0,t.context.$implicit.title)}))}function k(n){return l.Pb(0,[l.Lb(671088640,1,{radioGroup:0}),l.Lb(671088640,2,{tinderCards:1}),(n()(),l.tb(2,0,null,null,14,"div",[["class","tinder"]],[[8,"hidden",0]],null,null,null,null)),(n()(),l.tb(3,0,null,null,6,"div",[["class","tinder--status"]],null,null,null,null,null)),(n()(),l.tb(4,0,null,null,2,"div",[],[[4,"opacity",null]],null,null,null,null)),(n()(),l.tb(5,0,null,null,1,":svg:svg",[["viewBox","0 0 512 512"],["width","200px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),l.tb(6,0,null,null,0,":svg:path",[["d","M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"],["fill","#CDD6DD"]],null,null,null,null,null)),(n()(),l.tb(7,0,null,null,2,"div",[],[[4,"opacity",null]],null,null,null,null)),(n()(),l.tb(8,0,null,null,1,":svg:svg",[["viewBox","0 0 512 512"],["width","200px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),l.tb(9,0,null,null,0,":svg:path",[["d","M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"],["fill","#FFACE4"]],null,null,null,null,null)),(n()(),l.tb(10,0,null,null,2,"div",[["class","tinder--cards"]],null,[[null,"pan"],[null,"panend"]],(function(n,t,e){var l=!0,i=n.component;return"pan"===t&&(l=!1!==i.handlePan(e)&&l),"panend"===t&&(l=!1!==i.handlePanEnd(e)&&l),l}),null,null)),(n()(),l.ib(16777216,null,null,1,null,C)),l.sb(12,278528,null,0,a.k,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.tb(13,0,null,null,3,"div",[["class","tinder--buttons"]],null,null,null,null,null)),(n()(),l.tb(14,0,null,null,2,"button",[],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.userClickedButton(e,!1)&&l),l}),null,null)),(n()(),l.tb(15,0,null,null,1,":svg:svg",[["viewBox","0 0 512 512"],["width","30px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),l.tb(16,0,null,null,0,":svg:path",[["d","M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"],["fill","#CDD6DD"]],null,null,null,null,null))],(function(n,t){n(t,12,0,t.component.cards)}),(function(n,t){var e=t.component;n(t,2,0,!e.cards.length),n(t,4,0,e.crossVisible?"1":"0"),n(t,7,0,e.heartVisible?"1":"0")}))}var _=function(){function n(){this.cards=[]}return n.prototype.ngOnInit=function(){this.loadTinderCards()},n.prototype.loadTinderCards=function(){this.cards=[{img:"https://placeimg.com/300/300/people",title:"Your favourite restaurant?",option1:"A2B",option2:"Pizza hut",option3:"wow momos",option4:"A2B",options:[{id:"1",name:"radio_list",value:"radio_1",text:"One",disabled:!1,checked:!1,color:"primary"},{id:"2",name:"radio_list",value:"radio_2",text:"Two",disabled:!1,checked:!0,color:"secondary"},{id:"3",name:"radio_list",value:"radio_3",text:"Three",disabled:!1,checked:!1,color:"danger"},{id:"4",name:"radio_list",value:"radio_4",text:"Four",disabled:!1,checked:!1,color:"warn"}]},{img:"https://placeimg.com/300/300/people",title:"Your favourite hangout place ?",option1:"A2B",option2:"Pizza hut",option3:"wow momos",option4:"A2B",options:[{id:"1",name:"radio_list",value:"radio_1",text:"One",disabled:!1,checked:!1,color:"primary"},{id:"2",name:"radio_list",value:"radio_2",text:"Two",disabled:!1,checked:!0,color:"secondary"},{id:"3",name:"radio_list",value:"radio_3",text:"Three",disabled:!1,checked:!1,color:"danger"},{id:"4",name:"radio_list",value:"radio_4",text:"Four",disabled:!1,checked:!1,color:"warn"}]},{img:"https://placeimg.com/300/300/people",title:"Your favourite car?",option1:"A2B",option2:"Pizza hut",option3:"wow momos",option4:"A2B",options:[{id:"1",name:"radio_list",value:"radio_1",text:"One",disabled:!1,checked:!1,color:"primary"},{id:"2",name:"radio_list",value:"radio_2",text:"Two",disabled:!1,checked:!0,color:"secondary"},{id:"3",name:"radio_list",value:"radio_3",text:"Three",disabled:!1,checked:!1,color:"danger"},{id:"4",name:"radio_list",value:"radio_4",text:"Four",disabled:!1,checked:!1,color:"warn"}]}]},n.prototype.logChoice=function(n){console.log(n)},n}(),O=l.rb({encapsulation:0,styles:[[""]],data:{}});function M(n){return l.Pb(0,[(n()(),l.tb(0,0,null,null,5,"ion-header",[],null,null,null,r.U,r.o)),l.sb(1,49152,null,0,u.A,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,3,"ion-toolbar",[["color","primary"]],null,null,null,r.lb,r.F)),l.sb(3,49152,null,0,u.Bb,[l.h,l.k,l.z],{color:[0,"color"]},null),(n()(),l.tb(4,0,null,0,1,"ion-title",[],null,null,null,r.kb,r.E)),l.sb(5,49152,null,0,u.zb,[l.h,l.k,l.z],null,null),(n()(),l.tb(6,0,null,null,4,"ion-content",[["padding",""]],null,null,null,r.P,r.j)),l.sb(7,49152,null,0,u.t,[l.h,l.k,l.z],null,null),l.sb(8,16384,null,0,u.d,[l.k],null,null),(n()(),l.tb(9,0,null,0,1,"tinder-ui",[],null,[[null,"choiceMade"]],(function(n,t,e){var l=!0;return"choiceMade"===t&&(l=!1!==n.component.logChoice(e)&&l),l}),k,y)),l.sb(10,4308992,null,0,m,[l.D,x.m],{cards:[0,"cards"]},{choiceMade:"choiceMade"}),(n()(),l.tb(11,0,null,null,1,"ion-footer",[],null,null,null,r.S,r.m)),l.sb(12,49152,null,0,u.y,[l.h,l.k,l.z],null,null)],(function(n,t){var e=t.component;n(t,3,0,"primary"),n(t,10,0,e.cards)}),null)}function P(n){return l.Pb(0,[(n()(),l.tb(0,0,null,null,1,"app-questions",[],null,null,null,M,O)),l.sb(1,114688,null,0,_,[],null,null)],(function(n,t){n(t,1,0)}),null)}var I=l.pb("app-questions",_,P,{},{},[]),z=function(){return function(){}}();e.d(t,"QuestionsPageModuleNgFactory",(function(){return A}));var A=l.qb(i,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[o.a,I]],[3,l.j],l.x]),l.Db(4608,a.n,a.m,[l.u,[2,a.y]]),l.Db(4608,s.g,s.g,[]),l.Db(4608,u.b,u.b,[l.z,l.g]),l.Db(4608,u.Gb,u.Gb,[u.b,l.j,l.q]),l.Db(4608,u.Jb,u.Jb,[u.b,l.j,l.q]),l.Db(1073742336,a.c,a.c,[]),l.Db(1073742336,s.f,s.f,[]),l.Db(1073742336,s.a,s.a,[]),l.Db(1073742336,u.Db,u.Db,[]),l.Db(1073742336,x.o,x.o,[[2,x.t],[2,x.m]]),l.Db(1073742336,z,z,[]),l.Db(1073742336,i,i,[]),l.Db(1024,x.k,(function(){return[[{path:"",component:_}]]}),[])])}))}}]);
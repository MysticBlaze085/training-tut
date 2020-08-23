!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,i,r){return i&&n(t.prototype,i),r&&n(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"t3h/":function(n,r,e){"use strict";e.r(r),e.d(r,"TrainingModule",(function(){return F}));var a=e("ofXK"),o=e("tyNb"),c=e("fXoL"),s=e("wZkO"),u=e("J9tS"),b=e("XiUz"),p=e("Wp6s"),g=e("3Pt+"),f=e("bTqV"),l=e("BESU");function m(t,n){if(1&t&&(c.Ub(0,"div"),c.Pb(1,"app-dynamic-form-input",6),c.Tb()),2&t){var i=n.$implicit,r=c.kc();c.Bb(1),c.Db(i.class),c.pc("inputs",i)("form",r.form)}}var d,h,v,T,y=((h=function(){function n(i,r){t(this,n),this.trainingService=i,this.dynFormCtrl=r,this.trainingStart=new c.o,this.inputs=[],this.class="w-100"}return i(n,[{key:"ngOnInit",value:function(){var t=this;this.inputs$=this.trainingService.getTrainingList().subscribe((function(n){t.inputs=n,t.form=t.dynFormCtrl.toFormGroup(n)}))}},{key:"onStartTraining",value:function(){this.trainingStart.emit()}}]),n}()).\u0275fac=function(t){return new(t||h)(c.Ob(u.c),c.Ob(u.a))},h.\u0275cmp=c.Ib({type:h,selectors:[["app-new-training"]],outputs:{trainingStart:"trainingStart"},decls:10,vars:2,consts:[["fxLayout","","fxLayoutAlign","center",1,"mt-4"],["fxFlex.xs","100%","fxFlex","400px"],["fxLayoutAlign","center"],[3,"formGroup"],[4,"ngFor","ngForOf"],["mat-button","",3,"click"],[3,"inputs","form"]],template:function(t,n){1&t&&(c.Ub(0,"section",0),c.Ub(1,"mat-card",1),c.Ub(2,"mat-card-title",2),c.Jc(3," Time to start a workout! "),c.Tb(),c.Ub(4,"mat-card-content",2),c.Ub(5,"form",3),c.Hc(6,m,2,4,"div",4),c.Tb(),c.Tb(),c.Ub(7,"mat-card-actions",2),c.Ub(8,"button",5),c.gc("click",(function(){return n.onStartTraining()})),c.Jc(9,"Start"),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Bb(5),c.pc("formGroup",n.form),c.Bb(1),c.pc("ngForOf",n.inputs))},directives:[b.c,b.b,p.a,b.a,p.e,p.c,g.t,g.m,g.g,a.k,p.b,f.a,l.a],styles:[""]}),h),U=((d=function(){function n(){t(this,n)}return i(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||d)},d.\u0275cmp=c.Ib({type:d,selectors:[["app-past-training"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Ub(0,"p"),c.Jc(1,"past-training works!"),c.Tb())},styles:[""],changeDetection:0}),d),w=e("0IaG"),k=((v=function n(i){t(this,n),this.passedData=i}).\u0275fac=function(t){return new(t||v)(c.Ob(w.a))},v.\u0275cmp=c.Ib({type:v,selectors:[["app-stop-training-modal"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(t,n){1&t&&(c.Ub(0,"h1",0),c.Jc(1,"Are you sure?"),c.Tb(),c.Ub(2,"mat-dialog-content"),c.Ub(3,"p"),c.Jc(4),c.Tb(),c.Tb(),c.Ub(5,"mat-dialog-actions"),c.Ub(6,"button",1),c.Jc(7,"Yes"),c.Tb(),c.Ub(8,"button",1),c.Jc(9,"No"),c.Tb(),c.Tb()),2&t&&(c.Bb(4),c.Lc("You already got ",n.passedData.progress,"%"),c.Bb(2),c.pc("mat-dialog-close",!0),c.Bb(2),c.pc("mat-dialog-close",!1))},directives:[w.g,w.e,w.c,f.a,w.d],encapsulation:2}),v),x=e("Xa2L"),O=((T=function(){function n(i){t(this,n),this.dialog=i,this.trainingExit=new c.o,this.progress=0}return i(n,[{key:"ngOnInit",value:function(){this.startOrResumeTimer()}},{key:"startOrResumeTimer",value:function(){var t=this;this.timer=setInterval((function(){t.progress=t.progress+5,t.progress>=100&&clearInterval(t.timer)}),1e3)}},{key:"onStop",value:function(){var t=this;clearInterval(this.timer),this.dialog.open(k,{data:{progress:this.progress}}).afterClosed().subscribe((function(n){console.log(n),n?t.trainingExit.emit():t.startOrResumeTimer()}))}}]),n}()).\u0275fac=function(t){return new(t||T)(c.Ob(w.b))},T.\u0275cmp=c.Ib({type:T,selectors:[["app-current-training"]],outputs:{trainingExit:"trainingExit"},decls:8,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"current-training-container"],["mode","determinate","color","primary",3,"value"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,n){1&t&&(c.Ub(0,"section",0),c.Pb(1,"mat-progress-spinner",1),c.Ub(2,"h1"),c.Jc(3),c.Tb(),c.Ub(4,"p"),c.Jc(5,"Keep on going, you can do it!"),c.Tb(),c.Ub(6,"button",2),c.gc("click",(function(){return n.onStop()})),c.Jc(7,"Stop"),c.Tb(),c.Tb()),2&t&&(c.Bb(1),c.pc("value",n.progress),c.Bb(2),c.Lc("",n.progress,"%"))},directives:[b.c,b.b,x.a,f.a],styles:[".current-training-container[_ngcontent-%COMP%]{padding:30px}"]}),T);function I(t,n){if(1&t){var i=c.Vb();c.Ub(0,"mat-tab-group"),c.Ub(1,"mat-tab",2),c.Ub(2,"app-new-training",3),c.gc("trainingStart",(function(){return c.zc(i),c.kc().onGoindTraining=!0})),c.Tb(),c.Tb(),c.Ub(3,"mat-tab",4),c.Pb(4,"app-past-training"),c.Tb(),c.Tb()}}function S(t,n){if(1&t){var i=c.Vb();c.Ub(0,"app-current-training",5),c.gc("trainingExit",(function(){return c.zc(i),c.kc().onGoindTraining=!1})),c.Tb()}}var J,L,P,C=[{path:"",component:(J=function(){function n(){t(this,n)}return i(n,[{key:"ngOnInit",value:function(){}}]),n}(),J.\u0275fac=function(t){return new(t||J)},J.\u0275cmp=c.Ib({type:J,selectors:[["app-training"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"trainingExit",4,"ngIf"],["label","New Exercise"],[3,"trainingStart"],["label","Past Exercises"],[3,"trainingExit"]],template:function(t,n){1&t&&(c.Hc(0,I,5,0,"mat-tab-group",0),c.Hc(1,S,1,0,"app-current-training",1)),2&t&&(c.pc("ngIf",!n.onGoindTraining),c.Bb(1),c.pc("ngIf",n.onGoindTraining))},directives:[a.l,s.b,s.a,y,U,O],styles:[".training-container[_ngcontent-%COMP%]{height:100%}.training-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .training-container[_ngcontent-%COMP%]   mat-tab-link[_ngcontent-%COMP%]:hover{text-decoration:none}"]}),J)}],E=((L=function n(){t(this,n)}).\u0275mod=c.Mb({type:L}),L.\u0275inj=c.Lb({factory:function(t){return new(t||L)},imports:[[o.d.forChild(C)],o.d]}),L),B=e("FpXt"),F=((P=function n(){t(this,n)}).\u0275mod=c.Mb({type:P}),P.\u0275inj=c.Lb({factory:function(t){return new(t||P)},imports:[[a.c,E,B.a]]}),P)}}])}();
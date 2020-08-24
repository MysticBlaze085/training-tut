!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"t3h/":function(e,r,a){"use strict";a.r(r),a.d(r,"TrainingModule",(function(){return nt}));var c=a("ofXK"),o=a("tyNb"),s=a("fXoL"),u=a("J9tS"),l=a("wZkO"),b=a("hu7N"),f=a("3Pt+"),m=a("LRne"),p=a("XiUz"),d=a("Wp6s"),g=a("bTqV"),h=a("BESU");function v(t,e){if(1&t&&(s.Ub(0,"div"),s.Pb(1,"app-dynamic-form-input",8),s.Tb()),2&t){var n=e.$implicit,r=s.kc(2);s.Bb(1),s.Db(n.class),s.pc("inputs",n)("form",r.form)}}function y(t,e){if(1&t){var n=s.Vb();s.Ub(0,"section",1),s.Ub(1,"mat-card",2),s.Ub(2,"mat-card-title",3),s.Jc(3," Time to start a workout! "),s.Tb(),s.Ub(4,"mat-card-content",4),s.Ub(5,"form",5),s.Hc(6,v,2,4,"div",6),s.Tb(),s.Tb(),s.Ub(7,"mat-card-actions"),s.Ub(8,"button",7),s.gc("click",(function(){return s.zc(n),s.kc().onStartTraining()})),s.Jc(9,"Start"),s.Tb(),s.Tb(),s.Tb(),s.Tb()}if(2&t){var r=s.kc();s.Bb(5),s.pc("formGroup",r.form),s.Bb(1),s.pc("ngForOf",r.inputs),s.Bb(2),s.pc("disabled",r.form.invalid)}}var T,S=((T=function(){function e(t){n(this,e),this.dynFormCtrl=t,this.exercises=[],this.trainingStart=new s.o,this.inputs=[],this.class="w-100"}return i(e,[{key:"ngOnChanges",value:function(e){var n,r,i=this;e.exercises&&this.exercises&&(this.inputs$=(n=i.exercises.map((function(t){return{key:t.id,value:t.name}})),r=[new b.c({key:"newTraining",label:"Choose Exercise",required:!0,validators:[f.r.required],options:t(n),errorMessage:"Please select an exercise",class:"w-100",order:1})],Object(m.a)(r.sort((function(t,e){return t.order-e.order})))).subscribe((function(t){i.inputs=t,i.form=i.dynFormCtrl.toFormGroup(t)})))}},{key:"onStartTraining",value:function(){var t=this.form.value.newTraining;this.trainingStart.emit({id:t})}}]),e}()).\u0275fac=function(t){return new(t||T)(s.Ob(u.b))},T.\u0275cmp=s.Ib({type:T,selectors:[["app-new-training"]],inputs:{exercises:"exercises"},outputs:{trainingStart:"trainingStart"},features:[s.zb],decls:1,vars:1,consts:[["fxLayout","","fxLayoutAlign","center",4,"ngIf"],["fxLayout","","fxLayoutAlign","center"],["fxLayout","column","fxFlex.xs","100%","fxFlex","500px",1,"mt-3","mb-3"],["fxLayoutAlign","center"],["fxLayout","column","fxFlex","100%","fxLayoutAlign","center"],[1,"w-100",3,"formGroup"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"w-100",3,"disabled","click"],[3,"inputs","form"]],template:function(t,e){1&t&&s.Hc(0,y,10,3,"section",0),2&t&&s.pc("ngIf",e.exercises.length)},directives:[c.n,p.c,p.b,d.a,p.a,d.e,d.c,f.t,f.m,f.g,c.m,d.b,g.a,h.a],styles:[""]}),T),w=a("M9IT"),x=a("Dh3D"),U=a("+0xr"),k=a("kmnG"),C=a("qFsG");function O(t,e){1&t&&(s.Ub(0,"mat-header-cell",15),s.Jc(1," Date "),s.Tb())}function I(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.Jc(1),s.lc(2,"date"),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Kc(s.mc(2,1,n.date))}}function J(t,e){1&t&&(s.Ub(0,"mat-header-cell",15),s.Jc(1," Name "),s.Tb())}function D(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.Jc(1),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Kc(n.name)}}function H(t,e){1&t&&(s.Ub(0,"mat-header-cell",15),s.Jc(1," Calories "),s.Tb())}function B(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.Jc(1),s.lc(2,"number"),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Kc(s.mc(2,1,n.calories))}}function L(t,e){1&t&&(s.Ub(0,"mat-header-cell",15),s.Jc(1," Duration "),s.Tb())}function A(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.Jc(1),s.lc(2,"number"),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Kc(s.mc(2,1,n.duration))}}function R(t,e){1&t&&(s.Ub(0,"mat-header-cell",15),s.Jc(1," State "),s.Tb())}function E(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.Jc(1),s.Tb()),2&t){var n=e.$implicit;s.Bb(1),s.Kc(n.state)}}function F(t,e){1&t&&s.Pb(0,"mat-header-row")}function P(t,e){1&t&&s.Pb(0,"mat-row")}var j,G,z,$=function(){return[1,5,10,20]},K=((j=function(){function t(e){n(this,t),this.trainingService=e,this.displayedColumns=["date","name","calories","duration","state"],this.dataSource=new U.k}return i(t,[{key:"ngOnInit",value:function(){this.dataSource.data=this.trainingService.getCompletedOrCancelledExercisers()}},{key:"ngAfterViewInit",value:function(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}},{key:"doFilter",value:function(t){this.dataSource.filter=t.trim().toLowerCase()}}]),t}()).\u0275fac=function(t){return new(t||j)(s.Ob(u.c))},j.\u0275cmp=s.Ib({type:j,selectors:[["app-past-training"]],viewQuery:function(t,e){var n;1&t&&(s.Dc(x.a,!0),s.Dc(w.a,!0)),2&t&&(s.wc(n=s.hc())&&(e.sort=n.first),s.wc(n=s.hc())&&(e.paginator=n.first))},decls:25,vars:6,consts:[[1,"mt-3","mb-3"],["appearance","fill",1,"w-100"],["matInput","","type","text",3,"keyup"],["matSort","",3,"dataSource"],["matColumnDef","date"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","calories"],["matColumnDef","duration"],["matColumnDef","state"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["paginator",""],["mat-sort-header",""]],template:function(t,e){1&t&&(s.Ub(0,"mat-card",0),s.Ub(1,"mat-form-field",1),s.Ub(2,"mat-label"),s.Jc(3,"Filter"),s.Tb(),s.Ub(4,"input",2),s.gc("keyup",(function(t){return e.doFilter(t.target.value)})),s.Tb(),s.Tb(),s.Ub(5,"mat-table",3),s.Sb(6,4),s.Hc(7,O,2,0,"mat-header-cell",5),s.Hc(8,I,3,3,"mat-cell",6),s.Rb(),s.Sb(9,7),s.Hc(10,J,2,0,"mat-header-cell",5),s.Hc(11,D,2,1,"mat-cell",6),s.Rb(),s.Sb(12,8),s.Hc(13,H,2,0,"mat-header-cell",5),s.Hc(14,B,3,3,"mat-cell",6),s.Rb(),s.Sb(15,9),s.Hc(16,L,2,0,"mat-header-cell",5),s.Hc(17,A,3,3,"mat-cell",6),s.Rb(),s.Sb(18,10),s.Hc(19,R,2,0,"mat-header-cell",5),s.Hc(20,E,2,1,"mat-cell",6),s.Rb(),s.Hc(21,F,1,0,"mat-header-row",11),s.Hc(22,P,1,0,"mat-row",12),s.Tb(),s.Pb(23,"mat-paginator",13,14),s.Tb()),2&t&&(s.Bb(5),s.pc("dataSource",e.dataSource),s.Bb(16),s.pc("matHeaderRowDef",e.displayedColumns),s.Bb(1),s.pc("matRowDefColumns",e.displayedColumns),s.Bb(1),s.pc("pageSize",1)("pageSizeOptions",s.sc(5,$)))},directives:[d.a,k.c,k.f,C.b,U.j,x.a,U.c,U.e,U.b,U.g,U.i,w.a,U.d,x.b,U.a,U.f,U.h],pipes:[c.e,c.f],styles:[""]}),j),M=a("0IaG"),N=((G=function t(e){n(this,t),this.passedData=e}).\u0275fac=function(t){return new(t||G)(s.Ob(M.a))},G.\u0275cmp=s.Ib({type:G,selectors:[["app-stop-training-modal"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(s.Ub(0,"h1",0),s.Jc(1,"Are you sure?"),s.Tb(),s.Ub(2,"mat-dialog-content"),s.Ub(3,"p"),s.Jc(4),s.Tb(),s.Tb(),s.Ub(5,"mat-dialog-actions"),s.Ub(6,"button",1),s.Jc(7,"Yes"),s.Tb(),s.Ub(8,"button",1),s.Jc(9,"No"),s.Tb(),s.Tb()),2&t&&(s.Bb(4),s.Lc("You already got ",e.passedData.progress,"%"),s.Bb(2),s.pc("mat-dialog-close",!0),s.Bb(2),s.pc("mat-dialog-close",!1))},directives:[M.g,M.e,M.c,g.a,M.d],encapsulation:2}),G),X=a("Xa2L"),q=((z=function(){function t(e,r){n(this,t),this.dialog=e,this.trainingService=r,this.progress=0}return i(t,[{key:"ngOnInit",value:function(){this.startOrResumeTimer()}},{key:"startOrResumeTimer",value:function(){var t=this,e=this.trainingService.getRunningExercise().duration/100*1e3;this.timer=setInterval((function(){t.progress=t.progress+5,t.progress>=100&&(t.trainingService.completeExercise(),clearInterval(t.timer))}),e)}},{key:"onStop",value:function(){var t=this;clearInterval(this.timer),this.dialog.open(N,{data:{progress:this.progress}}).afterClosed().subscribe((function(e){return e?t.trainingService.cancelExercise(t.progress):t.startOrResumeTimer()}))}}]),t}()).\u0275fac=function(t){return new(t||z)(s.Ob(M.b),s.Ob(u.c))},z.\u0275cmp=s.Ib({type:z,selectors:[["app-current-training"]],decls:8,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"mt-3","mb-3"],["mode","determinate","color","primary",3,"value"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(s.Ub(0,"section",0),s.Pb(1,"mat-progress-spinner",1),s.Ub(2,"h1"),s.Jc(3),s.Tb(),s.Ub(4,"p"),s.Jc(5,"Keep on going, you can do it!"),s.Tb(),s.Ub(6,"button",2),s.gc("click",(function(){return e.onStop()})),s.Jc(7,"Stop"),s.Tb(),s.Tb()),2&t&&(s.Bb(1),s.pc("value",e.progress),s.Bb(2),s.Lc("",e.progress,"%"))},directives:[p.c,p.b,X.a,g.a],styles:[""]}),z);function V(t,e){if(1&t){var n=s.Vb();s.Ub(0,"mat-tab-group",2),s.Ub(1,"mat-tab",3),s.Ub(2,"app-new-training",4),s.gc("trainingStart",(function(t){return s.zc(n),s.kc().onTrainingStart(t)})),s.Tb(),s.Tb(),s.Ub(3,"mat-tab",5),s.Pb(4,"app-past-training"),s.Tb(),s.Tb()}if(2&t){var r=s.kc();s.pc("dynamicHeight",!0),s.Bb(2),s.pc("exercises",r.availableExercises)}}function Y(t,e){1&t&&s.Pb(0,"app-current-training")}var Q,W,Z,_=[{path:"",component:(Q=function(){function t(e){n(this,t),this.trainingService=e}return i(t,[{key:"ngOnInit",value:function(){var t=this;this.availableExercises=this.trainingService.getAvailableExercises(),this.exerciseSubscription=this.trainingService.exerciseChanged.subscribe((function(e){t.onGoindTraining=!!e}))}},{key:"ngOnDestroy",value:function(){this.exerciseSubscription.unsubscribe()}},{key:"onTrainingStart",value:function(t){var e=t.id;this.trainingService.startExercise(e)}}]),t}(),Q.\u0275fac=function(t){return new(t||Q)(s.Ob(u.c))},Q.\u0275cmp=s.Ib({type:Q,selectors:[["app-training"]],decls:2,vars:2,consts:[[3,"dynamicHeight",4,"ngIf"],[4,"ngIf"],[3,"dynamicHeight"],["label","New Exercise"],[3,"exercises","trainingStart"],["label","Past Exercises"]],template:function(t,e){1&t&&(s.Hc(0,V,5,2,"mat-tab-group",0),s.Hc(1,Y,1,0,"app-current-training",1)),2&t&&(s.pc("ngIf",!e.onGoindTraining),s.Bb(1),s.pc("ngIf",e.onGoindTraining))},directives:[c.n,l.b,l.a,S,K,q],styles:[""]}),Q)}],tt=((W=function t(){n(this,t)}).\u0275mod=s.Mb({type:W}),W.\u0275inj=s.Lb({factory:function(t){return new(t||W)},imports:[[o.e.forChild(_)],o.e]}),W),et=a("FpXt"),nt=((Z=function t(){n(this,t)}).\u0275mod=s.Mb({type:Z}),Z.\u0275inj=s.Lb({factory:function(t){return new(t||Z)},providers:[u.c],imports:[[c.c,tt,et.a]]}),Z)}}])}();
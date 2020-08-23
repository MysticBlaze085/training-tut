!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function i(n,i,o){return i&&t(n.prototype,i),o&&t(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,o,e){"use strict";e.r(o),e.d(o,"AuthModule",(function(){return J}));var r,c=e("ofXK"),a=e("tyNb"),s=e("fXoL"),u=e("3Pt+"),b=e("LRne"),p=e("hu7N"),f=((r=function(){function t(){n(this,t)}return i(t,[{key:"getSignupInputs",value:function(){var n=[new p.b({key:"emailAddress",label:"Email",type:"email",required:!0,validators:[u.r.required,u.r.email,u.r.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")],errorMessage:"Please enter a valid Email address!",order:1}),new p.b({key:"password",label:"Password",type:"password",required:!0,validators:[u.r.required,u.r.minLength(8)],errorMessage:"Please enter a password 8 characters long!",order:3})];return Object(b.a)(n.sort((function(n,t){return n.order-t.order})))}}]),t}()).\u0275fac=function(n){return new(n||r)},r.\u0275prov=s.Kb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),l=e("J9tS"),g=e("XiUz"),d=e("Wp6s"),m=e("znSr"),v=e("bTqV"),y=e("BESU");function h(n,t){if(1&n&&(s.Ub(0,"div",9),s.Pb(1,"app-dynamic-form-input",10),s.Tb()),2&n){var i=t.$implicit,o=s.kc(2);s.pc("ngClass",o.class),s.Bb(1),s.pc("inputs",i)("form",o.form)("ngClass",o.class)}}function w(n,t){if(1&n&&(s.Ub(0,"div"),s.Ub(1,"strong"),s.Jc(2,"Saved the following values"),s.Tb(),s.Pb(3,"br"),s.Jc(4),s.Tb()),2&n){var i=s.kc(2);s.Bb(4),s.Kc(i.payLoad)}}var k=function(){return["/welcome/login/signup"]};function C(n,t){if(1&n){var i=s.Vb();s.Ub(0,"div",1),s.Ub(1,"mat-card",2),s.Ub(2,"form",3),s.gc("ngSubmit",(function(){return s.zc(i),s.kc().onSubmit()})),s.Hc(3,h,2,4,"div",4),s.Ub(4,"div",5),s.Ub(5,"button",6),s.Jc(6,"Signup"),s.Tb(),s.Ub(7,"button",7),s.Jc(8),s.Tb(),s.Tb(),s.Tb(),s.Hc(9,w,5,1,"div",8),s.Tb(),s.Tb()}if(2&n){var o=s.kc();s.Bb(2),s.pc("formGroup",o.form),s.Bb(1),s.pc("ngForOf",o.inputs),s.Bb(1),s.pc("ngClass",o.class),s.Bb(1),s.pc("routerLink",s.sc(7,k)),s.Bb(2),s.pc("disabled",!o.form.valid),s.Bb(1),s.Lc(" ",o.buttonText," "),s.Bb(1),s.pc("ngIf",o.payLoad)}}function L(n,t){if(1&n&&(s.Ub(0,"div",5),s.Pb(1,"app-dynamic-form-input",8),s.Tb()),2&n){var i=t.$implicit,o=s.kc(2);s.pc("ngClass",o.class),s.Bb(1),s.pc("inputs",i)("form",o.form)("ngClass",o.class)}}function S(n,t){if(1&n&&(s.Ub(0,"div"),s.Ub(1,"strong"),s.Jc(2,"Saved the following values"),s.Tb(),s.Pb(3,"br"),s.Jc(4),s.Tb()),2&n){var i=s.kc(2);s.Bb(4),s.Kc(i.payLoad)}}function T(n,t){if(1&n){var i=s.Vb();s.Ub(0,"div",1),s.Ub(1,"mat-card",2),s.Ub(2,"form",3),s.gc("ngSubmit",(function(){return s.zc(i),s.kc().onSubmit()})),s.Hc(3,L,2,4,"div",4),s.Ub(4,"div",5),s.Ub(5,"button",6),s.Jc(6),s.Tb(),s.Tb(),s.Tb(),s.Hc(7,S,5,1,"div",7),s.Tb(),s.Tb()}if(2&n){var o=s.kc();s.Bb(2),s.pc("formGroup",o.form),s.Bb(1),s.pc("ngForOf",o.inputs),s.Bb(1),s.pc("ngClass",o.class),s.Bb(1),s.pc("disabled",!o.form.valid),s.Bb(1),s.Lc(" ",o.buttonText," "),s.Bb(1),s.pc("ngIf",o.payLoad)}}var O,U,x,B,I=[{path:"",component:(U=function(){function t(i,o){n(this,t),this.loginService=i,this.dynFormCtrl=o,this.inputs=[],this.buttonText="Submit",this.payLoad=""}return i(t,[{key:"ngOnInit",value:function(){var n=this;this.inputs$=this.loginService.getSignupInputs().subscribe((function(t){n.inputs=t,n.form=n.dynFormCtrl.toFormGroup(t)}))}},{key:"onSubmit",value:function(){this.payLoad=JSON.stringify(this.form.getRawValue())}},{key:"ngOnDestroy",value:function(){this.inputs$.unsubscribe()}}]),t}(),U.\u0275fac=function(n){return new(n||U)(s.Ob(f),s.Ob(l.a))},U.\u0275cmp=s.Ib({type:U,selectors:[["app-login"]],decls:1,vars:1,consts:[["class","login-container","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"login-container"],["color","accent",1,"login-content","p-5"],[3,"formGroup","ngSubmit"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"d-flex","flex-row",3,"ngClass"],["mat-raised-button","","color","accent",1,"w-100","mr-1",3,"routerLink"],["mat-raised-button","","type","submit","color","primary",1,"w-100",3,"disabled"],[4,"ngIf"],[3,"ngClass"],[3,"inputs","form","ngClass"]],template:function(n,t){1&n&&s.Hc(0,C,10,8,"div",0),2&n&&s.pc("ngIf",t.inputs.length)},directives:[c.l,g.c,g.b,d.a,u.t,u.m,u.g,c.k,c.j,m.a,v.a,a.a,y.a],styles:[".login-container[_ngcontent-%COMP%]{height:100%}.login-container[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{max-width:500px;width:100%}"],changeDetection:0}),U)},{path:"signup",component:(O=function(){function t(i,o){n(this,t),this.signupFormService=i,this.dynFormCtrl=o,this.inputs=[],this.buttonText="Submit",this.payLoad=""}return i(t,[{key:"ngOnInit",value:function(){var n=this;this.inputs$=this.signupFormService.getSignupInputs().subscribe((function(t){n.inputs=t,n.form=n.dynFormCtrl.toFormGroup(t)}))}},{key:"onSubmit",value:function(){this.payLoad=JSON.stringify(this.form.getRawValue())}},{key:"ngOnDestroy",value:function(){this.inputs$.unsubscribe()}}]),t}(),O.\u0275fac=function(n){return new(n||O)(s.Ob(l.b),s.Ob(l.a))},O.\u0275cmp=s.Ib({type:O,selectors:[["app-signup"]],decls:1,vars:1,consts:[["class","signup-container","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"signup-container"],["color","accent",1,"signup-content","p-5"],[3,"formGroup","ngSubmit"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["mat-raised-button","","type","submit","color","primary",1,"w-100",3,"disabled"],[4,"ngIf"],[3,"inputs","form","ngClass"]],template:function(n,t){1&n&&s.Hc(0,T,8,6,"div",0),2&n&&s.pc("ngIf",t.inputs.length)},directives:[c.l,g.c,g.b,d.a,u.t,u.m,u.g,c.k,c.j,m.a,v.a,y.a],styles:[".signup-container[_ngcontent-%COMP%]{height:100%}.signup-container[_ngcontent-%COMP%]   .signup-content[_ngcontent-%COMP%]{max-width:500px;width:100%}"],changeDetection:0}),O)}],F=((x=function t(){n(this,t)}).\u0275mod=s.Mb({type:x}),x.\u0275inj=s.Lb({factory:function(n){return new(n||x)},imports:[[a.d.forChild(I)],a.d]}),x),P=e("FpXt"),J=((B=function t(){n(this,t)}).\u0275mod=s.Mb({type:B}),B.\u0275inj=s.Lb({factory:function(n){return new(n||B)},imports:[[c.c,F,P.a]]}),B)}}])}();
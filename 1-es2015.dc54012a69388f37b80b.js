(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Yj9t:function(e,t,r){"use strict";r.r(t),r.d(t,"AuthModule",(function(){return P}));var s=r("ofXK"),o=r("tyNb"),n=r("fXoL"),i=r("3Pt+"),a=r("LRne");class c{constructor(e={}){this.value=e.value,this.key=e.key||"",this.label=e.label||"",this.required=!!e.required,this.order=void 0===e.order?1:e.order,this.controlType=e.controlType||"",this.type=e.type||"",this.options=e.options||[],this.validators=e.validators||[],this.errorMessage=e.errorMessage||"",this.class=e.class||"",this.labelPosition=e.labelPosition||""}}class l extends c{constructor(){super(...arguments),this.controlType="textbox"}}class u extends c{constructor(){super(...arguments),this.controlType="datepicker"}}class d extends c{constructor(){super(...arguments),this.controlType="checkbox"}}let b=(()=>{class e{getSignupInputs(){const e=[new l({key:"emailAddress",label:"Email",type:"email",required:!0,validators:[i.r.required,i.r.email,i.r.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")],errorMessage:"Please enter a valid Email address!",order:1}),new l({key:"password",label:"Password",type:"password",required:!0,validators:[i.r.required,i.r.minLength(8)],errorMessage:"Please enter a password 8 characters long!",order:3})];return Object(a.a)(e.sort((e,t)=>e.order-t.order))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),p=(()=>{class e{getSignupInputs(){const e=[new l({key:"emailAddress",label:"Email",type:"email",required:!0,validators:[i.r.required,i.r.email,i.r.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")],errorMessage:"Please enter a valid Email address!",order:1}),new u({key:"dateOfBirth",label:"Date of Birth",type:"datepicker",required:!0,validators:[i.r.required],errorMessage:"Please enter your date of birth!",order:2}),new l({key:"password",label:"Password",type:"password",required:!0,validators:[i.r.required,i.r.minLength(8)],errorMessage:"Please enter a password 8 characters long!",order:3}),new l({key:"confirmPassword",label:"Confirm Password",type:"password",required:!0,validators:[i.r.required,i.r.minLength(8)],errorMessage:"Please confirm password!",order:4}),new d({key:"agreeTerms",label:"Agree to Terms and Conditions",type:"checkbox",required:!0,validators:[i.r.required],errorMessage:"Must agree to terms and conditions!",labelPosition:"before",class:"text-center",order:5})];return Object(a.a)(e.sort((e,t)=>e.order-t.order))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),f=(()=>{class e{constructor(){}toFormGroup(e){const t={};return e.forEach(e=>{t[e.key]=e.required?new i.d(e.value||"",e.validators):new i.d(e.value||"")}),new i.f(t,this.passwordsMatchValidator)}passwordsMatchValidator(e){return e.get("password")&&e.get("confirmPassword")?e.get("password").value===e.get("confirmPassword").value?null:{mismatch:!0}:null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=r("Wp6s"),g=r("bTqV"),h=r("BESU");function y(e,t){if(1&e&&(n.Ub(0,"div",9),n.Pb(1,"app-dynamic-form-input",10),n.Tb()),2&e){const e=t.$implicit,r=n.jc(2);n.oc("ngClass",r.class),n.Bb(1),n.oc("inputs",e)("form",r.form)("ngClass",r.class)}}function v(e,t){if(1&e&&(n.Ub(0,"div"),n.Ub(1,"strong"),n.Ic(2,"Saved the following values"),n.Tb(),n.Pb(3,"br"),n.Ic(4),n.Tb()),2&e){const e=n.jc(2);n.Bb(4),n.Jc(e.payLoad)}}const w=function(){return["/welcome/login/signup"]};function T(e,t){if(1&e){const e=n.Vb();n.Ub(0,"div",1),n.Ub(1,"mat-card",2),n.Ub(2,"form",3),n.fc("ngSubmit",(function(){return n.yc(e),n.jc().onSubmit()})),n.Gc(3,y,2,4,"div",4),n.Ub(4,"div",5),n.Ub(5,"button",6),n.Ic(6,"Signup"),n.Tb(),n.Ub(7,"button",7),n.Ic(8),n.Tb(),n.Tb(),n.Tb(),n.Gc(9,v,5,1,"div",8),n.Tb(),n.Tb()}if(2&e){const e=n.jc();n.Bb(2),n.oc("formGroup",e.form),n.Bb(1),n.oc("ngForOf",e.inputs),n.Bb(1),n.oc("ngClass",e.class),n.Bb(1),n.oc("routerLink",n.rc(7,w)),n.Bb(2),n.oc("disabled",!e.form.valid),n.Bb(1),n.Kc(" ",e.buttonText," "),n.Bb(1),n.oc("ngIf",e.payLoad)}}function I(e,t){if(1&e&&(n.Ub(0,"div",5),n.Pb(1,"app-dynamic-form-input",8),n.Tb()),2&e){const e=t.$implicit,r=n.jc(2);n.oc("ngClass",r.class),n.Bb(1),n.oc("inputs",e)("form",r.form)("ngClass",r.class)}}function S(e,t){if(1&e&&(n.Ub(0,"div"),n.Ub(1,"strong"),n.Ic(2,"Saved the following values"),n.Tb(),n.Pb(3,"br"),n.Ic(4),n.Tb()),2&e){const e=n.jc(2);n.Bb(4),n.Jc(e.payLoad)}}function k(e,t){if(1&e){const e=n.Vb();n.Ub(0,"div",1),n.Ub(1,"mat-card",2),n.Ub(2,"form",3),n.fc("ngSubmit",(function(){return n.yc(e),n.jc().onSubmit()})),n.Gc(3,I,2,4,"div",4),n.Ub(4,"div",5),n.Ub(5,"button",6),n.Ic(6),n.Tb(),n.Tb(),n.Tb(),n.Gc(7,S,5,1,"div",7),n.Tb(),n.Tb()}if(2&e){const e=n.jc();n.Bb(2),n.oc("formGroup",e.form),n.Bb(1),n.oc("ngForOf",e.inputs),n.Bb(1),n.oc("ngClass",e.class),n.Bb(1),n.oc("disabled",!e.form.valid),n.Bb(1),n.Kc(" ",e.buttonText," "),n.Bb(1),n.oc("ngIf",e.payLoad)}}const x=[{path:"",component:(()=>{class e{constructor(e,t){this.loginService=e,this.dynFormCtrl=t,this.inputs=[],this.buttonText="Submit",this.payLoad=""}ngOnInit(){this.inputs$=this.loginService.getSignupInputs().subscribe(e=>{this.inputs=e,this.form=this.dynFormCtrl.toFormGroup(e)})}onSubmit(){this.payLoad=JSON.stringify(this.form.getRawValue())}ngOnDestroy(){this.inputs$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(b),n.Ob(f))},e.\u0275cmp=n.Ib({type:e,selectors:[["app-login"]],decls:1,vars:1,consts:[["class","h-100 d-flex flex-column align-items-center justify-content-center",4,"ngIf"],[1,"h-100","d-flex","flex-column","align-items-center","justify-content-center"],["color","accent",1,"p-5","w-50"],[3,"formGroup","ngSubmit"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"d-flex","flex-row",3,"ngClass"],["mat-raised-button","","color","accent",1,"w-100","mr-1",3,"routerLink"],["mat-raised-button","","type","submit","color","primary",1,"w-100",3,"disabled"],[4,"ngIf"],[3,"ngClass"],[3,"inputs","form","ngClass"]],template:function(e,t){1&e&&n.Gc(0,T,10,8,"div",0),2&e&&n.oc("ngIf",t.inputs.length)},directives:[s.l,m.a,i.t,i.m,i.g,s.k,s.j,g.a,o.a,h.a],encapsulation:2,changeDetection:0}),e})()},{path:"signup",component:(()=>{class e{constructor(e,t){this.signupFormService=e,this.dynFormCtrl=t,this.inputs=[],this.buttonText="Submit",this.payLoad=""}ngOnInit(){this.inputs$=this.signupFormService.getSignupInputs().subscribe(e=>{this.inputs=e,this.form=this.dynFormCtrl.toFormGroup(e)})}onSubmit(){this.payLoad=JSON.stringify(this.form.getRawValue())}ngOnDestroy(){this.inputs$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(p),n.Ob(f))},e.\u0275cmp=n.Ib({type:e,selectors:[["app-signup"]],decls:1,vars:1,consts:[["class","h-100 d-flex flex-column align-items-center justify-content-center",4,"ngIf"],[1,"h-100","d-flex","flex-column","align-items-center","justify-content-center"],["color","accent",1,"p-5","w-50"],[3,"formGroup","ngSubmit"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["mat-raised-button","","type","submit","color","primary",1,"w-100",3,"disabled"],[4,"ngIf"],[3,"inputs","form","ngClass"]],template:function(e,t){1&e&&n.Gc(0,k,8,6,"div",0),2&e&&n.oc("ngIf",t.inputs.length)},directives:[s.l,m.a,i.t,i.m,i.g,s.k,s.j,g.a,h.a],encapsulation:2,changeDetection:0}),e})()}];let B=(()=>{class e{}return e.\u0275mod=n.Mb({type:e}),e.\u0275inj=n.Lb({factory:function(t){return new(t||e)},imports:[[o.b.forChild(x)],o.b]}),e})();var C=r("FpXt");let P=(()=>{class e{}return e.\u0275mod=n.Mb({type:e}),e.\u0275inj=n.Lb({factory:function(t){return new(t||e)},imports:[[s.c,B,C.a]]}),e})()}}]);
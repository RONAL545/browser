import{b as lt}from"./chunk-WCFAM2EP.js";import{d as Ke}from"./chunk-FLR6VCGG.js";import{b as Ze}from"./chunk-OHRZ6MUE.js";import{a as de}from"./chunk-GJU3AZEO.js";import{b as Xe,c as rt,d as pt,i as st,k as ct}from"./chunk-BTUY7LOD.js";import{A as et,B as tt,G as nt,H as it,K as ot,L as at,a as Le,b as Re,c as ze,f as Ne,g as Be,i as Qe,j as $e,k as Ge,m as He,n as qe,o as Ue,p as je,q as ce,r as We,w as Ye,y as Je}from"./chunk-T3CWT4SN.js";import{I as le,J as V,_ as fe,aa as U,ba as B,ca as Q,ea as be,oa as Fe,ra as re,sa as j,ta as pe,ya as se,za as Pe}from"./chunk-VKVIFJLB.js";import{a as De}from"./chunk-H7Z7H6FO.js";import{$a as p,$b as Ee,Aa as I,Ab as _,Ba as Ce,Bb as h,Cb as K,Db as q,Dc as Ve,Fb as Oe,Fc as Ae,Ga as P,Gb as Te,Hb as Se,Ib as ee,Jb as Me,K as ve,Kb as k,L as Z,La as R,Lb as te,M as ge,Ma as _e,Mb as he,Oa as Y,Q as $,Qa as u,Ub as L,V as m,W as g,Wa as v,X as F,Yb as ne,ab as c,bb as d,ca as W,cb as C,ea as xe,ec as f,fa as G,fc as D,gb as S,hb as M,ib as E,jb as O,lb as b,nb as l,ob as we,pb as Ie,pc as ie,qb as T,qc as oe,ra as ye,rb as A,rc as z,sb as x,sc as ke,tb as y,tc as ae,va as s,wb as H,wc as N,xb as J,zb as X}from"./chunk-BZMIPBVR.js";import"./chunk-4CLCTAJ7.js";var dt=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var Ct=["removeicon"],wt=["*"];function It(n,a){if(n&1){let e=O();c(0,"img",4),b("error",function(i){m(e);let o=l();return g(o.imageError(i))}),d()}if(n&2){let e=l();_(e.cx("image")),p("src",e.image,ye)("alt",e.alt)}}function Ot(n,a){if(n&1&&C(0,"span",6),n&2){let e=l(2);_(e.icon),p("ngClass",e.cx("icon")),v("data-pc-section","icon")}}function Tt(n,a){if(n&1&&u(0,Ot,1,4,"span",5),n&2){let e=l();p("ngIf",e.icon)}}function St(n,a){if(n&1&&(c(0,"div"),h(1),d()),n&2){let e=l();_(e.cx("label")),v("data-pc-section","label"),s(),K(e.label)}}function Mt(n,a){if(n&1){let e=O();c(0,"span",10),b("click",function(i){m(e);let o=l(3);return g(o.close(i))})("keydown",function(i){m(e);let o=l(3);return g(o.onKeydown(i))}),d()}if(n&2){let e=l(3);_(e.removeIcon),p("ngClass",e.cx("removeIcon")),v("data-pc-section","removeicon")("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function Et(n,a){if(n&1){let e=O();F(),c(0,"svg",11),b("click",function(i){m(e);let o=l(3);return g(o.close(i))})("keydown",function(i){m(e);let o=l(3);return g(o.onKeydown(i))}),d()}if(n&2){let e=l(3);_(e.cx("removeIcon")),v("data-pc-section","removeicon")("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function kt(n,a){if(n&1&&(S(0),u(1,Mt,1,6,"span",8)(2,Et,1,5,"svg",9),M()),n&2){let e=l(2);s(),p("ngIf",e.removeIcon),s(),p("ngIf",!e.removeIcon)}}function Vt(n,a){}function At(n,a){n&1&&u(0,Vt,0,0,"ng-template")}function Kt(n,a){if(n&1){let e=O();c(0,"span",12),b("click",function(i){m(e);let o=l(2);return g(o.close(i))})("keydown",function(i){m(e);let o=l(2);return g(o.onKeydown(i))}),u(1,At,1,0,null,13),d()}if(n&2){let e=l(2);_(e.cx("removeIcon")),v("tabindex",e.disabled?-1:0)("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),s(),p("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Lt(n,a){if(n&1&&(S(0),u(1,kt,3,2,"ng-container",3)(2,Kt,2,6,"span",7),M()),n&2){let e=l();s(),p("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),p("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Ft={root:({instance:n})=>["p-chip p-component",{"p-disabled":n.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},ut=(()=>{class n extends se{name="chip";theme=dt;classes=Ft;static \u0275fac=(()=>{let e;return function(i){return(e||(e=G(n)))(i||n)}})();static \u0275prov=Z({token:n,factory:n.\u0275fac})}return n})();var _t=(()=>{class n extends je{label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new I;onImageError=new I;visible=!0;get removeAriaLabel(){return this.config.getTranslation(pe.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([t,i])=>this[`_${t}`]!==i&&(this[`_${t}`]=i))}_chipProps;_componentStyle=$(ut);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:t}=e.chipProps;t.label!==void 0&&(this.label=t.label),t.icon!==void 0&&(this.icon=t.icon),t.image!==void 0&&(this.image=t.image),t.alt!==void 0&&(this.alt=t.alt),t.styleClass!==void 0&&(this.styleClass=t.styleClass),t.removable!==void 0&&(this.removable=t.removable),t.removeIcon!==void 0&&(this.removeIcon=t.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=G(n)))(i||n)}})();static \u0275cmp=R({type:n,selectors:[["p-chip"]],contentQueries:function(t,i,o){if(t&1&&(T(o,Ct,4),T(o,re,4)),t&2){let r;x(r=y())&&(i.removeIconTemplate=r.first),x(r=y())&&(i.templates=r)}},hostVars:7,hostBindings:function(t,i){t&2&&(v("data-pc-name","chip")("aria-label",i.label)("data-pc-section","root"),_(i.cn(i.cx("root"),i.styleClass)),J("display",!i.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",f],removable:[2,"removable","removable",f],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[ee([ut]),Y,xe],ngContentSelectors:wt,decls:6,vars:4,consts:[["iconTemplate",""],[3,"class","src","alt","error",4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],["role","button",3,"class","click","keydown",4,"ngIf"],["role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown"],["role","button",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(we(),Ie(0),u(1,It,1,4,"img",1)(2,Tt,1,1,"ng-template",null,0,L)(4,St,2,4,"div",2)(5,Lt,3,2,"ng-container",3)),t&2){let o=H(3);s(),p("ngIf",i.image)("ngIfElse",o),s(3),p("ngIf",i.label),s(),p("ngIf",i.removable)}},dependencies:[N,ie,z,ae,de,j],encapsulation:2,changeDetection:0})}return n})();var ht=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`;var Pt=["item"],Dt=["empty"],Rt=["header"],zt=["footer"],Nt=["selecteditem"],Bt=["group"],Qt=["loader"],$t=["removeicon"],Gt=["loadingicon"],Ht=["clearicon"],qt=["dropdownicon"],Ut=["focusInput"],jt=["multiIn"],Zt=["multiContainer"],Wt=["ddBtn"],Yt=["items"],Jt=["scroller"],Xt=["overlay"],en=n=>({i:n}),bt=n=>({$implicit:n}),tn=(n,a,e)=>({removeCallback:n,index:a,class:e}),ue=n=>({height:n}),vt=(n,a)=>({$implicit:n,options:a}),nn=n=>({options:n}),on=()=>({}),an=(n,a,e)=>({option:n,i:a,scrollerOptions:e}),ln=(n,a)=>({$implicit:n,index:a});function rn(n,a){if(n&1){let e=O();c(0,"input",18,2),b("input",function(i){m(e);let o=l();return g(o.onInput(i))})("keydown",function(i){m(e);let o=l();return g(o.onKeyDown(i))})("change",function(i){m(e);let o=l();return g(o.onInputChange(i))})("focus",function(i){m(e);let o=l();return g(o.onInputFocus(i))})("blur",function(i){m(e);let o=l();return g(o.onInputBlur(i))})("paste",function(i){m(e);let o=l();return g(o.onInputPaste(i))})("keyup",function(i){m(e);let o=l();return g(o.onInputKeyUp(i))}),d()}if(n&2){let e=l();_(e.cn(e.cx("pcInputText"),e.inputStyleClass)),p("pAutoFocus",e.autofocus)("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid),v("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function pn(n,a){if(n&1){let e=O();F(),c(0,"svg",21),b("click",function(){m(e);let i=l(2);return g(i.clear())}),d()}if(n&2){let e=l(2);_(e.cx("clearIcon")),v("aria-hidden",!0)}}function sn(n,a){}function cn(n,a){n&1&&u(0,sn,0,0,"ng-template")}function dn(n,a){if(n&1){let e=O();c(0,"span",22),b("click",function(){m(e);let i=l(2);return g(i.clear())}),u(1,cn,1,0,null,23),d()}if(n&2){let e=l(2);_(e.cx("clearIcon")),v("aria-hidden",!0),s(),p("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function un(n,a){if(n&1&&(S(0),u(1,pn,1,3,"svg",19)(2,dn,2,4,"span",20),M()),n&2){let e=l();s(),p("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),p("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function mn(n,a){n&1&&E(0)}function gn(n,a){if(n&1){let e=O();c(0,"span",22),b("click",function(i){m(e);let o=l(2).index,r=l(2);return g(!r.readonly&&!r.$disabled()?r.removeOption(i,o):"")}),F(),C(1,"svg",30),d()}if(n&2){let e=l(4);_(e.cx("chipIcon")),s(),_(e.cx("chipIcon")),v("aria-hidden",!0)}}function _n(n,a){}function hn(n,a){n&1&&u(0,_n,0,0,"ng-template")}function fn(n,a){if(n&1&&(c(0,"span"),u(1,hn,1,0,null,29),d()),n&2){let e=l(2).index,t=l(2);v("aria-hidden",!0),s(),p("ngTemplateOutlet",t.removeIconTemplate||t._removeIconTemplate)("ngTemplateOutletContext",he(3,tn,t.removeOption.bind(t),e,t.cx("chipIcon")))}}function bn(n,a){if(n&1&&u(0,gn,2,5,"span",20)(1,fn,2,7,"span",14),n&2){let e=l(3);p("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),p("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function vn(n,a){if(n&1){let e=O();c(0,"li",26,5)(2,"p-chip",28),b("onRemove",function(i){let o=m(e).index,r=l(2);return g(r.readonly?"":r.removeOption(i,o))}),u(3,mn,1,0,"ng-container",29)(4,bn,2,2,"ng-template",null,6,L),d()()}if(n&2){let e=a.$implicit,t=a.index,i=l(2);_(i.cx("chipItem",k(14,en,t))),v("id",i.id+"_multiple_option_"+t)("aria-label",i.getOptionLabel(e))("aria-setsize",i.modelValue().length)("aria-posinset",t+1)("aria-selected",!0),s(2),_(i.cx("pcChip")),p("label",!i.selectedItemTemplate&&!i._selectedItemTemplate&&i.getOptionLabel(e))("disabled",i.$disabled())("removable",!0),s(),p("ngTemplateOutlet",i.selectedItemTemplate||i._selectedItemTemplate)("ngTemplateOutletContext",k(16,bt,e))}}function xn(n,a){if(n&1){let e=O();c(0,"ul",24,3),b("focus",function(i){m(e);let o=l();return g(o.onMultipleContainerFocus(i))})("blur",function(i){m(e);let o=l();return g(o.onMultipleContainerBlur(i))})("keydown",function(i){m(e);let o=l();return g(o.onMultipleContainerKeyDown(i))}),u(2,vn,6,18,"li",25),c(3,"li",26)(4,"input",27,4),b("input",function(i){m(e);let o=l();return g(o.onInput(i))})("keydown",function(i){m(e);let o=l();return g(o.onKeyDown(i))})("change",function(i){m(e);let o=l();return g(o.onInputChange(i))})("focus",function(i){m(e);let o=l();return g(o.onInputFocus(i))})("blur",function(i){m(e);let o=l();return g(o.onInputBlur(i))})("paste",function(i){m(e);let o=l();return g(o.onInputPaste(i))})("keyup",function(i){m(e);let o=l();return g(o.onInputKeyUp(i))}),d()()()}if(n&2){let e=l();_(e.cx("inputMultiple")),p("tabindex",-1),v("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),s(2),p("ngForOf",e.modelValue()),s(),_(e.cx("inputChip")),s(),_(e.cx("pcInputText")),p("pAutoFocus",e.autofocus)("ngStyle",e.inputStyle),v("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function yn(n,a){if(n&1&&(F(),C(0,"svg",33)),n&2){let e=l(2);_(e.cx("loader")),p("spin",!0),v("aria-hidden",!0)}}function Cn(n,a){}function wn(n,a){n&1&&u(0,Cn,0,0,"ng-template")}function In(n,a){if(n&1&&(c(0,"span"),u(1,wn,1,0,null,23),d()),n&2){let e=l(2);_(e.cx("loader")),v("aria-hidden",!0),s(),p("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function On(n,a){if(n&1&&(S(0),u(1,yn,1,4,"svg",31)(2,In,2,4,"span",32),M()),n&2){let e=l();s(),p("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),p("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Tn(n,a){if(n&1&&C(0,"span",36),n&2){let e=l(2);p("ngClass",e.dropdownIcon),v("aria-hidden",!0)}}function Sn(n,a){n&1&&(F(),C(0,"svg",38))}function Mn(n,a){}function En(n,a){n&1&&u(0,Mn,0,0,"ng-template")}function kn(n,a){if(n&1&&(S(0),u(1,Sn,1,0,"svg",37)(2,En,1,0,null,23),M()),n&2){let e=l(2);s(),p("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),s(),p("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Vn(n,a){if(n&1){let e=O();c(0,"button",34,7),b("click",function(i){m(e);let o=l();return g(o.handleDropdownClick(i))}),u(2,Tn,1,2,"span",35)(3,kn,3,2,"ng-container",14),d()}if(n&2){let e=l();_(e.cx("dropdown")),p("disabled",e.$disabled()),v("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),s(2),p("ngIf",e.dropdownIcon),s(),p("ngIf",!e.dropdownIcon)}}function An(n,a){n&1&&E(0)}function Kn(n,a){n&1&&E(0)}function Ln(n,a){if(n&1&&u(0,Kn,1,0,"ng-container",29),n&2){let e=a.$implicit,t=a.options;l(2);let i=H(6);p("ngTemplateOutlet",i)("ngTemplateOutletContext",te(2,vt,e,t))}}function Fn(n,a){n&1&&E(0)}function Pn(n,a){if(n&1&&u(0,Fn,1,0,"ng-container",29),n&2){let e=a.options,t=l(4);p("ngTemplateOutlet",t.loaderTemplate||t._loaderTemplate)("ngTemplateOutletContext",k(2,nn,e))}}function Dn(n,a){n&1&&(S(0),u(1,Pn,1,4,"ng-template",null,10,L),M())}function Rn(n,a){if(n&1){let e=O();c(0,"p-scroller",42,9),b("onLazyLoad",function(i){m(e);let o=l(2);return g(o.onLazyLoad.emit(i))}),u(2,Ln,1,5,"ng-template",null,1,L)(4,Dn,3,0,"ng-container",14),d()}if(n&2){let e=l(2);X(k(8,ue,e.scrollHeight)),p("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),s(4),p("ngIf",e.loaderTemplate||e._loaderTemplate)}}function zn(n,a){n&1&&E(0)}function Nn(n,a){if(n&1&&(S(0),u(1,zn,1,0,"ng-container",29),M()),n&2){l();let e=H(6),t=l();s(),p("ngTemplateOutlet",e)("ngTemplateOutletContext",te(3,vt,t.visibleOptions(),Me(2,on)))}}function Bn(n,a){if(n&1&&(c(0,"span"),h(1),d()),n&2){let e=l(2).$implicit,t=l(3);s(),K(t.getOptionGroupLabel(e.optionGroup))}}function Qn(n,a){n&1&&E(0)}function $n(n,a){if(n&1&&(S(0),c(1,"li",46),u(2,Bn,2,1,"span",14)(3,Qn,1,0,"ng-container",29),d(),M()),n&2){let e=l(),t=e.$implicit,i=e.index,o=l().options,r=l(2);s(),_(r.cx("optionGroup")),p("ngStyle",k(7,ue,o.itemSize+"px")),v("id",r.id+"_"+r.getOptionIndex(i,o)),s(),p("ngIf",!r.groupTemplate),s(),p("ngTemplateOutlet",r.groupTemplate)("ngTemplateOutletContext",k(9,bt,t.optionGroup))}}function Gn(n,a){if(n&1&&(c(0,"span"),h(1),d()),n&2){let e=l(2).$implicit,t=l(3);s(),K(t.getOptionLabel(e))}}function Hn(n,a){n&1&&E(0)}function qn(n,a){if(n&1){let e=O();S(0),c(1,"li",47),b("click",function(i){m(e);let o=l().$implicit,r=l(3);return g(r.onOptionSelect(i,o))})("mouseenter",function(i){m(e);let o=l().index,r=l().options,w=l(2);return g(w.onOptionMouseEnter(i,w.getOptionIndex(o,r)))}),u(2,Gn,2,1,"span",14)(3,Hn,1,0,"ng-container",29),d(),M()}if(n&2){let e=l(),t=e.$implicit,i=e.index,o=l().options,r=l(2);s(),_(r.cx("option",he(13,an,t,i,o))),p("ngStyle",k(17,ue,o.itemSize+"px")),v("id",r.id+"_"+r.getOptionIndex(i,o))("aria-label",r.getOptionLabel(t))("aria-selected",r.isSelected(t))("aria-disabled",r.isOptionDisabled(t))("data-p-focused",r.focusedOptionIndex()===r.getOptionIndex(i,o))("aria-setsize",r.ariaSetSize)("aria-posinset",r.getAriaPosInset(r.getOptionIndex(i,o))),s(),p("ngIf",!r.itemTemplate&&!r._itemTemplate),s(),p("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",te(19,ln,t,o.getOptions?o.getOptions(i):i))}}function Un(n,a){if(n&1&&u(0,$n,4,11,"ng-container",14)(1,qn,4,22,"ng-container",14),n&2){let e=a.$implicit,t=l(3);p("ngIf",t.isOptionGroup(e)),s(),p("ngIf",!t.isOptionGroup(e))}}function jn(n,a){if(n&1&&(S(0),h(1),M()),n&2){let e=l(4);s(),q(" ",e.searchResultMessageText," ")}}function Zn(n,a){n&1&&E(0,null,12)}function Wn(n,a){if(n&1&&(c(0,"li",46),u(1,jn,2,1,"ng-container",48)(2,Zn,2,0,"ng-container",23),d()),n&2){let e=l().options,t=l(2);_(t.cx("emptyMessage")),p("ngStyle",k(6,ue,e.itemSize+"px")),s(),p("ngIf",!t.emptyTemplate&&!t._emptyTemplate)("ngIfElse",t.empty),s(),p("ngTemplateOutlet",t.emptyTemplate||t._emptyTemplate)}}function Yn(n,a){if(n&1&&(c(0,"ul",43,11),u(2,Un,2,2,"ng-template",44)(3,Wn,3,8,"li",45),d()),n&2){let e=a.$implicit,t=a.options,i=l(2);X(t.contentStyle),_(i.cn(i.cx("list"),t.contentStyleClass)),v("id",i.id+"_list")("aria-label",i.listLabel),s(2),p("ngForOf",e),s(),p("ngIf",!e||e&&e.length===0&&i.showEmptyMessage)}}function Jn(n,a){n&1&&E(0)}function Xn(n,a){if(n&1&&(c(0,"div",39),u(1,An,1,0,"ng-container",23),c(2,"div"),u(3,Rn,5,10,"p-scroller",40)(4,Nn,2,6,"ng-container",14),d(),u(5,Yn,4,8,"ng-template",null,8,L)(7,Jn,1,0,"ng-container",23),d(),c(8,"span",41),h(9),d()),n&2){let e=l();_(e.cn(e.cx("overlay"),e.panelStyleClass)),p("ngStyle",e.panelStyle),s(),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),_(e.cx("listContainer")),J("max-height",e.virtualScroll?"auto":e.scrollHeight),s(),p("ngIf",e.virtualScroll),s(),p("ngIf",!e.virtualScroll),s(3),p("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),s(2),q(" ",e.selectedMessageText," ")}}var ei=`
    ${ht}

    /* For PrimeNG */
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.focus.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }
`,ti={root:{position:"relative"}},ni={root:({instance:n})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":n.invalid(),"p-focus":n.focused,"p-inputwrapper-filled":n.$filled(),"p-inputwrapper-focus":n.focused&&!n.$disabled()||n.autofocus||n.overlayVisible,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-clearable":n.showClear&&!n.$disabled(),"p-autocomplete-fluid":n.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:n})=>["p-autocomplete-input-multiple",{"p-disabled":n.$disabled(),"p-variant-filled":n.$variant()==="filled"}],chipItem:({instance:n,i:a})=>["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex()===a}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:n})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":n.$variant()==="filled","p-ripple-disabled":n.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:n,option:a,i:e,scrollerOptions:t})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":n.isSelected(a),"p-focus":n.focusedOptionIndex()===n.getOptionIndex(e,t),"p-disabled":n.isOptionDisabled(a)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},ft=(()=>{class n extends se{name="autocomplete";theme=ei;classes=ni;inlineStyles=ti;static \u0275fac=(()=>{let e;return function(i){return(e||(e=G(n)))(i||n)}})();static \u0275prov=Z({token:n,factory:n.\u0275fac})}return n})();var ii={provide:Re,useExisting:ve(()=>xt),multi:!0},xt=(()=>{class n extends Je{overlayService;zone;minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;addOnTab=!1;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;addOnBlur=!1;separator;appendTo=Ee(void 0);completeMethod=new I;onSelect=new I;onUnselect=new I;onAdd=new I;onFocus=new I;onBlur=new I;onDropdownClick=new I;onClear=new I;onInputKeydown=new I;onKeyUp=new I;onShow=new I;onHide=new I;onLazyLoad=new I;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}primeng=$(Pe);value;_suggestions=W(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=W(-1);focusedOptionIndex=W(-1);_componentStyle=$(ft);$appendTo=ne(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=ne(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=ne(()=>{let e=this.modelValue(),t=this.optionValueSelected?(this.suggestions||[]).find(i=>Q(i,e,this.equalityKey())):e;if(U(e))if(typeof e=="object"||this.optionValueSelected){let i=this.getOptionLabel(t);return i??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return U(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(pe.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,t){super(),this.overlayService=e,this.zone=t}ngOnInit(){super.ngOnInit(),this.id=this.id||Le("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((t,i,o)=>{t.push({optionGroup:i,group:!0,index:o});let r=this.getOptionGroupChildren(i);return r&&r.forEach(w=>t.push(w)),t},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return be(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let t=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return t>-1?t+e+1:e}findPrevOptionIndex(e){let t=e>0?be(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return t>-1?t:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?B(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.some(t=>Q(t,e,this.equalityKey())):!1:Q(this.modelValue(),e,this.equalityKey())}isOptionMatched(e,t){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===t.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL?.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.optionValue?void 0:this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&V(this.inputEL?.nativeElement)}handleDropdownClick(e){let t;this.overlayVisible?this.hide(!0):(V(this.inputEL?.nativeElement),t=this.inputEL?.nativeElement?.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,t,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:t})}onInput(e){if(this.typeahead){let t=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength()!==null&&(i=i.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=t?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let t=!1;if(this.visibleOptions()){let i=this.visibleOptions().find(o=>this.isOptionMatched(o,this.inputEL?.nativeElement?.value||""));i!==void 0&&(t=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}t||(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){if(this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.addOnBlur&&this.multiple&&!this.typeahead){let t=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="")}this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){if(this.separator&&this.multiple&&!this.typeahead){let t=(e.clipboardData||window.clipboardData)?.getData("Text");if(t){let i=t.split(this.separator),o=[...this.modelValue()||[]];if(i.forEach(r=>{let w=r.trim();w&&!this.isSelected(w)&&o.push(w)}),o.length>(this.modelValue()||[]).length){let r=o.slice((this.modelValue()||[]).length);this.updateModel(o),r.forEach(w=>{this.onAdd.emit({originalEvent:e,value:w})}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault()}}}else this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(this.onInputKeydown.emit(e),e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:this.handleSeparatorKey(e);break}}handleSeparatorKey(e){if(this.separator&&this.multiple&&!this.typeahead&&(this.separator===e.key||typeof this.separator=="string"&&e.key===this.separator||this.separator instanceof RegExp&&e.key.match(this.separator))){let t=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault())}}onArrowDownKey(e){if(!this.overlayVisible)return;let t=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let t=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let t=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(fe(t.value)&&this.hasSelectedOption()?(V(this.multiContainerEL?.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:t}=e,i=t.value.length;t.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:t}=e,i=t.value.length;t.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(!this.typeahead&&!this.forceSelection&&this.multiple){let t=e.target.value?.trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""))}if(this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionIndex()!==-1){this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]);return}if(this.multiple&&!this.typeahead){let t=(this.multiInputEl?.nativeElement?.value||this.inputEL?.nativeElement?.value||"").trim();if(this.addOnTab&&t&&!this.isSelected(t)){this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.updateInputValue(),e.preventDefault(),this.overlayVisible&&this.hide();return}}this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(U(this.modelValue())&&!this.inputEL?.nativeElement?.value){let t=this.modelValue()[this.modelValue().length-1],i=this.modelValue().slice(0,-1);this.updateModel(i),this.onUnselect.emit({originalEvent:e,value:t})}e.stopPropagation()}}onArrowLeftKeyOnMultiple(e){let t=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(t)}onArrowRightKeyOnMultiple(e){let t=this.focusedMultipleOptionIndex();t++,this.focusedMultipleOptionIndex.set(t),t>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),V(this.inputEL?.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,t,i=!0){this.multiple?(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.isSelected(t)||this.updateModel([...this.modelValue()||[],t])):this.updateModel(t),this.onSelect.emit({originalEvent:e,value:t}),i&&this.hide(!0)}onOptionMouseEnter(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)}search(e,t,i){t!=null&&(i==="input"&&t.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:t})))}removeOption(e,t){e.stopPropagation();let i=this.modelValue()[t],o=this.modelValue().filter((r,w)=>w!==t);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:i}),V(this.inputEL?.nativeElement)}updateModel(e){let t=this.multiple?e.map(i=>this.getOptionValue(i)):this.getOptionValue(e);this.value=t,this.writeModelValue(e),this.onModelChange(t),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=le(this.itemsViewChild.nativeElement,`li[id="${t}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,t){this.focusedOptionIndex()!==t&&(this.focusedOptionIndex.set(t),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[t],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),e&&V(this.inputEL?.nativeElement),e&&V(this.inputEL?.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let t=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&V(this.inputEL?.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{t()},0)}clear(){this.updateModel(null),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.onClear.emit()}hasSelectedOption(){return U(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1}getOptionLabel(e){return this.optionLabel?B(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?B(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?B(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?B(e,this.optionGroupChildren):e.items}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=le(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller?.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let t=this.modelValue()?this.focusedOptionIndex():-1;t!==-1&&this.scroller?.scrollToIndex(t)}else{let t=le(this.itemsWrapper,".p-autocomplete-item.p-highlight");t&&t.scrollIntoView({block:"nearest",inline:"center"})}}writeControlValue(e,t){let i=this.multiple?this.visibleOptions().filter(o=>e?.some(r=>Q(r,o,this.equalityKey()))):this.visibleOptions().find(o=>Q(e,o,this.equalityKey()));this.value=e,t(fe(i)?e:i),this.updateInputValue(),this.cd.markForCheck()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)(P(Fe),P(Ce))};static \u0275cmp=R({type:n,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(t,i,o){if(t&1&&(T(o,Pt,5),T(o,Dt,5),T(o,Rt,5),T(o,zt,5),T(o,Nt,5),T(o,Bt,5),T(o,Qt,5),T(o,$t,5),T(o,Gt,5),T(o,Ht,5),T(o,qt,5),T(o,re,4)),t&2){let r;x(r=y())&&(i.itemTemplate=r.first),x(r=y())&&(i.emptyTemplate=r.first),x(r=y())&&(i.headerTemplate=r.first),x(r=y())&&(i.footerTemplate=r.first),x(r=y())&&(i.selectedItemTemplate=r.first),x(r=y())&&(i.groupTemplate=r.first),x(r=y())&&(i.loaderTemplate=r.first),x(r=y())&&(i.removeIconTemplate=r.first),x(r=y())&&(i.loadingIconTemplate=r.first),x(r=y())&&(i.clearIconTemplate=r.first),x(r=y())&&(i.dropdownIconTemplate=r.first),x(r=y())&&(i.templates=r)}},viewQuery:function(t,i){if(t&1&&(A(Ut,5),A(jt,5),A(Zt,5),A(Wt,5),A(Yt,5),A(Jt,5),A(Xt,5)),t&2){let o;x(o=y())&&(i.inputEL=o.first),x(o=y())&&(i.multiInputEl=o.first),x(o=y())&&(i.multiContainerEL=o.first),x(o=y())&&(i.dropdownButton=o.first),x(o=y())&&(i.itemsViewChild=o.first),x(o=y())&&(i.scroller=o.first),x(o=y())&&(i.overlayViewChild=o.first)}},hostVars:4,hostBindings:function(t,i){t&1&&b("click",function(r){return i.onHostClick(r)}),t&2&&(X(i.sx("root")),_(i.cn(i.cx("root"),i.styleClass)))},inputs:{minLength:[2,"minLength","minLength",D],minQueryLength:[2,"minQueryLength","minQueryLength",D],delay:[2,"delay","delay",D],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",f],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",f],virtualScroll:[2,"virtualScroll","virtualScroll",f],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",D],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",f],forceSelection:[2,"forceSelection","forceSelection",f],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",f],baseZIndex:[2,"baseZIndex","baseZIndex",D],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",f],group:[2,"group","group",f],completeOnFocus:[2,"completeOnFocus","completeOnFocus",f],showClear:[2,"showClear","showClear",f],dropdown:[2,"dropdown","dropdown",f],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",f],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",f],addOnTab:[2,"addOnTab","addOnTab",f],tabindex:[2,"tabindex","tabindex",D],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",f],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",f],selectOnFocus:[2,"selectOnFocus","selectOnFocus",f],searchLocale:[2,"searchLocale","searchLocale",f],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",f],typeahead:[2,"typeahead","typeahead",f],addOnBlur:[2,"addOnBlur","addOnBlur",f],separator:"separator",appendTo:[1,"appendTo"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onAdd:"onAdd",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onInputKeydown:"onInputKeydown",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[ee([ii,ft]),Y],decls:9,vars:12,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["focusInput","","multiIn",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","class","ngStyle","variant","invalid","pSize","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"class","disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","hostAttrSelector","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngStyle","variant","invalid","pSize","fluid"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","tabindex"],["role","option",3,"class",4,"ngFor","ngForOf"],["role","option"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngStyle"],[3,"onRemove","label","disabled","removable"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","times-circle"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],[3,"class",4,"ngIf"],["data-p-icon","spinner",3,"spin"],["type","button","pRipple","",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-down"],[3,"ngStyle"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle",4,"ngIf"],["role","option",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(t,i){if(t&1){let o=O();u(0,rn,2,30,"input",13)(1,un,3,2,"ng-container",14)(2,xn,7,33,"ul",15)(3,On,3,2,"ng-container",14)(4,Vn,4,7,"button",16),c(5,"p-overlay",17,0),Se("visibleChange",function(w){return m(o),Te(i.overlayVisible,w)||(i.overlayVisible=w),g(w)}),b("onAnimationStart",function(w){return m(o),g(i.onOverlayAnimationStart(w))})("onHide",function(){return m(o),g(i.hide())}),u(7,Xn,10,12,"ng-template",null,1,L),d()}t&2&&(p("ngIf",!i.multiple),s(),p("ngIf",i.$filled()&&!i.$disabled()&&i.showClear&&!i.loading),s(),p("ngIf",i.multiple),s(),p("ngIf",i.loading),s(),p("ngIf",i.dropdown),s(),p("hostAttrSelector",i.attrSelector),Oe("visible",i.overlayVisible),p("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions))},dependencies:[N,ie,oe,z,ae,ke,rt,ce,it,pt,Ye,de,et,Xe,_t,j,tt],encapsulation:2,changeDetection:0})}return n})(),yt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=_e({type:n});static \u0275inj=ge({imports:[xt,j]})}return n})();function oi(n,a){n&1&&(c(0,"div",23)(1,"div",24)(2,"label",25),h(3,"PL\xC1STICOS"),d(),c(4,"div",26),C(5,"input",27),c(6,"span",28),h(7,"Kg"),d()()(),c(8,"div",24)(9,"label",25),h(10,"ORG\xC1NICOS"),d(),c(11,"div",26),C(12,"input",29),c(13,"span",28),h(14,"Kg"),d()()(),c(15,"div",24)(16,"label",25),h(17,"VIDRIO"),d(),c(18,"div",26),C(19,"input",30),c(20,"span",28),h(21,"Kg"),d()()(),c(22,"div",24)(23,"label",25),h(24,"METALES"),d(),c(25,"div",26),C(26,"input",31),c(27,"span",28),h(28,"Kg"),d()()(),c(29,"div",24)(30,"label",25),h(31,"PAPEL Y CART\xD3N"),d(),c(32,"div",26),C(33,"input",32),c(34,"span",28),h(35,"Kg"),d()()(),c(36,"div",24)(37,"label",25),h(38,"NO APROVECHABLES"),d(),c(39,"div",26),C(40,"input",33),c(41,"span",28),h(42,"Kg"),d()()()())}function ai(n,a){n&1&&(c(0,"div",23)(1,"div",24)(2,"label",25),h(3,"BOTELLAS"),d(),c(4,"div",26),C(5,"input",34),c(6,"span",28),h(7,"Kg"),d()()()())}function li(n,a){n&1&&(c(0,"div",23)(1,"div",24)(2,"label",25),h(3,"PAPEL OFICINA"),d(),c(4,"div",26),C(5,"input",35),c(6,"span",28),h(7,"Kg"),d()()()())}function ri(n,a){if(n&1&&(c(0,"div",38),C(1,"i"),c(2,"p"),h(3),d()()),n&2){let e=a.$implicit;_(e.severity==="success"?"message-success":"message-error"),s(),_(e.severity==="success"?"pi pi-check-circle":"pi pi-times-circle"),s(2),K(e.detail)}}function pi(n,a){if(n&1&&(c(0,"div",36),u(1,ri,4,5,"div",37),d()),n&2){let e=l();s(),p("ngForOf",e.messages)}}var me=class n{constructor(a,e,t){this.fb=a;this.http=e;this.router=t;this.registroForm=this.fb.group({plasticosKg:[""],organicosKg:[""],vidrioKg:[""],metalesKg:[""],papelCartonKg:[""],noAprovechablesKg:[""],botellasKg:[""],papelOficinaKg:[""]})}registroForm;tipoRecoleccionSeleccionado="pilas";activeTabIndex=0;isSubmitting=!1;messages=[];sedeName="";edificioName="";tiposRecoleccion=[{value:"pilas",label:"Pilas"},{value:"canastillas",label:"Canastillas"},{value:"papel_oficina",label:"Tachos"}];apiUrl=De.apiUrl;ngOnInit(){this.loadUserInfo()}loadUserInfo(){let a=JSON.parse(localStorage.getItem("current_user")||"{}");if(!a.sede||!a.edificio){this.messages=[{severity:"error",summary:"Error",detail:"No se pudo obtener la informaci\xF3n de la sede y pabell\xF3n"}];return}this.sedeName=a.sede.nombre||"No asignada",this.edificioName=a.edificio.nombre||"No asignado"}selectTab(a){this.tipoRecoleccionSeleccionado=a,this.registroForm.patchValue({plasticosKg:"",organicosKg:"",vidrioKg:"",metalesKg:"",papelCartonKg:"",noAprovechablesKg:"",botellasKg:"",papelOficinaKg:""})}onSubmit(){if(this.registroForm.invalid){this.registroForm.markAllAsTouched();return}let a=this.registroForm.value,e={tipoRecoleccion:this.tipoRecoleccionSeleccionado,plasticosKg:a.plasticosKg===""?0:parseFloat(a.plasticosKg)||0,organicosKg:a.organicosKg===""?0:parseFloat(a.organicosKg)||0,vidrioKg:a.vidrioKg===""?0:parseFloat(a.vidrioKg)||0,metalesKg:a.metalesKg===""?0:parseFloat(a.metalesKg)||0,papelCartonKg:a.papelCartonKg===""?0:parseFloat(a.papelCartonKg)||0,noAprovechablesKg:a.noAprovechablesKg===""?0:parseFloat(a.noAprovechablesKg)||0,botellasKg:a.botellasKg===""?0:parseFloat(a.botellasKg)||0,papelOficinaKg:a.papelOficinaKg===""?0:parseFloat(a.papelOficinaKg)||0};if(!(e.plasticosKg>0||e.organicosKg>0||e.vidrioKg>0||e.metalesKg>0||e.papelCartonKg>0||e.noAprovechablesKg>0||e.botellasKg>0||e.papelOficinaKg>0)){this.messages=[{severity:"error",summary:"Error",detail:"Debe ingresar al menos un valor mayor a 0 en alguna categor\xEDa"}],setTimeout(()=>{this.messages=[]},5e3);return}this.isSubmitting=!0,this.messages=[];let i=localStorage.getItem("access_token"),o=new Ve({Authorization:`Bearer ${i}`,"Content-Type":"application/json"});this.http.post(`${this.apiUrl}/registros/personal`,e,{headers:o}).subscribe({next:r=>{this.messages=[{severity:"success",summary:"\xC9xito",detail:"Registro guardado exitosamente"}],this.registroForm.patchValue({plasticosKg:"",organicosKg:"",vidrioKg:"",metalesKg:"",papelCartonKg:"",noAprovechablesKg:"",botellasKg:"",papelOficinaKg:""}),this.isSubmitting=!1,setTimeout(()=>{this.messages=[]},5e3)},error:r=>{this.messages=[{severity:"error",summary:"Error",detail:r.error?.message||"Error al guardar el registro"}],this.isSubmitting=!1}})}verRegistros(){this.router.navigate(["/app/personal/registros"])}static \u0275fac=function(e){return new(e||n)(P(He),P(Ae),P(Ke))};static \u0275cmp=R({type:n,selectors:[["app-dashboard"]],decls:31,vars:23,consts:[[1,"dashboard-container"],[1,"dashboard-wrapper"],[1,"header-card"],[1,"header-title"],[1,"header-subtitle"],[1,"dashboard-form",3,"ngSubmit","formGroup"],[1,"edificio-display"],[1,"edificio-label"],[1,"edificio-value"],[1,"tabs-container"],["type","button","icon","pi pi-th-large","styleClass","tab-button",3,"click","label","outlined"],["type","button","icon","pi pi-box","styleClass","tab-button",3,"click","label","outlined"],["type","button","icon","pi pi-file","styleClass","tab-button",3,"click","label","outlined"],[1,"registro-header"],[1,"registro-divider"],[1,"registro-title"],[1,"registro-subtitle"],[1,"form-container"],["class","inputs-grid",4,"ngIf"],["class","messages-container",4,"ngIf"],[1,"buttons-container"],["type","submit","icon","pi pi-save","severity","secondary","styleClass","action-button save-button",3,"label","disabled","loading"],["type","button","label","VER REGISTRO","icon","pi pi-eye","severity","secondary","styleClass","action-button view-button",3,"click","outlined"],[1,"inputs-grid"],[1,"input-field"],[1,"input-label"],[1,"input-with-badge"],["type","text","inputmode","decimal","pInputText","","formControlName","plasticosKg","placeholder","0.00",1,"input-text"],[1,"badge-kg"],["type","text","inputmode","decimal","pInputText","","formControlName","organicosKg","placeholder","0.00",1,"input-text"],["type","text","inputmode","decimal","pInputText","","formControlName","vidrioKg","placeholder","0.00",1,"input-text"],["type","text","inputmode","decimal","pInputText","","formControlName","metalesKg","placeholder","0.00",1,"input-text"],["type","text","inputmode","decimal","pInputText","","formControlName","papelCartonKg","placeholder","0.00",1,"input-text"],["type","text","inputmode","decimal","pInputText","","formControlName","noAprovechablesKg","placeholder","0.00",1,"input-text"],["type","text","inputmode","decimal","pInputText","","formControlName","botellasKg","placeholder","0.00",1,"input-text"],["type","text","inputmode","decimal","pInputText","","formControlName","papelOficinaKg","placeholder","0.00",1,"input-text"],[1,"messages-container"],["class","message",3,"class",4,"ngFor","ngForOf"],[1,"message"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),h(4),d(),c(5,"p",4),h(6,"Ingrese los datos correctamente"),d()(),c(7,"form",5),b("ngSubmit",function(){return t.onSubmit()}),c(8,"div",6)(9,"label",7),h(10,"Edificio"),d(),c(11,"div",8),h(12),d()(),c(13,"div",9)(14,"p-button",10),b("click",function(){return t.selectTab("pilas")}),d(),c(15,"p-button",11),b("click",function(){return t.selectTab("canastillas")}),d(),c(16,"p-button",12),b("click",function(){return t.selectTab("papel_oficina")}),d()(),c(17,"div",13),C(18,"div",14),c(19,"h2",15),h(20,"Registro de Residuos"),d(),c(21,"p",16),h(22,"Ingrese la cantidad en kilogramos para cada categor\xEDa"),d()(),c(23,"div",17),u(24,oi,43,0,"div",18)(25,ai,8,0,"div",18)(26,li,8,0,"div",18),d(),u(27,pi,2,1,"div",19),c(28,"div",20),C(29,"p-button",21),c(30,"p-button",22),b("click",function(){return t.verRegistros()}),d()()()()()),e&2&&(s(4),q("Formulario SEDE ",t.sedeName," - ADMINISTRATIVO"),s(3),p("formGroup",t.registroForm),s(5),K(t.edificioName),s(2),_(t.tipoRecoleccionSeleccionado==="pilas"?"tab-active tab-pilas":""),p("label","Pilas")("outlined",t.tipoRecoleccionSeleccionado!=="pilas"),s(),_(t.tipoRecoleccionSeleccionado==="canastillas"?"tab-active tab-canastillas":""),p("label","Canastillas")("outlined",t.tipoRecoleccionSeleccionado!=="canastillas"),s(),_(t.tipoRecoleccionSeleccionado==="papel_oficina"?"tab-active tab-papel":""),p("label","Papel Oficina")("outlined",t.tipoRecoleccionSeleccionado!=="papel_oficina"),s(8),p("ngIf",t.tipoRecoleccionSeleccionado==="pilas"),s(),p("ngIf",t.tipoRecoleccionSeleccionado==="canastillas"),s(),p("ngIf",t.tipoRecoleccionSeleccionado==="papel_oficina"),s(),p("ngIf",t.messages.length>0),s(2),p("label",t.isSubmitting?"Guardando...":"ENVIAR REGISTRO")("disabled",t.isSubmitting)("loading",t.isSubmitting),s(),p("outlined",!0))},dependencies:[N,oe,z,Ue,Qe,ze,Ne,Be,$e,Ge,qe,Ze,We,ce,ct,at,ot,lt,st,yt,nt],styles:[".dashboard-container[_ngcontent-%COMP%]{min-height:100vh;background:linear-gradient(135deg,#f5f7fa,#c3cfe2);padding:clamp(1rem,4vw,2rem) clamp(.5rem,2vw,1rem)}.dashboard-wrapper[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}.header-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1e3c72,#2a5298);border-radius:12px 12px 0 0;padding:clamp(1rem,3vw,1.5rem);text-align:center;box-shadow:0 4px 6px #0000001a;margin-bottom:0}.header-title[_ngcontent-%COMP%]{color:#fff;font-size:var(--text-xl);font-weight:var(--font-bold);margin:0 0 .25rem;text-transform:uppercase;letter-spacing:var(--tracking-wide)}.header-subtitle[_ngcontent-%COMP%]{color:#ffffffe6;font-size:var(--text-sm);margin:0}.dashboard-form[_ngcontent-%COMP%]{background:#fff;border-radius:0 0 12px 12px;box-shadow:0 4px 12px #0000001a;padding:clamp(1rem,3vw,1.5rem)}.edificio-display[_ngcontent-%COMP%]{margin-bottom:clamp(1rem,3vw,1.5rem);background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:clamp(.5rem,1.5vw,.75rem) clamp(.75rem,2vw,1rem);display:flex;flex-direction:column;gap:.25rem}.edificio-label[_ngcontent-%COMP%]{font-size:var(--text-xs);font-weight:var(--font-semibold);color:#64748b;text-transform:uppercase;letter-spacing:var(--tracking-wide)}.edificio-value[_ngcontent-%COMP%]{font-size:var(--text-base);font-weight:var(--font-semibold);color:#1e293b}.tabs-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(.35rem,1vw,.5rem);margin-bottom:clamp(1rem,3vw,1.5rem)}.tabs-container[_ngcontent-%COMP%]     .p-button{width:100%;padding:clamp(.5rem,1.5vw,.75rem) clamp(.35rem,1vw,.5rem);font-size:var(--text-sm);font-weight:var(--font-semibold);border-radius:8px;transition:all .3s ease}.tabs-container[_ngcontent-%COMP%]     .p-button.p-button-outlined{background:#f9fafb;border:1px solid #e5e7eb;color:#6b7280}.tabs-container[_ngcontent-%COMP%]     .p-button.p-button-outlined:hover{background:#f3f4f6;border-color:#d1d5db}.tabs-container[_ngcontent-%COMP%]     .p-button.tab-active{border:none;color:#fff;box-shadow:0 2px 4px #0003}.tabs-container[_ngcontent-%COMP%]     .p-button.tab-active:hover{transform:translateY(-2px);box-shadow:0 4px 8px #0000004d}.tabs-container[_ngcontent-%COMP%]     .p-button.tab-active.tab-pilas{background:linear-gradient(135deg,#fbbf24,#f59e0b)}.tabs-container[_ngcontent-%COMP%]     .p-button.tab-active.tab-canastillas{background:linear-gradient(135deg,#9ca3af,#6b7280)}.tabs-container[_ngcontent-%COMP%]     .p-button.tab-active.tab-papel{background:linear-gradient(135deg,#9ca3af,#6b7280)}.tabs-container[_ngcontent-%COMP%]     .p-button .p-button-label{font-weight:var(--font-semibold)}.registro-header[_ngcontent-%COMP%]{margin-bottom:1.5rem;padding-bottom:1rem;border-left:4px solid #1e3c72;padding-left:1rem;background:#f8fafc;padding:1rem;border-radius:4px}.registro-divider[_ngcontent-%COMP%]{height:3px;background:linear-gradient(90deg,#1e3c72 0%,transparent 100%);margin-bottom:.5rem}.registro-title[_ngcontent-%COMP%]{font-size:var(--text-lg);font-weight:var(--font-bold);color:#1f2937;margin:0 0 .25rem}.registro-subtitle[_ngcontent-%COMP%]{font-size:var(--text-sm);color:#6b7280;margin:0}.form-container[_ngcontent-%COMP%]{margin-bottom:1.5rem}.inputs-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1rem}.input-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.input-label[_ngcontent-%COMP%]{font-size:var(--text-xs);font-weight:var(--font-bold);color:#374151;text-transform:uppercase;letter-spacing:var(--tracking-wide)}.input-with-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;position:relative}.input-text[_ngcontent-%COMP%]{flex:1;padding:.65rem 1rem;border:1px solid #d1d5db;border-radius:6px;font-size:var(--text-sm);transition:all .2s ease;width:100%}.input-text[_ngcontent-%COMP%]:hover{border-color:#9ca3af}.input-text[_ngcontent-%COMP%]:focus{outline:0;border-color:#1e3c72;box-shadow:0 0 0 3px #1e3c721a}.input-text[_ngcontent-%COMP%]::placeholder{color:#9ca3af}.badge-kg[_ngcontent-%COMP%]{background:#e2e8f0;color:#475569;padding:.5rem .75rem;border-radius:6px;font-size:var(--text-sm);font-weight:var(--font-semibold);white-space:nowrap;min-width:40px;text-align:center}  .p-inputnumber{width:100%}  .p-inputnumber .p-inputtext{width:100%;padding:.65rem 1rem;border:1px solid #d1d5db;border-radius:6px;font-size:var(--text-sm);transition:all .2s ease}  .p-inputnumber .p-inputtext:enabled:hover{border-color:#9ca3af}  .p-inputnumber .p-inputtext:enabled:focus{outline:0;border-color:#1e3c72;box-shadow:0 0 0 3px #1e3c721a}  .p-inputnumber .p-inputtext::placeholder{color:#9ca3af}  .p-inputnumber .p-inputnumber-button-group .p-button{background:#f9fafb;border-color:#d1d5db;color:#6b7280}  .p-inputnumber .p-inputnumber-button-group .p-button:hover{background:#f3f4f6;border-color:#9ca3af}  .p-inputnumber .p-inputnumber-button-group .p-button:active{background:#e5e7eb}.messages-container[_ngcontent-%COMP%]{margin-bottom:1.5rem}.message[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:1rem;border-radius:8px;margin-bottom:.5rem}.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:var(--text-xl)}.message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:var(--font-medium)}.message.message-success[_ngcontent-%COMP%]{background:#d1fae5;border-left:4px solid #10b981;color:#065f46}.message.message-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#10b981}.message.message-error[_ngcontent-%COMP%]{background:#fee2e2;border-left:4px solid #ef4444;color:#991b1b}.message.message-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ef4444}.buttons-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.buttons-container[_ngcontent-%COMP%]     .p-button{width:100%;padding:.875rem 1.5rem;font-size:var(--text-sm);font-weight:var(--font-bold);border-radius:8px;text-transform:uppercase;letter-spacing:var(--tracking-wide);transition:all .3s ease}.buttons-container[_ngcontent-%COMP%]     .p-button.save-button{background:linear-gradient(135deg,#6b7280,#4b5563);border:none;color:#fff}.buttons-container[_ngcontent-%COMP%]     .p-button.save-button:enabled:hover{background:linear-gradient(135deg,#4b5563,#374151);transform:translateY(-2px);box-shadow:0 4px 12px #6b72804d}.buttons-container[_ngcontent-%COMP%]     .p-button.save-button:disabled{opacity:.6;cursor:not-allowed}.buttons-container[_ngcontent-%COMP%]     .p-button.view-button{background:#fff;border:2px solid #6b7280;color:#374151}.buttons-container[_ngcontent-%COMP%]     .p-button.view-button:enabled:hover{background:#f9fafb;border-color:#4b5563;transform:translateY(-2px);box-shadow:0 4px 12px #6b728033}.buttons-container[_ngcontent-%COMP%]     .p-button .p-button-icon{font-size:var(--text-base)}@media (max-width: 640px){.dashboard-container[_ngcontent-%COMP%]{padding:1rem .5rem}.dashboard-wrapper[_ngcontent-%COMP%]{max-width:100%}.header-title[_ngcontent-%COMP%]{font-size:var(--text-base)}.header-subtitle[_ngcontent-%COMP%]{font-size:var(--text-xs)}.tabs-container[_ngcontent-%COMP%]{grid-template-columns:1fr}.tabs-container[_ngcontent-%COMP%]     .p-button{padding:1rem;font-size:var(--text-base)}.buttons-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var Mo=[{path:"dashboard",component:me},{path:"registros",loadComponent:()=>import("./chunk-SEMCFNLA.js").then(n=>n.RegistrosComponent)},{path:"",redirectTo:"dashboard",pathMatch:"full"}];export{Mo as PERSONAL_ROUTES};

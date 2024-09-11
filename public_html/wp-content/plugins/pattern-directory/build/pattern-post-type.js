(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.plugins,n=window.React,s=window.wp.i18n,r=window.wp.editPost,a=window.wp.components,o=window.wp.editor,l=window.wp.data,i=window.wp.element,u="unlisted",p=window.wp.a11y,c=window.wp.coreData,m=window.wp.apiFetch;var g=e.n(m);const d=()=>{},w={hasError:!1,isSubmitted:!1,isSubmitting:!1,message:null,reasonList:[]},h=(e,t)=>{const n={hasError:!1,isSubmitted:!1,isSubmitting:!1,message:null};switch(t.status){case"NOTE_SENT":return{...e,...n,isSubmitting:!0};case"NOTE_RECIEVED":return{...e,...n,isSubmitted:!0};case"REASONS_RECIEVED":return{...e,...n,reasonList:t.reasonList};case"ERROR":return{...e,...n,hasError:!0,message:t.message};default:return e}},_=({onClose:e,onSubmit:t})=>{const r=(0,l.useSelect)((e=>{const t=e(o.store).getCurrentPostId(),n=e(o.store).getCurrentPostType(),{rest_base:s}=e(c.store).getPostType(n);return`/wporg/v1/${s}/${t}/internal-notes`})),[u,m]=(0,i.useReducer)(h,w),[_,E]=(0,i.useState)(""),[b,S]=(0,i.useState)(""),f=(0,i.useRef)();(0,i.useEffect)((()=>{(({onSuccess:e=d,onFailure:t=d})=>{g()({path:"/wp/v2/wporg-pattern-flag-reason"}).then((t=>{const n=t.sort(((e,t)=>{switch(!0){case e.slug<t.slug:return-1;case e.slug>t.slug:return 1;default:return 0}})).map((e=>({label:e.name,value:e.id+""})));e(n)})).catch(t)})({onSuccess:(e=[])=>{m({status:"REASONS_RECIEVED",reasonList:e})},onFailure:e=>{m({status:"ERROR",message:e.message})}})}),[]);const y=(0,s.__)("The pattern has been unlisted, and your internal note has been saved.","wporg-patterns"),v=()=>{e()};return(0,n.createElement)(a.Modal,{title:(0,s.__)("Unlist this pattern","wporg-patterns"),onRequestClose:v,className:"wporg-patterns-unlist__modal"},(0,n.createElement)("div",{ref:f},u.isSubmitted?(0,n.createElement)("p",null,y):(0,n.createElement)("form",{onSubmit:e=>{if(e.preventDefault(),u.isSubmitted||u.isSubmitting)return;if(!_)return void m({status:"ERROR",message:(0,s.__)("Please select a reason.","wporg-patterns")});const n=u.reasonList.find((({value:e})=>e===_));m({status:"NOTE_SENT"}),(({url:e,note:t,onSuccess:n=d,onFailure:s=d})=>{g()({path:e,method:"POST",data:{excerpt:t}}).then(n).catch(s)})({url:r,note:b?`UNLISTED: ${n.label} — ${b}`:`UNLISTED: ${n.label}`,onSuccess:()=>{"function"==typeof t&&t(_),m({status:"NOTE_RECIEVED"}),(0,p.speak)(y),f.current.closest('[role="dialog"]').focus()},onFailure:e=>{m({status:"ERROR",message:e.message}),(0,p.speak)((0,s.sprintf)(/* translators: %s: Error message. */ /* translators: %s: Error message. */
(0,s.__)("Error: %s","wporg-patterns"),e.message))}})}},u.reasonList.length?(0,n.createElement)(a.RadioControl,{className:"wporg-patterns-unlist__reasons",label:(0,s.__)("Please choose a reason:","wporg-patterns"),help:(0,s.__)("The reason chosen will be used to show a message to the pattern author.","wporg-patterns"),selected:_,options:u.reasonList,onChange:E,required:!0}):(0,n.createElement)(a.Spinner,null),(0,n.createElement)(a.TextareaControl,{label:(0,s.__)("Please provide internal details","wporg-patterns"),help:(0,s.__)("This note will only be seen by other admins and moderators.","wporg-patterns"),value:b,onChange:S}),u.hasError&&(0,n.createElement)("div",{className:"notice notice-large notice-alt notice-error"},u.message),(0,n.createElement)("div",{className:"wporg-patterns-unlist__actions"},(0,n.createElement)(a.Button,{isSecondary:!0,onClick:v},(0,s.__)("Cancel","wporg-patterns")),(0,n.createElement)(a.Button,{type:"submit",isBusy:u.isSubmitting,isPrimary:!0},u.isSubmitting?(0,s.__)("Submitting …","wporg-patterns"):(0,s.__)("Unlist Pattern","wporg-patterns"))))))},E=window.wp.notices,b=()=>{const e=(0,l.useSelect)((e=>e(o.store).getCurrentPostAttribute("status")),[]),{createNotice:t,removeNotice:n}=(0,l.useDispatch)(E.store),r="unlisted-pattern-notice";return(0,i.useEffect)((()=>{e===u?t("warning",(0,s.__)("This pattern is unlisted. It will not appear in the public pattern directory.","wporg-patterns"),{id:r,isDismissible:!1}):n(r)}),[e]),null},S=()=>{const e=(0,l.useSelect)((e=>e(o.store).getCurrentPost().status)),{editPost:t,savePost:p}=(0,l.useDispatch)(o.store),[c,m]=(0,i.useState)(!1),g=e===u?"wporg-patterns-unlist-notice":"wporg-patterns-unlist-button";return(0,n.createElement)(r.PluginPostStatusInfo,{className:g},e!==u?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.Button,{onClick:()=>m(!0),isSecondary:!0},(0,s.__)("Unlist","wporg-patterns")),(0,n.createElement)("small",null,(0,s.__)("Remove from the pattern directory","wporg-patterns"))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h3",null,(0,s.__)("Unlisted","wporg-patterns")),(0,n.createElement)("small",null,(0,s.__)("Use the Publish button to re-list this pattern. Note: This overrides the status settings shown above.","wporg-patterns"))),c&&(0,n.createElement)(_,{onSubmit:e=>{t({status:u,"wporg-pattern-flag-reason":[e]}),p()},onClose:()=>m(!1)}))},f="wpop_keywords",y="wpop_description",v="wpop_locale",C=window.wporgLocaleData||{},P=[];for(const[e,t]of Object.entries(C))P.push({value:e,label:t});const R=()=>{const{editPost:e}=(0,l.useDispatch)("core/editor"),{description:t,keywords:i,locale:u,meta:p,title:c}=(0,l.useSelect)((e=>{const{getEditedPostAttribute:t}=e(o.store),n=t("meta")||{};return{description:n[y],keywords:n[f].split(", ").filter((e=>e.length)),locale:n[v],meta:n,title:t("title")||""}}));return(0,n.createElement)(r.PluginDocumentSettingPanel,{name:"wporg-pattern-details",title:(0,s.__)("Pattern Details","wporg-patterns"),icon:"nothing"},(0,n.createElement)(a.TextControl,{key:"title",label:(0,s.__)("Title","wporg-patterns"),value:c,placeholder:(0,s.__)("Pattern title","wporg-patterns"),onChange:t=>e({title:t})}),(0,n.createElement)(a.TextareaControl,{key:"description",label:(0,s.__)("Description","wporg-patterns"),value:t,onChange:t=>e({meta:{...p,[y]:t}}),help:(0,s.__)("The description is used to help users of assistive technology understand the content of your pattern.","wporg-patterns")}),(0,n.createElement)("div",null,(0,n.createElement)("p",null,(0,n.createElement)("strong",null,(0,s.__)("Keywords","wporg-patterns"))),(0,n.createElement)("p",null,(0,s.__)("Keywords are words or short phrases that will help people find your pattern. There is a maximum of 10 keywords.","wporg-patterns")),(0,n.createElement)(a.FormTokenField,{value:i||[],onChange:t=>{const n=t.join(", ");e({meta:{...p,[f]:n}})},maxLength:10,tokenizeOnSpace:!1})),(0,n.createElement)(a.ComboboxControl,{key:"locale",label:(0,s.__)("Language","wporg-patterns"),options:P,value:u,onChange:t=>e({meta:{...p,[v]:t}}),help:(0,s.__)("The language field is used to help users find patterns that were created in their preferred language.","wporg-patterns")}))};(0,t.registerPlugin)("pattern-post-type",{render:()=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(S,null),(0,n.createElement)(b,null),(0,n.createElement)(R,null))})})();
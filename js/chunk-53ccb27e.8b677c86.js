(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53ccb27e"],{"6cfe":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pasos-a"},[t._l(t.elements,(function(e,i){return t.elements.length?s("div",{staticClass:"pasos-a__item"},[s("div",{staticClass:"row align-items-center d-flex",class:!t.isEven(i)&&"flex-row-reverse"},[s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__numero text-center d-inline-flex justify-content-center align-items-center",class:t.getClass(i)},[s("div",{staticClass:"pasos-a__circle"},["n"===t.tipo?s("div",{staticClass:"h2"},[t._v(t._s(i+1))]):"l"===t.tipo?s("div",{staticClass:"h2"},[t._v(t._s(t.abecedario[i]))]):t._e()])]),s("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"item.elm"}],staticClass:"col py-3",class:!t.isEven(i)&&"text-end"}),s("div",{staticClass:"col-1"})]),i+1!=t.elements.length?s("div",{staticClass:"row pasos-a__linea"},[s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina"},[t.isEven(i)?s("div",{staticClass:"pasos-a__linea__esquina__linea top-right"}):s("div",{staticClass:"pasos-a__linea__esquina__linea right-bottom"})]),t._m(0,!0),s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina"},[t.isEven(i)?s("div",{staticClass:"pasos-a__linea__esquina__linea left-bottom"}):s("div",{staticClass:"pasos-a__linea__esquina__linea top-left"})])]):t._e()]):t._e()})),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-sm-8 col-lg-10"},[s("div",{staticClass:"hor-line"})])}],n=s("ab14"),l={name:"PasosA",mixins:[n["a"]],props:{tipo:{type:String,default:"n"}},data:function(){return{abecedario:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"}},methods:{getClass:function(t){return 0===t?"bottom":t+1===this.elements.length?"top":"full"},isEven:function(t){return t%2===0}}},o=l,r=s("2877"),c=Object(r["a"])(o,i,a,!1,null,null,null);e["default"]=c.exports},ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}}}]);
//# sourceMappingURL=chunk-53ccb27e.8b677c86.js.map
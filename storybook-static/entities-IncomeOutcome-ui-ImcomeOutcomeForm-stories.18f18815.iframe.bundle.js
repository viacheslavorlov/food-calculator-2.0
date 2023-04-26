"use strict";(self.webpackChunkfood_calculator_2_0=self.webpackChunkfood_calculator_2_0||[]).push([[987],{"./src/entities/IncomeOutcome/ui/ImcomeOutcomeForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkImcomeOutcomeForm:()=>DarkImcomeOutcomeForm,LightImcomeOutcomeForm:()=>LightImcomeOutcomeForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _shared_helpers_testHelpers_StoryBookDecorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/helpers/testHelpers/StoryBookDecorators.tsx"),_widgets_themeSwitcher_teme_temeConsts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/themeSwitcher/teme/temeConsts.ts"),_ImcomeOutcomeForm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/entities/IncomeOutcome/ui/ImcomeOutcomeForm.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"entities/ImcomeOutcomeForm",component:_ImcomeOutcomeForm__WEBPACK_IMPORTED_MODULE_2__.x,argTypes:{background:{control:"background"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ImcomeOutcomeForm__WEBPACK_IMPORTED_MODULE_2__.x,{...args});Template.displayName="Template";const LightImcomeOutcomeForm=Template.bind({});LightImcomeOutcomeForm.args={},LightImcomeOutcomeForm.decorators=[];const DarkImcomeOutcomeForm=Template.bind({});DarkImcomeOutcomeForm.args={},DarkImcomeOutcomeForm.decorators=[(0,_shared_helpers_testHelpers_StoryBookDecorators__WEBPACK_IMPORTED_MODULE_0__.FJ)(_widgets_themeSwitcher_teme_temeConsts__WEBPACK_IMPORTED_MODULE_1__.XW.dark)],LightImcomeOutcomeForm.parameters={...LightImcomeOutcomeForm.parameters,docs:{...LightImcomeOutcomeForm.parameters?.docs,source:{originalSource:"args => <ImcomeOutcomeForm {...args} />",...LightImcomeOutcomeForm.parameters?.docs?.source}}},DarkImcomeOutcomeForm.parameters={...DarkImcomeOutcomeForm.parameters,docs:{...DarkImcomeOutcomeForm.parameters?.docs,source:{originalSource:"args => <ImcomeOutcomeForm {...args} />",...DarkImcomeOutcomeForm.parameters?.docs?.source}}};const __namedExportsOrder=["LightImcomeOutcomeForm","DarkImcomeOutcomeForm"]},"./src/entities/IncomeOutcome/ui/ImcomeOutcomeForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ImcomeOutcomeForm});var classNames=__webpack_require__("./src/shared/helpers/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ImcomeOutcomeForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/IncomeOutcome/ui/ImcomeOutcomeForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImcomeOutcomeForm_module.Z,options);const ui_ImcomeOutcomeForm_module=ImcomeOutcomeForm_module.Z&&ImcomeOutcomeForm_module.Z.locals?ImcomeOutcomeForm_module.Z.locals:void 0;var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js");const getIncome=state=>state.incomeOutcome.income;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ImcomeOutcomeForm=(0,react.memo)((props=>{const{className}=props,income=(0,es.v9)(getIncome);return(0,jsx_runtime.jsx)("div",{className:(0,classNames.A)(ui_ImcomeOutcomeForm_module.ImcomeOutcomeForm,className),children:(0,jsx_runtime.jsx)("ul",{children:income.map((item=>item.date))})})}));try{ImcomeOutcomeForm.displayName="ImcomeOutcomeForm",ImcomeOutcomeForm.__docgenInfo={description:"",displayName:"ImcomeOutcomeForm",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entities/IncomeOutcome/ui/ImcomeOutcomeForm.tsx#ImcomeOutcomeForm"]={docgenInfo:ImcomeOutcomeForm.__docgenInfo,name:"ImcomeOutcomeForm",path:"src/entities/IncomeOutcome/ui/ImcomeOutcomeForm.tsx#ImcomeOutcomeForm"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/helpers/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=(...args)=>{const result=[];for(let i=0;i<args.length;i++)void 0!==args[i]&&result.push(args[i]);return result.join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/IncomeOutcome/ui/ImcomeOutcomeForm.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
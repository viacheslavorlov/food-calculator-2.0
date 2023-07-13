"use strict";(self.webpackChunkfood_calculator_2_0=self.webpackChunkfood_calculator_2_0||[]).push([[511,213],{"./src/pages/DeleteItemPage/ui/DeleteItems.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DeleteItemsDark:()=>DeleteItemsDark,DeleteItemsLight:()=>DeleteItemsLight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DeleteItems__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/pages/DeleteItemPage/ui/DeleteItems.tsx"),_shared_helpers_testHelpers_StoryBookDecorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/helpers/testHelpers/StoryBookDecorators.tsx"),_widgets_themeSwitcher_teme_temeConsts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/widgets/themeSwitcher/teme/temeConsts.ts"),_shared_helpers_storybookDecorators_StorybookDecorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/helpers/storybookDecorators/StorybookDecorator.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Pages/DeleteItems",component:_DeleteItems__WEBPACK_IMPORTED_MODULE_0__.default,argTypes:{backgroundColor:{control:"color"}},decorators:[(0,_shared_helpers_storybookDecorators_StorybookDecorator__WEBPACK_IMPORTED_MODULE_3__.l)({})]},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DeleteItems__WEBPACK_IMPORTED_MODULE_0__.default,{});Template.displayName="Template";const DeleteItemsDark=Template.bind({});DeleteItemsDark.args={},DeleteItemsDark.decorators=[(0,_shared_helpers_testHelpers_StoryBookDecorators__WEBPACK_IMPORTED_MODULE_1__.FJ)(_widgets_themeSwitcher_teme_temeConsts__WEBPACK_IMPORTED_MODULE_2__.XW.dark)];const DeleteItemsLight=Template.bind({});DeleteItemsLight.args={},DeleteItemsLight.decorators=[(0,_shared_helpers_testHelpers_StoryBookDecorators__WEBPACK_IMPORTED_MODULE_1__.FJ)(_widgets_themeSwitcher_teme_temeConsts__WEBPACK_IMPORTED_MODULE_2__.XW.light)],DeleteItemsDark.parameters={...DeleteItemsDark.parameters,docs:{...DeleteItemsDark.parameters?.docs,source:{originalSource:"args => <DeleteItems />",...DeleteItemsDark.parameters?.docs?.source}}},DeleteItemsLight.parameters={...DeleteItemsLight.parameters,docs:{...DeleteItemsLight.parameters?.docs,source:{originalSource:"args => <DeleteItems />",...DeleteItemsLight.parameters?.docs?.source}}};const __namedExportsOrder=["DeleteItemsDark","DeleteItemsLight"]},"./src/entities/IncomeOutcome/model/services/fetchIncome.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>fetchIncome});var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/axios/lib/axios.js");const fetchIncome=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.hg)("incomeOutcome/fetchIncome",(async(_,thunkAPI)=>{const{rejectWithValue}=thunkAPI;try{const response=await axios__WEBPACK_IMPORTED_MODULE_1__.Z.get("http://localhost:3000/income");return response.data?response.data:rejectWithValue("error while fetching income")}catch(e){return rejectWithValue("error while fetching income")}}))},"./src/entities/Products/model/selectors/getAllProductsSelector.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>getAllProductsSelector});const getAllProductsSelector=state=>state.products.allProducts},"./src/entities/addNewProduct/model/services/addProductToDB.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>addProductToDB});var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/axios/lib/axios.js");const addProductToDB=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.hg)("newProducts/addProductToDB",(async(data,thunkAPI)=>{try{const indexOfNewProduct=(await axios__WEBPACK_IMPORTED_MODULE_1__.Z.get("http://localhost:3000/products")).data.findIndex((item=>item.name===data.name));if(console.log("indexOfNewProduct",indexOfNewProduct),data&&indexOfNewProduct<0){return(await axios__WEBPACK_IMPORTED_MODULE_1__.Z.post("http://localhost:3000/products",data)).data}throw new Error}catch(e){return thunkAPI.rejectWithValue("error while adding product to DB")}}))},"./src/entities/addNewProduct/model/slice/newProductSlice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>newProductActions,O:()=>newProductReducer});__webpack_require__("./src/shared/helpers/api/rtkApi.ts");let Metrics;!function(Metrics){Metrics.gramm="г",Metrics.ml="мл",Metrics.kilo="кг",Metrics.pices="шт",Metrics.none=""}(Metrics||(Metrics={}));var redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),addProductToDB=__webpack_require__("./src/entities/addNewProduct/model/services/addProductToDB.ts");const initialState={loading:!1,error:void 0,newProduct:{name:"",id:Date.now(),metric:Metrics.none,price:0,amountCurrent:0,amountInOnePack:0,timesUsed:0}},newProductSlice=(0,redux_toolkit_esm.oM)({name:"newProducts",initialState,reducers:{setProductName:(state,action)=>{state.newProduct.name=action.payload},setProductId:state=>{state.newProduct.id=Date.now()},setProductMetric:(state,action)=>{state.newProduct.metric=action.payload},setProductPrice:(state,action)=>{state.newProduct.price=action.payload},setProductAmountInOnePack:(state,action)=>{state.newProduct.amountInOnePack=action.payload},setDefaultValues:state=>{state.newProduct.name="",state.newProduct.id=Date.now(),state.newProduct.metric=Metrics.none,state.newProduct.price=0,state.newProduct.amountCurrent=0,state.newProduct.amountInOnePack=0}},extraReducers:builder=>{builder.addCase(addProductToDB.r.pending,(state=>{state.loading=!0,state.error=void 0})).addCase(addProductToDB.r.fulfilled,(state=>{state.newProduct=initialState.newProduct})).addCase(addProductToDB.r.rejected,(state=>{state.error="error"}))}}),{actions:newProductActions,reducer:newProductReducer}=newProductSlice},"./src/features/DeleteItems/ui/DeleteItemCard/DeleteItemCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>DeleteItemCard});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DeleteItemCard_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/DeleteItems/ui/DeleteItemCard/DeleteItemCard.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DeleteItemCard_module.Z,options);const DeleteItemCard_DeleteItemCard_module=DeleteItemCard_module.Z&&DeleteItemCard_module.Z.locals?DeleteItemCard_module.Z.locals:void 0;var react=__webpack_require__("./node_modules/react/index.js"),Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),hooks=__webpack_require__("./src/store/hooks/index.ts"),classNames=__webpack_require__("./src/shared/helpers/classNames/classNames.ts"),productsSlice=__webpack_require__("./src/entities/Products/model/slice/productsSlice.ts"),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),axios=__webpack_require__("./node_modules/axios/lib/axios.js");const deleteFrofDB=(0,redux_toolkit_esm.hg)("deleteProducts/deletefromDB",(async(id,thunkAPI)=>{try{if(id){return(await axios.Z.delete(`http://localhost:3000/products/${id}`)).data.id}throw new Error}catch(e){return thunkAPI.rejectWithValue("error while deleting from DB")}}));var esm=__webpack_require__("./node_modules/@react-spring/web/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DeleteItemCard=(0,react.memo)((props=>{const{item,className}=props,{name,price,amountInOnePack,id}=item,[displayed,setDisplayed]=(0,react.useState)(!1),dispatch=(0,hooks.T)(),transition=(0,esm.Yz)(displayed,{from:{opacity:0,x:-100},enter:{opacity:1,x:0},leave:{opacity:1,x:100}});return transition(((style,item)=>(0,jsx_runtime.jsx)(esm.q.div,{style,children:(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(DeleteItemCard_DeleteItemCard_module.DeleteItemCard,className),children:[(0,jsx_runtime.jsx)(Text.x,{className:DeleteItemCard_DeleteItemCard_module.text,title:name,content:`цена: ${price}, в упаковке: ${amountInOnePack}`}),(0,jsx_runtime.jsx)("hr",{className:DeleteItemCard_DeleteItemCard_module.line}),(0,jsx_runtime.jsx)(Button.zx,{className:DeleteItemCard_DeleteItemCard_module.btn,variant:Button.cT.rounded,background:Button.e9.red,onClick:()=>{return itemId=id,setDisplayed(!1),dispatch(deleteFrofDB(itemId)),void dispatch(productsSlice.Mb.deleteProduct(id));var itemId},children:"Удалить"})]})})))}));try{DeleteItemCard.displayName="DeleteItemCard",DeleteItemCard.__docgenInfo={description:"",displayName:"DeleteItemCard",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"IProduct"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/DeleteItems/ui/DeleteItemCard/DeleteItemCard.tsx#DeleteItemCard"]={docgenInfo:DeleteItemCard.__docgenInfo,name:"DeleteItemCard",path:"src/features/DeleteItems/ui/DeleteItemCard/DeleteItemCard.tsx#DeleteItemCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/features/searchProducts/model/selectors/searchSelectors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ll:()=>searchValueSelector,rn:()=>searchPropSelector,wO:()=>searchOrderSelector});const searchValueSelector=state=>state?.searchProducts.searchValue||"",searchOrderSelector=state=>state.searchProducts.searchOrder||"asc",searchPropSelector=state=>state.searchProducts.searchProp||"none"},"./src/features/searchProducts/model/slice/searchProductSlice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>searchActions,f:()=>searchReducer});const searchProductSlice=(0,__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js").oM)({name:"searchProducts",initialState:{searchValue:"",searchOrder:"asc",searchProp:"none"},reducers:{setSearchValue:(state,action)=>{state.searchValue=action.payload},setSearchOrder:(state,action)=>{state.searchOrder=action.payload},setSearchProp:(state,action)=>{state.searchProp=action.payload}}}),{reducer:searchReducer,actions:searchActions}=searchProductSlice},"./src/features/searchProducts/ui/Search/Search.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Search});var classNames=__webpack_require__("./src/shared/helpers/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Search_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/searchProducts/ui/Search/Search.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Search_module.Z,options);const Search_Search_module=Search_module.Z&&Search_module.Z.locals?Search_module.Z.locals:void 0;var react=__webpack_require__("./node_modules/react/index.js"),Input=__webpack_require__("./src/shared/ui/Input/Input.tsx"),hooks=__webpack_require__("./src/store/hooks/index.ts"),Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),searchProductSlice=__webpack_require__("./src/features/searchProducts/model/slice/searchProductSlice.ts"),searchSelectors=__webpack_require__("./src/features/searchProducts/model/selectors/searchSelectors.ts"),Select=__webpack_require__("./src/shared/ui/Select/Select.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const searchOrderOptions=[{name:"возрастанию",value:"asc"},{name:"убыванию",value:"desc"}],searchPropOptions=[{name:"нет",value:"none"},{name:"частоте использования",value:"views"},{name:"цене",value:"price"}],Search=(0,react.memo)((props=>{const searchValue=(0,hooks.C)(searchSelectors.ll),searchOrder=(0,hooks.C)(searchSelectors.wO),searchProp=(0,hooks.C)(searchSelectors.rn),dispatch=(0,hooks.T)(),{className}=props;return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(Search_Search_module.Search,className),children:[(0,jsx_runtime.jsx)("div",{className:Search_Search_module.SearchItem,children:(0,jsx_runtime.jsx)(Input.I,{className:Search_Search_module.strInput,type:"text",placeholder:"Начните вводить название",value:searchValue,onChange:e=>{dispatch(searchProductSlice.R.setSearchValue(e.target.value))}})}),(0,jsx_runtime.jsxs)("div",{className:Search_Search_module.SearchItem,children:[(0,jsx_runtime.jsx)(Text.x,{content:"По "}),(0,jsx_runtime.jsx)(Select.P,{onChange:value=>{dispatch(searchProductSlice.R.setSearchOrder(value))},optionsVariants:searchOrderOptions,defaultOption:searchOrder})]}),(0,jsx_runtime.jsxs)("div",{className:Search_Search_module.SearchItem,children:[(0,jsx_runtime.jsx)(Text.x,{content:"По "}),(0,jsx_runtime.jsx)(Select.P,{onChange:value=>{dispatch(searchProductSlice.R.setSearchProp(value))},optionsVariants:searchPropOptions,defaultOption:searchProp})]})]})}));try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/searchProducts/ui/Search/Search.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"src/features/searchProducts/ui/Search/Search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}},"./src/pages/DeleteItemPage/ui/DeleteItems.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ui_DeleteItems});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DeleteItems_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/DeleteItemPage/ui/DeleteItems.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DeleteItems_module.Z,options);const ui_DeleteItems_module=DeleteItems_module.Z&&DeleteItems_module.Z.locals?DeleteItems_module.Z.locals:void 0;var hooks=__webpack_require__("./src/store/hooks/index.ts"),getAllProductsSelector=__webpack_require__("./src/entities/Products/model/selectors/getAllProductsSelector.ts"),DeleteItemCard=__webpack_require__("./src/features/DeleteItems/ui/DeleteItemCard/DeleteItemCard.tsx"),fetchProducts=__webpack_require__("./src/entities/Products/model/services/fetchProducts/fetchProducts.ts"),react=__webpack_require__("./node_modules/react/index.js"),Search=__webpack_require__("./src/features/searchProducts/ui/Search/Search.tsx"),wordSearch=__webpack_require__("./src/shared/helpers/search/wordSearch.ts"),searchSelectors=__webpack_require__("./src/features/searchProducts/model/selectors/searchSelectors.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ui_DeleteItems=(0,react.memo)((()=>{const products=(0,hooks.C)(getAllProductsSelector.b),searchValue=(0,hooks.C)(searchSelectors.ll),dispatch=(0,hooks.T)();return(0,react.useEffect)((()=>{products.length||dispatch((0,fetchProducts.t)())}),[]),(0,jsx_runtime.jsxs)("div",{className:ui_DeleteItems_module.DeleteItems,children:[(0,jsx_runtime.jsx)(Search.o,{}),products.filter((item=>(0,wordSearch.H)(searchValue,item.name))).map((item=>(0,jsx_runtime.jsx)(DeleteItemCard.q,{item},item.id)))]})}))},"./src/shared/helpers/api/rtkApi.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>rtkApi});var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js"),_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");const rtkApi=(0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.LC)({reducerPath:"rtkApi",baseQuery:(0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.ni)({baseUrl:"http://localhost:3000"}),endpoints:builder=>({})})},"./src/shared/helpers/search/wordSearch.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>wordSearch});const wordSearch=(str,source)=>source.toLowerCase().includes(str.toLowerCase())},"./src/shared/helpers/storybookDecorators/StorybookDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>StoreDecorator});var es=__webpack_require__("./node_modules/react-redux/es/index.js"),redux=__webpack_require__("./node_modules/redux/es/redux.js"),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),productsSlice=__webpack_require__("./src/entities/Products/model/slice/productsSlice.ts"),newProductSlice=__webpack_require__("./src/entities/addNewProduct/model/slice/newProductSlice.ts"),fetchIncome=__webpack_require__("./src/entities/IncomeOutcome/model/services/fetchIncome.ts");const initialState={isLoading:!1,error:void 0,income:[],outcome:[]},incomeOutcomeSliceSlice=(0,redux_toolkit_esm.oM)({name:"incomeOutcome",initialState,reducers:{},extraReducers:builder=>{builder.addCase(fetchIncome._.pending,((state,action)=>{state.isLoading=!0,state.error=void 0})).addCase(fetchIncome._.fulfilled,((state,action)=>{state.isLoading=!1,state.income=action.payload})).addCase(fetchIncome._.rejected,((state,action)=>{state.isLoading=!1,state.error=action.payload}))}}),{reducer:incomeOutcomeSliceReducer,actions:incomeOutcomeSliceActions}=incomeOutcomeSliceSlice;var searchProductSlice=__webpack_require__("./src/features/searchProducts/model/slice/searchProductSlice.ts"),rtkApi=__webpack_require__("./src/shared/helpers/api/rtkApi.ts");const recipesApi=rtkApi.p.injectEndpoints({endpoints:build=>({getAllRecipes:build.query({query:()=>({url:"/recipes"})}),getRecipeById:build.query({query:id=>({url:`/recipes/${id}`})}),changeRecipe:build.mutation({query:({id,product})=>({url:`/recipes/${id}/ingredients`,method:"PATCH",body:product})})}),overrideExisting:!1}),{useGetAllRecipesQuery,useGetRecipeByIdQuery,useChangeRecipeMutation}=recipesApi;__webpack_require__("./src/features/recipies/ui/RecipeList/RecipeList.tsx"),__webpack_require__("./src/features/recipies/ui/RecipeCard/RecipeCard.tsx");var recipeSlice=__webpack_require__("./src/features/recipies/model/slice/recipeSlice.ts");const rootReducer=(0,redux.UY)({products:productsSlice.Og,newProduct:newProductSlice.O,incomeOutcome:incomeOutcomeSliceReducer,searchProducts:searchProductSlice.f,recipe:recipeSlice.e,[recipesApi.reducerPath]:recipesApi.reducer}),store=initialState=>(0,redux_toolkit_esm.xC)({devTools:!0,preloadedState:initialState,reducer:rootReducer,middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(rtkApi.p.middleware).concat(recipesApi.middleware)});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StoreProvider=props=>{const{initialState,children}=props;return(0,jsx_runtime.jsx)(es.zt,{store:store(initialState),children})};StoreProvider.displayName="StoreProvider";try{StoreProvider.displayName="StoreProvider",StoreProvider.__docgenInfo={description:"",displayName:"StoreProvider",props:{initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"StateSchema"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/store/StoreProvider/StoreProvider.tsx#StoreProvider"]={docgenInfo:StoreProvider.__docgenInfo,name:"StoreProvider",path:"src/app/store/StoreProvider/StoreProvider.tsx#StoreProvider"})}catch(__react_docgen_typescript_loader_error){}const StoreDecorator=state=>StoryComponent=>(0,jsx_runtime.jsx)(StoreProvider,{initialState:state,children:(0,jsx_runtime.jsx)(StoryComponent,{})});try{StoreDecorator.displayName="StoreDecorator",StoreDecorator.__docgenInfo={description:"",displayName:"StoreDecorator",props:{products:{defaultValue:null,description:"",name:"products",required:!1,type:{name:"DeepPartial<ProductsSliceInterface>"}},newProduct:{defaultValue:null,description:"",name:"newProduct",required:!1,type:{name:"DeepPartial<NewProductSliceSchema>"}},incomeOutcome:{defaultValue:null,description:"",name:"incomeOutcome",required:!1,type:{name:"DeepPartial<IncomeOutcomeSchema>"}},searchProducts:{defaultValue:null,description:"",name:"searchProducts",required:!1,type:{name:"DeepPartial<SearchProductsSchema>"}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"DeepPartial<RecipeSchema>"}},rtkApi:{defaultValue:null,description:"",name:"rtkApi",required:!1,type:{name:'DeepPartial<CombinedState<{}, never, "rtkApi">>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/helpers/storybookDecorators/StorybookDecorator.tsx#StoreDecorator"]={docgenInfo:StoreDecorator.__docgenInfo,name:"StoreDecorator",path:"src/shared/helpers/storybookDecorators/StorybookDecorator.tsx#StoreDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select});var classNames=__webpack_require__("./src/shared/helpers/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Select_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Select_module.Z,options);const Select_Select_module=Select_module.Z&&Select_module.Z.locals?Select_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Select=props=>{const{className="",optionsVariants,defaultOption,onChange}=props;return(0,jsx_runtime.jsx)("select",{defaultValue:defaultOption,className:(0,classNames.A)(Select_Select_module.Select,className),onChange:e=>{onChange&&onChange(e.target.value)},children:optionsVariants.map((option=>(0,jsx_runtime.jsx)("option",{value:option.value,children:option.name},option.name)))})};Select.displayName="Select";try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},optionsVariants:{defaultValue:null,description:"",name:"optionsVariants",required:!0,type:{name:"SelectOption<T>[]"}},defaultOption:{defaultValue:null,description:"",name:"defaultOption",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/shared/ui/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/DeleteItems/ui/DeleteItemCard/DeleteItemCard.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".w6wJ{display:flex;flex-direction:row;margin-top:10px;width:80vw;justify-content:center;align-items:center}.YyGg{margin-left:auto}.yuNy{font-weight:bold}.dNhR{border:1.5px solid var(--bg-color-inverted);margin:5px;flex-grow:10}@media screen and (max-width: 600px){.dNhR{display:none}}","",{version:3,sources:["webpack://./src/features/DeleteItems/ui/DeleteItemCard/DeleteItemCard.module.scss"],names:[],mappings:"AAAA,MACI,YAAA,CACA,kBAAA,CACA,eAAA,CACA,UAAA,CACA,sBAAA,CACA,kBAAA,CAGJ,MACI,gBAAA,CAGJ,MACI,gBAAA,CAGJ,MACI,2CAAA,CACA,UAAA,CACA,YAAA,CAGJ,qCACI,MACI,YAAA,CAAA",sourcesContent:[".DeleteItemCard {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 10px;\r\n    width: 80vw;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.btn {\r\n    margin-left: auto;\r\n}\r\n\r\n.text {\r\n    font-weight: bold;\r\n}\r\n\r\n.line {\r\n    border: 1.5px solid var(--bg-color-inverted);\r\n    margin: 5px;\r\n    flex-grow: 10;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .line {\r\n        display: none;\r\n    }\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={DeleteItemCard:"w6wJ",btn:"YyGg",text:"yuNy",line:"dNhR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/searchProducts/ui/Search/Search.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".trG5{padding:0 10%;display:flex;gap:5px;flex-direction:column;transition:all .3s}.Xq0Z{display:flex;align-items:baseline}.Mjkv{width:100%;align-self:stretch}","",{version:3,sources:["webpack://./src/features/searchProducts/ui/Search/Search.module.scss"],names:[],mappings:"AAAA,MACI,aAAA,CACA,YAAA,CACA,OAAA,CACA,qBAAA,CACA,kBAAA,CAGJ,MACI,YAAA,CACA,oBAAA,CAGJ,MACI,UAAA,CACA,kBAAA",sourcesContent:[".Search {\r\n    padding: 0 10%;\r\n    display: flex;\r\n    gap: 5px;\r\n    flex-direction: column;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.SearchItem {\r\n    display: flex;\r\n    align-items: baseline;\r\n}\r\n\r\n.strInput {\r\n    width: 100%;\r\n    align-self: stretch;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Search:"trG5",SearchItem:"Xq0Z",strInput:"Mjkv"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/DeleteItemPage/ui/DeleteItems.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".yJku{border:1px solid var(--bg-color-inverted);border-radius:15px;padding:10px;display:flex;flex-direction:column;align-items:center;margin:0 auto;width:98vw;transition:all .3s}","",{version:3,sources:["webpack://./src/pages/DeleteItemPage/ui/DeleteItems.module.scss"],names:[],mappings:"AAAA,MACI,yCAAA,CACA,kBAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,aAAA,CACA,UAAA,CACA,kBAAA",sourcesContent:[".DeleteItems {\r\n    border: 1px solid var(--bg-color-inverted);\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    width: 98vw;\r\n    transition: all 0.3s;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={DeleteItems:"yJku"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Select/Select.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".eXu4{width:90%;margin:0 auto;padding:0 10px;border-radius:15px;font-size:var(--font-s)}","",{version:3,sources:["webpack://./src/shared/ui/Select/Select.module.scss"],names:[],mappings:"AAAA,MACI,SAAA,CACA,aAAA,CACA,cAAA,CACA,kBAAA,CACA,uBAAA",sourcesContent:[".Select {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    padding: 0 10px;\r\n    border-radius: 15px;\r\n    font-size: var(--font-s);\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Select:"eXu4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
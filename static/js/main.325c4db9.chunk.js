(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__3SVfj",close:"Drawer_close__11_gu",active:"Drawer_active__OE3hE"}},27:function(e,t,n){e.exports={FinishQuiz:"FinishQuiz_FinishQuiz__3LHZu",success:"FinishQuiz_success__3BSrv",error:"FinishQuiz_error__PXebx"}},31:function(e,t,n){e.exports={MenuTooggle:"MenuToggle_MenuTooggle__2Tm56",open:"MenuToggle_open__otP2c"}},35:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__1_zoW",QuizWrapper:"Quiz_QuizWrapper__2NdGN"}},36:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__Trg1g",Question:"ActiveQuiz_Question__3dsSZ"}},37:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__2e29j",success:"AnswerItem_success__1_DqW",error:"AnswerItem_error__2zdeb"}},38:function(e,t,n){e.exports={Button:"Button_Button__2MgK3",success:"Button_success__1Z7w7",error:"Button_error__3Om4B",primary:"Button_primary__3hpJM"}},39:function(e,t,n){e.exports={Loader:"Loader_Loader__34qod","lds-ripple":"Loader_lds-ripple__3SCD1",center:"Loader_center__1kqr4"}},40:function(e,t,n){e.exports={Input:"Input_Input__12RMz",invalid:"Input_invalid__1l3Ge"}},41:function(e,t,n){e.exports={Auth:"Auth_Auth__1Z_0W",AuthForm:"Auth_AuthForm__3KLbZ"}},50:function(e,t,n){e.exports={Layout:"Layout_Layout__3acRj"}},51:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2SenO"}},53:function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__2RjgF"}},54:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__2ldy4"}},55:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__3OeZd"}},56:function(e,t,n){e.exports={Select:"Select_Select__3tgQW"}},63:function(e,t,n){},64:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(23),s=n.n(a),c=(n(63),n(6)),o=n(7),u=n(10),l=n(9),d=(n(64),n(50)),j=n.n(d),p=n(5),h=n(31),b=n.n(h),O=n(0),f=function(e){var t=[b.a.MenuTooggle,"fa"];return e.isOpen?(t=[].concat(Object(p.a)(t),["fa-times"]),t=[].concat(Object(p.a)(t),[b.a.open])):t=[].concat(Object(p.a)(t),["fa-bars"]),Object(O.jsx)("i",{className:t.join(" "),onClick:e.onToggle})},v=n(26),m=n.n(v),x=n(51),g=n.n(x),_=function(e){return Object(O.jsx)("div",{className:g.a.Backdrop,onClick:e.onClick})},y=n(17),z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return Object(O.jsx)("li",{children:Object(O.jsx)(y.c,{to:e.to,exact:e.exact,activeClassName:m.a.active,onClick:t.props.onClickHandler,children:e.label})},n)}))}},{key:"render",value:function(){var e=[m.a.Drawer];this.props.isOpen||(e=[].concat(Object(p.a)(e),[m.a.close]));var t=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0}];return this.props.isAut?(t=[].concat(Object(p.a)(t),[{to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!0}]),t=[].concat(Object(p.a)(t),[{to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!0}])):t=[].concat(Object(p.a)(t),[{to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!0}]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("nav",{className:e.join(" "),children:Object(O.jsx)("ul",{children:this.renderLinks(t)})}),this.props.isOpen?Object(O.jsx)(_,{onClick:this.props.onClickHandler}):null]})}}]),n}(r.Component),w=n(8),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={menu:!1},e.toogleMenuHandlerr=function(){e.setState({menu:!e.state.menu})},e.onClickHandler=function(){e.setState({menu:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:j.a.Layout,children:[Object(O.jsx)(z,{isOpen:this.state.menu,onClickHandler:this.onClickHandler,isAut:this.props.isAut}),Object(O.jsx)(f,{onToggle:this.toogleMenuHandlerr,isOpen:this.state.menu}),Object(O.jsx)("main",{children:this.props.children})]})}}]),n}(r.Component),k=Object(w.b)((function(e){return{isAut:!!e.authReduser.token}}))(C),q=n(35),Q=n.n(q),S=n(36),I=n.n(S),A=n(53),T=n.n(A),E=n(37),N=n.n(E),F=function(e){var t=[N.a.AnswerItem];return e.state&&(t=[].concat(Object(p.a)(t),[N.a[e.state]])),Object(O.jsx)("li",{className:t.join(" "),onClick:function(){e.onAnswerClick(Number(e.answer.id))},children:e.answer.text})},R=function(e){return Object(O.jsx)("ul",{className:T.a.AnswersList,children:e.answers.map((function(t,n){return Object(O.jsx)(F,{onAnswerClick:e.onAnswerClick,answer:t,state:e.state?e.state[t.id]:null},n)}))})},H=function(e){return Object(O.jsxs)("div",{className:I.a.ActiveQuiz,children:[Object(O.jsxs)("p",{className:I.a.Question,children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("strong",{children:[e.answerNumber,"."]}),"\xa0",e.question]}),Object(O.jsxs)("small",{children:[e.answerNumber,"/",e.quizLenght]})]}),Object(O.jsx)(R,{answers:e.answers,onAnswerClick:e.onAnswerClick,state:e.state})]})},L=n(27),D=n.n(L),M=n(38),U=n.n(M),B=function(e){var t=[U.a.Button,U.a[e.type]];return Object(O.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.children})},V=function(e){console.log("props.results",e.results);var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return Object(O.jsxs)("div",{className:D.a.FinishQuiz,children:[Object(O.jsx)("ul",{children:e.quiz.map((function(t,n){var r=["fa","error"===e.results[t.id]?"fa-times "+D.a.error:"fa-check "+D.a.success];return Object(O.jsxs)("li",{children:[Object(O.jsxs)("strong",{children:[n+1,"."]}),"\xa0 ",t.questuon,Object(O.jsx)("i",{className:r.join(" ")})]},n)}))}),Object(O.jsxs)("p",{children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(B,{onClick:e.onRetry,type:"primary",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),Object(O.jsx)(y.b,{to:"/",children:Object(O.jsx)(B,{onClick:e.onRetry,type:"success",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c \u0442\u0435\u0441\u0442\u0430\u043c"})})]})]})},Z=n(39),P=n.n(Z),W=function(e){return Object(O.jsx)("div",{className:P.a.center,children:Object(O.jsxs)("div",{className:P.a.Loader,children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})},X=n(22),J=n(12),K=n.n(J),G=n(18),Y=n(25),$=n.n(Y),ee=$.a.create({baseURL:"https://react-quiz-93a24-default-rtdb.firebaseio.com/"}),te="FETCH_QUIZES_START",ne="FETCH_QUIZES_SUCCES",re="FETCH_QUIZES_ERROR",ie="FETCH_QUIZ_SUCCES",ae="QUIZE_SET_STATE",se="FINISH_QUIZ",ce="QUIZ_NEXT_QUESTION",oe="RETRY_QUIZ",ue="CREATE_QUIZ_QUESTION",le="RESET_QUIZ_CREATION",de="AUTH_SUCCESS",je="AUTH_LOGOUT";function pe(){return{type:te}}function he(e){return{type:ne,quizes:e}}function be(e){return{type:re,error:e}}function Oe(e){return{type:ie,quiz:e}}function fe(e,t){return{type:ae,answerState:e,results:t}}function ve(e){return function(t,n){console.log("getState");var r=n().quizReducer;if(!r.answerState||"success"!==r.answerState[e]){var i=r.quiz[r.activeQuestion],a=r.results;if(i.rightAnswerId===e){a[i.id]||(a[i.id]="success"),t(fe(Object(X.a)({},e,"success"),a));var s=window.setTimeout((function(){var e,n,i;n=r.activeQuestion,i=r.quiz.length,t(n+1===i?{type:se}:(e=r.activeQuestion+1,{type:ce,number:e})),window.clearTimeout(s)}),100)}else a[i.id]="error",t(fe(Object(X.a)({},e,"error"),a))}}}var me=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchQuizById(this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){this.props.retryQuiz()}},{key:"render",value:function(){return Object(O.jsx)("div",{className:Q.a.Quiz,children:Object(O.jsxs)("div",{className:Q.a.QuizWrapper,children:[Object(O.jsx)("h1",{children:"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}),this.props.loading||!this.props.quiz?Object(O.jsx)(W,{}):this.props.isFinish?Object(O.jsx)(V,{results:this.props.results,quiz:this.props.quiz,onRetry:this.props.retryQuiz}):Object(O.jsx)(H,{question:this.props.quiz[this.props.activeQuestion].question,answers:this.props.quiz[this.props.activeQuestion].answers,onAnswerClick:this.props.quizAnswerClick,quizLenght:this.props.quiz.length,answerNumber:this.props.activeQuestion+1,state:this.props.answerState})]})})}}]),n}(r.Component),xe=Object(w.b)((function(e){return{results:e.quizReducer.results,isFinish:e.quizReducer.isFinish,activeQuestion:e.quizReducer.activeQuestion,answerState:e.quizReducer.answerState,quiz:e.quizReducer.quiz,loading:e.quizReducer.loading}}),(function(e){return{fetchQuizById:function(t){return e((n=t,function(){var e=Object(G.a)(K.a.mark((function e(t){var r,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(pe()),e.prev=1,e.next=4,ee.get("quiz/".concat(n,".json"));case 4:r=e.sent,i=r.data,t(Oe(i)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(be(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var n},quizAnswerClick:function(t){return e(ve(t))},retryQuiz:function(){return e({type:oe})}}}))(me),ge=n(4),_e=n(54),ye=n.n(_e),ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderQuizes",value:function(){return this.props.quizes.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(y.c,{to:"/quiz/"+e.id,children:e.name})},e.id)}))}},{key:"componentDidMount",value:function(){var e=Object(G.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchQuizes();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{className:ye.a.QuizList,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"}),this.props.loading&&0!==this.props.quizes.length?Object(O.jsx)(W,{}):Object(O.jsx)("ul",{children:this.renderQuizes()})]})})}}]),n}(r.Component),we=Object(w.b)((function(e){return{quizes:e.quizReducer.quizes,loading:e.quizReducer.loading}}),(function(e){return{fetchQuizes:function(){return e(function(){var e=Object(G.a)(K.a.mark((function e(t){var n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(pe()),e.prev=1,e.next=4,ee.get("quiz.json");case 4:n=e.sent,r=[],Object.keys(n.data).forEach((function(e,t){var n={id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)};r=[].concat(Object(p.a)(r),[n])})),t(he(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(be(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(ze),Ce=n(2),ke=n(55),qe=n.n(ke);function Qe(e,t){return Object(Ce.a)(Object(Ce.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function Se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function Ie(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var Ae=n(40),Te=n.n(Ae);function Ee(e){var t=e.valid,n=e.touched,r=e.shouldValidate;return!t&&r&&n}var Ne=function(e){var t=e.type||"text",n=[Te.a.Input],r="".concat(t,"-").concat(Math.random());return Ee(e)&&(n=[].concat(Object(p.a)(n),[Te.a.invalid])),Object(O.jsxs)("div",{className:n.join(" "),children:[Object(O.jsx)("label",{htmlFor:r,children:e.label}),Object(O.jsx)("input",{type:e.type,id:r,value:e.value,onChange:e.onChange}),Ee(e)?Object(O.jsx)("span",{children:e.errorMessage}):null]})},Fe=n(56),Re=n.n(Fe),He=function(e){var t="".concat(e.label,"-").concat(Math.random());return Object(O.jsxs)("div",{className:Re.a.Select,children:[Object(O.jsx)("label",{htmlFor:t,children:e.label}),Object(O.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(O.jsx)("option",{value:e.value,children:e.text},e.value+t)}))})]})},Le={quiz:[]},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(Ce.a)(Object(Ce.a)({},e),{},{quiz:[].concat(Object(p.a)(e.quiz),[t.item])});case le:return Object(Ce.a)(Object(Ce.a)({},e),{},{quiz:[]});default:return e}};function Me(e){return Qe({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function Ue(){return{question:Qe({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:Me(1),option2:Me(2),option3:Me(3),option4:Me(4)}}var Be=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={rightAnswerId:1,isFormValid:!1,formControls:Ue()},e.submitHandler=function(e){e.preventDefault()},e.addQuestionHandler=function(){var t=e.state.formControls,n=t.question,r=t.option1,i=t.option2,a=t.option3,s=t.option4,c={id:e.props.quiz.length+1,question:n.value,rightAnswerId:e.state.rightAnswerId,answers:[{text:r.value,id:r.id},{text:i.value,id:i.id},{text:a.value,id:a.id},{text:s.value,id:s.id}]};e.props.createQuizeQuestion(c),e.setState({rightAnswerId:1,isFormValid:!1,formControls:Ue()})},e.createQuizHandler=function(){e.setState({rightAnswerId:1,isFormValid:!1,formControls:Ue()}),e.props.finishCreateQuiz().then((function(t){e.props.history.push("/")}))},e.onChangeHandler=function(t,n){var r=Object(Ce.a)({},e.state.formControls),i=Object(Ce.a)({},r[n]);i.touched=!0,i.value=t,i.valid=Se(i.value,i.validation),r[n]=i,e.setState({formControls:r,isFormValid:Ie(r)})},e.selectChangeHandler=function(t){e.setState({rightAnswerId:+t.target.value})},e}return Object(o.a)(n,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(Ne,{label:r.label,value:r.value,valid:r.valid,shouldValidate:!!r.validation,touched:r.touched,type:r.type,errorMessage:r.errorMessage,onChange:function(n){return e.onChangeHandler(n.target.value,t)}}),1===n?Object(O.jsx)("hr",{}):null]},t+n)}))}},{key:"render",value:function(){var e=Object(O.jsx)(He,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return Object(O.jsx)("div",{className:qe.a.QuizCreator,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"}),Object(O.jsxs)("form",{onSubmit:this.submitHandler,children:[this.renderControls(),e,Object(O.jsx)(B,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"}),Object(O.jsx)(B,{type:"success",onClick:this.createQuizHandler,disabled:0===this.props.quiz.length,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"})]})]})})}}]),n}(r.Component),Ve=Object(w.b)((function(e){return{quiz:e.createReduser.quiz}}),(function(e){return{createQuizeQuestion:function(t){return e(function(e){return{type:ue,item:e}}(t))},finishCreateQuiz:function(){return e(function(){var e=Object(G.a)(K.a.mark((function e(t,n){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.post("quiz.json",n().createReduser.quiz);case 2:t({type:le});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(Be),Ze=n(41),Pe=n.n(Ze),We=n(57),Xe=n.n(We);function Je(e){return function(t){setTimeout((function(){t(Ke())}),1e3*e)}}function Ke(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:je}}function Ge(e){return{type:de,token:e}}var Ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",valid:!1,touched:!1,validation:{required:!0,minLenght:6}}}},e.loginHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!0)},e.registerHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!1)},e.submitHandler=function(e){e.preventDefault()},e.validateControl=function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=Xe.a.email(e)),t.minLenght&&(n=e.length>=t.minLenght&&n),n},e.onChangeHandler=function(t,n){var r=Object(Ce.a)({},e.state.formControls),i=Object(Ce.a)({},r[n]);i.value=t.target.value,i.touched=!0,i.valid=e.validateControl(i.value,i.validation),r[n]=i;var a=!0;Object.keys(r).forEach((function(e){a=r[e].valid&&a})),e.setState({formControls:r,isFormValid:a})},e}return Object(o.a)(n,[{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(O.jsx)(Ne,{type:r.type,value:r.value,valid:r.valid,touched:r.touched,label:r.label,shouldValidate:!!r.validation,errorMessage:r.errorMessage,onChange:function(n){return e.onChangeHandler(n,t)}},n)}))}},{key:"render",value:function(){return Object(O.jsx)("div",{className:Pe.a.Auth,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(O.jsxs)("form",{onSubmit:this.submitHandler,className:Pe.a.AuthForm,children:[this.renderInputs(),Object(O.jsx)(B,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(O.jsx)(B,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid,children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u0432\u043e\u0430\u0442\u044c\u0441\u044f"})]})]})})}}]),n}(r.Component),$e=Object(w.b)(null,(function(e){return{auth:function(t,n,r){return e(function(e,t,n){return function(){var r=Object(G.a)(K.a.mark((function r(i){var a,s,c,o,u;return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a={email:e,password:t,returnSecureToken:!0},s="",s=n?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiPNjYynqlIyylpSb6zCRHIjCV5J3KDUw":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiPNjYynqlIyylpSb6zCRHIjCV5J3KDUw",r.next=5,$.a.post(s,a);case 5:c=r.sent,o=c.data,u=new Date((new Date).getTime()+1e3*o.expiresIn),localStorage.setItem("token",o.idToken),localStorage.setItem("userId",o.localId),localStorage.setItem("expirationDate",u),i(Ge(o.idToken)),i(Je(o.expiresIn));case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,n,r))}}}))(Ye),et={token:null},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(Ce.a)(Object(Ce.a)({},e),{},{token:t.token});case je:return Object(Ce.a)(Object(Ce.a)({},e),{},{token:null});default:return e}},nt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(O.jsx)(ge.a,{to:"/"})}}]),n}(r.Component),rt=Object(w.b)(null,(function(e){return{logout:function(){return e(Ke())}}}))(nt),it=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=Object(O.jsxs)(ge.d,{children:[Object(O.jsx)(ge.b,{path:"/auth",component:$e}),Object(O.jsx)(ge.b,{path:"/quiz/:id",component:xe}),Object(O.jsx)(ge.b,{path:"/",exact:!0,component:we}),Object(O.jsx)(ge.a,{to:"/"})]});return this.props.isAut&&(e=Object(O.jsxs)(ge.d,{children:[Object(O.jsx)(ge.b,{path:"/quiz-creator",component:Ve}),Object(O.jsx)(ge.b,{path:"/quiz/:id",component:xe}),Object(O.jsx)(ge.b,{path:"/logout",component:rt}),Object(O.jsx)(ge.b,{path:"/",exact:!0,component:we}),Object(O.jsx)(ge.a,{to:"/"})]})),Object(O.jsx)(k,{children:e})}}]),n}(r.Component),at=Object(ge.g)(Object(w.b)((function(e){return{isAut:!!e.authReduser.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(Ke()):(e(Ge(t)),e(Je((n.getTime()-(new Date).getTime())/1e3)))}else e(Ke())}))}}}))(it)),st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))},ct=n(19),ot={quizes:[],loading:!1,results:{},isFinish:!1,activeQuestion:0,answerState:null,quiz:null};var ut=Object(ct.c)({quizReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0});case ne:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,quizes:t.quizes});case re:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,error:t.error});case ie:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,quiz:t.quiz});case ae:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,answerState:t.answerState,results:t.results});case se:return Object(Ce.a)(Object(Ce.a)({},e),{},{isFinish:!0});case ce:return Object(Ce.a)(Object(Ce.a)({},e),{},{activeQuestion:t.number,answerState:null});case oe:return Object(Ce.a)(Object(Ce.a)({},e),{},{results:{},isFinish:!1,activeQuestion:0,answerState:null});default:return e}},createReduser:De,authReduser:tt}),lt=n(58),dt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):ct.d,jt=Object(ct.e)(ut,dt(Object(ct.a)(lt.a)));s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(w.a,{store:jt,children:Object(O.jsx)(y.a,{children:Object(O.jsx)(at,{})})})}),document.getElementById("root")),st()}},[[90,1,2]]]);
//# sourceMappingURL=main.325c4db9.chunk.js.map
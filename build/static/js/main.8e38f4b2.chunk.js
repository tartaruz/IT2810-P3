(this["webpackJsonpproject-3"]=this["webpackJsonpproject-3"]||[]).push([[0],{111:function(e,t,n){},134:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),l=(n(81),n(82),n(6)),u=function(e){return{type:"TAB_CHANGED",tab:e}},i=function(e,t,n){return function(r){var a;n?n&&(a="date"):a="alpha";var o=e.replace(" ","+");fetch("http://localhost:3000/"+a+"/title="+o+"&page="+t).then((function(e){return e.json()})).then((function(e){return r({type:"FETCH_MOVIE",payload:e})}))}},p=function(e,t){return function(n){var r;t?t&&(r="date"):r="alpha",fetch("http://localhost:3000/"+r+"/all&page="+e).then((function(e){return e.json()})).then((function(e){return n({type:"FETCH_MOVIE",payload:e})}))}},s=function(e,t,n){return function(r){var a;n?n&&(a="date"):a="alpha";for(var o="",c=0;c<t.length;c++)o+=t[c]+"+";o=o.slice(0,-1),fetch("http://localhost:3000/"+a+"/genres="+o+"&page="+e).then((function(e){return e.json()})).then((function(e){return r({type:"FETCH_MOVIE",payload:e})}))}},d=function(e,t,n,r){return function(a){var o;r?r&&(o="date"):o="alpha";for(var c="",l=0;l<n.length;l++)c+=n[l]+"+";c=c.slice(0,-1);var u=t.replace(" ","+");fetch("http://localhost:3000/f/"+o+"/title="+u+"&genre="+c+"&page="+e).then((function(e){return e.json()})).then((function(e){return a({type:"FETCH_MOVIE",payload:e})}))}},h=function(e,t){return function(n){fetch("http://localhost:3000/alpha/genres="+e+"&page="+t).then((function(e){return e.json()})).then((function(e){n({type:"FETCH_MOVIE",payload:e})}))}},f=function(e){return function(t){fetch("http://localhost:3000/vote/all&page="+e).then((function(e){return e.json()})).then((function(e){t({type:"FETCH_MOVIE",payload:e})}))}},m=function(){return console.log("movie reset reached"),{type:"RESET_MOVIE"}},v=n(63),g=n.n(v),E=n(162),y=n(163),b=(n(88),Object(E.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}))),T=Object(l.b)((function(e){return{tab:e.tabReducer,page:e.pageReducer,filterSort:e.filterSortReducer,inputValue:e.searchReducer}}),(function(e){return{changeToTab1:function(t){e(m()),e({type:"RESET_PAGE"}),e(u(t))},changeToTab2:function(t,n){e(m()),e({type:"RESET_PAGE"}),e({type:"RESET_TEXT"}),e({type:"RESET_FILTERSORT"}),e(f(n)),e(u(t))},changeToTab3:function(t){e(m()),e({type:"RESET_PAGE"}),e(u(t)),e({type:"RESET_TEXT"}),e({type:"RESET_FILTERSORT"})}}}))((function(e){var t=b();return a.a.createElement("nav",{id:"header"},a.a.createElement("h1",null,a.a.createElement("img",{id:"mongoflixLogo",src:g.a,alt:"mongoflix"})),a.a.createElement(y.a,{variant:"contained",className:t.button,id:"SearchPage",onClick:function(){return e.changeToTab1(1)}},"Search"),a.a.createElement(y.a,{variant:"contained",className:t.button,id:"showFavourite",onClick:function(){return e.changeToTab2(2,e.page)}},"Show popular"),a.a.createElement(y.a,{variant:"contained",className:t.button,id:"advancedView",onClick:function(){return e.changeToTab3(3)}},"Advanced view"))})),R=[{text:"Action",value:1194},{text:"Adventure",value:935},{text:"Fantasy",value:602},{text:"Sci-Fi",value:628},{text:"Thriller",value:1438},{text:"Animation",value:236},{text:"Comedy",value:1852},{text:"Family",value:525},{text:"Musical",value:134},{text:"Romance",value:1084},{text:"Mystery",value:523},{text:"Western",value:111},{text:"Drama",value:2577},{text:"History",value:224},{text:"Sport",value:181},{text:"Horror",value:570},{text:"Crime",value:891},{text:"War",value:218},{text:"Biography",value:308},{text:"Music",value:215},{text:"Documentary",value:119},{text:"Short",value:21},{text:"News",value:5},{text:"Film-Noir",value:6},{text:"Reality-TV",value:1}],S=n(27),O=n(15),C=n(28),x=n(29),j=n(31),w=n(169),A=n(164),V=n(165),k=n(141),D=n(67),_=n.n(D),F=n(64),M=n.n(F),N=n(42),P=n(25),I=(n(106),Object(E.a)((function(e){return{root:{width:"100%",paddingBottom:"1%"},heading:{margin:"auto",fontSize:e.typography.pxToRem(30),fontWeight:e.typography.fontWeightRegular},movImg:{height:"10%",width:"10%"},body:{backgroundColor:"#F5F5F5"},movieText:{margin:"auto"}}})));P.a.configure();var L=function(e){console.log(e.target.value.split("#"));var t=e.target.value.split("#")[1],n=e.target.value.split("#")[0];console.log(n),"voted"!==localStorage.getItem(n)?(M.a.post("http://localhost:3000/vote/id="+n+"&vote="+t).then((function(e){return e.data})).then((function(e){return function(e){console.log(e),e.Vote<0?(P.a.error('You downvoted "'+e.Movie+'"'),P.a.error("Current votes:"+e.CurrentVotes)):(P.a.success('You upvoted "'+e.Movie+'"'),P.a.success("Current votes:"+e.CurrentVotes))}(e)})),localStorage.setItem(n,"voted")):P.a.info("You have already voted this movie")},H=Object(l.b)((function(e){return{movies:e.movies}}))((function(e){var t=I(),n=e.movie;return a.a.createElement("div",{className:t.root,id:"resultMovies"},a.a.createElement(w.a,null,a.a.createElement(A.a,{expandIcon:a.a.createElement(_.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},a.a.createElement("img",{className:t.movImg,src:n.Poster,alt:"Logo"}),a.a.createElement(k.a,{className:t.heading},n.Title," (",n.DateString,")")),a.a.createElement(V.a,{className:t.body},a.a.createElement(k.a,{className:t.movieText,component:"span",variant:"body2"},a.a.createElement("h3",null,"Director: ",n.Director),a.a.createElement("h3",null,"Genre: ",n.Genre.map((function(e){return e+" "}))),a.a.createElement("h3",null,"Actors: ",n.Actors),a.a.createElement("h3",null,n.Plot),a.a.createElement("button",{id:"upVoteBtn",value:n._id+"#up",onClick:L},a.a.createElement(N.b,null)," Upvote"),a.a.createElement("button",{id:"downVoteBtn",value:n._id+"#down",onClick:L},"Down ",a.a.createElement(N.a,null)),a.a.createElement("p",null," Votes: ",n.Votes)))))})),G=(n(111),function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(C.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(a)))).handlePageUpdate=function(){n.props.pageLoadMorelicked(),n.handleLoadMore()},n.handleLoadMore=function(){if(1===n.props.tab){var e=!1,t=[];for(var r in n.props.filterSort)"byDate"===r?e=n.props.filterSort[r]:n.props.filterSort[r]&&t.push(r);""===n.props.inputValue&&0===t.length?n.props.handleEmptySearch(n.props.page,e):""!==n.props.inputValue&&0===t.length?(console.log("number movies "+n.props.count),n.props.handleTitleSearch(n.props.inputValue,n.props.page,e)):""!==n.props.inputValue&&t.length>0?n.props.handleFilterAndTitleSearch(n.props.page,n.props.inputValue,t,e):""===n.props.inputValue&&t.length>0&&n.props.handleFilteredSearch(n.props.page,t,e)}else 2===n.props.tab?n.props.getNextPopular(n.props.page):3===n.props.tab&&n.props.getNextCategory(n.props.category,n.props.page)},n}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"searchResults"},a.a.createElement("div",null,""!==this.props.count&&0===this.props.count[0].Results?a.a.createElement("h2",{id:"no-result-msg"},"No results in database"):""),this.props.movies.map((function(e){return a.a.createElement(H,{key:e._id,movie:e})})),a.a.createElement("div",null,""!==this.props.count&&(10*(this.props.page+1)<=this.props.count[0].Results?a.a.createElement("button",{id:"load-more-btn",onClick:function(){return e.handlePageUpdate()}},"Load more"):"")))}}]),t}(r.Component)),B=Object(l.b)((function(e){return{page:e.pageReducer,movies:e.movies.result,count:e.movies.count,tab:e.tabReducer,category:e.wordCloudReducer,genre:e.filterSortReducer,byDate:e.filterSortReducer.byDate,inputValue:e.searchReducer}}),(function(e){return{pageLoadMorelicked:function(){return e({type:"LOAD_MORE"})},handleTitleSearch:function(t,n,r){return e(i(t,n+1,r))},handleEmptySearch:function(t,n){return e(p(t+1,n))},handleFilteredSearch:function(t,n,r){return e(s(t+1,n,r))},handleFilterAndTitleSearch:function(t,n,r,a){return e(d(t+1,n,r,a))},getNextPopular:function(t){return e(f(t+1))},getNextCategory:function(t,n){return e(h(t,n+1))}}}))(G),W=n(68),X=n.n(W),U=function(e){return 5*Math.log2(e.value)},Y=function(e){return e.value%50},z=Object(l.b)((function(e){return{category:e.wordCloudReducer,tab:e.tabReducer,page:e.pageReducer}}),(function(e){return{wordClick:function(t,n){e({type:"WORD_CLICKED",category:t}),e(h(t,n))}}}))((function(e){return 3===e.tab&&a.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"rgba(255,255,255,0.8)"}},a.a.createElement(X.a,{id:"wordcloud",data:R,fontSizeMapper:U,rotate:Y,onWordClick:function(t){e.wordClick(t.text,e.page),window.scrollTo(0,800)}}),""!==e.category?a.a.createElement("div",null,a.a.createElement("h2",{id:"genreTitle"},"Genre: ",e.category," Movies"),"  ",a.a.createElement(B,null)):"")})),J=Object(l.b)((function(e){return{tab:e.tabReducer}}))((function(e){return 3===e.tab&&a.a.createElement("div",null,a.a.createElement(z,null))})),K=Object(l.b)((function(e){return{tab:e.tabReducer}}))((function(e){return 2===e.tab&&a.a.createElement("div",null,2===e.tab?a.a.createElement("div",null,a.a.createElement("h2",{id:"topMovies"},"The most popular movies"),"  ",a.a.createElement(B,null)):"")})),$=function(e){function t(){return Object(S.a)(this,t),Object(C.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"expandSearch"},a.a.createElement("button",{id:"expanson-btn",onClick:this.props.expandedClick},"Advanced search"))}}]),t}(r.Component),q=Object(l.b)((function(e){return{expand:e.expandReducer}}),(function(e){return{expandedClick:function(){return e({type:"EXPAND"})}}}))($),Q=n(172),Z=n(171),ee=n(167),te=n(168),ne=n(170),re=["Action","Adventure","Fantasy","Sci-Fi","Thriller","Animation","Comedy","Family","Musical","Romance","Mystery","Western","Drama","History","Sport","Horror","Crime","War","Biography","Music","Documentary","Short","News","Film-Noir","Reality-TV"],ae=Object(E.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space"},formControl:{margin:e.spacing(3)}}})),oe=Object(l.b)((function(e){return{filter:e.filterSortReducer,isExpanded:e.expandReducer}}),(function(e){return{handleReset:function(){return e({type:"RESET_PAGE"})},filterChanged:function(t,n){e(function(e,t){return{type:"FILTERSORT_CHANGED",category:e,checked:t}}(t,n))}}}))((function(e){var t=ae(),n=function(t){e.handleReset(),e.filterChanged(t.target.value,t.target.checked)};return e.isExpanded&&a.a.createElement("div",{className:t.root,id:"searchOptions"},a.a.createElement(Z.a,{component:"fieldset",className:t.formControl},a.a.createElement(Q.a,{component:"legend"},"Filter"),a.a.createElement(ee.a,null,re.map((function(t){return a.a.createElement(te.a,{key:t,control:a.a.createElement(ne.a,{checked:e.filter[t]||!1,onChange:function(e){return n(e)},value:t,color:"primary"}),label:t})})))),a.a.createElement(Z.a,{component:"fieldset",className:t.formControl},a.a.createElement(Q.a,{component:"legend"},"Sort"),a.a.createElement(ee.a,null,a.a.createElement(te.a,{control:a.a.createElement(ne.a,{checked:e.filter.byDate,onChange:function(e){return n(e)},value:"byDate"}),label:"By date"}))))})),ce=(n(134),function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(C.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(a)))).pageReset=function(){n.props.handleResetPage(),n.checkSearch()},n.checkSearch=function(){var e=!1,t=[];for(var r in n.props.filterSort)"byDate"===r?e=n.props.filterSort[r]:n.props.filterSort[r]&&t.push(r);""===n.props.inputValue&&0===t.length?n.props.handleEmptySearch(n.props.page,e):""!==n.props.inputValue&&0===t.length?n.props.handleTitleSearch(n.props.inputValue,n.props.page,e):""!==n.props.inputValue&&t.length>0?n.props.handleFilterAndTitleSearch(n.props.page,n.props.inputValue,t,e):""===n.props.inputValue&&t.length>0&&n.props.handleFilteredSearch(n.props.page,t,e),n.props.resetMovies(),n.props.handleResetPage()},n}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"searchBox"},a.a.createElement("div",null,a.a.createElement("input",{id:"searchInput",type:"text",name:"title",onChange:function(t){return e.props.handleChangedInput(t)},value:this.props.inputValue,placeholder:"Type a movie title, or nothing to show all"}),a.a.createElement("a",{id:"searchBtn",href:"#resultMovies",onClick:function(){e.pageReset(),window.scrollTo(0,800)}},"Search")))}}]),t}(r.Component)),le=Object(l.b)((function(e){return{movies:e.movies,inputValue:e.searchReducer,page:e.pageReducer,filterSort:e.filterSortReducer}}),(function(e){return{handleResetPage:function(){return e({type:"RESET_PAGE"})},handleTitleSearch:function(t,n,r){return e(i(t,n,r))},handleEmptySearch:function(t,n){return e(p(t,n))},handleFilteredSearch:function(t,n,r){return e(s(t,n,r))},handleFilterAndTitleSearch:function(t,n,r,a){return e(d(t,n,r,a))},handleChangedInput:function(t){e({type:"UPDATE_TEXT",title:t.target.value})},resetMovies:function(){return e(m())}}}))(ce),ue=Object(l.b)((function(e){return{tab:e.tabReducer}}))((function(e){return 1===e.tab&&a.a.createElement("div",{id:"search-container"},a.a.createElement("div",null,a.a.createElement(le,{id:"search"})),a.a.createElement(q,null),a.a.createElement(oe,null),a.a.createElement(B,null))})),ie=n(21),pe=n(69),se=n(23);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(se.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe={byDate:!1,categories:""},me={result:[],count:""},ve=Object(ie.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE":return{result:e.result.concat(t.payload.slice(0,-1)),count:t.payload.slice(-1)};case"RESET_MOVIE":return{result:[],count:""};default:return e}},searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TEXT":return t.title;case"RESET_TEXT":return"";default:return e}},filterSortReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTERSORT_CHANGED":return he({},e,Object(se.a)({},t.category,t.checked));case"RESET_FILTERSORT":return{category:"",byDate:!1};default:return e}},expandReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EXPAND":return!e;default:return e}},tabReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TAB_CHANGED":return t.tab;default:return e}},pageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_MORE":return e+1;case"RESET_PAGE":return 0;default:return e}},wordCloudReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WORD_CLICKED":return t.category;default:return e}}}),ge=[pe.a],Ee=Object(ie.e)(ve,{},Object(ie.d)(ie.a.apply(void 0,ge)));var ye=function(){return a.a.createElement(l.a,{store:Ee},a.a.createElement("div",{className:"App"},a.a.createElement(T,null),a.a.createElement(ue,null),a.a.createElement(K,null),a.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,n){e.exports=n.p+"static/media/mongoflix.2b2c1397.png"},76:function(e,t,n){e.exports=n(138)},81:function(e,t,n){},82:function(e,t,n){},88:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.8e38f4b2.chunk.js.map
(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),c=a.n(o),r=(a(12),a(1)),s=a(2),i=a(4),u=a(3),m=(a(13),a(14),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={landingPageClosed:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({landingPageClosed:!0})}),6500)}},{key:"render",value:function(){var e="landingPage";return this.state.landingPageClosed&&(e="landingPage closeLanding"),l.a.createElement("section",{className:e},l.a.createElement("div",null,l.a.createElement("h1",{className:"h1animate"},"Hello,"),l.a.createElement("h2",{className:"h2animate"},"I'm Luke"),l.a.createElement("h4",{className:"h3animate"},"A junior software developer")))}}]),a}(n.Component)),d=(a(15),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={scrolled:!1},e.handleAboutScroll=function(){window.scrollTo({top:600,behavior:"smooth"})},e.handleProjectScroll=function(){window.scrollTo({top:1200,behavior:"smooth"})},e.handleContactScroll=function(){window.scrollTo({top:1850,behavior:"smooth"})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){!0!==window.scrollY<0?e.setState({scrolled:!0}):e.setState({scrolled:!1})}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){return l.a.createElement("div",{className:this.state.scrolled?"navBar scrolled":"navBar"},l.a.createElement("button",{onClick:this.handleAboutScroll},"About"),l.a.createElement("button",{onClick:this.handleProjectScroll},"Projects"),l.a.createElement("button",{onClick:this.handleContactScroll},"Get In Touch"))}}]),a}(n.Component)),h=(a(16),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleAbout=function(){window.scrollTo({top:600,behavior:"smooth"})},e.handleProject=function(){window.scrollTo({top:1200,behavior:"smooth"})},e.handleContact=function(){window.scrollTo({top:1850,behavior:"smooth"})},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"homePage"},l.a.createElement("main",{className:"mainContainer"},l.a.createElement("div",{className:"mainBox aboutBox",onClick:this.handleAbout},l.a.createElement("h2",{className:"title"},"Who I am & What I Do")),l.a.createElement("div",{className:"bottomBoxes"},l.a.createElement("div",{className:"mainBox projectsBox",onClick:this.handleProject},l.a.createElement("h2",{className:"title"},"Some of my favourite work"),l.a.createElement("div",null)),l.a.createElement("div",{className:"mainBox contactsBox",onClick:this.handleContact},l.a.createElement("h2",{className:"title title1"},"Get In Touch"),l.a.createElement("div",null)))))}}]),a}(n.Component)),v=(a(17),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"aboutPage"},l.a.createElement("div",{className:"aboutTitle"},l.a.createElement("h2",null,"Me, Myself & I")),l.a.createElement("main",{className:"lists"},l.a.createElement("div",{className:"personalList"},l.a.createElement("ul",null,l.a.createElement("li",null,"I was born, raised and educated in Newcastle"),l.a.createElement("li",null,"I attended Newcastle University and studied Psychology before becoming a software developer"),l.a.createElement("li",null,"I began teaching myself basic programming until I joined Code Nation"),l.a.createElement("li",null,"I attended Code Nations Master Course and am eager to find my first role"),l.a.createElement("li",null,"I'm passionate mainly about React, I love designing anything from websites to full stack applications"))),l.a.createElement("div",{className:"workList"},l.a.createElement("div",{className:"toolBoxTitle"},l.a.createElement("p",{className:"toolTitle"},"My Toolbox consists of:")),l.a.createElement("div",{className:"iconImages"},l.a.createElement("div",{className:"box htmlBox"}),l.a.createElement("div",{className:"box cssBox"}),l.a.createElement("div",{className:"box jsBox"}),l.a.createElement("div",{className:"box reactBox"}),l.a.createElement("div",{className:"box nodeBox"}),l.a.createElement("div",{className:"box mongoBox"})))))}}]),a}(n.Component)),p=(a(18),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={bmi:!1,calc:!1,dice:!1,drum:!1,todo:!1,surman:!1},e.handlebmiMouseOut=function(){e.setState({bmi:!1})},e.handlebmiMouseOver=function(){e.setState({bmi:!0})},e.handlecalcMouseOut=function(){e.setState({calc:!1})},e.handlecalcMouseOver=function(){e.setState({calc:!0})},e.handlediceMouseOut=function(){e.setState({dice:!1})},e.handlediceMouseOver=function(){e.setState({dice:!0})},e.handledrumMouseOut=function(){e.setState({drum:!1})},e.handledrumMouseOver=function(){e.setState({drum:!0})},e.handletodoMouseOut=function(){e.setState({todo:!1})},e.handletodoMouseOver=function(){e.setState({todo:!0})},e.handlesurmanMouseOut=function(){e.setState({surman:!1})},e.handlesurmanMouseOver=function(){e.setState({surman:!0})},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"projectPage"},l.a.createElement("div",null,l.a.createElement("h2",{className:"projectTitle"},"My Top Projects")),l.a.createElement("div",{className:"projects"},l.a.createElement("div",{className:"projectBox bmiBox",onMouseOver:this.handlebmiMouseOver,onMouseOut:this.handlebmiMouseOut},l.a.createElement("a",{target:"_blank",href:"ljs22.github.io/bmi-calculator/"},l.a.createElement("span",{className:"linkSpan"})),this.state.bmi?l.a.createElement("p",null,"Here I designed a simple BMI Calculator Application using React"):null),l.a.createElement("div",{className:"projectBox calcBox",onMouseOver:this.handlecalcMouseOver,onMouseOut:this.handlecalcMouseOut},l.a.createElement("a",{target:"_blank",href:"ljs22.github.io/calculator-app/"},l.a.createElement("span",{className:"linkSpan"})),this.state.calc?l.a.createElement("p",null,"Here I designed a Calculator Application using React"):null),l.a.createElement("div",{className:"projectBox diceBox",onMouseOver:this.handlediceMouseOver,onMouseOut:this.handlediceMouseOut},l.a.createElement("a",{target:"_blank",href:"ljs22.github.io/dice-game-multi/"},l.a.createElement("span",{className:"linkSpan"})),this.state.dice?l.a.createElement("p",null,"Here I designed a Multiplayer Lord of the Rings based Dice Game"):null),l.a.createElement("div",{className:"projectBox drumBox",onMouseOver:this.handledrumMouseOver,onMouseOut:this.handledrumMouseOut},l.a.createElement("a",{target:"_blank",href:"ljs22.github.io/drumkit/"},l.a.createElement("span",{className:"linkSpan"})),this.state.drum?l.a.createElement("p",null,"Here I designed a funky virtual Drum Kit"):null),l.a.createElement("div",{className:"projectBox todoBox",onMouseOver:this.handletodoMouseOver,onMouseOut:this.handletodoMouseOut},l.a.createElement("a",{target:"_blank",href:"ljs22.github.io/to-do-list-app/"},l.a.createElement("span",{className:"linkSpan"})),this.state.todo?l.a.createElement("p",null,"Here I designed a To Do List Applicatio using React"):null),l.a.createElement("div",{className:"projectBox surmanBox",onMouseOver:this.handlesurmanMouseOver,onMouseOut:this.handlesurmanMouseOut},l.a.createElement("a",{target:"_blank",href:"ljs22.github.io/surman/"},l.a.createElement("span",{className:"linkSpan"})),this.state.surman?l.a.createElement("p",null,"Here I designed a website for an Indian NGO"):null)),l.a.createElement("p",null,"Please check out my"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/LJS22"},"Github")," ","for more!"))}}]),a}(n.Component)),b=(a(19),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"contacts"},l.a.createElement("div",{className:"contactTitle"},l.a.createElement("h2",null,"Want To Collaborate?")),l.a.createElement("main",{className:"mainContact"},l.a.createElement("div",{className:"contactDivs"},l.a.createElement("div",{className:"contactIcon email"}),l.a.createElement("p",null,"Email: lstobbart35@gmail.com")),l.a.createElement("div",{className:"contactDivs"},l.a.createElement("div",{className:"contactIcon linkedin"}),l.a.createElement("p",null,"Contact me via my"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/luke-stobbart-5919331b3/"},"LinkedIn"))),l.a.createElement("div",{className:"contactDivs"},l.a.createElement("div",{className:"contactIcon github"}),l.a.createElement("p",null,"Want to collaborate on any of my current projects? Visit my"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/LJS22"},"Github")))))}}]),a}(n.Component)),E=(a(20),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={scrolled:!1},e.handleUp=function(){window.scrollBy({top:-620,behavior:"smooth"})},e.handleDown=function(){window.scrollBy({top:620,behavior:"smooth"})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){!0!==window.scrollY<0?e.setState({scrolled:!0}):e.setState({scrolled:!1})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:this.state.scrolled?"mainButton scrolled":"mainButton"},l.a.createElement("div",{className:"upButton",onClick:this.handleUp}),l.a.createElement("div",{className:"downButton",onClick:this.handleDown}))}}]),a}(n.Component)),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(h,{ref:this.props.homeRef}),l.a.createElement(v,null),l.a.createElement(p,null),l.a.createElement(b,null),l.a.createElement(E,null))}}]),a}(n.Component);c.a.render(l.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.42441604.chunk.js.map
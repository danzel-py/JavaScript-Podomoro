(this["webpackJsonpjs-podomoro"]=this["webpackJsonpjs-podomoro"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),c=s(4),a=s.n(c),r=(s(13),s(5)),o=s(6),d=s(1),h=s(8),l=s(7),u=(s(14),s.p+"static/media/Tururururu 5 seconds.b8da8c4e.mp3"),m=s(0);var b=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={sessionLength:25,breakLength:5,minutes:25,seconds:0,minutesDummy:"25",secondsDummy:"00",onPlay:!1,isReset:!0,onBreak:!1},n.updateLength=n.updateLength.bind(Object(d.a)(n)),n.timerSetting=n.timerSetting.bind(Object(d.a)(n)),n.setTimeTemplate=n.setTimeTemplate.bind(Object(d.a)(n)),n.onReset=n.onReset.bind(Object(d.a)(n)),n.setAlarm=n.setAlarm.bind(Object(d.a)(n)),n}return Object(o.a)(s,[{key:"setAlarm",value:function(){this.state.isReset?document.getElementById("beep").load():0===this.state.seconds&&0===this.state.minutes&&(document.getElementById("beep").load(),document.getElementById("beep").play())}},{key:"setTimeTemplate",value:function(){this.state.minutes<10?this.setState((function(e){return{minutesDummy:"0".concat(e.minutes)}})):this.setState((function(e){return{minutesDummy:"".concat(e.minutes)}})),this.state.seconds<10?this.setState((function(e){return{secondsDummy:"0".concat(e.seconds)}})):this.setState((function(e){return{secondsDummy:"".concat(e.seconds)}}))}},{key:"updateLength",value:function(e){if(this.state.isReset)switch(e){case"break-increment":this.state.breakLength<60&&this.setState({breakLength:this.state.breakLength+1});break;case"break-decrement":this.state.breakLength>1&&this.setState({breakLength:this.state.breakLength-1});break;case"session-increment":this.state.sessionLength<60&&this.setState({sessionLength:this.state.sessionLength+1});break;case"session-decrement":this.state.sessionLength>1&&this.setState({sessionLength:this.state.sessionLength-1})}}},{key:"timerSetting",value:function(){var e=this;this.interval=setInterval((function(){e.state.isReset||e.state.onPlay&&(0===e.state.seconds?0===e.state.minutes?e.state.onBreak?e.setState((function(e){return{minutes:e.sessionLength,onBreak:!1}})):e.setState((function(e){return{minutes:e.breakLength,onBreak:!0}})):e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})):e.setState((function(e){return{seconds:e.seconds-1}})))}),1e3)}},{key:"componentDidUpdate",value:function(e,t){this.state.sessionLength!==t.sessionLength&&this.setState((function(e){return{minutes:e.sessionLength}})),this.state.seconds===t.seconds&&this.state.minutes===t.minutes||(this.setTimeTemplate(),this.setAlarm())}},{key:"componentDidMount",value:function(){this.timerSetting()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"onReset",value:function(){this.setState((function(){return{sessionLength:25,breakLength:5,minutes:25,seconds:0,minutesDummy:"25",secondsDummy:"00",onPlay:!1,isReset:!0,onBreak:!1}})),this.setTimeTemplate(),this.setAlarm()}},{key:"render",value:function(){var e,t,s=this;e=this.state.onBreak?"Break":"Session";var n=Object(m.jsx)("div",{id:"reset",onClick:this.onReset,children:"\u27f3"});return t=this.state.isReset?Object(m.jsx)("div",{onClick:function(){s.setState({isReset:!1,onPlay:!0})},id:"start_stop",children:"\u25b6"}):this.state.onPlay?Object(m.jsx)("div",{onClick:function(){s.setState({onPlay:!1})},id:"start_stop",children:"\u275a\u275a"}):Object(m.jsx)("div",{onClick:function(){s.setState({onPlay:!0})},id:"start_stop",children:"\u25b6"}),Object(m.jsxs)("div",{id:"bigContainer",children:[Object(m.jsx)("div",{id:"title",children:"Pomodoro Clock"}),Object(m.jsxs)("div",{id:"topContainer",className:"unselectable",children:[Object(m.jsxs)("div",{className:"flex-row",children:[Object(m.jsx)("div",{id:"break-label",children:"Break Length:"}),Object(m.jsxs)("div",{className:"adjustArrows",children:[Object(m.jsx)("div",{id:"break-increment",onClick:function(){return s.updateLength("break-increment")},children:"\u25b2"}),Object(m.jsx)("div",{id:"break-length",children:this.state.breakLength}),Object(m.jsx)("div",{id:"break-decrement",onClick:function(){return s.updateLength("break-decrement")},children:"\u25bc"})]}),Object(m.jsx)("div",{className:"minute-label",children:" min."})]}),Object(m.jsxs)("div",{className:"flex-row",children:[Object(m.jsx)("div",{id:"session-label",children:"Session Length:"}),Object(m.jsxs)("div",{className:"adjustArrows",children:[Object(m.jsx)("div",{id:"session-increment",onClick:function(){return s.updateLength("session-increment")},children:"\u25b2"}),Object(m.jsx)("div",{id:"session-length",children:this.state.sessionLength}),Object(m.jsx)("div",{id:"session-decrement",onClick:function(){return s.updateLength("session-decrement")},children:"\u25bc"})]}),Object(m.jsx)("div",{className:"minute-label",children:"min."})]})]}),Object(m.jsxs)("div",{id:"midContainer",children:[Object(m.jsx)("div",{id:"timer-label",children:e}),Object(m.jsxs)("div",{id:"time-left",className:"flex-row",children:[this.state.minutesDummy,":",this.state.secondsDummy]}),Object(m.jsxs)("div",{id:"botContainer",className:"unselectable flex-row",children:[Object(m.jsx)("div",{id:"ppButton",children:t}),Object(m.jsx)("div",{id:"resetButton",children:n})]})]}),Object(m.jsx)("div",{id:"audioContainer",children:Object(m.jsx)("audio",{id:"beep",src:u})}),Object(m.jsxs)("div",{id:"creditContainer",children:["Created on ",Object(m.jsx)("a",{href:"https://www.reactjs.org",children:"ReactJS"})," by ",Object(m.jsx)("a",{href:"https://github.com/danzel-py",children:"danzel-py"})]})]})}}]),s}(i.a.Component),j=function(){return Object(m.jsx)("div",{className:"outer",children:Object(m.jsx)("div",{className:"middle",children:Object(m.jsx)("div",{className:"inner",children:Object(m.jsx)(b,{})})})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),c(e),a(e)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.b595f88e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{439:function(r,t,a){"use strict";a.r(t);var e=a(23),n=Object(e.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[r._v("#")]),r._v(" 队列")]),r._v(" "),a("blockquote",[a("p",[r._v("先进先出")])]),r._v(" "),a("h2",{attrs:{id:"数组模拟环形队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组模拟环形队列"}},[r._v("#")]),r._v(" 数组模拟环形队列")]),r._v(" "),a("p",[r._v("思路如下:")]),r._v(" "),a("ol",[a("li",[r._v("front变量的含义做一个调整; front就指向队列的第一个元素也就是说 arr[front]就是队列的第一个元素front的初始值=0")]),r._v(" "),a("li",[r._v("rea变量的含义做一个调整:rear指向队列的最后一个元素的后一个位置因为希望空出一个空间做为约定\nrear的初始值=0")]),r._v(" "),a("li",[r._v("当队列满时,条件是**(rear+1)% maxsize==  front**【满】")]),r._v(" "),a("li",[r._v("对队列为空的条件,rear= front 空")]),r._v(" "),a("li",[r._v("当我们这样分析,队列中有效的数据的个数**(rear+maxSize  - front)% maxSize**  // rear=1,font=0")]),r._v(" "),a("li",[r._v("我们就可以在原来的队列上修改得到,一个环形队死")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
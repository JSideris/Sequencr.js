/*
Sequencr.js V6

The MIT License (MIT)
Copyright (c) 2016 Joshua Sideris | josh.sideris@gmail.com | https://github.com/JSideris/Sequencr.js

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following condition:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function Sequencr(){this.chain=function(n,t){var e;Sequencr["for"].apply(this,[0,n.length,function(t){e=void 0===e?n[t].call(this):n[t].call(this,e)},t])},this["for"]=function(n,t,e,i,o){if(n>=t)throw"startInclusive must be less than endExclusive.";t>n?setTimeout(function(r){var c=e.call(r,n);c!==!1?Sequencr["for"].apply(r,[n+1,t,e,i,o]):o&&o.call(this,!1)},i&&i.constructor&&i.call&&i.apply?i(n)||1:i||1,this):o&&o.call(this,!0)},this["do"]=function(n,t){setTimeout(function(e){var i=n.call(e);i!==!1&&Sequencr["do"].apply(e,[n,t])},t&&t.constructor&&t.call&&t.apply?t()||1:t||1,this)},this.promiseChain=function(n){for(var t=null,e=0,i=0;i<n.length;i++)t=t?t.then(function(t){return new Promise(function(i,o){n[e++](i,o,t)})}):new Promise(function(t,i){n[e++](t,i)});return t},this.promiseFor=function(n,t,e,i){if(n>=t)throw"startInclusive must be less than endExclusive.";if(t==1/0)throw"Infinite loops are now allowed.";for(var o=null,r=n,c=n;t>c;c++)o=o?o.then(function(n){return new Promise(function(t,i){e(t,i,r++,n)})}):new Promise(function(n,t){e(n,t,r++)});return o}}var Sequencr=new Sequencr;
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

function Sequencr(){this.chain=function(n,t){var i;Sequencr["for"].apply(this,[0,n.length,function(t){i=void 0===i?n[t].call(this):n[t].call(this,i)},t])},this["for"]=function(n,t,i,o,e){t>n?setTimeout(function(r){var c=i.call(r,n);c!==!1?Sequencr["for"].apply(r,[n+1,t,i,o,e]):e&&e.call(this,!1)},o&&o.constructor&&o.call&&o.apply?o(n)||1:o||1,this):e&&e.call(this,!0)},this["do"]=function(n,t){setTimeout(function(i){var o=n.call(i);o!==!1&&Sequencr["do"].apply(i,[n,t])},t&&t.constructor&&t.call&&t.apply?t()||1:t||1,this)},this.promiseChain=function(n){for(var t=null,i=0,o=0;o<n.length;o++)t=t?t.then(function(t){return new Promise(function(o,e){n[i++](o,e,t)})}):new Promise(function(t,o){n[i++](t,o)});return t},this.promiseFor=function(n,t,i,o){if(n>=t)return new Promise(function(n){n()});if(t==1/0)throw"Infinite loops are now allowed.";for(var e=null,r=n,c=n;t>c;c++)e=e?e.then(function(n){return new Promise(function(t,o){i(t,o,r++,n)})}):new Promise(function(n,t){i(n,t,r++)});return e}}var Sequencr=new Sequencr;
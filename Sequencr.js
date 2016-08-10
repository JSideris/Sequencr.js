/*
Sequencr.js V5

The MIT License (MIT)
Copyright (c) 2016 Joshua Sideris | josh.sideris@gmail.com | https://github.com/JSideris/Sequencr.js

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following condition:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function Sequencr(){this.chain=function(n,t){var i;Sequencr["for"].apply(this,[0,n.length,function(t){i=void 0===i?n[t].call(this):n[t].call(this,i)},t])},this["for"]=function(n,t,i,e,r){t>n?setTimeout(function(l){var o=i.call(l,n);o!==!1?Sequencr["for"].apply(l,[n+1,t,i,e,r]):r&&r.call(this,!1)},e&&e.constructor&&e.call&&e.apply?e(n)||1:e||1,this):r&&r.call(this,!0)},this["do"]=function(n,t){setTimeout(function(i){var e=n.call(i);e!==!1&&Sequencr["do"].apply(i,[n,t])},t&&t.constructor&&t.call&&t.apply?t()||1:t||1,this)},this.promiseChain=function(n){for(var t=null,i=0;i<n.length;i++)t=t?t.then(n[i]):n[i]();return t},this.promiseFor=function(n,t,i,e){if(n>=t)throw"startInclusive must be less than endExclusive.";if(t==1/0)throw"Infinite loops are now allowed.";for(var r=null,l=n,o=n;t>o;o++)r=r?r.then(function(){return i(l++)}):i(l++);return r}}var Sequencr=new Sequencr;
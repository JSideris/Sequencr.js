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

function Sequencr(){this.chain=function(n,t){var r;Sequencr["for"].apply(this,[0,n.length,function(t){r=void 0===r?n[t].call(this):n[t].call(this,r)},t])},this["for"]=function(n,t,r,c,i){t>n?setTimeout(function(l){var o=r.call(l,n);o!==!1?Sequencr["for"].apply(l,[n+1,t,r,c,i]):i&&i.call(this,!1)},c&&c.constructor&&c.call&&c.apply?c(n)||1:c||1,this):i&&i.call(this,!0)},this["do"]=function(n,t){setTimeout(function(r){var c=n.call(r);c!==!1&&Sequencr["do"].apply(r,[n,t])},t&&t.constructor&&t.call&&t.apply?t()||1:t||1,this)},this.promiseChain=function(n){for(var t=null,r=0;r<n.length;r++)t=t?t.then(n[r]):n[r]();return t},this.promiseFor=function(n,t,r,c){for(var i=null,l=n,o=n;t>o;o++)i=i?i.then(function(){return r(l++)}):r(l++);return i}}var Sequencr=new Sequencr;
/*
Sequencr.js V4

The MIT License (MIT)
Copyright (c) 2016 Joshua Sideris | josh.sideris@gmail.com | https://github.com/JSideris/Sequencr.js

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following condition:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function Sequencr(){this.chain=function(c,n){Sequencr["for"].apply(this,[0,c.length,function(n){c[n].call(this)},n])},this["for"]=function(c,n,t,l,i){n>c?setTimeout(function(e){var o=t.call(e,c);o!==!1?Sequencr["for"].apply(e,[c+1,n,t,l,i]):i&&i.call(this,!1)},l&&l.constructor&&l.call&&l.apply?l(c)||1:l||1,this):i&&i.call(this,!0)},this["do"]=function(c,n){setTimeout(function(t){var l=c.call(t);l!==!1&&Sequencr["do"].apply(t,[c,n])},n&&n.constructor&&n.call&&n.apply?n()||1:n||1,this)}}var Sequencr=new Sequencr;
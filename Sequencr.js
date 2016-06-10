/*
Sequencr.js V2

The MIT License (MIT)
Copyright (c) 2016 Joshua Sideris | josh.sideris@gmail.com | https://github.com/JSideris/Sequencr.js

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following condition:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function Sequencr(){this.chain=function(n,c){Sequencr["for"].apply(this,[0,n.length,function(c){n[c].call(this)},c])},this["for"]=function(n,c,t,e,i){c>n?setTimeout(function(l){var u=t.call(l,n);u!==!1?Sequencr["for"].apply(l,[n+1,c,t,e,i]):i&&i.call(this)},e,this):i&&i.call(this)}}var Sequencr=new Sequencr;
/*
Sequencr.js V3

The MIT License (MIT)
Copyright (c) 2016 Joshua Sideris | josh.sideris@gmail.com | https://github.com/JSideris/Sequencr.js

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following condition:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function Sequencr(){this.chain=function(n,t){Sequencr["for"].apply(this,[0,n.length,function(t){n[t].call(this)},t])},this["for"]=function(n,t,c,i,e){t>n?setTimeout(function(u){var l=c.call(u,n);l!==!1?Sequencr["for"].apply(u,[n+1,t,c,i,e]):e&&e.call(this)},i,this):e&&e.call(this)},this["do"]=function(n,t){setTimeout(function(c){var i=n.call(c);i!==!1&&Sequencr["do"].apply(c,[n,t])},t,this)}}var Sequencr=new Sequencr;
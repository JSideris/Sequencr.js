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

function Sequencr() {
	this.chain = function (callbacks, timeout) {
		Sequencr.for.apply(this, [0, callbacks.length, function (i) {
			callbacks[i].call(this);
		}, timeout]);
	}

	this.for = function (startInclusive, endExclusive, callback, timeout, onCompleted) {
		if (startInclusive < endExclusive) {
			setTimeout(function (This) {
				var ret = callback.call(This, startInclusive);
				if(ret !== false){
					Sequencr.for.apply(This, [startInclusive + 1, endExclusive, callback, timeout, onCompleted]);
				}
				else if(onCompleted) {
					onCompleted.call(this, false);
				}
			}, (!!(timeout && timeout.constructor && timeout.call && timeout.apply)) ? (timeout(startInclusive) || 1) : (timeout || 1), this);
		}
		else if(onCompleted) {
			onCompleted.call(this, true);
		}
	}

	this.do = function (callback, timeout) {
		setTimeout(function (This) {
			var ret = callback.call(This);
			if(ret !== false){
				Sequencr.do.apply(This, [callback, timeout]);
			}
		}, (!!(timeout && timeout.constructor && timeout.call && timeout.apply)) ? (timeout() || 1) : (timeout || 1), this);
	}
}

var Sequencr = new Sequencr();

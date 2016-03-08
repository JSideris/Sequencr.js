function Sequencr() {
	this.chain = function (callbacks, timeout) {
		Sequencr.for.apply(this, [0, callbacks.length, function (i) {
			callbacks[i].call(this);
		}, timeout]);
	}

	this.for = function (startInclusive, endExclusive, callback, timeout, onCompleted) {
		if (startInclusive < endExclusive) {
			setTimeout(function (This) {
				callback.call(This, startInclusive);
				Sequencr.for.apply(This, [startInclusive + 1, endExclusive, callback, timeout, onCompleted]);
			}, timeout, this);
		}
		else if(onCompleted) {
			onCompleted.call(this);
		}
	}
}

var Sequencr = new Sequencr();

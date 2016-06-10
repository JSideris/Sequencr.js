#Changes
V3 - 2016-06-10
Added Sequencr.do, which is an infinite version of Sequencr.for that can also be exited by returning false in the callback. Use it for your game's animation loop or whatever.

V2 - 2016-06-09
Added ability to break out of a for loop by returning false. This will immediately invoke the onCompleted callback.
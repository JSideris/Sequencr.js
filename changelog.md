#Changes
**V4 - 2016-08-08**

Made the timeoute parameter optional. Default is 1 (ms).

Timeout can now either be an integer or a function that returns an integer.

Callback on Sequencr.for now provides a single parameter indicating whether the loop was broken out of early via returning false in the callback. true = breaked, false = completed iteration.

**V3 - 2016-06-10**

Added Sequencr.do, which is an infinite version of Sequencr.for that can also be exited by returning false in the callback. Use it for your game's animation loop or whatever.

**V2 - 2016-06-09**

Added ability to break out of a for loop by returning false. This will immediately invoke the onCompleted callback.

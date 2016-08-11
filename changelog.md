#Changes
**V6 2016-08*11 - Promise Encapsulation Update**

Callbacks passed into promiseChain and promiseFor no longer need to return a promise - this is now done automatically.

The promiseChain callback is now passed the following arguments (see usage): resolve, reject, preceedingReturnValue

The promiseFor callback is now passed the following arguments (see usage): resolve, reject, i, preceedingReturnValue

New usage for promiseChain and promiseFor - call either resolve or reject when the callback's work is done.

**V5 - 2016-08-10 - Promise Update**

Added support for native js promises via two new functions: promiseChain, promiseFor.

**V4 - 2016-08-08 - Better Callbacks and Timeouts Update**

Made the timeoute parameter optional. Default is 1 (ms).

Timeout can now either be an integer or a function that returns an integer.

Callback on Sequencr.for now provides a single parameter indicating whether the loop was broken out of early via returning false in the callback. true = breaked, false = completed iteration.

**V3 - 2016-06-10 - Do Update**

Added Sequencr.do, which is an infinite version of Sequencr.for that can also be exited by returning false in the callback. Use it as an alternative to setInterval, or whatever.

**V2 - 2016-06-09 - Break Update**

Added ability to break out of a for loop by returning false. This will immediately invoke the onCompleted callback.

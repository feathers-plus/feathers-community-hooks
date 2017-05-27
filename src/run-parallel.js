
/*
 runParallel(func, cloneDepth)
 Run a hook function in parallel to the Feathers method call.

 Parameters:
 - `func`       The function to run. Its signature is `func(contextClone)`
 - `cloneDepth` Depth to which the context is to be cloned. Default is 0 = do not clone.
                A depth of 5 would clone context.result.data.[].item

 Notes:
 - Feathers will keep on mutating `contextClone` if that has not been cloned.

 Example:
 app.service('users').after({
   create: runParallel(sendSignupEmail())
 });

 Author: Original version by bedeoverend
 */

import errors from 'feathers-errors';
import clone from 'clone';

export default function (func, cloneDepth = 0) {
  if (typeof func !== 'function') {
    throw new errors.BadRequest('Function not provided. (delay');
  }

  return function (context) {
    const copy = cloneDepth ? clone(context, true, cloneDepth) : context;

    setTimeout(() => func.call(this, copy));
  };
}

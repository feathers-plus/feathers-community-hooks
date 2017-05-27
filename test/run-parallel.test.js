
import { assert } from 'chai';
import runParallel from '../src/run-parallel';

let that;

function test (tester) {
  return function (context) {
    that = this;
    context.params._runParallel = true;
    tester();
  };
}

describe('transactions - runParallel', () => {
  beforeEach(() => {
    that = undefined;
  });
  
  it('runs the func', done => {
    runParallel(text(tester), 0);
    
    function tester() {
      done();
    }
  });
});

// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResult from '../check-result.js';
const test = QUnit.test;

test('should result rock if both land on 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getZeroOneTwo = 0;
    const userThrow = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(getZeroOneTwo, userThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('should result paper if land on 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getZeroOneTwo = 0;
    const userThrow = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(getZeroOneTwo, userThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});


test('should result scissors if lands on 2', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getZeroOneTwo = 0;
    const userThrow = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(getZeroOneTwo, userThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});


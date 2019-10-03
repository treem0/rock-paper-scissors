// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResult from '../check-result.js';
const test = QUnit.test;

test('should result draw if both land on 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 0;
    const computer = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should result win if play chooses 3 and computer 2', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 3;
    const computer = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});


test('should result lose if player choose 0 and computer chooses 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 0;
    const computer = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});


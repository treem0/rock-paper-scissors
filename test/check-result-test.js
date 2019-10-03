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

test('should result win if play chooses scissors and computer paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});


test('should result lose if player choose rock and computer chooses paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should result win if player choose paper and computer chooses rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});


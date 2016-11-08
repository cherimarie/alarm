// When form is submitted, the formHandler function is triggered. It finds out from
// getAlertFunction what to do when time runs out, then passes the appropriate function
// to the setTimeout function along with user's selected time.

// The code as written works (with one noted bug) if user selects 'popup' as their alert method.
// Your assignment is to extend it to work with the other two methods.

// In addition to the suggested TODOs and BUGFIXes, think about other ways
// this alarm clock could be extended. Could user select seconds or minutes?
// Are there other ways they could be alerted? Could a countdown be displayed?
// How can the user dismiss the rainbow alert without refreshing the page?

function rainbowAlert(){
  // TODO: Implement this function. It should add and remove the provided CSS classes to
  // an element of HTML (maybe the body?), causing it to rotate through the colors of the rainbow.
  // Maybe setInterval would be helpful?
}

function getAlertFunction(userSelection){
  // TODO: return a function that can be called when time runs out, based on the user's selection.
  // The first option is already implemented.
  if(userSelection === 'popup'){
    return function(){
      alert("Time's up!"); }
  }
}

function formHandler(){
  // BUGFIX: What if the value for 'seconds' isn't a number?
  // We should stop code evaluation if it isn't.
  var seconds = this.elements['seconds'].value;

  var alerter = getAlertFunction(this.elements['alarm-alert'].value);

  // BUGFIX: The user enters seconds, but setTimeout takes milliseconds.
  // We need to convert the value.

  setTimeout(alerter, seconds);

  // Javascript is handling this form; prevent it from trying to submit to a server.
  return false;
}

function init(){
  // Set handler for for sumbission event on form.
  var alarmForm = document.getElementById('alarm-form');
  alarmForm.onsubmit = formHandler;
}

window.onload = init;

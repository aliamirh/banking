$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault()
    var inputtedname = $("input#new-name").val()
    var inputtedInitialDeposit = $("input#initial-deposit").val()

    $("h4").text( "$ " + inputtedInitialDeposit);

  });
});

function Account(firstName, initialDeposit) {
  this.firstName = firstName
  this.initialDeposit = initialDeposit
}
function Account(deposit, withdraw) {
  this.deposit = deposit
  this.withdraw = withdraw
}

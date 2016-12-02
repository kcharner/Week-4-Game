// <script type="text/javascript">

document.ready();

//1. tell computer to select random # between 19 & 120, display it on page
var targetNumber
function gameTarget() {
   targetNumber = Math.floor((Math.random() * 120) + 19)
    $("#target").text(targetNumber);
}
gameTarget()

//2. create 4 crystal variables
var crystalOne;
var crystalTwo;
var crystalThree; 
var crystalFour;

//3. create a function to set the values of each crystal variable to a random number between 1 & 12
function crystalValuesFN() {
	crystalOne = Math.floor((Math.random() * 12) + 1) 
		$("#first").attr("value", crystalOne);
 
	crystalTwo = Math.floor((Math.random() * 12) + 1)
		$("#second").attr("value", crystalTwo);

	crystalThree = Math.floor((Math.random() * 12) + 1)
		$("#third").attr("value", crystalThree);

	crystalFour = Math.floor((Math.random() * 12) + 1)
		$("#fourth").attr("value", crystalFour);
    console.log(crystalOne, crystalTwo, crystalThree, crystalFour); 
}
crystalValuesFN();
	//console.log(crystalOne, crystalTwo, crystalThree, crystalFour);
	
//4. create counter variable to track crystal totals and set to starting value of 0
	var crystalCount = 0;

//5. create 2 additional varialbles for counting wins and losses and set to starting value of 0
var wins = 0;
var losses = 0;

//6. tell computer to evaluate crystalCount vs. target number on-click of each crystal, and update userCounter with new total value
   $("#first").on("click", function() {
    if (crystalCount < targetNumber) {
       crystalCount = crystalOne + crystalCount;
       $("#userCounter").text(crystalCount);
       winLoss();
     }
   })

   $("#second").on("click", function() {
    if (crystalCount < targetNumber) {
       crystalCount = crystalTwo + crystalCount;
       $("#userCounter").text(crystalCount);
       winLoss();
     }
   })
   
   $("#third").on("click", function() {
    if (crystalCount < targetNumber) {
       crystalCount = crystalThree + crystalCount;
       $("#userCounter").text(crystalCount);
       winLoss();
     }
   })

   $("#fourth").on("click", function() {
    if (crystalCount < targetNumber) {
       crystalCount = crystalFour + crystalCount;
       $("#userCounter").text(crystalCount);
      winLoss();
     }
   })

//7. create a function with conditional to evaluate wins and losses and update count
function winLoss() {
if (crystalCount == targetNumber) {
      alert("Congratulations, you won!\nPress restart to play again.");
      wins = wins + 1;
      $("#wins").text("wins: " + wins);
   }
 
 else if (crystalCount > targetNumber){
      alert("You lost! Better luck next time.\nPress restart to play again.");
      losses = losses + 1;
      $("#losses").text("losses: " + losses);
   }
 }

//8. tell computer to reset the page
   $('#buttonClear').on('click', function(){
   	$("#userCounter").text("0");
    gameTarget();
    crystalCount = 0; 
    crystalValuesFN();
    });

// </script>





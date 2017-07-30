// var player1 = prompt("Votre nom");
// var boss = "Nucleator ";
var health = 20;
var damage = Math.floor(Math.random(6) * 6+1); // générateur de dégats random (fonctionne)




var player1 = {
    name: prompt("Votre nom"),
    health: 20,

}

var boss = {
    name: "Nucleator",
    health: 20,

}




function runFigth (){

	if (player1 > 0) {

		player1.health();
		boss.health();

		damage.player1();
		boss.health -= damage;

		damage.boss();
		player1.health -= damage;

	

			if (player1.health <= 0){

				console.log("You are dead " + boss + ( "is the winner !"))
				return true; 

			}

			if (boss.health <= 0){

				console.log("Congratulation " + boss + ( "is dead you save the world !"))
				return true; 

			}

		return false;

	}

}

function combatRound(){
    var gameOver = runFigth(); 

    if(gameOver === false){

        setTimeout(combatRound, 1000);
    }
}

combatRound();
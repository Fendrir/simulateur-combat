// var player1 = prompt("Votre nom");
// var boss = "Nucleator ";
// var health = 20;
// var damage = Math.floor(Math.random() * 6+1); // générateur de dégats random (fonctionne)




var player1 = {
    name: prompt("Votre nom"),
    health: 20,

}

var boss = {
    name: "Nucleator ",
    health: 20,

}



function runFigth (){

	if (player1.health > 0 && boss.health >= 0) {

		player1.health;
		boss.health;


		var damage = Math.floor(Math.random() * 6+1);
		damage.player1;
		boss.health -= damage;

		// $('#combat-zone').append("<p>" + "tu infliges " + damage + " points de dégats" +" il reste " + boss.health + " points de vie " + " à " + boss.name + "!" + "</p>");
		alert("tu infliges " + damage + " points de dégats" +" il reste " + boss.health + " points de vie " + " à " + boss.name + "!");


			if (boss.health <= 0){

				// $('#combat-zone').append("<p>" + "Congratulation " + boss.name + "is dead you save the world !" + "</p>");
				alert("Congratulation " + boss.name + "is dead you save the world !");
				return true; 

			}

		var damage = Math.floor(Math.random() * 6+1);
		damage.boss;
		player1.health -= damage;

		// $('#combat-zone').append("<p>" +  boss.name + "inflige " + damage + " points de dégats" + " il reste " + player1.health + " points de vie" + " à " + player1.name + "!" + "</p>");
		alert(boss.name + "inflige " + damage + " points de dégats" + " il reste " + player1.health + " points de vie" + " à " + player1.name + "!");

	

			if (player1.health <= 0){

				// $('#combat-zone').append("<p>" + "You are dead " + boss.name + "is the winner !" + "</p>");
				alert("You are dead " + boss.name + "is the winner !");
				return true; 

			}



		return false;

	}

}

function timeToFigth(){
    var gameOver = runFigth(); 

    if(gameOver === false){

        setTimeout(timeToFigth, 1000);
    }
}

timeToFigth();

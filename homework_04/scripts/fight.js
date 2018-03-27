beast.setHitpoints(50);

function choise(fighter1, fighter2) {

	fighter1.prototype = Object.create(Champion.prototype);
	fighter1.prototype.constructor = Champion;

	fighter2.prototype = Object.create(Monster.prototype);
	fighter2.prototype.constructor = Monster;

let championChoice = prompt(`Please choise possible action for champion-fighter of following possible: fight,heal,defence`);
let monsterChoice = prompt(`Please choise possible action for monster-fighter of following possible: fight,enrage,fury`)

if (championChoice==='fight') {
	fighter1.fight(fighter2);
	console.log(fighter2.getHitpoints())
}

if (championChoice==='heal') {
	fighter1.heal();
	console.log(fighter1.getHitpoints())
}

if (championChoice==='defence') {
	fighter1.defence();
}

if (monsterChoice==='fight') {
	fighter2.fight(fighter1);
	console.log(fighter1.getHitpoints())
}

if (monsterChoice==='enrage') {
	fighter2.enrage();
}

if (monsterChoice==='fury') {
	fighter2.fury();
	console.log(fighter2.getHitpoints());
}



}

choise(hunter,beast);
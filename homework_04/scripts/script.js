// Task 1

  var assign = function(obj, objArgs) { 
    'use strict';
    if (obj == null) { 
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var finalObj = obj;

    for (var index = 1; index < arguments.length; index++) {
      var nextArg = arguments[index];

      if (nextArg != null) { 
        for (var prop in nextArg) {

          if (Object.prototype.hasOwnProperty.call(nextArg, prop)) {
            finalObj[prop] = nextArg[prop];
          }
        }
      }
    }
    return finalObj;
  };

// Task 2

function Fighter(obj) {
	this._name = obj.name;
	this._attack = obj.attack;
	this._hitpoints = obj.hitpoints;
	this._totalHitpoints = obj.hitpoints;
	this._enrageAmount = 0;
}

Fighter.prototype.getHitpoints = function () {
	console.log(this._hitpoints);
}

Fighter.prototype.setHitpoints = function (value) {
	this._hitpoints = value;
}

Fighter.prototype.getTotalHitpoints = function () {
	console.log(this._totalHitpoints);
}

Fighter.prototype.setTotalHitpoints = function (value) {
	this._totalHitpoints = value;
}

Fighter.prototype.getAttack = function () {
	this._attack++;
	console.log(this._attack);
}

Fighter.prototype.setAttack = function (value) {
	this._attack = value;
}

Fighter.prototype.fight = function (fighter) {

	if (fighter !== this && fighter.isAlive()) {

		if (fighter._defence) {
			fighter._totalHitpoints++;
			fighter._defence = false;

		} else if (this._enrage && this._enrageAmount < 2) {

			fighter._hitpoints -= this._attack * 2;
			this._enrageAmount++;

		} else {
			fighter._hitpoints -= this._attack;
		}

	} else if (fighter === this) {
		console.log(`you can't fight against yourself`)
	} else if (!fighter.isAlive()) {
		console.log(`you can't fight against died body`);
	}

	if (!fighter.isAlive()) {
		this.training(fighter);
	}
}

Fighter.prototype.isAlive = function () {
	return this._hitpoints > 0;
}

function Champion(obj) {
	Fighter.call(this, obj);
}

Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Fighter;

Champion.prototype.heal = function () {
	if (this._hitpoints < this._totalHitpoints) {
		this._hitpoints += 5;
	}
}

Champion.prototype.defence = function () {
	this._defence = true;
}

Champion.prototype.training = function () {
	return this._attack++;
}

function Monster(obj) {
	Fighter.call(this, obj);
}

Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Fighter;

Monster.prototype.enrage = function () {
	this._enrage = true;
}

Monster.prototype.fury = function () {
	if (this._hitpoints >= 5 && this._totalHitpoints >= 5) {
		this._hitpoints -= 5;
		this._totalHitpoints -= 5;
		this._attack += 2;
	}
}

Monster.prototype.training = function (obj) {
	this._hitpoints = Math.floor(this._hitpoints + obj.totalHitpoints * 0.25);
	this._totalHitpoints = Math.floor(this._totalHitpoints + obj.totalHitpoints * 0.1);
}



var app = angular.module('diceApp',[]);

app.controller('DiceCtrl', ['diceService', function (diceService) {
	this.dice = diceService.allDice;

	this.addDie = function() {
		if(!this.newSides || this.newSides === '') {return;}
		diceService.addDie(this.newSides*1);
		this.newSides = '';
	};
	this.getMaxRoll = function(){ return diceService.maxRoll();};
	this.getMinRoll = function(){ return diceService.minRoll();};
	this.rollDice = function(){ diceService.rollAllDice();};
	this.sumUpFaces = function(){ return diceService.sumUpFaces();};
}]);

app.factory('diceService', [function () {
	return {
		allDice: [],
		addDie: function(newSides){
			this.allDice.push(this.createDie(newSides));
		},
		createDie: function(newSides) {
			return {
				sides: newSides*1,
				upFace: 1,
				roll: function() {
					this.upFace = Math.floor(Math.random() * this.sides) + 1;
				}
			};
		},
		rollAllDice: function()
		{
			this.allDice.forEach( function(die){ die.roll(); });
		},
		maxRoll: function() {
			return this.allDice.reduce(function(sum, die){return sum + die.sides;}, 0);
		},
		minRoll: function() {
			return this.allDice.length;
		},
		sumUpFaces: function() {
			return this.allDice.reduce(function(sum, die){return sum + die.upFace;}, 0);
		},
		updateChances: function(outcome) {
			this.allDice().forEach(function(){

			});
		},
		bruteSummation: function() {

		}
	};
}]);
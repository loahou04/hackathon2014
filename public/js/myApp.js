var myApp = angular.module("myApp", []);


myApp.controller("myAppController", ["$scope", function($scope) {
	$scope.alphabetList = [
		{encoded:"A", actual:""},
		{encoded:"B", actual:""},
		{encoded:"C", actual:""},
		{encoded:"D", actual:""},
		{encoded:"E", actual:""},
		{encoded:"F", actual:""},
		{encoded:"G", actual:""},
		{encoded:"H", actual:""},
		{encoded:"I", actual:""},
		{encoded:"J", actual:""},
		{encoded:"K", actual:""},
		{encoded:"L", actual:""},
		{encoded:"M", actual:""},
		{encoded:"N", actual:""},
		{encoded:"O", actual:""},
		{encoded:"P", actual:""},
		{encoded:"Q", actual:""},
		{encoded:"R", actual:""},
		{encoded:"S", actual:""},
		{encoded:"T", actual:""},
		{encoded:"U", actual:""},
		{encoded:"V", actual:""},
		{encoded:"W", actual:""},
		{encoded:"X", actual:""},
		{encoded:"Y", actual:""},
		{encoded:"Z", actual:""}
	];

	$scope.test = false;
	$scope.puzzlePhrase = "This is a test";
	$scope.phrase = [];

	var bindGuess = function() {
		var i, j, k;
		var phraseIdx = 0;
		$scope.phrase[phraseIdx] = [];
		for(i = 0; i < $scope.puzzlePhrase.length; i++) {
			var letter = $scope.puzzlePhrase[i];
			if(letter !== " ") {
				for(k = 0; k < $scope.alphabetList.length; k++) {
					var alphabetLetter = $scope.alphabetList[k];
					if(alphabetLetter.encoded === letter.toUpperCase()) {
						$scope.phrase[phraseIdx].push($scope.alphabetList[k]);
					}
				}
			}
			else {
				phraseIdx++;
				$scope.phrase[phraseIdx] = [];
			}
		}
		console.log($scope.phrase.length);
		console.log($scope.phrase);
	};
	bindGuess();

	$scope.submitMap = function() {
		console.log($scope.alphabetList);
	};



}]);
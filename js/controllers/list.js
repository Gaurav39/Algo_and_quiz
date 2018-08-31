
(function(){
    
    angular
        .module("Algorithms")
        .controller("listCtrl", ListController);
    
    ListController.$inject = ['quizMetrics', 'DataService'];
    function ListController(quizMetrics, DataService){
        var vm = this;

        vm.quizMetrics = quizMetrics; 
        vm.data = DataService.algo;
        vm.activeAlgo = {}; 
        vm.changeActiveAlgo = changeActiveAlgo; 
        vm.activateQuiz = activateQuiz; 
        vm.search = ""; 

        function changeActiveAlgo(index){
        
            vm.activeAlgo = index;
        }

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }


})();


/*(function(){
 
    angular
        .module("Algorithms")
        .controller("listCtrl", ListController);

     ListController.$inject = ['quizMetrics','DataService']; 
 
    function ListController(quizMetrics,DataService){
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.data = DataService.algo;
        
       

        vm.activeAlgo = {}; 
        vm.search = "";
	    vm.changeActiveAlgo = changeActiveAlgo;
	 
	    function changeActiveAlgo(index){
	        vm.activeAlgo = index;
	    }

	    vm.activateQuiz = activateQuiz;
	    
 
		function activateQuiz(){
		   quizMetrics.changeState("quiz", true);
        }
    }

        
})();

*/
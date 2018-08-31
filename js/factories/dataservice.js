
(function(){

    
    angular
        .module("Algorithms")
        .factory("DataService", DataService);

    function DataService(){
        

        var dataObj = {
            algo: algo,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

       
        return dataObj;
    }

    var correctAnswers = [2,1,1,2,1,2,2,2,3,2]; 

    var quizQuestions = [
	   {
		type: "text",
		text: "What is the best time complexity of bubble sort?",
		possibilities: [
			{
				answer: "N^2"
			},
			{
				answer: "NlogN"
			},
			{
				answer: "N"
			},
			{
				answer: "N(logN)^2"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "What does it mean when we say that an algorithm X is asymptotically more efficient than Y?",
		possibilities: [
			{
				answer: "X will be a better choice for all inputs"
			},
			{
				answer: "X will be a better choice for all inputs except small inputs"
			},
			{
				answer: "X will be a better choice for all inputs except large inputs"
			},
			{
				answer: "Y will be a better choice for small inputs"
			}
		],
		selected: null,
		correct: null
	   },
	   
	   {
		type: "text",
		text: "Which of the following algorithms is NOT a divide & conquer algorithm by nature?",
		possibilities: [
			{
				answer: "Euclidean algorithm to compute the greatest common divisor"
			},
			{
				answer: "Heap Sort"
			},
			{
				answer: "Cooley-Tukey fast Fourier transform"
			},
			{
				answer: "Quick Sort"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "Which of the following is true about Huffman Coding.",
		possibilities: [
			{
				answer: "Huffman coding may become lossy in some cases"
			},
			{
				answer: "Huffman Code may not be optimal lossless codes(some cases)"
			},
			{
				answer: "In Huffman coding, no code is prefix of any other code"
			},
			{
				answer: "All of the above"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "We use dynamic programming approach when",
		possibilities: [
			{
				answer: "It provides optimal solution"
			},
			{
				answer: "The solution has optimal substructure"
			},
			{
				answer: "The given problem can be reduced to the 3-SAT problem"
			},
			{
				answer: "It's faster than Greedy"
			}
		],
		selected: null,
		correct: null
	   },
	   
	   {
		type: "text",
		text: "Given two vertices in a graph s and t, which of the two traversals (BFS and DFS) can be used to find if there is path from s to t?",
		possibilities: [
			{
				answer: "Only BFS"
			},
			{
				answer: "Only DFS"
			},
			{
				answer: "Both BFS and DFS"
			},
			{
				answer: "Neither BFS nor DFS"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "Let X be a problem that belongs to the class NP. Then which one of the following is TRUE?",
		possibilities: [
			{
				answer: "There is no polynomial time algorithm for X."
			},
			{
				answer: "If X can be solved deterministically in p time, then P=NP"
			},
			{
				answer: "If X is NP-hard, then it is NP-complete."
			},
			{
				answer: "X may be undecidable."
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "Which of the following algorithm can be used to efficiently calculate single source shortest paths in a Directed Acyclic Graph?",
		possibilities: [
			{
				answer: "Dijkstra"
			},
			{
				answer: "Bellman-Ford"
			},
			{
				answer: "Topological Sort"
			},
			{
				answer: "Strongly Connected Component"
			}
		],
		selected: null,
		correct: null
	   },
       
	   {
		type: "image",
		text: "Which of the following structure is MIN HEAP ",
		possibilities: [
			{
				answer: "http://www-math.ucdenver.edu/~wcherowi/courses/m4408/gtln8p1.gif"
			},
			{
				answer: "https://www.tutorialspoint.com/data_structures_algorithms/images/max_heap_example.jpg"
			},
			{
				answer: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIUVqJJHUauqFNUulBw3gkWldClDdPL3wlB8dgyweIDhvGx_37g"
			},
			{
				answer: "https://www.tutorialspoint.com/data_structures_algorithms/images/min_heap_example.jpg"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "image",
		text: "Which of the following is Balanced Binary Tree",
		possibilities: [
			{
				answer: "https://hbfs.files.wordpress.com/2009/04/diagram1-2.png"
			},
			{
				answer: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/1200px-Binary_tree.svg.png"
			},
			{
				answer: "https://i.stack.imgur.com/KzPks.png"
			},
			{
				answer: "https://i0.wp.com/www.techiedelight.com/wp-content/uploads/Binary-Tree-3.png?resize=319%2C284"
			}
		],
		selected: null,
		correct: null
	   }
	   
];

    var algo = [
           {
            name : "A* search algorithm",
            class : "Search algorithm",
			image_url : "https://upload.wikimedia.org/wikipedia/commons/9/98/AstarExampleEn.gif",
            data_structure : "Graph",
			worst_case_time_complexity : "O(|E|)=O(b^{d})",
			worst_case_space_complexity : "O(|V|)=O(b^{d})",
			link : "https://en.wikipedia.org/wiki/A*_search_algorithm",
			description : "Graph search algorithm that finds a path from a given initial node to a given goal node. It employs a heuristic estimate that ranks each node by an estimate of the best route that goes through that node. It visits the nodes in order of this heuristic estimate. The A* algorithm is therefore an example of best-first search.",
		   },
		   {
            name : "Binary search ",
            class : "Search algorithm",
			image_url : "https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/binary-search1.png",
            data_structure : "Array",
			worst_case_time_complexity : "O(log n)",
			worst_case_space_complexity : "O(1)",
			link : "https://en.wikipedia.org/wiki/Binary_search_algorithm",
			description : "Binary search works on sorted arrays. Binary search begins by comparing the middle element of the array with the target value. If the target value matches the middle element, its position in the array is returned. If the target value is less than or greater than the middle element, the search continues in the lower or upper half of the array, respectively, eliminating the other half from consideration.",
		   },
		   {
            name : "Dijkstra's algorithm",
            class : "	Search algorithm",
			image_url : "https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif",
            data_structure : "Graph",
			worst_case_time_complexity : "O(|E|+|V|log |V|)",
			worst_case_space_complexity : "O(V^2)",
			link : "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
			description : "Algorithm that solves the single-source shortest path problem for a directed graph with nonnegative edge weights.",
		   },
		   {
            name : "Merge Sort",
            class : "Sorting algorithm",
			image_url : "https://www.geeksforgeeks.org/wp-content/uploads/Merge-Sort-Tutorial.png",
            data_structure : "Array",
			worst_case_time_complexity : "O(n log n)",
			worst_case_space_complexity : "О(n) ",
			link : "https://en.wikipedia.org/wiki/Merge_sort",
			description : "Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms. Merge sort first divides the array into equal halves and then combines them in a sorted manner",
		   },
		   {
            name : "Rabin–Karp algorithm",
            class : " string searching algorithm ",
			image_url : "https://image.slidesharecdn.com/rabin-karpstringmatchingalgorithm-141220113555-conversion-gate02/95/rabin-karp-string-matching-algorithm-1-638.jpg?cb=1419075532",
            data_structure : "Hash",
			worst_case_time_complexity : "O(n+m)",
			worst_case_space_complexity : "O(m)",
			link : "https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm",
			description : "The key to the Rabin–Karp algorithm's performance is the efficient computation of hash values of the successive substrings of the text. The Rabin fingerprint is a popular and effective rolling hash function. The hash function described here is not a Rabin fingerprint, but it works equally well. It treats every substring as a number in some base, the base being usually a large prime.",
		   },
		   {
            name : "Quick Sort",
            class : "Sorting algorithm",
			image_url : "https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png",
            data_structure : "Array",
			worst_case_time_complexity : "O(n^2)",
			worst_case_space_complexity : "O(n)",
			link : "https://en.wikipedia.org/wiki/Quicksort",
			description : "The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.",
		   },
		   {
            name : "Floyd–Warshall algorithm",
            class : "All-pairs shortest path ",
			image_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Floyd-Warshall_example.svg/600px-Floyd-Warshall_example.svg.png",
            data_structure : "Graph",
			worst_case_time_complexity : "{Theta|V|^{3})}",
			worst_case_space_complexity : "Theta (|V|^{2})",
			link : "https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm",
			description : "In computer science, the Floyd–Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of shortest paths between all pairs of vertices.",
		   },
		   {
            name : "Prim's algorithm",
            class : "Graph and Tree Search",
			image_url : "https://www.thestudentroom.co.uk/attachment.php?attachmentid=23572&stc=1&d=1148396387",
            data_structure : "Graph",
			worst_case_time_complexity : "O(V^2)",
			worst_case_space_complexity : "O(V^2)",
			link : "https://en.wikipedia.org/wiki/Prim%27s_algorithm",
			description : "Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized. The algorithm operates by building this tree one vertex at a time, from an arbitrary starting vertex, at each step adding the cheapest possible connection from the tree to another vertex.",
		   }
		   
    ];

})();



/*
(function(){
 
    angular
        .module("Algorithms")
        .factory("DataService", DataService);
 
 
    function DataService(){
 
        var dataObj = {
            algo: algo,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };
        return dataObj;
    }

    var algo = [
           {
            name : "A* search algorithm",
            class : "Search algorithm",
			image_url : "https://upload.wikimedia.org/wikipedia/commons/9/98/AstarExampleEn.gif",
            data_structure : "Graph",
			worst_case_time_complexity : "O(|E|)=O(b^{d})",
			worst_case_space_complexity : "O(|V|)=O(b^{d})",
			link : "https://en.wikipedia.org/wiki/A*_search_algorithm",
			description : "Graph search algorithm that finds a path from a given initial node to a given goal node. It employs a heuristic estimate that ranks each node by an estimate of the best route that goes through that node. It visits the nodes in order of this heuristic estimate. The A* algorithm is therefore an example of best-first search.",
		   },
		   {
            name : "Binary search ",
            class : "Search algorithm",
			image_url : "https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/binary-search1.png",
            data_structure : "Array",
			worst_case_time_complexity : "O(log n)",
			worst_case_space_complexity : "O(1)",
			link : "https://en.wikipedia.org/wiki/Binary_search_algorithm",
			description : "Binary search works on sorted arrays. Binary search begins by comparing the middle element of the array with the target value. If the target value matches the middle element, its position in the array is returned. If the target value is less than or greater than the middle element, the search continues in the lower or upper half of the array, respectively, eliminating the other half from consideration.",
		   },
		   {
            name : "Dijkstra's algorithm",
            class : "	Search algorithm",
			image_url : "https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif",
            data_structure : "Graph",
			worst_case_time_complexity : "O(|E|+|V|log |V|)",
			worst_case_space_complexity : "O(V^2)",
			link : "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
			description : "Algorithm that solves the single-source shortest path problem for a directed graph with nonnegative edge weights.",
		   },
		   {
            name : "Merge Sort",
            class : "Sorting algorithm",
			image_url : "https://www.geeksforgeeks.org/wp-content/uploads/Merge-Sort-Tutorial.png",
            data_structure : "Array",
			worst_case_time_complexity : "O(n log n)",
			worst_case_space_complexity : "О(n) ",
			link : "https://en.wikipedia.org/wiki/Merge_sort",
			description : "Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms. Merge sort first divides the array into equal halves and then combines them in a sorted manner",
		   },
		   {
            name : "Rabin–Karp algorithm",
            class : " string searching algorithm ",
			image_url : "https://image.slidesharecdn.com/rabin-karpstringmatchingalgorithm-141220113555-conversion-gate02/95/rabin-karp-string-matching-algorithm-1-638.jpg?cb=1419075532",
            data_structure : "Hash",
			worst_case_time_complexity : "O(n+m)",
			worst_case_space_complexity : "O(m)",
			link : "https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm",
			description : "The key to the Rabin–Karp algorithm's performance is the efficient computation of hash values of the successive substrings of the text. The Rabin fingerprint is a popular and effective rolling hash function. The hash function described here is not a Rabin fingerprint, but it works equally well. It treats every substring as a number in some base, the base being usually a large prime.",
		   },
		   {
            name : "Quick Sort",
            class : "Sorting algorithm",
			image_url : "https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png",
            data_structure : "Array",
			worst_case_time_complexity : "O(n^2)",
			worst_case_space_complexity : "O(n)",
			link : "https://en.wikipedia.org/wiki/Quicksort",
			description : "The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.",
		   },
		   {
            name : "Floyd–Warshall algorithm",
            class : "All-pairs shortest path ",
			image_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Floyd-Warshall_example.svg/600px-Floyd-Warshall_example.svg.png",
            data_structure : "Graph",
			worst_case_time_complexity : "{Theta|V|^{3})}",
			worst_case_space_complexity : "Theta (|V|^{2})",
			link : "https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm",
			description : "In computer science, the Floyd–Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of shortest paths between all pairs of vertices.",
		   },
		   {
            name : "Prim's algorithm",
            class : "Graph and Tree Search",
			image_url : "https://www.thestudentroom.co.uk/attachment.php?attachmentid=23572&stc=1&d=1148396387",
            data_structure : "Graph",
			worst_case_time_complexity : "O(V^2)",
			worst_case_space_complexity : "O(V^2)",
			link : "https://en.wikipedia.org/wiki/Prim%27s_algorithm",
			description : "Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized. The algorithm operates by building this tree one vertex at a time, from an arbitrary starting vertex, at each step adding the cheapest possible connection from the tree to another vertex.",
		   }
		   
];
    var correctAnswers = [2,1,1,2,1,2,2,2]; 

    var quizQuestions = [
	   {
		type: "text",
		text: "What is the best time complexity of bubble sort?",
		possibilities: [
			{
				answer: "N^2"
			},
			{
				answer: "NlogN"
			},
			{
				answer: "N"
			},
			{
				answer: "N(logN)^2"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "What does it mean when we say that an algorithm X is asymptotically more efficient than Y?",
		possibilities: [
			{
				answer: "X will be a better choice for all inputs"
			},
			{
				answer: "X will be a better choice for all inputs except small inputs"
			},
			{
				answer: "X will be a better choice for all inputs except large inputs"
			},
			{
				answer: "Y will be a better choice for small inputs"
			}
		],
		selected: null,
		correct: null
	   },
	   
	   {
		type: "text",
		text: "Which of the following algorithms is NOT a divide & conquer algorithm by nature?",
		possibilities: [
			{
				answer: "Euclidean algorithm to compute the greatest common divisor"
			},
			{
				answer: "Heap Sort"
			},
			{
				answer: "Cooley-Tukey fast Fourier transform"
			},
			{
				answer: "Quick Sort"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "Which of the following is true about Huffman Coding.",
		possibilities: [
			{
				answer: "Huffman coding may become lossy in some cases"
			},
			{
				answer: "Huffman Code may not be optimal lossless codes(some cases)"
			},
			{
				answer: "In Huffman coding, no code is prefix of any other code"
			},
			{
				answer: "All of the above"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "We use dynamic programming approach when",
		possibilities: [
			{
				answer: "It provides optimal solution"
			},
			{
				answer: "The solution has optimal substructure"
			},
			{
				answer: "The given problem can be reduced to the 3-SAT problem"
			},
			{
				answer: "It's faster than Greedy"
			}
		],
		selected: null,
		correct: null
	   },
	   
	   {
		type: "text",
		text: "Given two vertices in a graph s and t, which of the two traversals (BFS and DFS) can be used to find if there is path from s to t?",
		possibilities: [
			{
				answer: "Only BFS"
			},
			{
				answer: "Only DFS"
			},
			{
				answer: "Both BFS and DFS"
			},
			{
				answer: "Neither BFS nor DFS"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "Let X be a problem that belongs to the class NP. Then which one of the following is TRUE?",
		possibilities: [
			{
				answer: "There is no polynomial time algorithm for X."
			},
			{
				answer: "If X can be solved deterministically in p time, then P=NP"
			},
			{
				answer: "If X is NP-hard, then it is NP-complete."
			},
			{
				answer: "X may be undecidable."
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "text",
		text: "Which of the following algorithm can be used to efficiently calculate single source shortest paths in a Directed Acyclic Graph?",
		possibilities: [
			{
				answer: "Dijkstra"
			},
			{
				answer: "Bellman-Ford"
			},
			{
				answer: "Topological Sort"
			},
			{
				answer: "Strongly Connected Component"
			}
		],
		selected: null,
		correct: null
	   }
       /*
	   {
		type: "image",
		text: "Which of the following structure is MIN HEAP ",
		possibilities: [
			{
				answer: "http://www-math.ucdenver.edu/~wcherowi/courses/m4408/gtln8p1.gif"
			},
			{
				answer: "https://www.tutorialspoint.com/data_structures_algorithms/images/max_heap_example.jpg"
			},
			{
				answer: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIUVqJJHUauqFNUulBw3gkWldClDdPL3wlB8dgyweIDhvGx_37g"
			},
			{
				answer: "https://www.tutorialspoint.com/data_structures_algorithms/images/min_heap_example.jpg"
			}
		],
		selected: null,
		correct: null
	   },
	   {
		type: "image",
		text: "Which of the following is Balanced Binary Tree",
		possibilities: [
			{
				answer: "https://hbfs.files.wordpress.com/2009/04/diagram1-2.png"
			},
			{
				answer: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/1200px-Binary_tree.svg.png"
			},
			{
				answer: "https://i.stack.imgur.com/KzPks.png"
			},
			{
				answer: "https://i0.wp.com/www.techiedelight.com/wp-content/uploads/Binary-Tree-3.png?resize=319%2C284"
			}
		],
		selected: null,
		correct: null
	   },*/
	   /*
];
 
 
})();*/
// NODE

function Node(start, end){
    
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7){
        return null
    }
    
    return {start, end}
}

// KNIGHT MOVES LOGIC

function knight([x,y], [a, b]){
    
    // DECLARATIONS
    // Here, node.end is an array []
    
    let queue = [Node([x, y], [[x, y]])]
    let node = queue.shift()
    
    // CHECK LEGAL MOVES AND MOVES THAT A KNIGHT CAN PERFORM ([x] + 2, [y] - 1)
    
    while (node.start[0] !== a || node.start[1] !== b){
        let allMoves =
        [
            [node.start[0] + 2, node.start[1] - 1],
            [node.start[0] + 2, node.start[1] + 1],
            [node.start[0] - 2, node.start[1] - 1],
            [node.start[0] - 2, node.start[1] + 1],
            [node.start[0] + 1, node.start[1] - 2],
            [node.start[0] + 1, node.start[1] + 2],
            [node.start[0] - 1, node.start[1] - 2],
            [node.start[0] - 1, node.start[1] + 2],
        ];
        
        // LOOP THROUGH ALL MOVES AND PUSH THEM TO THE QUEUE
        
        allMoves.forEach((moves) => {
            let newNode = Node(moves, node.end.concat([moves]))
            if (newNode){
                queue.push(newNode)   
            }
        })
        
        // GET THE NEW CURRENT NODE
        
        node = queue.shift()
    }
    
    // SHOW THE PATHS AND MINIMUM MOVES TAKEN
    
    console.log(`Moves Taken To Reach The Path : ${node.end.length - 1}`)
    console.log(`The Path Taken : `)
    console.log(node.end.forEach(nodes => console.log(nodes)))
}

// TEST

knight([3, 3], [4, 3])

// END OF CODE

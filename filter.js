//filter select element based on a condition and returns an array with the elements that fulfilled the condition 
const numbers = [1,5,6,4,15];

const players = [75,65,67,72,55,59];

// const select =players.filter(p=> p>70);
// const select =players.filter(p=> p>50);
const selected = players.filter(p=> p%2 ===0)
const selected1 = players.filter(p=> p%2 ===1)
console.log(selected)
console.log(selected1)

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const oddFriends = friends.filter(friend=>friend.length>4);
console.log(oddFriends)
// 

function boredom(staff){
  const departments = {'accounts':1, 'finance':2, 'canteen':10, 'regulation':3, 'trading':6, 'change':6, 'IS':8, 'retail':5, 'cleaning':4, 'pissing about':25}
  let totalScore = 0;
      for(let key in staff){
      totalScore+=departments[staff[key]]
      console.log(`Значение объекта Staff ${[staff[key]]}`)
      console.log(`Значение объекта Departments ${departments[staff[key]]}`)
    }
 return totalScore <= 80 ? 'kill me now':totalScore < 100? 'i can handle this': 'party time!!'
}

console.log(boredom({tim: 'finance', jim: 'accounts'}))


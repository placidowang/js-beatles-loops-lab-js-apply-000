// add solution here
function theBeatlesPlay(musicians, instruments) {
  let roles = [];
  
  // musicians.forEach((musician, i) => {
  //   roles.push(`${musician} plays ${instruments[i]}`);
  // });
  
  for (let i = 0; i < musicians.length; i++) {
    roles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return roles;
}

function johnLennonFacts(facts) {
  let i = 0;
  let exclamationFacts = [];
  
  while (i < facts.length) {
    exclamationFacts.push(facts[i] + "!!!");
    i++;
  }
  
  return exclamationFacts;
}
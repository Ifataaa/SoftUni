function everest(input){
 
    let index = 0;
    let command = input[index];
    index++;
    let days = 0;
    let meeters = 5364;
 
    while(command !== `END`) {
        if(command === `Yes`){
          days++;
    
          if (days > 5){
            break;
          }
        }
    
        let dailyMeeters = Number(input[index]);
        index++;
        meeters += dailyMeeters;
    
        if (meeters >= 8848){
          break;
        }
    
        command = (input[index]);
        index++;
      }
    if (meeters >= 8848){
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${meeters}`);
    }
}
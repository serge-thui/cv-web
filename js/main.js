let numbers=[5,3,10,8,1]
function sumTwoSmallestNumbers(numbers) { 
    let temp;
    for (var i=0; i<numbers.length-1; i++){
      for(var j=i; j<numbers.length; j++){
        if (numbers[j]<numbers[i]){
          temp=numbers[i];
          numbers[i]=numbers[j];
          numbers[j]=temp;
          console.log("i= "+numbers[i]);
          console.log(numbers[j]);
          
        }
      }
    }
    var sum=0;
    sum=numbers[0]+numbers[1];
    
    return sum;
    
  }
  console.log(sumTwoSmallestNumbers(numbers));
  
  console.log(numbers);

  
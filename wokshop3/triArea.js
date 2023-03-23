//area of Trngele
//function triArea(base, height){
    //let are =(base*height)/2;
    //return are;
//}
//console.log(triArea(3,2));
//console.log(triArea(7,4));
//console.log(triArea(10,10));

//Return something To me
//funcrion returnSomethingTome(a){
    //return "something " + a;
//}
//console.log(returnSomethigToMe("is better then nothing"));
//console.log(returnSomethigToMe("Bob Jane"));
//console.log(returnSomethigToMe("something"));


//Basketball points
//function total(twoPointer,threePointer){
    //let total =2*Pointer+3*threePointer;
    //return total;
//}
// console.log(total(1,1));
// console.log(total(7,5));
// console.log(total(38,8));


//Less Then 100
//function lessthen100(x,y){
    //if (x+y<100){
      //  return true;
    //}
    //else{
       // return false;
    //}
//}
//console.log(lessthen100(22,15));
//console.log(lessthen100(83,34));
//console.log(lessthen100(3,77));


//Add up the Numbers form a single Number
//function addUp(n){
    //let sum=0
    //for(let i =1; i<=n; i++){
        //sum+=i;
    //}
    //return sum;
//}
//console.log(addUp(4));
//console.log(addUp(13));
//console.log(addUp(600));


//Oddish vs.Evenish
//function oddishOrEvenish(num){
  //  let sum=0;
   // while(num>0){
     //   sum+=num%10;
       // num=Math.floor(num/10);
    //}
    //return sum%2===0?"Evenish" : "oddish";
//}
//console.log(oddishOrEvenish(121));
//console.log(oddishOrEvenish(41));
//console.log(oddishOrEvenish(43));
//console.log(oddishOrEvenish(373));
//console.log(oddishOrEvenish(4433));


//Any prime Number in Range
//function isprime(num){
  //  if(num<=1){
    //    return false;
    //}
    //for ( let i = 2; i<= Math.sqrt(num); i++){
      //  if (num%i === 0){
        //    return false;
        //}
    //}
    //return true;
//}
//function primeInRange(n1,n2){
  //  for (let i= n1; i<=n2; i++){
    //    if(isprime(i)){
      ///      return true;
        //}
    //}
    //return false;
//}
//console.log(primeInRange(10,15))
//console.log(primeInRange(62,66))
//console.log(primeInRange(3,5))


//Left Shift by Powers of Two
//function shiftToleft(x,y){
  //  if (y===0){
    //    return x;
    //}else{
      //  return shiftToleft(x*2, y-1);
    //}
//}
//console.log(shiftToleft(5,2));
//console.log(shiftToleft(10,3));
//console.log(shiftToleft(-32,2));
//console.log(shiftToleft(-6,5));
//console.log(shiftToleft(46,6));


//Convert a Number to Base-2
//function binary(decimal){
  //  if(decimal===0){
    //    return "0";
    //}
   // let binary ="";
   // let value =256;
   // while (value >=1){
     //   if(decimal>=value){
       //     binary +="1";
         //   decimal -= value;
      //  } else{
        //    binary +="0";
     //   }
    //    value /= 2;
  //  }
    //return binary;
//}
//console.log(binary(1));
//console.log(binary(5));
//console.log(binary(10));

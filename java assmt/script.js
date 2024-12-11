/**
 * problem statement;
 *      Big Basket wants to reward its customers with bonus points based on purchase amount.
 *      1. collect name , purchase amount
 *      2. calculate bonus points;
 *        Range | Bonus points (%)
 * 
 *          100 - 500    | 5%
 *          500 - 1500   | 10%
 *          1500 - 2500  | 15%
 *          2500+        | 20%
 *          
 *      3. Display Bonus Points
 * 
 *      
 */
console.log("moorthy");


//let customerName = 'moorthy';
//let purchaseAmt = 1000;

//console.log(typeof purchaseAmt);


//function calcBonusPoints(amount) {
  //  let bonusPoints = 0;
   //if (amount >=100 && amount<=500) {
     //  bonusPoints = amount * 0.05;
       
   //}  
   //else if (amount >=501 && amount <=1500 ) {
   // bounsPoints = amount * 0.1;
    
   //}
   //else if (amount >=1501 && amount <=2500) {
    //bonusPoints = amount *0.15;

    
   //}
   //else{
    //bonusPoints = amount * 0.2;
   //}
    //return bonusPoints;
   
//}

//if (purchaseAmt >=100) {
  //  let bonus = calcBonusPoints(purchaseAmt);
    //console.log(`Hello ${customerName}! you've Earned ${bonusPoint} points!`);
    
//} else {
  //  console.log(`thanks for visiting us!`)
//}
function rewardCustomer(bonus) {
    const giftVoucherValue = bonus / 100;
    console.log(`Congratulations! You earned a gift voucher worth ₹${giftVoucherValue}.`);
  }
  
  const bonus = 1000;
  rewardCustomer(bonus);
  





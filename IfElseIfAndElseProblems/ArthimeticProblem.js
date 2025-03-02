let a=3;
let b=5;
let c=2;

let ans1=a+b*c;
let ans2=a%b+c;
let ans3=c+a/b;
let ans4=a*b+c;

let arr=[ans1,ans2,ans3,ans4];
let minimum=Infinity;
let maximum=-Infinity;
for(let i=0;i<arr.length;i++){
if(arr[i]>maximum){
    maximum=arr[i];
}
if(arr[i]<minimum){
    minimum=arr[i];
}
}

console.log("Maximum :- "+maximum);


console.log("Minimum :- "+minimum);

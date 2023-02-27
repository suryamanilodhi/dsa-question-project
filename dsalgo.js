// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function getPairsCount(arr, n, sum)
{
    let count = 0; //
 

    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
 
    return count;
}
  let arr = [ 1, 5, 7, -1, 5 ];
    let n = arr.length;
    let sum = 6;
    document.write("Count of pairs is "
        + getPairsCount(arr, n, sum)+"<Br>");
     
// ************************************************************************************
//2Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array


 arr=[1,2,3,4,5,67,6];
arr.reverse();
document.write(arr+"<Br>"); 

// *****************************************************************************

//3 Write a program to check if two strings are a rotation of each other? 

function checkString(s1, s2, indexFound, Size)
{
    for(let i = 0; i < Size; i++)
    {
     
        if(s1[i] != s2[(indexFound + i) % Size])
        return false;
         
    
    }
 
    return true;
}
 
let s1 = "abcd";
let s2 = "cdab";
 
if(s1.length != s2.length){
    document.write("s2 is not a rotation on s1");
}

else{
      let indexes = []; 
     let Size = s1.length;
     let firstChar = s1[0];
    for(let i = 0; i < Size; i++){
        if(s2[i] == firstChar) {
            indexes.push(i);
        }
    }
  let isRotation = false;
 for(let idx of indexes)
    {
        isRotation = checkString(s1, s2, idx, Size);
 
        if(isRotation)
            break;
    }
 
    if(isRotation)document.write("s2 is rotation of s1"+"<Br>")
    else document.write("s2 is not a rotation of s1"+"<BR>")
} 

// **************************************************************************************
// Q4. Write a program to print the first non-repeated character from a string?

function FirstNonRepeat(s){
 
    for(let i = 0; i < s.length; i++)
    {
  
        if (s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1)
        {
            document.write(s[i]+"<br>");
  
            break
        }
    }
    return
 }
  let s = 'geeksforgeeks'
 FirstNonRepeat(s); 


//  ****************************************************************************
//  Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
 
function towerOfHanoi(n, from_rod,  to_rod,  aux_rod){
        if (n == 0){
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        document.write("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod+"<br/>");
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
   var N = 3;
    towerOfHanoi(N, 'A', 'C', 'B');

// ************************************************************************************************
// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(x)
{

    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}

// Convert postfix to Prefix expression
function postToPre(post_exp)
{
    let s = [];

    
    let length = post_exp.length;


    for (let i = 0; i < length; i++) {

        
        if (isOperator(post_exp[i])) {

            
            let op1 = s[s.length - 1];
            s.pop();
            let op2 = s[s.length - 1];
            s.pop();

            
            let temp = post_exp[i] + op2 + op1;

        
            s.push(temp);
        }

        
        else {

            
            s.push(post_exp[i] + "");
        }
    }

    let ans = "";
    while (s.length > 0)
        ans += s.pop();
    return ans;
}
 
let post_exp = "ABC/-AK/L-*";
    

document.write("Prefix : " + postToPre(post_exp)+"<Br>"); 

// **********************************************************************************
// Q7. Write a program to convert prefix expression to infix expression.


function isOperator(x)
{
    switch(x)
    {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            return true;
    }
    return false;
}


function convert(str)
{
    let stack = [];

    
    let l = str.length;

    
    for(let i = l - 1; i >= 0; i--)
    {
        let c = str[i];

        if (isOperator(c))
        {
            let op1 = stack[stack.length - 1];
            stack.pop()
            let op2 = stack[stack.length - 1];
            stack.pop()

            
            let temp = "(" + op1 + c + op2 + ")";
            stack.push(temp);
        }
        else
        {

            
            stack.push(c + "");
        }
    }
    return stack[stack.length - 1];
}
 
let exp = "*-A/BC-/AKL";
  
document.write("Infix : " + convert(exp)+"<Br>");
 
 
// ******************************************************************************
// Q8. Write a program to check if all the brackets are closed in a given code snippet


 function areBracketsBalanced(expr)
{
     
    
    let stack = [];
 
    
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
             
            
            stack.push(x);
            continue;
        }
 
    
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    
    return (stack.length == 0);
}
 

let expr = "([{}])";
 

if (areBracketsBalanced(expr))
    document.write("Balanced ");
else
    document.write("Not Balanced ");
 
// **************************************************************
// Q9. Write a program to reverse a stack.  

 

let st = [];
 

function insert_at_bottom(x)
{
    if(st.length==0)
        st.push(x);
    else
    {
       
            let a = st.pop();
            insert_at_bottom(x);
  
           
            st.push(a);
    }
     
     
}
 

function reverse()
{
    if(st.length > 0)
        {
              
            
            let x = st.pop();
            reverse();
              
            insert_at_bottom(x);
        }
}
 

st.push('1');
st.push('2');
st.push('3');
st.push('4');
 
document.write("Original Stack<br>");
 
document.write(st.join(" ")+"<br>");
 

reverse();
 
document.write("Reversed Stack<br>");
 
document.write(st.join(" ")+"<Br>"); 


// ***********************************************************
// 10 Write a program to find the smallest number using a stack.
// function last(stack){
//     return stack[stack.length - 1]
// }
// class MinStack {
//     constructor(){
//         this.stack = []
//         this.minStack = []
//     }
// push(x){
//         if(this.minStack.length === 0 || x <= last(this.minStack)){
//             this.minStack.push(x)
//         }
//         this.stack.push(x)
//     }
    
//     pop(){
//         if(last(this.minStack) === last(this.stack)){
//             this.minStack.pop()
//         }
//         return this.stack.pop()
//     }
    
//     top(){
//         return last(this.stack)
//     }
    
//     getMin(){
//         return last(this.minStack)
//     }
    
    
// }

var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
    this.stack.push({val: x, min: Math.min(min, x)})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0) {
        return this.stack[this.stack.length - 1].val
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0) {
        return this.stack[this.stack.length - 1].min
    }
};
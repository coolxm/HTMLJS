function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let code = text.toUpperCase().charCodeAt(i)
      result += (code);
       }

       return result.slice(0, result.length - 1);
     }

  function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
       result *= x;
    }
     
   return result;
  }


   let input = document.getElementById("input").value;
   var num_in = alphabetPosition(input);
   console.log(num_in);

   var length = woorden.length;
   var num_in_fin = num_in * pow(10, (50 - num_in.length))
   console.log(num_in_fin);
   var res_pos = recursiveFunction (woorden, num_in_fin, 0, length - 1);
   

   function recursiveFunction(arr, x, start, end) { 
      
     // Base Condition 
     if (start > end) return false; 
    
     // Find the middle index 
     let mid=Math.floor((start + end)/2); 
     console.log(mid);

     var zk_wrd = woorden[mid][0];
     var zk_wrd_num = alphabetPosition(zk_wrd);
     console.log(zk_wrd_num);  

     var fin_num = zk_wrd_num * pow(10, (50 - zk_wrd_num.length));
     console.log(fin_num);

     // Compare mid with given key x 
     if (fin_num===x) return mid; 
           
     // If element at mid is greater than x, 
     // search in the left half of mid 
     if(zk_wrd_num > x)  
         return recursiveFunction(woorden, x, start, mid-1); 
     else
   
         // If element at mid is smaller than x, 
         // search in the right half of mid 
         return recursiveFunction(woorden, x, mid+1, end); 
 } 


 var jpWord = document.getElementById("jpWord");
 var pronunciation = document.getElementById("pronunciation");
 var translation = document.getElementById("translation");
 var definition = document.getElementById("definition");
 if (res_pos == false) {
   jpWord.innerHTML = "not found";
 }   
 else {  
   console.log(res_pos);
   jpWord.innerHTML = woorden[res_pos][1];
   pronunciation.innerHTML = woorden[res_pos][2];
   translation.innerHTML = woorden[res_pos][0];
   definition.innerHTML = woorden[res_pos][3]; 
 }
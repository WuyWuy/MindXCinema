let nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let min = 1, max = 6;

let elementsArray = document.querySelectorAll(".block");

for(let i = 0; i<12; i++){

       let value = Math.floor(Math.random() * (max - min + 1)) + min;

       while (f[value]>=2) value = Math.floor(Math.random() * (max - min + 1)) + min;

       f[value]++;   nums[i] = value;

}

let count = 0;

function dem(index){

       cnt++; ans[index] = 1;

}

console.log(nums);

while (count < 12){

       let cnt = 0;

       while (1){

              document.getElementById("1").addEventListener("click", dem(1));       if(cnt==2) break;
              document.getElementById("2").addEventListener("click", dem(2));       if(cnt==2) break;
              document.getElementById("3").addEventListener("click", dem(3));       if(cnt==2) break;
              document.getElementById("4").addEventListener("click", dem(4));       if(cnt==2) break;
              document.getElementById("5").addEventListener("click", dem(5));       if(cnt==2) break;
              document.getElementById("6").addEventListener("click", dem(6));       if(cnt==2) break;
              document.getElementById("7").addEventListener("click", dem(7));       if(cnt==2) break;
              document.getElementById("8").addEventListener("click", dem(8));       if(cnt==2) break;
              document.getElementById("9").addEventListener("click", dem(9));       if(cnt==2) break;
              document.getElementById("10").addEventListener("click", dem(10));     if(cnt==2) break;
              document.getElementById("11").addEventListener("click", dem(11));     if(cnt==2) break;
              document.getElementById("12").addEventListener("click", dem(12));     if(cnt==2) break;

       }

       for(let i=0; i<12; i++){

              if (ans[cnt] && pos1 == 0) pos1 = i;
                else if (ans[cnt] && pos1 != 0) pos2 = i; 

       }

       if (nums[pos1] == nums[pos2]){

              alert("Đoán Đúng!");  count += 2;

       } else {

              alert("Đoán Sai!");  ans[pos1] = 0;       ans[pos2] = 0;

       }

}
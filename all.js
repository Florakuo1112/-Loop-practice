console.log('suc')

//第一題：大雄罰寫

writeMyName(5)

function writeMyName(){
    for(i=1; i<5; i++){
        console.log(`*${i}-野比大雄`)
    }
}

//第二題：水果季節  使用 for...in 遍历对象的属性 

const seasonFruit = {
    春天: ["梅子", "枇杷"],
    夏天: ["西瓜", "桃子"],
    秋天: ["火龍果", "百香果"],
    冬天: ["橘子", "柳丁"]
  };

function printObject(obj){
    let str = ''
    for (let key in seasonFruit){
        str += (key + "有"+seasonFruit[key] + " ")
    }
    console.log(str)  
};

printObject(seasonFruit) 

// 创建一个对象
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  // 使用 for...in 遍历对象的属性
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  };


  //第三題：挑出未成年
  const group = [
    {
      name: "小明",
      age: 18
    },
    {
      name: "小美",
      age: 7
    },
    {
      name: "小華",
      age: 80
    }
  ]

  filterUnder18(group)

  function filterUnder18(persons){
      for(let i=0; i<group.length; i++){
          if(group[i].age <= 18){
              console.log(group[i]);
          }
      }
  };

  //第四題：反轉陣列

  let array = [1,2,3,4,5]
 
  function reverseArray(arr){
      let reverseArray = [];
    for(let i=arr.length; i>0; i--){
        reverseArray.push(i)
    };
    console.log(reverseArray)
  };

  reverseArray(array)

  //第五題：陣列最大值
  let findMaxArr = [1,5,5,9,22,1,100];

  getMaxValue(findMaxArr);

  function getMaxValue(arr){
      let maxNum = arr[0];
     // console.log(maxNum);
      for(i=0; i<arr.length; i++){
          if(arr[i]>maxNum){
              maxNum = arr[i];
          };
      };
      console.log(maxNum)
  };

  //第六題：陣列計數
  let countArr = ["A","B","A","C","D","E","E"];
  countArray(countArr);

  function countArray(arr){
    let outputObj = {};
    for(let i=0; i<arr.length; i++){
        if(outputObj[arr[i]] == undefined){
            outputObj[arr[i]]= 1;
        }else{
          outputObj[arr[i]] += 1;
        }
    };
    console.log(outputObj)
  };

  //第七題：乘法表
  tableAXB(9,9)

function tableAXB(num1,num2){
    for(let i = 1; i<=num1; i++){
        for (let j=1; j<=num2; j++){
            console.log(`${i}*${j} = ${i*j}`)
        }
    }
};

//第八題：蓋金字塔

pyramid(5)


function pyramid(num){
    let repeatArr = [];
    for(let i = 1; i<= num; i++){
        repeatArr.push(i);
        console.log('*'.repeat(i))
     };
    if(repeatArr.length == num){
        for(let j = num-1; j> 0; j--){
            console.log('*'.repeat(j))
         };
    }
   
};

//第九題：蓋房子

const house = [];
const brick = '🧱';
const door = '🚪';
const beam = '骨';
const empty = "空";

buildHouse(3)

function buildHouse(houseNum){

    for(let i=0; i<houseNum ; i++){
        let row = [];
    
        for(let j=0; j<houseNum; j++){
            //門的位置
            if(houseNum > 2 && i==0 && houseNum%2==0 && j==Math.floor(houseNum/2)-1){
               row.splice(j,0,door)
            }else if(houseNum > 2 && i==0 && houseNum%2 !== 0 && j==Math.floor(houseNum /2)){
                row.splice(j,0,door)
            }
            
            else{
                //四周磚塊的位置, 沒放磚塊的就放空白
                if(i==0 || i==houseNum-1 || j==0 || j==houseNum-1){
                    row.push(brick)
                }else{
                    row.push(empty)
                }
                //四個角要放骨
                if(houseNum >2){
                    if((i==0 && j==0) || (i==0 && j==houseNum-1) || (i==houseNum-1 && j==0) || (i==houseNum-1 && j==houseNum-1)){
                        row.splice(j,1,beam)
                         //對角線要放骨
                    }else if(i==j || i+j ==houseNum-1){
                        row.splice(j,1,beam)
                    }
                }
                
            }
      
    
    }
    
    house.push(row.join(''))
    
    }

    console.log(house.join("\n"))

}



// for(let i=0; i<houseNum ; i++){
//     let row = [];

//     for(let j=0; j<houseNum; j++){
//         //門的位置
//         if(houseNum > 2 && i==0 && houseNum%2==0 && j==Math.floor(houseNum/2)-1){
//            row.splice(j,0,door)
//         }else if(houseNum > 2 && i==0 && houseNum%2 !== 0 && j==Math.floor(houseNum /2)){
//             row.splice(j,0,door)
//         }
        
//         else{
//             //四周磚塊的位置, 沒放磚塊的就放空白
//             if(i==0 || i==houseNum-1 || j==0 || j==houseNum-1){
//                 row.push(brick)
//             }else{
//                 row.push(empty)
//             }
//             //四個角要放骨
//             if(houseNum >2){
//                 if((i==0 && j==0) || (i==0 && j==houseNum-1) || (i==houseNum-1 && j==0) || (i==houseNum-1 && j==houseNum-1)){
//                     row.splice(j,1,beam)
//                      //對角線要放骨
//                 }else if(i==j || i+j ==houseNum-1){
//                     row.splice(j,1,beam)
//                 }
//             }
            
//         }
  

// }

// house.push(row.join(''))

// }




//第十題：生成費波那契數列
generateFibonacci(10)

function generateFibonacci(max){
    let arr = [];
    for(let i = 0; i<=max-1; i++){
        if(arr.length < 2){
            arr.push(i)
          //  console.log(arr)
        }
        else{
            arr.push(arr[i-2]+arr[i-1])
        }
    }
    console.log(arr)
}


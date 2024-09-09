
var cl=console.log;

//<<<<<<<<<<<<<<<<<<<< Array Methods >>>>>>>>>>>>>>>>>>>>>>>>>
  
   // 1.prpoerty >> length
  //2.toString() >> convert array into string
  //3. join(seperator) >> convert array into string
  //4.push()
  //5.pop()
  //6.shift()
  //7.unshift()
  // 8.splice
  
  let ages1=[10,20,30,40,50,60,70,80]
  
 // 1.prpoerty >> length
 
  let agelength=ages1.length;
  cl(agelength);
  
  //2.toString() >> convert array into string
  let skill=["html","css","javascript","angular","mongo db"];
  
  let tostr=skill.toString();
  cl(tostr, typeof tostr);
  
  //3. join(seperator) >> convert array into string
  
  skill=["html","css","javascript","angular","mongo db"];
  
  // tostr=skill.join(',');
  // tostr=skill.join(' ');
  // // tostr=skill.join('');
  // // tostr=skill.join('|');
  // tostr=skill.join('*');
  cl( tostr);
  
  //4.push() >> it add element to end of the array
  //and it returns updated  length of the array
  
  skill=["html","css","javascript","angular","mongo db"];
  
  // skill[skill.length]="Node js";
  // cl(skill); >> to add element at the last of array without using push() method
  
  skill.push("Node js");
  cl(skill);
  
  let len= skill.push("React");
  cl(len); // 7  >> it is the  updated  length of the array
  
  //5.pop() >> it removes the last element of the array
   // >> and also returns the removed element
	 
  skill.pop();
    skill.pop();
  cl(skill);
  
  let lastelement=skill.pop();
  cl(skill);
  cl(lastelement); // mongo DB >> and also returns the removed element
  
  //6.shift() >> it removes first element form array
  // and also returns the removed element
  
  let skilll1=["html","css","javascript","angular","mongo db"];
  
  skilll1.shift();
  cl(skilll1);
  
  let firstelestore=skilll1.shift();
  cl(firstelestore); // css  >>> it store first element as well
  
  //7.unshift() >> it add element at the start of array
  // and also returns the updated length of array
  
  skilll1.unshift("express");
  cl(skilll1);
  
  let leng=skilll1.unshift("express js");
  cl(leng); // 5  >>  the updated length of array
  
  //8.splice >> it has three parameters
  //first parameter >> the index no. at which we are going to add new members or from which we are removing old ele
  //second parameter >> the no. of elements removed
  //third parameter >> no. of elements to be add
  //first parameter is mandatory  second parameter is non mandatory
  
    let skilll2=["html","css","javascript","angular","mongo db"];
  
  // skilll2.splice(2,0,"Sass");  //(index no. , how much ele you want to delete , which element you want to add)
   skilll2.splice(2,1,"Sass");
  cl(skilll2);
  
  let removedele=  skilll2.splice(3,2,"Sass");
  cl(removedele); //['angular', 'mongo db'] >> it will give the deleted element
  
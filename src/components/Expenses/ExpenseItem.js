import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;






// import React from "react";
// import ExpenseDate from './ExpenseDate';
// import  Card from '../UI/Card';
// import './ExpenseItem.css';

// const ExpenseItem=(props) =>{
//     // const expenseDate = new Date(2021,2,28);
//     // const expenseTitle = 'Car Insurance';
//     // const expenseAmount = 458.54;
//     //function clickHandler(){}...event listeners
//     //let title=props.title;
//    //  const [title,setTitle] = useState(props.title);
//    //  console.log('ExpenseItem evaluated by React');
    
//    //  const clickHandler=()=>{
//        //console.log('Clicked!!!');
//       //title='Updated!!';
//    //   setTitle('Updated!');
//    //    console.log(title);
   
//     return (
//     <Card className='expense-item'>
//        {/* <ExpenseDate></ExpenseDate> */}
//        <ExpenseDate date={props.date}/>
//        {/* <div>{props.date.toISOString()} </div> */}
//          <div className='expense-item__description'> 
//             {/* <h2>{props.title}</h2> */}
//             <h2>{props.title}</h2>
//             <div className='expense-item__price'>${props.amount}</div> 
//          </div>
//          {/*if an element support an event,then you can add a listener with react by adding such an 'on' for eg onClick event name start with capital  */}
//          {/* <button onClick={()=>{console.log('Clicked!')}}>Change Title</button> */}
//      {/* <button onClick={clickHandler}>Change Title</button> */}
//      </Card>);
// }
// export default ExpenseItem;


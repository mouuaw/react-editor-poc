import React from 'react'
import { Button } from '@material-ui/core';

interface CounterProps {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}




export default class Counter extends React.Component<CounterProps, any> {
  

  render() {
    const {value, onIncrement, onDecrement} = this.props
    return (
      <React.Fragment>
        <h1>counter</h1>
        <h2>{value}</h2>
        <div className="box">
          <Button variant="contained" onClick={onIncrement}>+1</Button>
          <Button variant="contained" onClick={onDecrement}>-1</Button>
        </div>

      </React.Fragment>

    )
  }
}


// import React from 'react';
// import { Button } from '@material-ui/core';

// interface CounterProps {
//   name: string;
// }

// interface CounterState {
//   count: number;
// }

// export default class Counter extends React.Component<CounterProps, CounterState> {
//   state:CounterState = {
//     count: 0
//   }

//   componentDidMount() {
//     // setInterval(this.increase, 1000)
//   }

//   increase = () => {
//     const {count} = this.state
//     this.setState({count: count + 1})
//   }

//   decrease = () => {
//     const {count} = this.state
//     this.setState({count: count - 1})
//   }

//   render() {
//     const {name} = this.props;
//     const {count} = this.state;

//     return (
//       <React.Fragment>
//         <h1>{name} counter</h1>
//         <div>count value: {count}</div>
//         <div className="box">
//           <Button variant="contained" onClick={this.increase}>+1</Button>
//           <Button variant="contained" onClick={this.decrease}>-1</Button>
//         </div>

//       </React.Fragment>
//     )
//   }

// }


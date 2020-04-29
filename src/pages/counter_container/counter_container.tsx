import React from 'react';
import { actionCreators as counterActions } from '../../store/modules/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from "../../store/modules/index";
import Counter from '../counter/counter';


type CounterContainerProps = {
  value: number;
  CounterActions: typeof counterActions
}

export class CounterContainer extends React.Component<CounterContainerProps> {
  onIncrement = () => {
    const { CounterActions } = this.props
    CounterActions.increment();
  }

  onDecrement = () => {
    const {CounterActions} = this.props
    CounterActions.decrement()
  }

  render() {
    const { onIncrement, onDecrement } = this
    const { value } = this.props;
    return (
      <Counter
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        value={value}
      ></Counter>
    )
  }

}


export default connect(
  ({counter}: StoreState) => ({
    value: counter.value
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer)
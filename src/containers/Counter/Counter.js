import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';
import actionsEnum from "../../store/actions";

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAddition}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult => (
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        counter: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: actionsEnum.INCREMENT}),
        onDecrement: () => dispatch({type: actionsEnum.DECREMENT}),
        onAddition: () => dispatch({type: actionsEnum.ADD, value: 5}),
        onSubtract: () => dispatch({type: actionsEnum.SUBTRACT, value: 5}),
        onStoreResult: (result) => dispatch({type: actionsEnum.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionsEnum.DELETE_RESULT, resultId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

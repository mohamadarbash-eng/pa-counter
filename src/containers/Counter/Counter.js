import React, { Component } from 'react';

import CounterControl from '../../components/counter-control/counter-control';
import CounterOutput from '../../components/counter-output/counter-output';

import { connect } from 'react-redux';
import * as actionsCreator from "../../store/actions/index";

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
        onIncrement: () =>  dispatch(actionsCreator.increment()),
        onDecrement: () => dispatch(actionsCreator.decrement()),
        onAddition: () => dispatch(actionsCreator.add({value: 5})),
        onSubtract: () => dispatch(actionsCreator.sub({value: 5})),
        onStoreResult: (result) => dispatch(actionsCreator.storeResult({ result: result})),
        onDeleteResult: (id) => dispatch(actionsCreator.deleteResult({resultId: id}))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

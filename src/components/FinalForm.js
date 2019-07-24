import React, { Component } from 'react';

import StepOne from './FormStepOne';
import StepTwo from './FormStepTwo';
import StepFinal from './FormStepFinal';

class FinalForm extends Component {
    state = {
        step: 1,
        step_one_fields: {
            f_one_s_one: '',
            f_two_s_one: ''
        },
        step_two_fields: {
            f_one_s_two: '',
            f_two_s_two: ''
        },
        step_final_fields: {
            f_one_s_final: '',
            f_two_s_final: ''
        },
        show_final_values: false
    }

    handleNextButton = () => {
        const { step } = this.state;
        this.setState({step: step+1});
    }
    
    handleBackButton = () => {
        const { step } = this.state;
        this.setState({step: step-1})
    }

    handleConfirmButton = (values) => {
        const { step_final_fields } = this.state;
        this.setState({ step_final_fields: {
            ...step_final_fields,
            ...values
        }}, () => this.setState({show_final_values: true}, () => console.log(this.state)));
    }

    getFinalStepValue = (values) => {
        const { step_final_fields } = this.state;
        this.setState({ step_final_fields: {
            ...step_final_fields,
            ...values
        }});
    }

    getStepOneValue = (values) => {
        const { step_one_fields } = this.state;
        console.log(values);
        this.setState({step_one_fields: {
            ...step_one_fields,
            ...values
        }})
    }

    getStepTwoValue = (values) => {
        const { step_two_fields } = this.state;
        this.setState({step_two_fields: {
            ...step_two_fields,
            ...values
        }})
    }

    render() {
        const { step, step_one_fields, step_two_fields, step_final_fields } = this.state;
        if(step === 1) {
            return (
                <div>
                    {<h1> STEP 1 </h1>}
                    <StepOne {...step_one_fields} handleNextButton={this.handleNextButton} submittedValues={this.getStepOneValue} />
                </div>
            );
        }
        else if(step === 2) {
            return (
                <div>
                    {<h1> STEP 2 </h1>}
                    <StepTwo {...step_two_fields} handleNextButton={this.handleNextButton} handleBackButton={this.handleBackButton} submittedValues={this.getStepTwoValue} />
                </div>
            );
        }
        else {
            return (
                <div>
                    {<h1> FINAL STEP </h1> }
                    <StepFinal {...step_final_fields} handleConfirmButton={this.handleConfirmButton} handleBackButton={this.handleBackButton} submittedValues={this.getFinalStepValue} />
                    {this.state.show_final_values ? 
                        <p> 
                            STEP ONE VALUES: <br/>
                            F1: {step_one_fields.f_one_s_one}
                            <br /> F2: {step_one_fields.f_two_s_one} 
                            <br />
                            STEP TWO VALUES: <br/>
                            F1: {step_two_fields.f_one_s_two}
                            <br /> F2: {step_two_fields.f_two_s_two} 
                            <br />
                            FINAL STEP VALUES: <br/>
                            F1: {step_final_fields.f_one_s_final}
                            <br /> F2: {step_final_fields.f_two_s_final} 
                            <br />
                        </p>
                    : null }
                </div>
            );
        }
    }
}

export default FinalForm;
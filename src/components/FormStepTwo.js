import React from 'react'
import { Form, Input, Button } from 'antd';

const StepTwo = Form.create({
    name:'step_two'})( props => {
    const { getFieldDecorator, validateFields, getFieldsValue } = props.form;
    const validateInput = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            if(!err) {
                props.submittedValues(values);
                props.handleNextButton();
            }
        });
    }
    const storeValues = () => {
        const values = getFieldsValue();
        props.submittedValues(values);
        props.handleBackButton();
    }
    return (
        <Form onSubmit={validateInput}>
            <Form.Item label="Field One">
                {getFieldDecorator('f_one_s_two', {
                    rules: [{ required: true, message: 'Cannot be empty!'}],
                    initialValue: props.f_one_s_two
                })(<Input placeholder="Input your value here" />)}
            </Form.Item>
            <Form.Item label="Field Two">
                {getFieldDecorator('f_two_s_two', {
                    rules: [{ required: true, message: 'Cannot be empty!'}],
                    initialValue: props.f_two_s_two
                })(<Input placeholder="Input your value here" />)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={validateInput}>
                    Next
                </Button>
                <Button type="default" onClick={storeValues} >
                    Back
                </Button>
            </Form.Item>
        </Form>
    );
});

export default StepTwo;
import React from 'react'
import { Form, Input, Button } from 'antd';

const StepFinal = Form.create({
    name:'step_final'})( props => {
    const { getFieldDecorator, validateFields, getFieldsValue } = props.form;
    const validateInput = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            if(!err) {
                props.handleConfirmButton(values);
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
                {getFieldDecorator('f_one_s_final', {
                    rules: [{ required: true, message: 'Cannot be empty!'}],
                    initialValue: props.f_one_s_final
                })(<Input placeholder="Input your value here" />)}
            </Form.Item>
            <Form.Item label="Field Two">
                {getFieldDecorator('f_two_s_final', {
                    rules: [{ required: true, message: 'Cannot be empty!'}],
                    initialValue: props.f_two_s_final
                })(<Input placeholder="Input your value here"  />)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Confirm
                </Button>
                <Button type="default" onClick={storeValues} >
                    Back
                </Button>
            </Form.Item>
        </Form>
    );
});

export default StepFinal;
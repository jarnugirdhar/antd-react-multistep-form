import React from 'react'
import { Form, Input, Button } from 'antd';

const StepOne = Form.create({
    name:'step_one'})( props => {
    const { getFieldDecorator, validateFields } = props.form;
    const validateInput = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            if(!err) {
                props.submittedValues(values);
                props.handleNextButton();
            }
        });
    }
    return (
        <Form onSubmit={validateInput}>
            <Form.Item label="Field One">
                {getFieldDecorator('f_one_s_one', {
                    rules: [{ required: true, message: 'Cannot be empty!'}],
                    initialValue: props.f_one_s_one
                })(<Input placeholder="Input your value here" />)}
            </Form.Item>
            <Form.Item label="Field Two">
                {getFieldDecorator('f_two_s_one', {
                    rules: [{ required: true, message: 'Cannot be empty!'}],
                    initialValue: props.f_two_s_one
                })(<Input placeholder="Input your value here"  />)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Next
                </Button>
            </Form.Item>
        </Form>
    );
});

export default StepOne;
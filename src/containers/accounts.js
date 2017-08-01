import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';


import { fetchAccounts, createAccount, removeAccount } from '../actions/index';

class Accounts extends Component {

    componentDidMount() {
        this.props.fetchAccounts();
    }

    renderField(field) {
        return (
            <div>
                <label>{ field.name }</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    onRemoveClick(account) {
        this.props.removeAccount(account.number);
    }

    onSubmit(values) {
        this.props.createAccount(values);
    }

    renderAccounts() {
        return _.map(this.props.accounts, account => {
            return (
                <tr key={ account.number }>
                    <td >
                        { account.type }
                    </td >
                    <td>
                        { account.number }
                    </td>
                    <td>
                        { account.name }
                    </td>
                    <td><button type="button" onClick={ () => this.onRemoveClick(account) } className="btn btn-danger">Remove</button></td>
                </tr>
            );
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="center-block">
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } className="form-horizontal form-inline" >
                    <table className="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Account Type</th>
                                <th>Account Number</th>
                                <th>Account Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderAccounts() }
                            <tr>
                                <td>
                                    <Field
                                        label="Account Type"
                                        name="type"
                                        component={ this.renderField }
                                    />
                                </td>
                                <td>
                                    <Field
                                        label="Account Number"
                                        name="number"
                                        component={ this.renderField }
                                    />
                                </td>
                                <td>
                                    <Field
                                        label="Account Name"
                                        name="name"
                                        component={ this.renderField }
                                    />
                                </td>
                                <td><button type="submit" className="btn btn-primary">Save</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { accounts: state.accounts };
}

export default reduxForm({
    form: 'AccountsForm',
    onSubmitSuccess: (result, dispatch) => dispatch(reset('AccountsForm'))
})(
    connect(mapStateToProps, { fetchAccounts, createAccount, removeAccount })(Accounts)
    );
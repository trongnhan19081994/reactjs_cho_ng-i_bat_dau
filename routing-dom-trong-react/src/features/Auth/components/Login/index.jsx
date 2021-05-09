import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import propTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            //Close dialog
            const {closeDialog} = props;
            if(closeDialog) {
                closeDialog();
            }

            // do something here on register successfully
            //console.log('New user:', user);
            //enqueueSnackbar('Register successfully!!!', { variant: 'success' });
        } catch (error) {
            console.log('Failed to Login:', error.message);
            //enqueueSnackbar(error.message, { variant: 'error' });
        }
       
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    )
}

Login.propTypes = {
    closeDialog: propTypes.func
}

export default Login


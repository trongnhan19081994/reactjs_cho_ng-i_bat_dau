import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import propTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            //console.log('Form Submit: ', values);
            //Auto set username = email
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            //Close dialog
            const {closeDialog} = props;
            if(closeDialog) {
                closeDialog();
            }

            // do something here on register successfully
            console.log('New user:', user);
            enqueueSnackbar('Register successfully!!!', { variant: 'success' });
        } catch (error) {
            //console.log('Failed to register:', error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
       
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    )
}

Register.propTypes = {
    closeDialog: propTypes.func
}

export default Register


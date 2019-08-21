import React, {useState} from 'react';
import {
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
    Button,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import './userSignUp.scss';

const UserSignUp = () => {
    const [inputs, handleInputChange] = useState({firstName: '', lastName: '', email: '', password: '', repeatedPassword: ''});
    const [showPassword, setVisibility] = useState(false);

    const handleChange = (label) => (e) => handleInputChange({...inputs, [label]: e.target.value});
    const setPasswordVisibility =  (e) => setVisibility(!showPassword);

    const isValid = () => {
        inputs.password === inputs.repeatedPassword && inputs.password.trim().length > 0 &&
            inputs.firstName.trim().length > 0 && inputs.lastName.trim().length > 0 &&
            inputs.email.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== undefined
    }

    return (
        <div className="user-sign-up-container">
            <Typography variant="h3" className="centered">
                Signing up
            </Typography>
            <Typography className="centered">
                Signing up is quick and easy.
            </Typography>
            <Typography className="centered">
                Already have an account? <span>Login here</span>
            </Typography>
            <div className="centered">
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Enter your first name"
                        margin="normal"
                        onChange={handleChange('firstName')}
                        value={inputs.firstName}
                        fullWidth={true}
                    />
                    <TextField
                        id="standard-name"
                        label="Enter your last name"
                        margin="normal"
                        fullWidth={true}
                        onChange={handleChange('lastName')}
                        value={inputs.lastName}
                    />
                    <TextField
                        id="filled-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        fullWidth={true}
                        onChange={handleChange('email')}
                        value={inputs.email}
                    />
                    <FormControl className="full-width">
                        <InputLabel
                            htmlFor="adornment-password"
                        >Set a password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={setPasswordVisibility}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={handleChange('password')}
                            value={inputs.password}
                        />
                    </FormControl>
                    <FormControl className="full-width">
                        <InputLabel
                            htmlFor="adornment-password"
                        >Type the password again</InputLabel>
                        <Input
                            id="adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={setPasswordVisibility}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={handleChange('repeatedPassword')}
                            value={inputs.repeatedPassword}
                        />
                    </FormControl>
                    <Button
                        color="primary"
                        disabled={!isValid()}
                        variant="contained"
                        className="signup-button"
                    >
                        Complete SignUp
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default UserSignUp;

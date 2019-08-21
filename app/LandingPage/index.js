import React, {useState} from 'react';
import './landing-page.scss';
import { Typography, Button } from '@material-ui/core';
import UserSignUp from '../UserSignUp';

const LandingPage = ()  => {
    const [isSignUp, setSignUpActive] = useState(false);
    const [isLogin, setLoginActive] = useState(false);
    return (
        <div className="landing-header-container">
            <div className="login-button-container">
                <div>
                    <Typography>
                        TennisMate
                    </Typography>
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setSignUpActive(true)}
                    >
                        SignUp
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setLoginActive(true)}
                    >
                        Login
                    </Button>
                </div>
            </div>
            <div className="landing-page-content">
                {isSignUp ? <UserSignUp/> : null}
            </div>
        </div>
    )
}

export default LandingPage;

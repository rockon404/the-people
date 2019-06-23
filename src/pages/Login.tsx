import React, { useCallback, useRef } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect, DispatchProp} from 'react-redux';
import {StoreState} from '../types';
import {authErrorSelector, isSignedInSelector} from '../selectors';
import { login } from '../actions/auth';
import {Redirect} from 'react-router';
import styled from 'styled-components';

const Error = styled.div`
  color: red;
`;

const useStyles: any = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface OwnProps {
  isSignedIn: boolean;
  error: {
    message: string;
  };
}

type Props =  OwnProps & DispatchProp<any>;

const SignIn: React.FC<Props> = ({ dispatch, isSignedIn, error }) => {
  const classes = useStyles();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submit = useCallback((e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch(login(email, password));
  }, [emailRef, passwordRef]);

  if (isSignedIn) return <Redirect to="/dashboard" />;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Панель управления
        </Typography>
        <form className={classes.form} noValidate onSubmit={submit}>
          <TextField
            inputRef={emailRef}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            inputRef={passwordRef}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Вход
          </Button>
          {error && <Error>{error.message}</Error>}
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  error: authErrorSelector(state),
  isSignedIn: isSignedInSelector(state),
});

export default connect(mapStateToProps)(SignIn);
import React, {useCallback, useRef, useState} from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {connect, DispatchProp} from 'react-redux';
import {addNotification} from '../actions/notifications';
import {AppNotification, StoreState, User} from '../types';
import {userSelector} from '../selectors';
import slugify from '../utils/slugify';
import {RouteComponentProps} from 'react-router';

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

}

interface ConnectedProps {
  user: User;
}

type Props = OwnProps & ConnectedProps & DispatchProp<any> & RouteComponentProps;

const AddNotification: React.FC<Props> = ({ dispatch, user, history }) => {
  const classes = useStyles();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [error, setError] = useState(null);

  const submit = useCallback((e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (!title || !description) {
      setError('Введите все обязательные поля');
    }

    const notification: AppNotification = {
      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
      title,
      slug: slugify(title + Math.random()),
      description,
      created_at: new Date().toString(),
      expires_at: new Date().toString(),
      from: user.slug,
    };

    dispatch(addNotification(notification));
    history.push('/dashboard');
  }, [titleRef, descriptionRef]);


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Панель управления
        </Typography>
        <form className={classes.form} noValidate onSubmit={submit}>
          <TextField
            inputRef={titleRef}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Заголовок"
            name="title"
            autoFocus
            multiline
          />

          <TextField
            inputRef={descriptionRef}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Описание"
            multiline
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Добавить
          </Button>
          {error && <Error>{error.message}</Error>}
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps)(AddNotification);

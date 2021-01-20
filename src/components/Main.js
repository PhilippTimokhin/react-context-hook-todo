import React, { useState, useContext } from "react";
import { NoteContext } from "../context/context";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { IconButton } from "@material-ui/core";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

const Main = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const {
    notes,
    handleOnDelete,
    handleOnSubmit,
    handleChangeValueInput,
  } = useContext(NoteContext);

  const enable = text.length === 0;
  const description = notes.length === 0;
  const clearInput = () => {
    setText("");
  };

  const handleOnAddNote = () => {
    handleOnSubmit(text);
    clearInput();
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {description ? (
            <>
              <Typography align="center">
                <IconButton color="secondary">
                  <SentimentVeryDissatisfiedIcon fontSize="large" />
                </IconButton>
              </Typography>
              <Typography align="center">
                У вас ещё нет заметок. Сделайте свою первую заметку!
              </Typography>
            </>
          ) : (
            <>
              <Typography align="center">
                <IconButton color="primary">
                  <SentimentVerySatisfiedIcon fontSize="large" />
                </IconButton>
              </Typography>
              <Typography align="center">
                Количество заметок: {notes.length}
              </Typography>
            </>
          )}
        </div>
        <form className={classes.form}>
          <TextField
            margin="normal"
            placeholder="Запишите пожайлуйста заметку"
            fullWidth
            label="Заметка"
            autoFocus
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={enable}
            onClick={handleOnAddNote}
          >
            Добавить
          </Button>
          {notes.map((note, i) => (
            <>
              <Typography align="center">Заметка №{i + 1}</Typography>
              <TextField
                margin="normal"
                fullWidth
                autoFocus
                value={note.text}
                onChange={(e) => handleChangeValueInput(e, i)}
              />
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={() => handleOnDelete(note.id)}
              >
                Удалить
              </Button>
            </>
          ))}
        </form>
      </Container>
    </>
  );
};

export default Main;

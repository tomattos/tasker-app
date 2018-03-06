import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* setRequestAddTaskSaga(action) {
  const url = `https://uxcandy.com/~shapoval/test-task-backend/create?developer=Anton`
  let form = new FormData();
  form.append("username", action.username);
  form.append("email", action.email);
  form.append("text", action.text);
  form.append("image", action.image);

  axios.post(
    url, 
    form, 
    {
      headers: { 'content-type': 'multipart/form-data' }
    }
  )
  .then(response => {
    console.log(response)
  })
}

function* requestAddTaskSaga() {
  yield takeEvery("REQUEST_ADD_TASK", setRequestAddTaskSaga);
}

function* rootSaga() {
  yield all([
    requestAddTaskSaga()
  ])
}

export default rootSaga;
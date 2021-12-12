export const middle = store => next => action =>{

    if(action.type == "CREATE_USER"){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(action.payload);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
debugger
fetch("http://localhost:4000/createUser", requestOptions)
  .then(response => response.json())
  .then(result => {
      console.log(result)
      action.payload = result.newUser
      return next(action)
    })
  .catch(error => console.log('error', error));
    }


    if(action.type == "LOGIN"){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

var raw1 = JSON.stringify(action.payload);

var requestOptions1 = {
  method: 'POST',
  headers: myHeaders,
  body: raw1,
  redirect: 'follow'
}
debugger
fetch("http://localhost:4000/getUserByNameAndPassword", requestOptions1)
.then(response => response.json())
.then(result => {
    console.log(result)
    action.payload = result.user
    return next(action)
  })
  .catch(error => console.log('error', error));
}
}
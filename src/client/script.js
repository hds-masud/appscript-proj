const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const nid = document.getElementById('nid');
const dob = document.getElementById('dob');
const submit = document.getElementById('submit');

// util
function formValidator(i) {
  if (i.name && i.email.includes('@') && i.address && i.nid && i.dob) {
    return true;
  }
  return false;
}

submit.addEventListener('click', () => {
  const inf = {
    name: name.value,
    email: email.value,
    address: address.value,
    nid: nid.value,
    dob: dob.value,
    at: new Date().toDateString(),
  };
  if (formValidator(inf)) {
    google.script.run
      .withSuccessHandler((success) => {
        console.log(success);
      })
      .submitData(inf);
  }
});

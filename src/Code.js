function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function submitData(inf) {
  const ss = SpreadsheetApp.openById('1F1pnbDtM3e9RPc01Apk6NB79UYeIlReGgi50kSYhhDY').getSheetByName('db')
  const row = ss.getLastRow() + 1;

  const cells = ['name', 'email', 'address', 'nid', 'dob', 'at'];

  cells.forEach((item, index) => {
    const range = ss.getRange(row, index + 1);
    range.setValue(inf[cells[index]]);
  });
  
  const msg = {
    to: inf.email,
    subject: `Thank You, ${inf.name}`,
    htmlBody: `
    Thank you for your information. We are so happy to introduce yourself. 
    Stay connected with us.
      <h3> Your Information </h3>
      <div>
        <p><b>Name</b>: ${inf.name}</p>
        <p><b>Email</b>: ${inf.email}</p>
        <p><b>Address</b>: ${inf.address}</p>
        <p><b>National ID</b>: ${inf.nid}</p>
        <p><b>Date of Birth</b>: ${inf.dob}</p>
      </div>
       <a href="https://www.hordanso.com/company/contact-us/">Contact Us</a>
    `,
  };
  MailApp.sendEmail(msg);
}

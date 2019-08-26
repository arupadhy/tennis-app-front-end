
export default class SendEmailservice {

    static send(user) {
        console.log(JSON.stringify(user));
        fetch('https://localhost:3000/send/email', {
            method: 'POST',
            body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(data => console.log(data));
   }
}

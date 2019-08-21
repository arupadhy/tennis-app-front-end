
export default class SendEmailservice {

    static send(userEmail) {
        Email.send({
            Host: 'smtp25.elasticemail.com',
            Username: 'arvind.charlotte@gmail.com',
            Password: '11e5e745-9d2c-4179-b5e5-464a9f3f2afa',
            To: userEmail,
            From: 'arvind.charlotte@gmail.com',
            Subject: 'Welcome to Tennis',
            Body: 'Hello, you have successfully registered  now'
        }).then(message => {
            console.log(message);
        })
    }
}

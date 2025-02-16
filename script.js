const QRCode = require('qrcode');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the URL: ', (url) => {
    QRCode.toString(url, { type: 'terminal' }, (err, qr) => {
        if (err) {
            console.error('Error generating QR code:', err);
        } else {
            console.log(qr);
        }
        rl.close();
    });
});

let count = 0;
let success = 0;
const failed = [];
const recipients = [
  { name: 'Bart', email: 'bart@tld' },
  { name: 'Marge', email: 'marge@tld' },
  { name: 'Homer', email: 'homer@tld' },
  { name: 'Lisa', email: 'lisa@tld' },
  { name: 'Maggie', email: 'maggie@tld' },
];

// function dispatch(recipient, callback) {
//   // `sendMail` is a hypothetical SMTP client
//   sendMail(
//     {
//       subject: 'Dinner tonight',
//       message: 'We have lots of cabbage on the plate. You coming?',
//       smtp: recipient.email,
//     },
//     callback
//   );
// }

function sendMail(mailOptions) {
    // 这是一个模拟的异步函数，实际应用中你会使用一个真正的SMTP客户端库
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 模拟随机成功或失败
            if (Math.random() > 0.2) { // 80%成功率
                resolve();
            } else {
                reject(new Error('Failed to send email'));
            }
        }, 100);
    });
}

function dispatch(recipient) {
  // `sendMail` is a hypothetical SMTP client
    return sendMail(
        {
            subject: 'Dinner tonight',
            message: 'We have lots of cabbage on the plate. You coming?',
            smtp: recipient.email,
        }
    ).then(
        () => {
            success += 1;
        } //成功时调用callback
    ).catch(
        (err) => {
            failed.push(recipient.name);
        }
    ).finally(
        () => {
            count += 1;
            if (count === recipients.length) {
                final({
                    count,
                    success,
                    failed,
                });
            }
        } //无论成功还是失败都调用callback
    );
}

function final(result) {
  console.log(`Result: ${result.count} attempts \
      & ${result.success} succeeded emails`);
  if (result.failed.length) {
    console.log(`Failed to send to: \
        \n${result.failed.join('\n')}\n`);
  }
}

recipients.forEach(function (recipient) {
  dispatch(recipient);
});
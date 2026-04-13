/**
 * 有限制的并行执行：如果你想同时执行多个函数，但又不想让它们全部同时运行，可以使用一个计数器来限制并行执行的数量。例如，你可以设置一个最大并行数，当达到这个数时，新的函数调用将被暂时阻止，直到有一个函数完成。
 */
let successCount = 0;

function final() {
  console.log(`dispatched ${successCount} emails`);
  console.log('finished');
}

function dispatch(recipient, callback) {
  // `sendMail` is a hypothetical SMTP client
  sendMail( //这是一个异步的函数
    {
      subject: 'Dinner tonight',
      message: 'We have lots of cabbage on the plate. You coming?',
      smtp: recipient.email,
    },
    callback
  );
}

function sendOneMillionEmailsOnly() {
  getListOfTenMillionGreatEmails(function (err, bigList) {
    if (err) {
      throw err;
    }

    function serial(recipient) {
      if (!recipient || successCount >= 1000000) { //和之前serial主要逻辑一致，通过在funciton中的async + await + callback保证promise之后调用callback实现串行
        return final();
      }

      dispatch(recipient, function (_err) {
        if (!_err) {
          successCount += 1;
        }

        serial(bigList.pop());
      });
    }

    serial(bigList.pop());
  });
}

sendOneMillionEmailsOnly();
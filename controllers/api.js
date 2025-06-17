const MikroNode = require('mikronode');

const device = new MikroNode('10.10.10.147');

device
  .connect()
  .then(([login]) => login('username', 'password'))
  .then((conn) => {
    console.log('Logged in.');
    // conn.closeOnDone(true); // when all channels are "done" the connection should close.

    exports.getUserList = (throwResult) => {
      const listenChannel = conn.openChannel('userList');
      // Tell our listen channel to notify us of User List.
      listenChannel
        .write('/ip/hotspot/user/print')
        .then((result) => {
          const packet = MikroNode.resultsToObj(result.data);
          throwResult(packet);
          listenChannel.closeOnDone(true);
          // console.log("Listen channel done promise.", packet);
        })
        .catch((error) => console.log('Listen channel rejection:', error));
    };

    exports.getUserInformation = (throwResult, uId) => {
      const listenChannel = conn.openChannel('userdetails');
      // Tell our listen channel to notify us of User List.
      listenChannel
        .write('/ip/hotspot/user/print', { '?name': uId })
        .then((result) => {
          const packet = MikroNode.resultsToObj(result.data[0]);
          throwResult(packet);
          listenChannel.closeOnDone(true);
          // console.log("Listen channel done promise.", packet);
        })
        .catch((error) => console.log('Listen channel rejection:', error));
    };

    exports.postAddUser = (throwResult, user) => {
      const listenChannel = conn.openChannel('userdetails');
      const username = user.username;
      const password = user.password;
      const package = user.package;
      listenChannel
        .write('/ip/hotspot/user/add', {
          name: `${username}`,
          password: `${password}`,
          profile: `${package}`,
        })
        .then((result) => {
          const uId = result.cmd.args;
          throwResult(uId);
          listenChannel.closeOnDone(true);
        })
        .catch((error) => throwResult(error));
    };

    exports.getProfileList = (throwResult) => {
      const listenChannel = conn.openChannel('profilelist');
      // Tell our listen channel to notify us of User List.
      listenChannel
        .write('/ip/hotspot/profile/print')
        .then((result) => {
          const packet = MikroNode.resultsToObj(result.data);
          throwResult(packet);
          listenChannel.closeOnDone(true);
          // console.log("Listen channel done promise.", packet);
        })
        .catch((error) => console.log('Listen channel rejection:', error));
    };

    exports.postEditUser = (throwResult, user) => {
      const listenChannel = conn.openChannel('editUser');
      // Tell our listen channel to notify us of User List.
      listenChannel
        .write('/ip/hotspot/user/set', {'password':`${user.password}`, 'profile':`${user.package}`, '.id':`${user.uId}`})
        .then((result) => {
          throwResult(result);
          listenChannel.closeOnDone(true);
          // console.log("Listen channel done promise.", packet);
        })
        .catch((error) => console.log('Listen channel rejection:', error));
    };

    exports.postRemoveUser = (throwResult, uId) => {
      const listenChannel = conn.openChannel('removeUser');
      // Tell our listen channel to notify us of User List.
      listenChannel
        .write('/ip/hotspot/user/remove', {'.id':`${uId}`})
        .then((result) => {
          const packet = MikroNode.resultsToObj(result.data);
          throwResult(packet);
          listenChannel.closeOnDone(true);
          // console.log("Listen channel done promise.", packet);
        })
        .catch((error) => console.log('Listen channel rejection:', error));
    };
  });

// channel.write(lines[,optionsObject])
// Returns a promise that is resolved when the command sent is complete
// and is "done" The promise is rejected
// if a trap or fatal error occurs.
// Lines can be a string, or an array of strings.
// If it is a string, then it is split on the EOL character
// and each resulting line is sent
// as a separate word (in API speak) If lines is an array,
// then each element is sent unaltered.
// If lines is a string and optionsObject is provided,
// the optionsObject is converted to standard sentence
// output: =propertyName=propertyValue

// Each sentence that comes from the device goes through the data stream.
// listenChannel.write('/ip/hotspot/user/print')
// listenChannel.data.subscribe((data) => {
//     const packet = MikroNode.resultsToObj(data);
//     console.log(packet);
// }, error => {
//     console.log("Error during listenChannel subscription", error) // This shouldn't be called.
// }, () => {
//     console.log("Listen channel done.");
// });

// contains events when the done sentence comes from the device
// listenChannel.write('/ip/hotspot/user/print')
// listenChannel.done.subscribe((report) => {
//     const packet = MikroNode.resultsToObj(report.data);
//     // report.data.map(item => console.log(item[1].value));
//     // console.log('Interface change: ', packet);
//     // packet.map(item => console.log(item));
// });

// exports.getUserList = (throwResult) => {
//     device.connect()
//         .then(([login]) => login('username', 'password'))
//         .then((conn) => {
//             console.log("Logged in.");
//             conn.closeOnDone(true); // when all channels are "done" the connection should close.
//             const listenChannel = conn.openChannel("userList");
//             // Tell our listen channel to notify us of User List.
//             listenChannel.write('/ip/hotspot/user/print')
//             .then(result => {
//                 const packet = MikroNode.resultsToObj(result.data)
//                 throwResult(packet);
//                 // console.log("Listen channel done promise.", packet);
//             })
//             .catch(error => console.log("Listen channel rejection:", error)); // Catch shuold be called when we call /cancel (or listenChannel.close())
//         });

// }

const API = require('./api');

exports.getAdminPage = (req, res) => {
  res.render('admin/adminPage', {
    pageTitle: 'Admin',
    path: '/admin',
  });
};

exports.getUserList = (req, res) => {
  const catchResult = (packet) => {
    const userInformation = packet.map((user) => {
      return { user: user.name, profile: user.profile, uptime: user.uptime, id: user['.id'] };
    }); //user.name
    res.render('admin/userList', {
      pageTitle: 'User List',
      path: '/admin/userlist',
      userInformation: userInformation,
    });
  };

  API.getUserList(catchResult);
};

exports.getUserInformation = (req, res) => {
  const uId = req.params.uId;
  const userInformation = [];

  const catchResult = (packet) => {
    console.log(packet);
    for (let key in packet) {
      userInformation.push(packet[key]);
    }
    res.render('admin/userInformation', {
      pageTitle: 'User Information',
      path: '/admin/userinformation',
      userInformation: userInformation,
    });
  };

  API.getUserInformation(catchResult, uId);
};

exports.getProfileList = (req, res) => {
  const catchResult = (packet) => {
    const profileList = packet.map((profile) => profile.name); //user.name
    res.render('admin/profileList', {
      pageTitle: 'Profile List',
      path: '/admin/profilelist',
      profileList: profileList,
    });
  };

  API.getProfileList(catchResult);
};

exports.getAddUser = (req, res) => {
  res.render('admin/addUser', {
    pageTitle: 'Add User',
    path: '/admin/adduser',
    editing: false
  });
};

exports.postAddUser = (req, res) => {
  const user = req.body;
  const catchResult = (packet) => {
    if(packet.name){
      res.redirect(`/admin/userlist`);
    }else {
      const err = packet.data[0].value;
      res.render('admin/error', {
        pageTitle: 'Add User',
        path: '/admin/error',
        err: err
      });
    }
  };

  API.postAddUser(catchResult, user);
};


exports.getEditUser = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const uId = req.params.uId;
  const catchResult = (packet) => {
    const user = { name: packet.name, password: packet.password, profile: packet.profile, userId: packet['.id'] };
    res.render('admin/addUser', {
      pageTitle: 'Edit User',
      path: '/admin/edituser',
      user: user,
      editing: editMode,
    });
  };

  API.getUserInformation(catchResult, uId);
};


exports.postEditUser = (req, res, next) => {
  const user = req.body;
  console.log(user);
  const catchResult = (packet) => {
    console.log(' postEditUser Controller :',packet);
    res.redirect('/admin/userlist');
    }
  API.postEditUser(catchResult, user);
};


exports.postRemoveUser = (req, res, next) => {
  const uId = req.body.uId;
  const catchResult = (packet) => {
    res.redirect('/admin/userlist');
  };

  API.postRemoveUser(catchResult, uId);
};

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('layout');
};

exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add Store' });
};

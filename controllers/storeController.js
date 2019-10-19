const mongoose = require('mongoose');

const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    res.render('layout');
};

exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
    const store = await new Store(req.body).save();
    req.flash('success', `We added ${store.name}! Now you can leave a reivew for it!`);
    res.redirect(`/store/${store.slug}`);
};

const index = (req, res) => res.render('location-list', { title: 'Location page'});
const detail = (req, res) => res.render('location-info', { title: 'Location Detail page'});
const addReview = (req, res) => res.render('index', { title: 'Add Review page'});

module.exports = {
    index,
    detail,
    addReview
};
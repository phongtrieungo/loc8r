const index = (req, res) => res.render('location-list', { title: 'Location'});
const detail = (req, res) => res.render('location-info', { title: 'Location Detail'});
const addReview = (req, res) => res.render('location-review-form', { title: 'Add Review'});

module.exports = {
    index,
    detail,
    addReview
};
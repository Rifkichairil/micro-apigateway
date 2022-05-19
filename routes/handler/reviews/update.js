const apiAdapter = require('../../api')
const {
    URL_SERVICE_COURSE
} = process.env

const api = apiAdapter(URL_SERVICE_COURSE)

module.exports = async (req,res) => {
    try {
        const userId = req.user.data.id
        const id = req.params.id

        const review = await api.put(`/api/reviews/${id}`, {
            user_id: userId,
            ...req.body 
        });
        return res.json(review.data)
    } catch (error) {

        if (error.code == 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'Service unavailable!'
            })
        }

        // Masuk kesini brok
        const { status, data } = error.response;
        return res.status(status).json(data)
    }
}
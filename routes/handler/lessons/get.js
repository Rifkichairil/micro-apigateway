const apiAdapter = require('../../api')
const {
    URL_SERVICE_COURSE
} = process.env

const api = apiAdapter(URL_SERVICE_COURSE)

module.exports = async (req,res) => {
    try {
        const id = req.params.id
        const lessons = await api.get(`/api/lessons/`,{
            params: {
                ...req.query
            }
        });
        return res.json(lessons.data)
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
const mongo = require('mongoose')

const MovieSchema = new Schema(
    {
        title: {type: String, trim: true}
    }
)

export default model("Movie", MovieSchema);
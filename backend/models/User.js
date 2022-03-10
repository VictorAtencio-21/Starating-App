const mongo = require('mongoose')

const UserSchema = new Schema(
    {
        name: {type: String, trim: true}
    }
)

export default model("User", UserSchema);
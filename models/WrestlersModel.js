import { Schema, model } from "mongoose"

const WrestlerSchema = new Schema([
    {
        name: { type: String, required: true }
    },
    {
        age: { type: Number, required: true }
    },
    {
        country: { type: String, required: true }
    },
    {
        style: { type: String, enum: ["strong","flyer","technical"], required: true }
    }
])

export const WrestlerModel = new model("wrestlers",WrestlerSchema)
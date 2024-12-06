import { Schema, model } from "mongoose"

const CompaniesSchema = new Schema([
    {
        name: { type: String, required: true }
    },
    {
        date_foundation: { type: Date, required: true }
    },
    {
        country: { type: String, required: true }
    }
])

export const CompaniesModel = new model("companies",CompaniesSchema)
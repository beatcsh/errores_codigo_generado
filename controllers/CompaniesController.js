import { CompaniesModel } from "../models/CompaniesModel.js"

CompaniesModel.create([
    {
        name: "WWE",
        date_foundation: "1980-05-13",
        country: "USA"
    },
    {
        name: "NJPW",
        date_foundation: "1960-05-13",
        country: "Japan"
    },
    {
        name: "CMLL",
        date_foundation: "1940-05-13",
        country: "Mexico"
    }
])

export const testCompaniesController = () => {
    console.log("funciono el companies controller")
}
import { WrestlerModel } from "../models/WrestlersModel.js"

WrestlerModel.create([
    {
        name: "Mistico",
        age: 30,
        country: "Mexico",
        style: "flyer"
    },
    {
        name: "CM Punk",
        age: 45,
        country: "USA",
        style: "strong"
    },
    {
        name: "Chris Jericho",
        age: 45,
        country: "Canada",
        style: "technical"
    }
])

export const testWrestlersController = () => {
    console.log("funciona el de wrestlers controller")
}
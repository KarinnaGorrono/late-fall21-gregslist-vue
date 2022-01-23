export class House {

    constructor(houseData = {}) {
        this.id = houseData.id
        this.model = houseData.model
        this.year = houseData.year
        this.description = houseData.description
        this.price = houseData.price
        this.imgUrl = houseData.imgUrl
        this.creatorId = houseData.creatorId
        this.creator = houseData.creator || {}
    }
}
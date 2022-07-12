const { v4: uuidv4 } = require('uuid');
class Achieve{
    constructor(name, photo){
        this.id = uuidv4();
        this.name = name;
        this.photo = photo;
    }
}
module.exports = Achieve;

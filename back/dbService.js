const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

const db = new JsonDB(new Config("myBase", true, true, "/"));

class DataBaseService{
    constructor(){
    
        db.reload();
        // this.initStart()
    }
    initStart(){
        this.add('/users',{
            name:'me',
            surname:'you'
        })
    }
    add(tableName,object){
        db.push(`/${tableName}/${object.id}`,object)
    }
    get(tableName,id){
        return db.getData(`/${tableName}/${id}`)
    }
    getByField(tableName,fieldName,value){
        console.log('Db');
        let table = db.getData(`/${tableName}`)
        let resultArray = [];
        for(let entityId in table){
            if(table[entityId][fieldName] === value)
                resultArray.push(table[entityId])
        }
        return resultArray;
    }
}
module.exports = new DataBaseService();
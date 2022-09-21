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
    put(tableName,id,object){
        this.delete(tableName,id);
        this.add(...arguments);
    }
    delete(tableName,id){
        db.delete(`/${tableName}/${id}`)
    }
    add(tableName,id,object){
        db.push(`/${tableName}/${id}`,object)
    }
    get(tableName,id){
        return db.getData(`/${tableName}/${id}`)
    }
    getByField(tableName,fieldName,value){
        let table = db.getData(`/${tableName}`)
        let resultArray = [];
        for(let entityId in table){
            if(table[entityId][fieldName] === value)
                resultArray.push(table[entityId])
        }
        return resultArray;
    }
    getAll(tableName){
        try{
         return db.getData(`/${tableName}`)
        }catch(ex){
            return null;
        }
    }
}
module.exports = new DataBaseService();
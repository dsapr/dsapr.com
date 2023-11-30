const { cache } = require("react");

class JsonUtil { 
    static isJson(str) {
        try {
            JSON.parse(str)
            return true;
        } catch(e) {
            return false;
        }
    }
}

export default JsonUtil;
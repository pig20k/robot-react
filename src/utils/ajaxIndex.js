import ajax from "./ajaxUtil"

function getTopic(){
      return ajax("/api/topic", {id: 'id'}, 'GET')
}

function subResult(data){
      return ajax("/api/topic", data, 'POST')
}

export default {getTopic, subResult}

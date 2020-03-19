import ajax from "./ajaxUtil"

function getTopic(){
      return ajax("/api/questions", 'GET')
}

function subResult(data){
      return ajax("/api/answerRecord",'POST', data)
}

export default {getTopic, subResult}

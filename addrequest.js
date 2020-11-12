class AddRequest{
    addrequest = function(listobj){
      // var listTemp = JSON.parse(localStorage.getItem("LIST"));
      
    //    var lists= listTemp ? listTemp:[];
    //    lists.push(listobj);
    var addRequestKey= [];
    addRequestKey = JSON.parse(localStorage.getItem("ADDREQUEST"));

    if(!addRequestKey)
    { 
        var addRequestArray=[listobj]
    
        localStorage.setItem("ADDREQUEST",JSON.stringify( addRequestArray)); 
    }
else{
    addRequestKey.push(listobj);

    localStorage.setItem("ADDREQUEST",JSON.stringify( addRequestKey)); 
}

    // localStorage.setItem("ADDREQUEST",JSON.stringify(lists));
       let result="success";
       return result;
        }
}
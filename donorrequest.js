class AddRequest{
    addrequest = function(listobj){
      // var listTemp = JSON.parse(localStorage.getItem("LIST"));
      
    //    var lists= listTemp ? listTemp:[];
    //    lists.push(listobj);
    var addRequestKey= [];
    addRequestKey = JSON.parse(localStorage.getItem("DONORDETAILS"));

    if(!addRequestKey)
    { 
        var addRequestArray=[listobj]
    
        localStorage.setItem("DONORDETAILS",JSON.stringify( addRequestArray)); 
    }
else{
    addRequestKey.push(listobj);

    localStorage.setItem("DONORDETAILS",JSON.stringify( addRequestKey)); 
}

    // localStorage.setItem("ADDREQUEST",JSON.stringify(lists));
       let result="success";
       return result;
        }
}
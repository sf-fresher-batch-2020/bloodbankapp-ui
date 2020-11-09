class loginservices {
    loginFunction = function (email, pass) {
        var usersTemp = JSON.parse(localStorage.getItem("USERS"));
        var users = usersTemp ? usersTemp : [];
        let exists = false;
        for (let obj of users) {
            if (obj.email == email && obj.pass == pass) {
                exists = true;
                localStorage.setItem("Logged_in_User", JSON.stringify(obj));
                break;
            }
        }

        return exists;
    }
}












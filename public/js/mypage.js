var tableData;

$.get(
        "/tableInfo/tableData",
        function (data) {
            tableData = data;
            console.log(JSON.stringify(data));
            for (var i = 0; i < data.length; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + data[i].first_name + "</td>");
                tr.append("<td>" + data[i].last_name + "</td>");
                $('table').append(tr);
            }
        }
);


function postUserLogIn(e) {

    $.ajax({
        type: "POST",
        url: "/userLogIn",
        data: $("#logInForm").serialize(),
        success: function (msg) {
            console.log("Post userLogIn successful");
            alert("Successful");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Post userLogIn unsuccessful " + textStatus + " " + errorThrown);
            alert("Failed");
        }
    });
    e.preventDefault();
}

$("#logInForm").submit(postUserLogIn);

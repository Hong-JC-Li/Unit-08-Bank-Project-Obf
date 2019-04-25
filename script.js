var name;
var name2=[];
var deposit2=[];
var number = -1;
var final = 0;
var final2 = 0;
$(".newDeposit").click(function() {
    if (($(".accountDeposit").val() === "" || $(".accountName").val() === "") || $(".accountDeposit").val() === "" && $(".accountName").val() === "") {
        alert("You need to fill out all sections!");
    } else {
        final = 0;
        var deposit = parseInt($(".accountDeposit").val());
        name = $(".accountName").val();
        deposit2.push(deposit);
        name2.push(name);
        deposit2.forEach(function(amounts) {
        final = final + (amounts);
        });
        $(".total").text("Total Amount Deposited: " + final);
        $(".number").text("Number of Transactions: " + name2.length);
        $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");

}});
$(".update").click(function() {
    alert("Thank you for your good Business! "+"The client now has " + final +" dollars. The last transaction was by " + name2[name2.length - 1] + ". He deposited " + deposit2[deposit2.length - 1] + " dollars.");
});
    
    
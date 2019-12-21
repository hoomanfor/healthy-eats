$(function() {
    $("[type='submit']").on("click", function(event) {
        event.preventDefault(); 
        const eat = $("[name='eat']").val().trim();
        const newEat = {
            "column": "name",
            "value": eat
        }
        if (eat === "") {
            $(".error").html("Please enter a food item.");
        } else {
            $.ajax({
                url: "/api/eats",
                type: "POST",
                data: newEat
            }).then(() => {
                console.log("food item added!")
                location.reload(); 
            })
        }
    })
});
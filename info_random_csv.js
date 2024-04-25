let data = $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  })
  .then(data => {
    console.log(data.results[0].name.first)
    document.getElementById("nombre").innerHTML = data.results[0].name.first+" "+data.results[0].name.last;
    document.getElementById("location").innerHTML = data.results[0].location.state+", "+data.results[0].location.country;
    document.getElementById("email").innerHTML = data.results[0].email;
    document.getElementById("cellphone").innerHTML = data.results[0].cell;
    document.getElementById("foto").src = data.results[0].picture.large
    let fondito = document.getElementById("foto").src = data.results[0].picture.large
          });



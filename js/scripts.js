function Ticket(movie, age, time){
  this.movie = movie;
  this.age = age;
  this.time = time;
}

Ticket.prototype.price = function(){
  var price = 10;
  if ((this.age <= 6 ) || (this.age>=65)){
    price *=.5;
  }
  if (this.time.includes('AM')){
    price *=.75;
  }
  if (this.movie === "old"){
    price*=.75;
  }else{
    //nothing
  }
  return price;

}

$(function(){

  $('form').submit(function(e){
    e.preventDefault();
    var userMovie = $('#movies').val();
    var userAge = $("#ageInput").val();
    var userTime = $('#times').val();
    var newTicket = new Ticket(userMovie,userAge,userTime);
    alert(newTicket.price());

  })


})

function saveEmail(){var a=$("#email").val();if(a){var b=new Firebase("https://burning-fire-8925.firebaseio.com"),c=b.child("emails");c.push({email:a,timestamp:Firebase.ServerValue.TIMESTAMP},function(){$("#request-invite-form").hide(100,function(){$("#thankyou").show(400)})})}}$(document).ready(function(){$("#thankyou").hide(),$("#request-invite-btn").click(function(){saveEmail()}),$("#drop-us-a-line").tooltip({trigger:"click",html:!0,container:".footer"})});
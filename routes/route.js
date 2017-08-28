exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='bangalore'){
       title="Bangalore";
       heading="Bangalore: Where IT is in the air";
    }
    else if(cityName==='delhi'){
       title="Delhi";
       heading="Delhi: National capital of India";
    }
    else if(cityName==='mumbai'){
       title="Mumbai";
       heading="Mumbai: Named as Alpha world city";
    }
    else if(cityName==='bihar'){
       title="Bihar";
       heading="Bihar: The place where Intelligence flouting in the Air";
    }
    else if(cityName==='kolkata'){
       title="Kolkata";
       heading="Kolkata: Best sweet";
       imageCount=6;
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }

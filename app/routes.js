module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello-world', {'message' : 'Hello world'});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });

            app.get('/eat-drink', function(req, res){
                        res.render('pip4/eat-drink' , {'assetPath' : assetPath});
    });



    app.post('/eat-drink-more-details', function(req,res){


         if(req.body["do-you-need-prompting"] == "Yes"){ doYouNeedPrompting = true }else{ doYouNeedPrompting = false }
         if(req.body["do-you-need-someone-to-cut"] == "Yes"){ doYouNeedSomeone = true }else{ doYouNeedSomeone = false }
         if(req.body["do-you-need-supervising"] == "Yes"){ doYouNeedSupervising = true }else{ doYouNeedSupervising = false }
         if(req.body["do-you-use-a-feeding"] == "Yes"){ doYouUseFeeding = true }else{ doYouUseFeeding = false }
         if(req.body["do-you-use-an-aid"] == "Yes"){ doYouNeedAid= true }else{ doYouNeedAid = false }




                        res.render('pip4/eat-drink-more' , {'assetPath' : assetPath,
                                                           'doYouNeedPrompting': doYouNeedPrompting,
                                                           'doYouNeedSomeone':doYouNeedSomeone,
                                                           'doYouNeedSupervising':doYouNeedSupervising,
                                                           'doYouUseFeeding': doYouUseFeeding,
                                                           'doYouNeedAid': doYouNeedAid
                                                           });

    });   
      
      
  }
};

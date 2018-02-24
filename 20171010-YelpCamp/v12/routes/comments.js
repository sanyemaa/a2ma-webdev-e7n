var express = require("express");
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

//Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err)
        }else{
               res.render("comments/new", {campground: campground});
        }
    })
});

//Comments Create
router.post("/", middleware.isLoggedIn, function(req, res){
    //look up campground using id
    Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       }else{
//           console.log(req.body.comment);
           //create new comment
           Comment.create(req.body.comment, function(err, comment){
               if(err){
                   req.flash("error", "Something went wrong with your comment. Please try again.");
                   console.log(err);
                   res.redirect("back");
               }else{
                   //add username and id to comment
                   comment.author.id = req.user._id;
                   comment.author.username = req.user.username;
                   //save comment
                   comment.save();
                   //connect new comment to campground
                   campground.comments.push(comment);
                   campground.save();
                   console.log(comment);
                   //redirect campground show page
                   req.flash("success", "You have successfully posted your comment!");                   
                   res.redirect('/campgrounds/' + campground._id);
               }
           });
       }
    });
});

//COMMENT EDIT ROUTE
router.get("/:comment_id/edit", middleware.isAuthorizedComment, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
            console.log("Error in the edit route.");
        }else{
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});            
        }
    });

});

//COMMENT UPDATE ROUTE
router.put("/:comment_id", middleware.isAuthorizedComment,function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//COMMENT DESTROY ROUTE
router.delete("/:comment_id", middleware.isAuthorizedComment, function(req, res){
    //findByIdAndRemove
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect("back");
        }else {
            res.flash("success", "Comment successfully deleted.")
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});




module.exports = router;

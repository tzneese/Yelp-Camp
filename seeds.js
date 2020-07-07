var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?"
    },
    {
        name: "Desert Mesa",
        image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?"
    },
    {
        name: "Canyon Floor",
        image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae aperiam, autem aliquam non harum aut nobis impedit illo omnis, deserunt minus ex optio quasi perspiciatis veniam aliquid, est porro?"
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground!");
                    //Add a few comments
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment!");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;
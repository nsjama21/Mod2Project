const { Router } = require("express")
const express = require("express")
const router = express.Router()
const Review = require("../models/reviews")









router.get("/", (req, res) => {
  res.json([
    {
      title: "X-Files", review: "I find it hard to comment on The X- Files because it simply transcends words. It's an intelligent masterpiece, an epos of beautifully complicated scenarios, plots and characters. Eruditely taking on the grayest of areas, confronting those things under your bed and inside your closet thus bringing new meaning to the fears brought on by conventions and the imprudent obstinacy of social norms. The script, the actors and the direction make the most unbelievable seem believable and the unfathomable- unfathomably real. So thought provoking that if you really let yourself dwell in its essence, it can change the way you see the world, if only just by believing in the conviction that The Truth Is Out There.", posterURL: "https://flxt.tmsimg.com/assets/p183870_b_v9_aw.jpg"
    },


    {
      title: "The Closer", review: "This series looks like a plain ol' cop drama from the outside but that couldn't be any further from the truth. Deputy Chief Brenda Lee Johnson is the head of a elite detective unit that solves homicides, now here are a few things you should probably know. First this chief has been trained how to interrogate by the C.I.A, secondly her entire squad is made up of detectives(that's right no rookies here), and of course her Husband is an F.B.I. Agent. Still need more? The way that this woman gets the job done is both masterful and incredible, on top of which she controls an entire unit full of men like a school teacher does in a classroom. This show is a must see, one of the few drama's where the female lead isn't a model and yet the plot is so good that it makes absolutely no difference at all. 10/10 for originality, solid acting, fantastic plot lines.", posterURL: "https://m.media-amazon.com/images/M/MV5BODg5MTc0MTg3OV5BMl5BanBnXkFtZTcwNTUwNjAzMQ@@._V1_.jpg"
    },




    {
      title: "Breaking Bad", review: "I have never watched a show that is as consistently genuine and engaging as Breaking Bad. This is undoubtedly one of the greatest shows ever, and it consistently improves as it progresses. The Journeys of Walter White and Jesse Pinkman are unforgettable.These are some of the best- written characters to ever come from a pen - hitting paper. My praises for the acting and cinematography are unending.Some of the shots are intricate works of art, and I was rarely distracted by the acting.The performances are excellent to the extent that it feels improper to refer to them as performances.", posterURL: "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_FMjpg_UX1000_.jpg"
    },




    { title: "Boardwalk Empire", review: "This show has to be one of my personal favourites, I would always recommend people to check out. In terms of the show itself, you've got an awesome cast of great actors, with some the most beautiful cinematography, and hands down the story is just fantastic. You've got historical true elements mixed of course with fictional aspects, more so on the fictional side but it's just amazing to see these actors play out some the most iconic historic mobsters, Stephen Graham as Al Capone is just amazing, one my top favourite actors to see on screen. And ultimately one the best endings to a show, with no spoilers the story comes full circle, with a satisfying end.", posterURL: "https://m.media-amazon.com/images/I/91pPlPbWyiL._SY445_.jpg" },



    {
      title: "Medium", review: "I haven't been this enthusiastic about a TV show for awhile. The actors are top notch and the stories interesting. In my opinion, the core of the show is not the cases the main character (Allison) investigates or even her psychic abilities. Rather, its how her abilities affect her relationships with others (especially her husband). So far my favorite episode has been.A Couple of Choices.but I can't explain why. I love how the husband and children are portrayed. I have a small crush on the husband (Joe) and the kids argue with each other just like normal kids. (I got a real kick hearing the eldest daughter tattle that the younger one hadn't brushed her teeth - rather she just got the toothbrush wet.) Allison is so down to earth that she is easy to related to. So few crime or science fiction shows effectively incorporate family drama.Medium is a refreshing change!", posterURL: "https://m.media-amazon.com/images/M/MV5BMTIyMTE3MTA2N15BMl5BanBnXkFtZTcwMjU3NTg1MQ@@._V1_FMjpg_UX1000_.jpg"
    },




    { title: "The Wire", review: "I don't even no where to begin to explain how much I love The Wire! It's a crime drama that takes place in Baltimore. It takes a gritty look into the lives of everyone from police officers to gang members to drug users to political figures, etc. The writing and acting for this amazing series is down right brilliant. All you have to do is read through the reviews to see how loved this show really is. The consistency of the greatness of this show throughout all five seasons is ridiculous. The gritty attention to detail makes this series feel so real. It's easily one of the best shows of all-time.", posterURL: "https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg" },





    { title: "Black Monday", review: "I have been waiting and waiting for more episodes. I don't want to wait the entire season. This show is an in-your-face fast-paced roller coaster ride of a good time. You never know what is going to happen next. Don Cheadle and Regina Hall are killing it so far and I can't wait to see what's going to happen with the algorithm. Showtime stop screwing around and give us weekly shows!", posterURL: "https://m.media-amazon.com/images/M/MV5BYjJhOGFhZWYtYzdlZS00MjA0LTlkZTEtMmY1N2JkMjRjZDE2XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_FMjpg_UX1000_.jpg" },




    { title: "House of Lies", review: "This is a fantastic show. It's caustic but it also has heart. The cast is excellent - Don Cheadle is amazing and the rest of the cast plays off him really well. DC is able to project so much just with a look or a gesture at times. The show is also refreshingly NOT dumbed down. They don't feel the need to explain everything - the viewer is treated as a reasonably intelligent person who is able to put two and two together. Hope the show never loses that! If you are new to it I suggest you start with the excellent pilot and watch through the series sequentially. It really is a serialized dramedy in my opinion, so you get to watch the plots and relationships evolve over time. This has become one of my favourite shows of all time.", posterURL: "https://flxt.tmsimg.com/assets/p8981573_b_v10_aa.jpg" },




    { title: "Friends", review: "Friends is one of the best and most popular sitcoms in the history of television. I have to say that I still love it as much now than I did when it was originally on 15-20 years ago. Its about the lives of three young men (Matt LeBlanc, Matthew Perry & David Schwimmer) and three young women (Jennifer Aniston, Courtney Cox & Lisa Kidrow) that are all best friends and follows their lives in New York City. It's just one of those all-time great sitcoms that is just as funny watching reruns as it was watching for the first time. Not many shows are just as funny today as they were 15-20 years ago but Friends is absolutely one of those shows. All 6 characters are almost equally as funny. This truly is one of the best comedies that has ever been made!", posterURL: "https://flxt.tmsimg.com/assets/p183931_b_v8_ac.jpg" },




    { title: "Sherlock", review: "To my surprise they absolutely nailed it. Cumberbatch is a fantastic choice for Sherlock Holmes-he is physically right (he fits the traditional reading of the character) and he is a damn good actor. Martin Freeman, about whom I wasn't sure at first, is an excellent foil for Holmes without being the dumb sidekick that Dr Watson has often been. I thought that this series would not work, particularly after Robert Downey's interesting take on Conan Doyle's characterisation. I have been proved so wrong-it moved along at a good pace and held the attention brilliantly. My wife started by saying she didn't like it but by the end of the episode she was as enthralled as I. We are both looking forward to the rest of the series, if it is as entertaining as the first story. I was disappointed to read some reviews here that did not love it. Methinks they are too jaded to enjoy anything.", posterURL: "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_FMjpg_UX1000_.jpg" },





    {
      title: "House", review: "Dr. Gregory House (Hugh Laurie) revels in solving the hardest of medical riddles. He chooses his team which changes over the years. Dr. Eric Foreman (Omar Epps), Dr. Robert Chase (Jesse Spencer), and Dr. Allison Cameron (Jennifer Morrison) are the three original underlings. Dr. James Wilson (Robert Sean Leonard) is his only true friend. Dr. Lisa Cuddy (Lisa Edelstein) starts as his boss. Hugh is a British actor playing an American doctor who has a badly damaged leg.He's a grumpy caustic know-it-all. Too bad for everybody else, he is almost always right. He is inevitably the smartest man in the room. Oh did I mention that he's a drug addict.It's master acting class from Hugh. It's physical.It's accent work. It's character work.It's a great character.", posterURL: "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR92,0,630,1200_AL_.jpg"
    },




    { title: "Justified", review: "I don't even know how to describe how much I loved this show. Justified is easily one of my favorite shows of all-time! The show is about a wild-west like U. S. Marshall Deputy named Raylan Givens (Timothy Olyphant) who will go to any lengths to bring justice to the criminals he's hunting. This all takes place in his hometown in Kentucky. Olyphant was absolutely perfect in this as Raylan Givens. The rest of the cast is great too, especially the incredibly underrated Walton Goggins as outlaw Boyd Crowder. I literally loved every episodes of every season. I heard they're bringing it back after in 2023 for another season so I can't wait!", posterURL: "https://m.media-amazon.com/images/M/MV5BNzRjNGVhNDMtODI0ZS00NGNhLWE2MTctMGRkMzdhZmQ1YWY4XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg" },




    { title: "Mad Men", review: "Mad Men was such a terrific show that is absolutely just as good as everyone says it is. I never watched it when it was originally on but after hearing so many great things about it I finally gave it a chance and streamed it. I was blown away but how much I loved it. There's a reason it won so many awards when it was on...because it's terrific! The acting, writing, directing, production, attention to detail, etc are all among the best in television history! I can see why some people may not like it because it does starts off a little slow but give it a few episodes because it absolutely pays off and then you won't want to stop watching it until you binge the entire series!", posterURL: "https://m.media-amazon.com/images/M/MV5BODc1MDcwMDk2Nl5BMl5BanBnXkFtZTcwMDQyNTI3Mg@@._V1_.jpg" },




    { title: "Orange Is The New Black", review: "Orange is the New Black was one of Netflixs first breakout shows. It really is every bit as good as everyone says and is definitely worth watching. It's about the lives of inmates and the guards of a women prison. It starts with a woman who is sent to prison for transporting drug money to her ex-girlfriend. She's a good person who doesn't deserve to be in jail but still ends up there. I was entertained throughout the entire series. It covers issues that are relevant today and shines a light on even more problems that people should know about. Having said that, I think Wentworth is the better show about a women's prison. This is a show that is best watched binge watching it. If you haven't seen this yet do yourself a favor and go check it out!", posterURL: "https://m.media-amazon.com/images/M/MV5BYjYyM2FmMmMtZDgyZi00NGU3LWI3NzktODllZDY0YzQyNzgyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" },




    {
      title: "Veronica Mars", review: "Veronica Mars (Kristen Bell) was previously a popular girl in school next to her rich best friend Lilly Kane (Amanda Seyfried). When Lilly was murdered, her father Sheriff Keith (Enrico Colantoni) arrested Lilly's powerful father, but later someone else confessed. They ran Keith out of office and Veronica became a pariah. Now she investigates the deep dark secrets of her school divided between the ultra-rich and the poor minorities. Rob Thomas has created a high school Nancy Drew with an edge.She's as smart as Sherlock Holmes. Only she's a girl trying to survive the High School world.It works as both a murder mystery, and a high school teen drama.This is Kristen Bell's break out role. She really gives a funny spunky likable compelling performance. This is a teen drama for smart people.", posterURL: "https://m.media-amazon.com/images/M/MV5BMTQ4MDc0Mjg4OV5BMl5BanBnXkFtZTgwODk3NjYyMTE@._V1_FMjpg_UX1000_.jpg"
    },




    { title: "Frasier", review: "Normally spin-offs of any kind usually leads to huge disappointment even if the original show wasn't that good. But i'd go as far to say not only is Frasier great, I would say it's better than Cheers and Cheers was a great show itself. As cliche as the comment is, it is the most intelligent sitcom i've ever stumbled upon. It fills me with joy that this show emerged in the early 90s, I don't think the brand of humour would still be as accessible for the mainstream audience of today. Even though part of the brilliance is that you really don't have to be cultured nor talked down to, to understand it. That's largely down to such a solid cast and writers, their professional lives might not be relatable but the characters and what they experience through the series is very relatable. If all else fails i'd watch it just to listen to Kelsey Grammer, he could sing about salad and eggs and i'd still be drawn in by that mans voice.", posterURL: "https://m.media-amazon.com/images/M/MV5BNzViNjNkZDktMTE5Yi00NjRmLWEyYTYtZjQ5ZWM5OThlMzJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg" },




    { title: "Better Caul Saul", review: "Someone is responsible for making this such an outstanding show, year after year. The intelligence in dialogue, empathy for characters, twists and expectations are genius. Breaking bad, The X Files are 2 other badges of brilliance. We are privileged to be living in this time as we might have been if living during Shakespeare. This may seem over the top but the scores are on the board, Vince Gilligan. Please correct or remove if I am wrong!", posterURL: "https://m.media-amazon.com/images/M/MV5BODY2ODU0MTY5Nl5BMl5BanBnXkFtZTgwNjQ0OTc2MTI@._V1_FMjpg_UX1000_.jpg" },



    { title: "Friday Night Lights", review: "Friday Night Lights is so underrated it's ridiculous! It is an absolute amazing show! Even though the football story line is great, it is so much more than that. If you read the reviews you'll see 90% of them are 9's & 10's and most have one thing in common and that's that they didn't give it a chance until years after it went off the air. Once you start watching you can't stop!", posterURL: "https://m.media-amazon.com/images/M/MV5BMTcxMDI5MTM4Ml5BMl5BanBnXkFtZTcwNjA4MDcyMQ@@._V1_FMjpg_UX1000_.jpg" },



    { title: "Veep", review: "Having seen all the original aversion in the UK (The Thick Of it) and adoring it... I didn't think it could be topped in sheer poetry of swear words and toe curling insults. Always close to the bone and often vulgar but in the most intelligent and hysterically funny ways - this is absolutely one to binge and turn it up... you will miss some corkers from the deafening laughter in the room if you dont. Not for the faint of heart or easily offended but utterly wonderful right up to the very last episode. It seemed to cram in quite literally every filthy joke and disgraceful insult they'd ever written and not got the chance to use so as not to waste any. And thank God they did!!! No spoilers but just watch it all it's a breath of fresh air in this oh so vanilla TV landscape.", posterURL: "https://m.media-amazon.com/images/M/MV5BMjE2NDM0OTEwMl5BMl5BanBnXkFtZTgwNzgwNDI0ODE@._V1_FMjpg_UX1000_.jpg" },



    { title: "The Killing", review: "I love a good whodunit series and this one was excellent; kept me guessing at every twist and turn and there was a lot of both. This drama pulled me in and didn't let go until the last scene which had me holding my breath. Story lines were gritty and not over-the-top. The acting in this thing was old-school good like when directors gave a damn about their craft. The two lead characters were extremely well developed; I always knew who they were and Kinnaman and Enos played off of each other like two virtuosos, stuff was really magic. Seasons 3 and 4 were the best two for my money but seasons 1 and 2 made me stick around for the latter two. I fancy myself a film snob, I'll give films 15 or 20 minutes before I'm bored and surfing for something else. If I watch an entire episode maybe there's something there, I stuck around for all 4 seasons and had withdrawl symptoms when it ended. I can almost promise you that you will never guess whodunit.", posterURL: "https://m.media-amazon.com/images/M/MV5BMTQ5MTUxMzU3Ml5BMl5BanBnXkFtZTgwMDU3NDYxMjE@._V1_.jpg" }



  ]);

})


//INDEX
router.get("/", (req, res) => {
  // Query model to return all reviews
  Review.find({}, (error, allReviews) => {
    if (!error) {
      res.status(200).render("Index", {
        reviews: allReviews
      })
    } else {
      res.status(400).send(error)
    }
  })
})



//NEW
router.get("/new", (req, res) => {
  res.render("New")
})

//DELETE
router.delete("/:id", (req, res) => {
  Review.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect("/api/reviews")
  })
})

//UPDATE
router.put("/:id", (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body, (err, updatedReview) => {
    if (!err) {
      res.status(200).redirect(`/api/reviews/${req.params.id}`)
    } else {
      res.status(400).send(err)
    }
  })
})

// CREATE
router.post("/", (req, res) => {

  // This does the same thing as the if statement above but with a one line ternary
  //req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

  // Create 1st arg: the actual object we want to insert inside our database
  // Callback 1st arg: error
  // Callback 2nd arg: the newly created object
  Review.create(req.body, (error, createdReview) => {
    if (!error) {
      // redirects after creating fruit, to the Index page
      res.status(200).redirect("/api/reviews")
    } else {
      res.status(400).send(error)
    }
  })
})

// EDIT
router.get("/:id/edit", (req, res) => {
  Review.findById(req.params.id, (err, foundReview) => {
    if (!err) {
      res.status(200).render("Edit", { review: foundReview })
    } else {
      res.status(400).send({ msg: err.message })
    }
  })
})


//SHOW
router.get("/:id", (req, res) => {
  // findById 1st arg: the id of the fruit we want to find 
  // Callback 1st arg: error
  // Callback 2nd arg: the found fruit object
  Review.findById(req.params.id, (error, foundReview) => {
    if (!error) {
      res
        .status(200)
        .render("Show", {
          review: foundReview
        })
    } else {
      res
        .status(400)
        .send(error)
    }
  })
})


module.exports = router
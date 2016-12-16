// $(document).ready(function() {
//     $('#fullpage').fullpage();
// });

// Testimonials from theshelterpetproject.org
var dogStories = [
  {
    id: "dog1",
    dogName: "Toast",
    humanName: "Katie Sturino",
    shelterName: "Dog Habitat Rescue",
    url:"http://theshelterpetproject.org/wp-content/uploads/Toast-9794_HD_flat_RGB_01SIMPLE.jpg",
    story:"Toast is a total diva - she always does whatever she wants, including sleeping - and snoring at inopportune times (like when I'm on a conference call!). But, she’s an epic snuggler, and so much more. Every day, she does a million little things that make me laugh, and I can't imagine life without her. #StartAStoryAdopt"
  },
  {
    id: "dog2",
    dogName: "Scooter",
    humanName: "Kirstin Burdet",
    shelterName: "Tri State Yorkie & Small Breed Rescue",
    url:"http://theshelterpetproject.org/wp-content/uploads/formidable/12/Scooter-618x618.jpg",
    story:"Scooter was adopted in 2014; he is a puppy mill survivor. Despite his tough past, he is the sweetest dog and wants nothing more than a big hug. We are committed to giving him the love and care he deserves and there is no shortage of hugs in his new life. He inspired us to begin volunteering, fostering, and raising awareness about puppy mills and the horrors that these dogs endure."
  },
  {
    id: "dog3",
    dogName: "O'Keefe",
    humanName: "Andrea Hall",
    shelterName: "Brazoria County SPCA",
    url:"http://theshelterpetproject.org/wp-content/uploads/image-6-618x618.jpg",
    story:"After two months and no adoption, O'Keefe was placed on sale for $25. He drew our attention because he kept his cage clean and preferred to walk on two legs. What makes him special is that after gaining weight, and eradicating fleas he became a unique amazing dog that we would have paid much more for. There is no other dog like this, our life is forever changed because we saw past a 'mutt', and saw something special.",
  },
  {
    id: "dog4",
    dogName: "Shasta",
    humanName: "Stacey Lundy",
    shelterName: "Sacramento Independent Animal Rescuers",
    url:"http://theshelterpetproject.org/wp-content/uploads/P1010113_0001-2-618x464.jpg",
    story:"Shasta was at a Shasta County shelter for 3 weeks and her time was up - she was scheduled for euthanasia the next day. She was a shelter favorite, so they networked her like crazy! Finally a rescue agreed to take her in, and we met her the next day at a boarding facility. She was the most beautiful dog, and so very calm and sweet. We agreed to adopt her, and we couldnt be happier. She is truly the best -behaved dog ever, and we were SO lucky to find her. I just cant imagine my life with without her!"
  },
];
printDogStory(dogStories);

// document.getElementById('dog1Btn').addEventListener('click', function(event){
//   printDogStory(dogStories);
// });

// Print all Testimonials

function printDogStory(dogInfo){
  for (var i = 0; i < dogInfo.length; i++) {
    var dog = dogInfo[i];

    var template = document.querySelector("#dogTemplate");

    template.content.querySelector('.dogName').innerHTML = dog.dogName;
    template.content.querySelector('.humanName').innerHTML = dog.humanName;
    template.content.querySelector('.shelterName').innerHTML = dog.shelterName;
    template.content.querySelector('.story').innerHTML = dog.story;

    template.content.querySelector('.dogStory').dataset.dogid = dogInfo[i].id;
    console.log(template.content.querySelector('.dogStory').dataset);

    var clone = document.importNode(template.content, true);
    document.querySelector('.dogInfo').appendChild(clone);
  }
}

// Show only testimonial that was clicked, hide others
var dogBtns = document.querySelectorAll('#testimonials button');

dogBtns.forEach(function(btn){
  btn.addEventListener('click', function(event){
    var selectedDog = btn.dataset.dogid;
    var selectedStory = document.querySelector('.dogStory[data-dogid="' + selectedDog + '"]');

    document.querySelectorAll('.dogStory').forEach(function(el){
      el.classList.remove('shown');
    });
    selectedStory.classList.add('shown');

    console.log(selectedStory);
  });
});

// Highlight img of selected dog
var dogImg = document.querySelectorAll('#testimonials img');

dogImg.forEach(function(btn){
  btn.addEventListener('click', function(event){
    dogImg.forEach(function(el){
      el.classList.remove('dogClicked');
    });
    btn.classList.add('dogClicked');
  });
});

// Form to submit own testimonial
var userMsg;
var messageList = [];

document.getElementById('submitBtn').addEventListener('click', function(){
  userMsg = document.getElementById('userTestimonial').value;
  messageList.push(userMsg);

  document.getElementById('userTestimonial').value = "";

  var node = document.createElement('p');
  var textnode = document.createTextNode(userMsg);
  node.appendChild(textnode);
  document.getElementById("testimonialLog").appendChild(node);
});

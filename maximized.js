
       $(document).ready(function(){

          var arrayTop = new Array();
            arrayTop[0] = "top7";
            arrayTop[1] = "top1";
            arrayTop[2] = "top3";
            arrayTop[3] = "top5";
            arrayTop[4] = "top4";
            arrayTop[5] = "top6";

         var arrayTopStory = new Array();
           arrayTopStory[0] =  'Xiao Wang, a Chinese student in economical business in The Netherlands decided to try his luck at the big TV show Holland’s Got Talent. As he went on stage, he was immediately discriminated against due to his Chinese heritage, ridiculing his name at the very start. The abuse continues throughout his whole performance, with one of the judges constantly blurting out racial slurs and finding it hilarious himself. <a href="https://www.youtube.com/watch?v=3wzEPgpSRm4" >Have a look and see for yourself</a> - how would you react if you were being treated this way when applying for a new job, let alone in front of hundreds of thousands of people watching you.';
           arrayTopStory[1] = '"I was the food editor at the Seattle P-I from 2000-2007. During that time, I wrote about every kind of cuisine, local farmers, regional foodways, everyday foods, high-end foods – a good mix that hopefully offered a little something for everyone. One day, our editors received a letter from a reader who suggested that instead of hiring a “fortune cookie” to cover the food scene that the P-I should have hired an American. Having grown up in Missouri, I assumed liberal, Pac-Rim-influenced Seattle would be a “safe” zone for me. Alas, the bubble is permeable. But my colleagues had my back. Our publisher sent this response: “Dear Sir: We are in receipt of your letter. We did hire an American.”" <br/>–  Hsiao-Ching Chou';
           arrayTopStory[2] = 'Jess Blakeney, a 19-year-old from Brighton, says she was fired from her job for having dyed hair, despite having worked there for over a year, and being hired while having dyed hair. Blakeney said that she felt “incredibly underappreciated,” and that “having spent over a year being consistently reliable and committed to my job, it was a huge blow”.';
           arrayTopStory[3] = 'A schoolgirl was left “devastated” after her boss gave her a written warning about her acne. Emily McNamara, 15, had just started working at a coffee shop when she was sent a Facebook message from her new employer.<br />Elicha Scott, from Imposta Coffee in Accrington, Lancs, warned her about “unacceptable marks” on her neck and said she would be sacked “on the spot” if they were visible again.<br />Emily – who has been bullied over her acne at school – was left heartbroken when she realised the message was genuine. She wrote back quitting her job.';
           arrayTopStory[4] = 'The divisive hairstyle that is the man bun. One guy says he was fired for his. Sid Ouared said he was terminated from British Airways because of his man bun. <br />His supervisors gave him three choices; cut his hair, put it in a turban or wear dreadlocks. Ouared says he was fired based on discrimination and the claim that his style looked like “a girl’s hair".';
           arrayTopStory[5] = 'Mr Cheng’s skin started losing pigment 14 years ago in his teens, leaving uneven pale patches around his eyes and body.<br />At first, the loss of skin pigment did not bother him. But as the disease progressed, the unwanted stares in public and the subsequent roadblocks in his career became increasingly demoralising.<br />“In the frontline jobs that I applied for, I noticed (the interviewers) specifically asked what is wrong with my skin.<br />"....If the clients are not happy with how I look, then they would not give me the opportunity even though I have the capability,” he said.';

         // var path = path || 'img/';
         var path = path || 'http://dev.sofielson.com/ixd/img/';
         var numTop = Math.floor( Math.random() * arrayTop.length );
         var imgTop = arrayTop[ numTop ];
         var topStoryNum = arrayTop[numTop];
         var topStoryStr = '<p>' + arrayTopStory[numTop] + '</p>';


         // MIDDLE PART
          var arrayMiddle = new Array();
            arrayMiddle[0] = "middle4";
            arrayMiddle[1] = "middle4";
            arrayMiddle[2] = "middle2";
            arrayMiddle[3] = "middle3";
            arrayMiddle[4] = "middle3";
            arrayMiddle[5] = "middle1";
            arrayMiddle[6] = "middle6";
            arrayMiddle[7] = "middle5";

          var arrayMiddleStory = new Array();
            arrayMiddleStory[0] = '"Teresa King had been working for a nail polish manufacturer for a few years when her boss told her she was "too fat and ugly" to represent the brand on a business trip abroad. Three years into the job, the company’s distributor from South Africa invited Teresa to attend a big beauty show in Africa. Her boss thought it was a great idea — Teresa could go and educate the nail techs on how to use the products as well as do demos at the show. “I felt very confident that I had enough experience, especially with the company’s products,” Teresa says. “I was very excited about it, and the distributor was very excited about it. I got all the necessary shots, made sure my passport was up-to-date, and bought new clothes.”';
            arrayMiddleStory[1] = 'As it got closer to the date, Teresa pushed her boss to make the necessary travel arrangements. He emailed the main office to get approval, and a couple of days later, he got a phone call. Teresa remembers thinking something was off because her boss was being so quiet on the phone. “It was so surreal," she says. "I was standing by the fax machine. He hung up, and he turned to me — he just kind of blurted it out — he said, ‘That was the main office. They discussed it, and they said you’re too fat and too ugly to represent the company at the show in South Africa.’" “My heart dropped into my stomach," Teresa continues. "I was so shocked. He immediately started tripping over his words. He said, ‘Maybe the words were more like, unattractive and overweight’ — trying to soften the blow. But he wasn’t apologetic or anything. I wanted to hysterically cry my eyes out, but I didn’t want to show emotion in front of him. I didn’t want him to go back and tell them I had an emotional response to their decision. So I just sucked it up and said okay and went back to my desk.”';
            arrayMiddleStory[2] = "My old boss was against body modifications because of her religious beliefs. I was constantly harassed about my piercings and tattoos. I had hours cut after getting my tattoos, even though they aren't visible. I have both feet done as well, but always wear socks and shoes. I work in childcare and was told that even out in public I had to keep appearances up, so to keep covered, because I might see the children I looked after outside hours. In my uniform you can't see my tattoos. As I keep it professional but I've been told that I'm unapproachable and scary with tattoos and piercings and that could lose potential clients to the business.";
            arrayMiddleStory[3] = 'A lesbian working in a NSW government department described to me having obscene emails sent to her, including sexualised cartoons of lesbians, pornography and at one point a sex toy was left on her desk. When she spoke with her supervisor she received more harassment and left her place of employment.<br />According to a 2016 study regarding sexual orientation- or gender-identity-based discrimination, 52.8 percent reported that discrimination negatively impacted their work environment.';
            arrayMiddleStory[4] = 'Some of the other teachers were aware that I am a lesbian. One of my superiors advised me that if any of the pupils found out I am a lesbian, I would be sacked. I knew that the school had the power to do so, and it made me feel very uncomfortable and insecure. I had to be very careful about everything I said, making sure I never used the word ‘we’ when describing any activity or event in my life. I was forced to be constantly on my guard, in case I inadvertently implied that I had a partner or that I was in a same-sex relationship. This experience of discrimination continues to affect me today. Although I relate very well with young people, I have not worked with children since that time. This has restricted my employment options and stopped me from pursuing work in areas that I love. This discrimination also affects the community, because young people miss out on the positive qualities and input that I have to offer. Young people also get inaccurate and destructive messages when it is implied that all people are heterosexual, or when those who are not are silenced, as I was. According to a 2016 study regarding sexual orientation- or gender-identity-based discrimination, 52.8 percent reported that discrimination negatively impacted their work environment.';
            arrayMiddleStory[5] = 'After nearly a decade of dedicated service, an Albuquerque man was fired from his job at a US supermarket for wearing fake nails to work. "I went into work and everything was fine, and then two hours into my shift, I got called into the office saying I\'m terminated because of my nails," explained Dominic Lopez, who has been wearing fake nails for the past three years without any issues. Everything changed, however, when he went into work wearing bright pink nail polish. His employers asked him to change the colour and shorten the tips, but despite doing so for his shift the following day, he was let go.<br />One of the managers said she knew that if Dominic returned to the store with fake nails again, he would be let go because it was against policy. When asked if that policy applied to both genders, the manager said, "It\'s because he\'s a guy."<br />While we would understand if he was let go because he was breaking established rules, it seems that Dominic (who plans to fight the firing) was just expressing himself — something no one had an issue with for three years. And considering he was coming up on his 10-year anniversary with the company, he was a loyal, hardworking employee.';
            arrayMiddleStory[6] = 'A pregnant Washington woman says she was fired from her job because she is pregnant. Kameisha Denton, who lives in Marysville, was told by text message on Tuesday night that she had lost her position at a Jersey Mike\'s restaurant.<br />The 19-year-old published a screenshot of the text message exchange on her Facebook account. The manager, who is saved in her phone as "Marcos," replied with a termination message. "Hello I am sorry to inform you but it\'s not going to workout with Jersey Mikes [sic]," Marcos wrote. "It\'s not a good time for us to have someone who is leaving for maternity leave in several months anyway. You also failed to tell me this during our interview. Good luck to."<br />Denton replied: "This is extremely unprofessional. You told me it was fine to be gone for 4 weeks and you guys have plenty of workers to last you until I get back. I feel lied to and betrayed. I hope you know I will be letting corporate know about this and I will not turn in my stuff because this is so unfair."<br />Marcos\' reply was simply: "Have a great day."<br />The store\'s owner Tim Trieb said the manager has since resigned from his position. Trieb attempted to give Denton her job back and apologized, but she declined the offer. "I told him I wasn\'t interested," she said. "Just because, I feel like that\'s just a way for me to hush with the situation, and it\'s wrong. You don\'t do that to somebody when they\'re willing to work to support their baby. I\'m capable of. ';
            arrayMiddleStory[7] = 'Louise, a manager at a telecom company in England, believes her career opportunities were severely restricted by her weight. “I joined a new company and was very overweight, wearing a size 24. I was very good at my job, but found it difficult just to get invites to meetings, let alone extra work opportunities on projects. I wasn’t meeting customers; I was very much hidden in the background. At the time, I didn’t realise why that was. I thought I just needed to build my network.”<br />Then Louise started losing weight, down to a size 12. Suddenly, she found she got more opportunities at work: “Within 12 months of losing weight, I’d gone from managing six people to managing 100 people. I was in front of the more senior board members, whereas I didn’t have access to them before. It was a lift in my career.”<br />But she didn’t give any thought to the reason until a male colleague told her that, as a “fat bird”, she hadn’t been management material. “In his stupidly honest candour, he said at that time I wasn’t suitable for putting in front of customers. He confirmed that being fat was holding me back at work. That’s when I realised it is actually all about looks. I feel that’s really sad.”';

          var numMiddle = Math.floor( Math.random() * arrayMiddle.length );
          var imgMiddle = arrayMiddle[ numMiddle ];
          var middleStoryNum = arrayMiddle[numMiddle];
          var middleStoryStr = '<p>' + arrayMiddleStory[numMiddle] + '</p>';

          // BOTTOM PART
           var arrayBottom = new Array();
             arrayBottom[0] = "bottom0";
             arrayBottom[1] = "bottom2";
             arrayBottom[2] = "bottom2";
             arrayBottom[3] = "bottom1";
             arrayBottom[4] = "bottom4";
             arrayBottom[5] = "bottom6";
             arrayBottom[6] = "bottom5";


           var arrayBottomStory = new Array();
             arrayBottomStory[0] = 'Trish experianced age discrimination where she had been working at for years. One day her manager told her he wished she would "hurry up and retire", because he though Trish was too old and that there were too many women in the office. "I couldn’t believe he said it; it made me feel so uncomfortable, like he was mocking my age. It also made me feel like the work I did and the contribution I made to our office wasn’t valued at all." She immediatly told one of her colleagues that suggested to contact the Comission. Which she did. She expressed how it made her feel and her manager agreed to pay her financial compsensation.<br />Age discrimination is against the law in all stages of employment, including recruitment, returning to work after injury or illness, dismissal and retrenchment. Age discrimination can happens to people of all ages, whether you are young or old.';
             arrayBottomStory[1] = 'A 24 year old woman named Lucy Thorpe, from Derbyshire, applied to hundreds of office positions over a long period of time, and is now suffering from anxiety after being rejected time after time. She said, "I\'m disabled and have been rejected for more than 500 jobs in 18 months." Research reveals there are one million unemployed disabled people in the UK who want to work, according to the Office of National Statistics. At one interview she was asked why she didn\'t "just stay on benefits". Lucy is suffering from Ehlers-Danlos Syndrome that makes her joints very loose and prone to dislocation. "It was the second they saw the chair, or I declared I had a disability, that they would say \'we’ve found a better candidate\'. It was always the same loophole, she said. Lucy has been forced to drag herself up stairs and even get out of it just to get to an interview. "As soon as he saw the chair and realised the building wasn’t accessible, he wasn’t interested."';
             arrayBottomStory[2] = 'Holly Girven, 23, had her job interview cancelled when a law firm found out she used a wheelchair. <br />Holly asked the company about possibly working remotely and got turned down. She then asked about wheelchair access to their building, and suddeny her online interview was cancelled. She described her experiance as \'upsetting\' and that she is speaking out to raise awareness about the issue of wheelchair access in the workplace. "When I spoke to people about it a lot of people were really shocked that that still happens," she said. "But then speaking to other wheelchair users it\'s not a completely uncommon experience."';
             arrayBottomStory[3] = 'Jo Perkins, 38, was fired from her job when it was discovered that she had a butterfly tattoo on her foot - which she already had when she was hired.<br />A few months in, the company applied a "no tattoos on show" rule, because they thought it didn\'t comply with their professional image. “The only way to cover it would be to wear a sock. I’m a businesswoman and I wear smart dresses to work, so that would look stupid. I suggested covering it with a sticking plaster, but thought that would look unprofessional and draw attention to it," Jo explained.<br />The entire situatuon took a turn when she showed up for work only to have her contract terminated and being escorted from the building. Jo is now considering taking legal action on the ground of discrimination.<br />She said, “I’ve worked for many high-level companies in my time. But I have never heard anything as ridiculous as this."';
             arrayBottomStory[4] = 'Tristan Broussard, a 21-year-old transgender man filed a federal lawsuit against his former employer after being fired for being transgender and refusing to wear "women\'s clothes" to work after he explained to the supervisor he was trans when she asked why his gender was listed as "female" on his driver\'s license.<br />Only a week after he started, Tristian was called into the company vice president\'s office where he was going to be welcomed with the words: "If you can comply that you\'re female and you choose to dress as a female, then you can continue to work for us." When Tristan then refused to sign the document stating that his "preference to act and dress as male" was not "in compliance with company policies," he was fired. His suit claims that he faced sex discrimination under Title VII of the Civil Rights Act of 1964. In December, the Department of Justice clarified that employer discrimination against gender identity is, indeed, a form of "sex discrimination" prohibited by Title VII.';
             arrayBottomStory[5] = 'Roy Lester, 61 years old and now former life guard at New York\'s Jones Beach is suing the state for age discrimination after being released from his position. Roy refused to wear a Speedo for the annual 100-yard swim test wearing either \'boxer, briefs, or board shorts.\'<br />"Basically, the state\'s been trying to get rid of the older guys. They really don\'t like older lifeguards," he told ABC News.<br />Roy has more than 40 years of experience and has worked in the same place for decades with his normal swimwear. "Older people... prefer a more modest swimsuit and thank goodness they do," he claimed. "There\'s a thing called aging and there\'s a thing called aging gracefully."<br />He filed two lawsuits. Both were dismissed on technical grounds in 2008 and 2009, but now an appellate court has reinstated Lester\'s claim. His case could go to trial later this year or next year in New York\'s Nassau County.';
             arrayBottomStory[6] = 'A 21 year old young woman - working with event and festivals - was met by her boss one day who asked to talk to her. In another room her boss demanded the woman to remove all hair from her legs for work, calling it a "hygiene" issue.<br />She originally wrote about her experiance on Reddit and there her story quickly took off.<br />The 21 year old wrote how she stood there in shock as her boss contined saying how a few people had complained she didn\'t shave her legs, and that she was going against company policy by not being "hygenic" enough.<br />After their talk she took the issue back to her manager and decided to ask him the same question: "Have you shaved your legs?" He stayed quiet.<br />The Reddit writer how she stood up and said; "If we were gonna keep talking about this, I’d prefer HR to be there and he (manager) just told me that we didn’t need to discuss it any further".';

           var numBottom = Math.floor( Math.random() * arrayBottom.length );
           var imgBottom = arrayBottom[ numBottom ];
           var bottomStoryNum = arrayBottom[numBottom];
           var bottomStoryStr = '<p>' + arrayBottomStory[numBottom] + '</p>';


         // GENERATE FUNCTION

         $('#generate').click(function(e){
            e.preventDefault();

            $('#generate').css({'visibility':'hidden', 'height': '0'});
            $('.refresh-page').css({'display':'block'});

           $('.bhuman-top').html('<img class="bhuman-part" src="' + path + imgTop + '.png" alt = "">');
           $('.bhuman-top').delay(800).animate({'right': '240'});
           $('.bhuman-top-storybox').html(topStoryStr);
           $('.bhuman-top-storybox').delay(900).animate({
              // left: '-280px',
              'opacity':'1'
            });

           $('.bhuman-middle').html('<img class="bhuman-part" src="' + path + imgMiddle + '.png" alt = "">');
           $('.bhuman-middle').delay(1000).animate({'position':'absolute','right': '240px'});
           $('.bhuman-middle-storybox').html(middleStoryStr);
           $('.bhuman-middle-storybox').delay(1100).animate({
             // left: '-280px',
             'opacity':'1'
            });

           $('.bhuman-bottom').html('<img class="bhuman-part" src="' + path + imgBottom + '.png" alt = "">');
           $('.bhuman-bottom').delay(1200).animate({'position':'absolute','right': '240px'});
           $('.bhuman-bottom-storybox').html(bottomStoryStr);
           $('.bhuman-bottom-storybox').delay(1300).animate({
              // left: '-280px',
              'opacity':'1'
            });
            // $('.body-flex-column').delay(1500).animate({'float':'none'});

         });

        // MOBILE VERSION

        $('#generateMobile').click(function(e){
          e.preventDefault();

          $('#generateMobile').css({'visibility':'hidden', 'height': '0'});
          $('.refresh-page').css({'display':'block'});

          $('.bhuman-top').html('<img class="bhuman-part" src="' + path + imgTop + '.png" alt = "">');
          $('.bhuman-top').delay(800).animate({'right': '125px'});
          $('.bhuman-top-storybox').html(topStoryStr);
          $('.bhuman-top-storybox').delay(900).animate({
            // left: '-95px',
            opacity:'1',
            // width: '320px'
           });

          $('.bhuman-middle').html('<img class="bhuman-part" src="' + path + imgMiddle + '.png" alt = "">');
          $('.bhuman-middle').delay(1000).animate({'right': '125px'});
          $('.bhuman-middle').delay(1400).animate({'margin-top': '190px'});
          $('.bhuman-middle-storybox').html(middleStoryStr);
          $('.bhuman-middle-storybox').delay(1100).animate({
            // left: '-95px',
            opacity:'1',
            // width: '320px',
            // 'margin-top' : '210px'
           });

          $('.bhuman-bottom').html('<img class="bhuman-part" src="' + path + imgBottom + '.png" alt = "">');
          $('.bhuman-bottom').delay(1200).animate({'right': '125px'});
          $('.bhuman-bottom').delay(1500).animate({'margin-top': '190px'});
          $('.bhuman-bottom-storybox').html(bottomStoryStr);
          $('.bhuman-bottom-storybox').delay(1300).animate({
             // left: '-95px',
             opacity:'1',
             // width: '320px',
             // 'margin-top' : '210px'
           });

           // $('.bhuman-part').animate({'margin-top':'80px'});

           $('.body-flex-column').delay(1500).animate({'padding':'100px 0'});
           $('.body-flex-column').css({'position':'absolute'});
           $('.story-column').css({'display':'block'});


         });


         function randomizeImage()
         {
           var arrayAllImgs = new Array();
             arrayAllImgs[0] = "top0";
             arrayAllImgs[1] = "top1";
             arrayAllImgs[2] = "top2";
             arrayAllImgs[3] = "top3";
             arrayAllImgs[4] = "top4";
             arrayAllImgs[5] = "top5";
             arrayAllImgs[6] = "top6";
             arrayAllImgs[7] = "top7";
             arrayAllImgs[8] = "middle0";
             arrayAllImgs[9] = "middle1";
             arrayAllImgs[10] = "middle2";
             arrayAllImgs[11] = "middle3";
             arrayAllImgs[12] = "middle4";
             arrayAllImgs[13] = "middle5";
             arrayAllImgs[14] = "middle6";
             arrayAllImgs[15] = "bottom0";
             arrayAllImgs[16] = "bottom1";
             arrayAllImgs[17] = "bottom2_2";
             arrayAllImgs[18] = "bottom3";
             arrayAllImgs[19] = "bottom4";
             arrayAllImgs[20] = "bottom5";
             arrayAllImgs[21] = "bottom6";

           var path = path || 'http://dev.sofielson.com/ixd/img/';
           var numAllImgs = Math.floor( Math.random() * arrayAllImgs.length );
           var imgAllImgs = arrayAllImgs[ numAllImgs ];

            $('.random-image').html('<img src="' + path + imgAllImgs + '.png" alt = "">');
         };
        randomizeImage();

      });

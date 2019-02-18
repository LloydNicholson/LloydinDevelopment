import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [
    {
      title: 'Awesome Bar Graph Generator',
      date: new Date(2018, 7 - 1, 6),
      author: 'Lloyd Nicholson',
      content: 'Hello fellow coding and gaming enthusiasts.\n' +
        '  I have started work on a new, although very simple application that draws a bar graph in different colours onto the screen.' +
        '  Believe it or not this is one of the most challenging things I have done in my coding journey so far.' +
        '  To many, a bar graph may seem simple and quite monotonous but it has brought me to understand new coding terms, functions and ' +
        '  phrases that I have struggled with in the past.' +
        '  That’s the awesome part of this bar graph generator. I have learnt something new! \n\n' +
        '  I was not an A student in mathematics at high school, I was okay at trigonometry and I didn’t enjoy geometry.' +
        '  I’ve been able to do things that I never dreamt of doing when I first started coding.' +
        '  My somewhat limited mathematics knowledge has proved a useful trait in my endeavours.' +
        '  I have improved over the years and my addition and subtraction is something I’m quite proud of.' +
        '  I can now answer some of those quick fire mathematics questions that will be asked of someone nearby ' +
        'when in peril and the never-ending question of who still owes money on the bill at the restaurant you’ve been at for the past 30 minutes, ' +
        'can also be solved, by me.'
    },
    {
      title: 'Platform Builder/Battle Royale',
      date: new Date(2018, 6 - 1, 7),
      author: 'Lloyd Nicholson',
      content: '  Wouldn’t that be cool? A platformer that has various aspects of battle royale games and building games encompassing ' +
        '  one unique genre – Platform Builder Royale. Games like Fortnite, Minecraft and Fallout 4 have peaked my interest in creating ' +
        '  building-type games with an action component for many years now.' +
        '  It’s interesting how these games have incorporated building into their main gameplay mechanics.\n\n' +
        '  I find it surprising that the general public have been so accommodating and proactive in purchasing these games in the millions.' +
        '  Minecraft started the craze and it has had worldwide praise and is now being used in some schools as an education tool.' +
        '  As a teacher, the education aspect fascinates me. It brings with it the hope that games can be a medium for change in ' +
        ' children’s lives. The vilification of video games, as a medium that brings about chaos and bloodshed, is not the way I see ' +
        ' video games. I see them as fun, intriguing, delightful, challenging and an art form that tell stories so full of colour, depth and' +
        '  beauty that they draw you in to the story being told. They make me wonder about myself and they lead me to introspection of my own' +
        '  character and choices in life. \n\nGames can bring about an awesome learning experience while taking you on a journey through ' +
        '  peaks and valleys of emotion at the same time.' +
        ' I digress, but the point I was making is that video games can be a learning tool that can lead us to think deeply about our lives.' +
        '  Education is the perfect place to go with gaming because it’s one of the most interactive forms of education and learning.' +
        '  We learn as children while playing games and we grow our self identity by reacting to others while playing games.' +
        '  The learning experiences are endless and the younger generation shouldn’t start to see gaming as the villain but rather as ' +
        'a means to learn various things through play. Children’s minds are shaped easily at a young age and it is hard to imagine we ' +
        'can keep technology away from them forever (apart from moving away from civilisation completely).\n\n So why do we try to keep ' +
        'technology and games away from them when it’s an impossible task? This new generation will need a healthy relationship with ' +
        'technology and gaming in particular. Moderation with an educational game could stimulate and change they way the think for the ' +
        'better. Let’s not make games out to be the enemy. Let’s create a world where the newest game isn’t something to be ' +
        'feared because of the ramifications of the content it portrays, but rather one to be admired as an educational device for ' +
        'change in children’s lives.'
    },
    {
      title: 'Developer Tools',
      date: new Date(2018, 2 - 1, 20),
      author: 'Lloyd Nicholson', content: 'Good day everyone. I have been making games and pixel art for a few months now. It is new to me' +
        ' and I meet challenges that push me to my limits. I would like to share some sources of inspiration and some tools which have made ' +
        'it easier to begin this journey of game development.\n\n The first tool, which started with a conversation with a friend of mine, ' +
        'is Gamemaker Studio 2. It is a phenomenal development tool and game making engine developed by Yoyo Games Ltd and it has helped me ' +
        'make a few small but significant steps towards developing a fully-fledged game. \n\n' +
        'The second tool is Aseprite, which is such a fun and modest but powerful pixel art development system. ' +
        'I spent hours of time developing and creating pixel art with this app. Such a fun interface and create for creating almost any type ' +
        'of pixel art. The third tool is Udemy. What an incredible platform! It has given me the opportunity to learn unique and relevant skills. ' +
        'It has given me a better understanding of pixel art and game making. ' +
        'A shout out to Heartbeast and Shaun Spaulding for the amount of information they have available on their youtube channels and Udemy. ' +
        'Fantastic work.\n\n' +
        'The last tool is less of a tool and more of a website gift to man - Itch.io. ' +
        'It is a great site to get inspiration for games and find new indie games that are exciting and fun to play.' +
        ' Lastly, off the topic, I’ve just updated Sluggers on Mac, so you can download the Itch.io app and play it there or you can play it ' +
        'on your Mac by downloading it from the widget on the right hand side of the page. It is also available for Windows. ' +
        'I will update the Windows version in the next day or so. Thanks for catching up with me and remember, keep dreaming!'
    },
    ];
  constructor() { }

  ngOnInit() {

  }

}

import { v4 as uuidv4 } from 'uuid';
import PasswordGeneratorImg from '../images/project.png';
import WorkSchedulerImg from '../images/workScheduler.png';
import TextEditorImg from '../images/textEditor.png';
import KidsHubImg from '../images/kidsHub.png';
import NoteTakerImg from '../images/noteTaker.png';
import QuizImg from '../images/quiz.png';
import Take5Img from '../images/take5.png';
import WeatherDashboardImg from '../images/weatherDashboard.png';
import WebSiteImg from '../images/website.png';

const portfolio = [
  {
    id: uuidv4(),
    name: 'Work Scheduler',
    desc:
      'A convenient and effective work scheduler app to improve your day to day productivity.',
    img: WorkSchedulerImg,
    path: 'https://peterwonghg.github.io/C05-3rdPartyAPI/',
    github: 'https://github.com/peterwonghg/C05-3rdPartyAPI',
  },
  {
    id: uuidv4(),
    name: 'Just Another Text Editor',
    desc:
      'A text editor application for professional to write, edit and save text.',
    img: TextEditorImg,
    path: 'https://thawing-headland-55467-78fbd148389c.herokuapp.com/',
    github: 'https://github.com/peterwonghg/C19JATEChallenge',
  },
  {
    id: uuidv4(),
    name: 'Kids Hub',
    desc:
      'An app for children learning both academic and practical life skills.',
    img: KidsHubImg,
    path: 'https://morning-reef-37126-3c2d5ab785ed.herokuapp.com/',
    github: 'https://github.com/peterwonghg/KidsHub',
  },
  {
    id: uuidv4(),
    name: "Note Taker",
    desc:
      'An appliction to take and save notes for busy professional',
    img: NoteTakerImg,
    path: 'https://sweetnote.herokuapp.com',
    github: 'https://github.com/peterwonghg/C11NoteTakerExpressJS',
  },
  {
    id: uuidv4(),
    name: 'Password Generator',
    desc:
      'An application to randomly generate computing password.',
    img: PasswordGeneratorImg,
    path: 'https://peterwonghg.github.io/Challenge03/',
    github: 'https://github.com/peterwonghg/Challenge03',
  },
  {
    id: uuidv4(),
    name: 'Tech Quiz',
    desc:
      'A quiz to challenge the brightest of the computer tech industries.',
    img: QuizImg,
    path: 'https://peterwonghg.github.io/C04-Quiz/',
    github: 'https://github.com/peterwonghg/C04-Quiz',
  },
  {
    id: uuidv4(),
    name: 'Take-5',
    desc:
      'A safety app to document the process of conducting risk analysis of work tasks.',
    img: Take5Img,
    path: 'https://peterwonghg.github.io/Project01/',
    github: ' https://github.com/peterwonghg/Project01',
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'An app to retrieve multi cities weather report for travellers.',
    img: WeatherDashboardImg,
    path: 'https://peterwonghg.github.io/C06weatherDash/',
    github: 'https://github.com/peterwonghg/C06weatherDash',    
  },
  {
    id: uuidv4(),
    name: 'Website Development',
    desc:
      'An demonstration of a website development with small businesses.',
    img: WebSiteImg,
    path: 'https://peterwonghg.github.io/Challenge01/',
    github: 'https://github.com/peterwonghg/Challenge01',    
  },         
];

export default portfolio;

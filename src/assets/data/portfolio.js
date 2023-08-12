import { v4 as uuidv4 } from 'uuid';
import EmployeeTrackerImg from '../images/employeeTracker.png';
import ECommerceImg from '../images/eCommerce.png';
import TextEditorImg from '../images/textEditor.png';
import KidsHubImg from '../images/kidsHub.png';
import NoteTakerImg from '../images/noteTaker.png';
import QuizImg from '../images/quiz.png';
import Take5Img from '../images/take5.png';
import WeatherDashboardImg from '../images/weatherDashboard.png';
// import CustomLink from '../components/CustomLink';

const portfolio = [
  {
    id: uuidv4(),
    // name: <CustomLink to="https://github.com/peterwonghg">E-Commerce</CustomLink>,
    // name: <a href="https://google.com">E-Commerce</a>,
    name: 'E-Commerce',
    desc:
      'An e-Commerce website to market and trade products and services for small businesses.',
    img: ECommerceImg,
    path: 'https://google.com',
  },
  {
    id: uuidv4(),
    name: 'Just Another Text Editor',
    desc:
      'A text editor application for professional to write, edit and save text.',
    img: TextEditorImg,
    path: 'https://github.com/peterwonghg',
  },
  {
    id: uuidv4(),
    name: 'Kids Hub',
    desc:
      'An app for children learning both academic and practical life skills.',
    img: KidsHubImg,
    path: 'https://github.com/peterwonghg',
  },
  {
    id: uuidv4(),
    name: "Note Taker",
    desc:
      'An appliction to take and save notes for busy professional',
    img: NoteTakerImg,
    path: 'https://github.com/peterwonghg',
  },
  {
    id: uuidv4(),
    name: 'Employee Tracker',
    desc:
      'An application to track all your employees data from one place.',
    img: EmployeeTrackerImg,
    path: 'https://github.com/peterwonghg',
  },
  {
    id: uuidv4(),
    name: 'Tech Quiz',
    desc:
      'A quiz to challenge the brightest of the computer tech industries.',
    img: QuizImg,
    path: 'https://github.com/peterwonghg',
  },
  {
    id: uuidv4(),
    name: 'Take-5',
    desc:
      'A safety app to document the process of conducting risk analysis of task based activity.',
    img: Take5Img,
    path: 'https://github.com/peterwonghg',
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'An app to retrieve multi cities weather report for travellers.',
    img: WeatherDashboardImg,
    path: 'https://github.com/peterwonghg',
  },      
];

export default portfolio;

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import emailjs from 'emailjs-com';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faCodepen, faLinkedinIn)

import $ from 'jquery';
import Main from "./components/Main.js"

ReactDOM.render(<Main />, document.getElementById('app'));

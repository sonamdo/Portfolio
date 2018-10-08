import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'slick-carousel';
import Slider from "react-slick"

ReactDOM.render(<AppRouter />, document.getElementById('app'));

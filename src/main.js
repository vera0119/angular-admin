import 'es6-promise/auto';
import 'font-awesome';
import './scss/main.scss';
import angular from 'angular';
import route from './router/route';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [route]);

angular.bootstrap(document, [MODULE_NAME]);

export default MODULE_NAME;

import * as angular from 'angular';
import * as angularAnimate from 'angular-animate';
import * as angularMaterial from 'angular-material';

import 'angular-material/angular-material.min.css';
import './app.scss';

export const app = angular.module('mainApp', [
	angularMaterial,
	angularAnimate
]);

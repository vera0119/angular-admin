import template from './header.html';
import './header.scss';

/* @ngInject */
class HeaderController {
  constructor($scope) {
    $scope.navbar = false;
    $scope.sidebar = false;
  }
}

class Header {
  constructor() {
    this.replace = true;
    this.template = template;
    this.controller = HeaderController;
  }
}

export default Header;
import template from './layout.html';
import './layout.scss';

/* @ngInject */
class LayoutController {
  constructor($scope) {
    $scope.name = 123;
  }
}

class Layout {
  constructor() {
    this.replace = true;
    this.template = template;
    this.controller = LayoutController;
  }
}

export default Layout;
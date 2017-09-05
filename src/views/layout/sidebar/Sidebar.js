import template from './sidebar.html';
import './sidebar.scss';

/* @ngInject */
class SidebarController {
  constructor($scope) {
  }
}

class Sidebar {
  constructor() {
    this.replace = true;
    this.template = template;
    this.controller = SidebarController;
  }
}

export default Sidebar;
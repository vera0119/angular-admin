import angular from 'angular';
import dropdown from 'angular-ui-bootstrap/src/dropdown';
import Layout from './Layout';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const MODULE_NAME = 'views.layout';

angular.module(MODULE_NAME, [dropdown])
  .directive('header', () => new Header())
  .directive('sidebar', () => new Sidebar())
  .directive('layout', () => new Layout());

export default MODULE_NAME;
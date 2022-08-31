/* global jQuery */

// import local dependencies
import Router from './util/Router';

import common from './routes/common';

import Menu from './components/menu/index';
import ModalVideo from './components/modal-video/index';
import Tabs from './components/tabs/index';
import BounceField from './components/bounce-field/index';
import './swiper/index';
import './photoswipe/index';
import './jquery-validation/jquery.validate.min.js';
import AOS from 'aos';
import Success from './components/success/index';


// import pageMain module on-demand only when body has `page_main` class
const pageMain = () => import('./routes/pageMain');

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Main page
  pageMain,
});

const menu = new Menu({
    init: true,
    buttonSelector: '[data-menu-mobile]',
    bodyLockClass: 'menu-opened',
    wrapSelector: '', // default body
});

const success = new Success({
    init: true,
    modalSelector: '.modal-success',
    modalClose: '[data-close]',
    bodyClass: 'modal-success-opened',
});


const modalVideo = new ModalVideo({
    init: true,
    modalSelector: '.modal-video',
    openerSelector: '[data-modal-open]',
    closerSelector: '[data-modal-close]',
    modalClassActive: 'modal-video--show',
    modalFrameSelector: '.modal-video__frame',
});

const tabs = new Tabs({
    init: true,
    tabPanel: '.tabs',
    tabButton: '.tabs__button',
    tabButtonActive: 'tabs__button--active',
    textWrap: '.portfolio__top',
    text: '.portfolio__desc',
    textActive: 'portfolio__desc--active',
    item: '.portfolio__item',
    itemDisable: 'portfolio__item--disable',
    target: 'data-category',
});

const bounceField = new BounceField({
    init: true,
    wrapSelector: '.form__item',
    wrapActiveClass: 'form__item--active',
    fieldSelector: '.form__field',
});

AOS.init({
    once: true,
});

require.context('../../assets/images', true, /\.(png|jpe?g|gif)$/);
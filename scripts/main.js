import View from './view/index';
import {PostCollection} from './models/post';

(function(){
  'use strict';

  $(document).ready(function(){

  	var posts = new PostCollection();

  	var form = new View({collection: posts});

  	$('#app').html(form.el);

  });

})();

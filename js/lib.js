document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js';

function getBaseScorm() { 
  alert("Getting Base Scorm")
  document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='//ahajs.herokuapp.com/js/base_scorm.js';
}
setTimeout("getBaseScorm()", 1000);


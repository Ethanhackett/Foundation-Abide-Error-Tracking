Foundation-Abide-Error-Tracking
===============================

 Error tracking plugin for Foundation 5 Abide, using Google Analytics

This plugin requires Google Analytics.



Installation
--------------

Attatch the foundation.abideevents.js file after your foundation js includes.

```HTML
<script src="js/foundation.abideevents.js"></script>
```

Call the abideevent function in your js targeting the form that abide is validating.

```HTML
$( document ).ready(function() {
  $('#myForm').on('invalid', function () {
    $(this).abideevents();
  });
});
```
<script type='text/javascript'>
  //<![CDATA[
  function resizeThumb(parentID, size) {
    var parent = document.getElementById(parentID),
    image = parent.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
    image[i].src = image[i].src.replace(/\/s72\-c/, "/s" + size + "-c");
     image[i].width = size;
     image[i].height = size;
    }
  }
  resizeThumb('post-wrapper', 600);
  //]]>
</script>

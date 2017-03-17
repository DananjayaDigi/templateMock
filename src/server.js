var express=require("express");

const app=express();

app.get('/templates',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.send([{id:23,
  name:"template1",
  image_url:"http://s3-ap-south-1.amazonaws.com/specto-assets/pictures/images/000/000/688/original/0e6cc426?1489559391",
   html_content:`<html xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Specto VR</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <script async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
      
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

    <script src="https://npmcdn.com/aframe-animation-component@3.0.1"></script>
    <script src="https://npmcdn.com/aframe-event-set-component@3.0.1"></script>
    <script src="https://npmcdn.com/aframe-layout-component@3.0.1"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/nunjucks/2.3.0/nunjucks.min.js"> </script>
    <script src="https://unpkg.com/aframe-template-component@3.1.1/dist/aframe-template-component.min.js"></script>
    <!-- Js Event register on the elemnets -->
    <script src="../src/lib/JS/NoSleep.min.js" type="text/javascript"></script>
    <script src="../src/lib/JS/set-image.js" type="text/javascript"></script>

    <!-- <script src="../src/lib/JS/Hotspots.js" type="text/javascript"></script> -->

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script src="https://rawgit.com/mayognaise/aframe-mouse-cursor-component/master/dist/aframe-mouse-cursor-component.min.js"></script> 
    <script src="https://rawgit.com/lwakefield/aframe-draggable-objs/master/app.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <link href="js/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />
    <script src="js/jquery.bxslider/jquery.bxslider.min.js"></script>
    
    <script id="link" type="text/nunjucks">
        &amp;lt;a-image 
          event-set__1="_event: mousedown; scale: 1 1 1"
          event-set__2="_event: mouseup; scale: 1.2 1.2 1"
          event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
          event-set__4="_event: mouseleave; scale: 1 1 1"
          set-image="on:click;"
          &amp;gt;
        &amp;lt;/a-image&amp;gt;
    </script>
    
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script><link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto+Mono" media="all" /><script>WebFont.load({google: {families: ["Roboto Mono"]}});</script></head>
  <body class="a-body aframe-inspector-opened">
    <a-scene debug="true" class="fullscreen" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
      <a-text text="align: center; width: 6; value: VR Text Tool" font="kelsonsans" position="3 8 2" wrap-count="20" rotation="" scale="" visible=""></a-text>
      <a-assets></a-assets>
      
      <!-- Lights. -->
      
        <!-- Camera. -->
        <a-entity id="cameraWrapper" position="0 0 0" rotation="" scale="" visible="">
         <a-entity id="camera" camera="active" look-controls="" wasd-controls="" position="0 0 0" rotation="0 0 0" scale="" visible="">
          <!-- Cursor. -->
            <a-entity id="cursor" position="0 0 -2" cursor="fuse: true; fuseTimeout: 900" geometry="primitive: ring; radiusOuter: 0.016; radiusInner: 0.01" material="color: #ff9; shader: flat; transparent: true; opacity: 0.5" scale="2 2 2" raycaster="" rotation="" visible="">
            </a-entity>
          </a-entity>
      </a-entity>
       
      
    <canvas class="a-canvas a-grab-cursor" data-aframe-canvas="true" width="1919" height="973" style="width: 2133px; height: 1082px; display: block;"></canvas><a-entity camera="active:false" position="0 0 0" rotation="" scale="" visible=""></a-entity><a-sky color="#0dacff" material="" src="http://s3-ap-south-1.amazonaws.com/specto-assets/pictures/images/000/000/688/original/0e6cc426?1489559391"></a-sky></a-scene>
    
    <script>
    
    </script>
  
</body></html>`
},

{id:24,
  name:"template2",
  image_url:"http://s3-ap-south-1.amazonaws.com/specto-assets/pictures/images/000/000/607/original/55500c21?1489472126",
   html_content:`<html xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Specto VR</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <script async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
      
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

    <script src="https://npmcdn.com/aframe-animation-component@3.0.1"></script>
    <script src="https://npmcdn.com/aframe-event-set-component@3.0.1"></script>
    <script src="https://npmcdn.com/aframe-layout-component@3.0.1"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/nunjucks/2.3.0/nunjucks.min.js"> </script>
    <script src="https://unpkg.com/aframe-template-component@3.1.1/dist/aframe-template-component.min.js"></script>
    <!-- Js Event register on the elemnets -->
    <script src="../src/lib/JS/NoSleep.min.js" type="text/javascript"></script>
    <script src="../src/lib/JS/set-image.js" type="text/javascript"></script>

    <!-- <script src="../src/lib/JS/Hotspots.js" type="text/javascript"></script> -->

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script src="https://rawgit.com/mayognaise/aframe-mouse-cursor-component/master/dist/aframe-mouse-cursor-component.min.js"></script> 
    <script src="https://rawgit.com/lwakefield/aframe-draggable-objs/master/app.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <link href="js/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />
    <script src="js/jquery.bxslider/jquery.bxslider.min.js"></script>
    
    <script id="link" type="text/nunjucks">
        &amp;lt;a-image 
          event-set__1="_event: mousedown; scale: 1 1 1"
          event-set__2="_event: mouseup; scale: 1.2 1.2 1"
          event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
          event-set__4="_event: mouseleave; scale: 1 1 1"
          set-image="on:click;"
          &amp;gt;
        &amp;lt;/a-image&amp;gt;
    </script>
    
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script><link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto+Mono" media="all" /><script>WebFont.load({google: {families: ["Roboto Mono"]}});</script></head>
  <body class="a-body aframe-inspector-opened">
    <a-scene debug="true" class="fullscreen" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
      <a-text text="align: center; width: 6; value: VR Text Tool" font="kelsonsans" position="3 8 2" wrap-count="20" rotation="" scale="" visible=""></a-text>
      <a-assets></a-assets>
      
      <!-- Lights. -->
      
        <!-- Camera. -->
        <a-entity id="cameraWrapper" position="0 0 0" rotation="" scale="" visible="">
         <a-entity id="camera" camera="active" look-controls="" wasd-controls="" position="0 0 0" rotation="0 0 0" scale="" visible="">
          <!-- Cursor. -->
            <a-entity id="cursor" position="0 0 -2" cursor="fuse: true; fuseTimeout: 900" geometry="primitive: ring; radiusOuter: 0.016; radiusInner: 0.01" material="color: #ff9; shader: flat; transparent: true; opacity: 0.5" scale="2 2 2" raycaster="" rotation="" visible="">
            </a-entity>
          </a-entity>
      </a-entity>
       
      
    <canvas class="a-canvas a-grab-cursor" data-aframe-canvas="true" width="1919" height="973" style="width: 2133px; height: 1082px; display: block;"></canvas><a-entity camera="active:false" position="0 0 0" rotation="" scale="" visible=""></a-entity><a-sky color="#0dacff" material="" src="http://s3-ap-south-1.amazonaws.com/specto-assets/pictures/images/000/000/607/original/55500c21?1489472126"></a-sky></a-scene>
    
    <script>
    
    </script>
  
</body></html>`
},
{id:23,
  name:"template1",
  image_url:"http://s3-ap-south-1.amazonaws.com/specto-assets/pictures/images/000/000/688/original/0e6cc426?1489559391",
   html_content:`<html xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Specto VR</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <script async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
      
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

    <script src="https://npmcdn.com/aframe-animation-component@3.0.1"></script>
    <script src="https://npmcdn.com/aframe-event-set-component@3.0.1"></script>
    <script src="https://npmcdn.com/aframe-layout-component@3.0.1"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/nunjucks/2.3.0/nunjucks.min.js"> </script>
    <script src="https://unpkg.com/aframe-template-component@3.1.1/dist/aframe-template-component.min.js"></script>
    <!-- Js Event register on the elemnets -->
    <script src="../src/lib/JS/NoSleep.min.js" type="text/javascript"></script>
    <script src="../src/lib/JS/set-image.js" type="text/javascript"></script>

    <!-- <script src="../src/lib/JS/Hotspots.js" type="text/javascript"></script> -->

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script src="https://rawgit.com/mayognaise/aframe-mouse-cursor-component/master/dist/aframe-mouse-cursor-component.min.js"></script> 
    <script src="https://rawgit.com/lwakefield/aframe-draggable-objs/master/app.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <link href="js/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />
    <script src="js/jquery.bxslider/jquery.bxslider.min.js"></script>
    
    <script id="link" type="text/nunjucks">
        &amp;lt;a-image 
          event-set__1="_event: mousedown; scale: 1 1 1"
          event-set__2="_event: mouseup; scale: 1.2 1.2 1"
          event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
          event-set__4="_event: mouseleave; scale: 1 1 1"
          set-image="on:click;"
          &amp;gt;
        &amp;lt;/a-image&amp;gt;
    </script>
    
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script><link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto+Mono" media="all" /><script>WebFont.load({google: {families: ["Roboto Mono"]}});</script></head>
  <body class="a-body aframe-inspector-opened">
    <a-scene debug="true" class="fullscreen" canvas="" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui="" auto-enter-vr="">
      <a-text text="align: center; width: 6; value: VR Text Tool" font="kelsonsans" position="3 8 2" wrap-count="20" rotation="" scale="" visible=""></a-text>
      <a-assets></a-assets>
      
      <!-- Lights. -->
      
        <!-- Camera. -->
        <a-entity id="cameraWrapper" position="0 0 0" rotation="" scale="" visible="">
         <a-entity id="camera" camera="active" look-controls="" wasd-controls="" position="0 0 0" rotation="0 0 0" scale="" visible="">
          <!-- Cursor. -->
            <a-entity id="cursor" position="0 0 -2" cursor="fuse: true; fuseTimeout: 900" geometry="primitive: ring; radiusOuter: 0.016; radiusInner: 0.01" material="color: #ff9; shader: flat; transparent: true; opacity: 0.5" scale="2 2 2" raycaster="" rotation="" visible="">
            </a-entity>
          </a-entity>
      </a-entity>
       
      
    <canvas class="a-canvas a-grab-cursor" data-aframe-canvas="true" width="1919" height="973" style="width: 2133px; height: 1082px; display: block;"></canvas><a-entity camera="active:false" position="0 0 0" rotation="" scale="" visible=""></a-entity><a-sky color="#0dacff" material="" src="http://s3-ap-south-1.amazonaws.com/specto-assets/pictures/images/000/000/688/original/0e6cc426?1489559391"></a-sky></a-scene>
    
    <script>
    
    </script>
  
</body></html>`
}
])
})

app.listen(3200);
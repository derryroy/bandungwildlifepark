if(typeof g_ugFunctions!="undefined")
g_ugFunctions.registerTheme("tilesgrid");else jQuery(document).ready(function(){g_ugFunctions.registerTheme("tilesgrid")});function UGTheme_tilesgrid(){var t=this;var g_gallery=new UniteGalleryMain(),g_objGallery,g_objects,g_objWrapper;var g_objThumbsGrid=new UGThumbsGrid(),g_lightbox=new UGLightbox();var g_functions=new UGFunctions(),g_objTileDesign=new UGTileDesign();var g_objBullets,g_objNavWrapper,g_objButtonLeft,g_objButtonRight,g_objPreloader;var g_options={theme_gallery_padding:0,theme_grid_align:"center",theme_navigation_type:"bullets",theme_arrows_margin_top:20,theme_space_between_arrows:5,theme_bullets_margin_top:40,theme_navigation_align:"center",theme_navigation_offset_hor:0,theme_bullets_color:"gray",theme_auto_open:null};var g_defaults={gallery_width:"100%",tile_width:180,tile_height:150,grid_num_rows:3,grid_padding:10,tile_enable_border:!0,tile_enable_shadow:!0,tile_border_radius:2,grid_space_between_cols:20,grid_space_between_rows:20,grid_space_between_mobile:15,bullets_space_between:12,grid_vertical_scroll_ondrag:!0};var g_temp={handle:null};function initTheme(gallery,customOptions){g_gallery=gallery;g_options=jQuery.extend(g_options,g_defaults);g_options=jQuery.extend(g_options,customOptions);modifyOptions();g_gallery.setOptions(g_options);g_gallery.setFreestyleMode();g_objects=gallery.getObjects();g_objGallery=jQuery(gallery);g_objWrapper=g_objects.g_objWrapper;g_lightbox.init(gallery,g_options);g_objThumbsGrid.init(gallery,g_options,!0);g_objTileDesign=g_objThumbsGrid.getObjTileDesign()}
function modifyOptions(){if(!g_options.grid_num_rows)
g_options.grid_num_rows=9999;g_options.bullets_addclass="ug-bullets-"+g_options.theme_bullets_color}
function getGalleryWidth(){var galleryWidth=g_gallery.getSize().width;galleryWidth-=g_options.theme_gallery_padding*2;return(galleryWidth)}
function setHtml(){if(g_options.theme_navigation_type=="bullets"){g_objBullets=new UGBullets();var galleryWidth=getGalleryWidth();var numPanes=g_objThumbsGrid.getNumPanesEstimationByWidth(galleryWidth);var objOptions=g_gallery.getOptions();g_objBullets.init(g_gallery,objOptions,numPanes)}
g_objWrapper.addClass("ug-theme-tilesfixed");g_objThumbsGrid.setHtml();if(g_objBullets)
g_objBullets.appendHTML(g_objWrapper);if(g_options.theme_navigation_type=="arrows"){var htmlAdd="<div class='ug-tile-navigation-wrapper' style='position:absolute'>";htmlAdd+="<div class='ug-button-tile-navigation ug-button-tile-left'></div>";htmlAdd+="<div class='ug-button-tile-navigation ug-button-tile-right'></div>";htmlAdd+="</div>";g_objWrapper.append(htmlAdd);g_objNavWrapper=g_objWrapper.children(".ug-tile-navigation-wrapper");g_objButtonLeft=g_objNavWrapper.children(".ug-button-tile-left");g_objButtonRight=g_objNavWrapper.children(".ug-button-tile-right");g_objButtonLeft.css("margin-right",g_options.theme_space_between_arrows+"px")}
g_lightbox.putHtml();g_objWrapper.append("<div class='ug-tiles-preloader ug-preloader-trans'></div>");g_objPreloader=g_objWrapper.children(".ug-tiles-preloader");g_objPreloader.fadeTo(0,0)}
function getHeightEstimation(galleryWidth){var gridHeight=g_objThumbsGrid.getHeightEstimationByWidth(galleryWidth);var numPanes=g_objThumbsGrid.getNumPanesEstimationByWidth(galleryWidth);if(numPanes>1){if(g_options.theme_navigation_type=="arrows"){gridHeight+=g_options.theme_arrows_margin_top;gridHeight+=30}else{gridHeight+=g_options.theme_bullets_margin_top;gridHeight+=15}}
return(gridHeight)}
function actualRun(){var galleryWidth=getGalleryWidth();var totalHeight=getHeightEstimation(galleryWidth);g_objWrapper.height(totalHeight);var galleryWidth=getGalleryWidth();initEvents();g_functions.placeElement(g_objPreloader,g_options.theme_grid_align,50);g_objThumbsGrid.setWidth(galleryWidth);g_objThumbsGrid.run();g_lightbox.run();updateBullets();positionElements()}
function runTheme(){setHtml();actualRun()}
function positionElements(){var objGallerySize=g_gallery.getSize();var g_objGridSize=g_objThumbsGrid.getSize();var gridElement=g_objThumbsGrid.getElement();g_functions.placeElement(gridElement,g_options.theme_grid_align,0);g_objGridSize=g_objThumbsGrid.getSize();var galleryHeight=g_objGridSize.height;var numPanes=g_objThumbsGrid.getNumPanes();if(numPanes>1){if(g_objBullets){g_objBullets.getElement().show();var bulletsElement=g_objBullets.getElement();var bulletsWidth=g_objBullets.getBulletsWidth();var bulletsX=g_objGridSize.left+g_functions.getElementRelativePos(bulletsWidth,g_options.theme_navigation_align,g_options.theme_navigation_offset_hor,gridElement);g_functions.placeElement(bulletsElement,bulletsX,galleryHeight+g_options.theme_bullets_margin_top);var sizeBullets=g_functions.getElementSize(bulletsElement);galleryHeight=sizeBullets.bottom}
if(g_objNavWrapper){g_objNavWrapper.show();var navX=g_objGridSize.left+g_functions.getElementRelativePos(g_objNavWrapper,g_options.theme_navigation_align,g_options.theme_navigation_offset_hor,gridElement);g_functions.placeElement(g_objNavWrapper,navX,galleryHeight+g_options.theme_arrows_margin_top);var sizeNav=g_functions.getElementSize(g_objNavWrapper);galleryHeight=sizeNav.bottom}}else{if(g_objNavWrapper)
g_objNavWrapper.hide();if(g_objBullets)
g_objBullets.getElement().hide()}
g_objWrapper.height(galleryHeight)}
function onTileClick(data,objTile){objTile=jQuery(objTile);var index=objTile.index();g_lightbox.open(index)}
function updateBullets(){if(!g_objBullets)
return(!1);numPanes=g_objThumbsGrid.getNumPanes();g_objBullets.updateNumBullets(numPanes);g_objBullets.setActive(0)}
function onSizeChange(){var galleryWidth=getGalleryWidth();g_objThumbsGrid.setWidth(galleryWidth);g_objThumbsGrid.run();updateBullets();setTimeout(positionElements,500)}
function onTileClick(data,objTile){var isElementorPopupTriggered=!1;jQuery(document).on('elementor/popup/show',function(){isElementorPopupTriggered=!0});setTimeout(function(){if(isElementorPopupTriggered==!0)
return(!0);objTile=jQuery(objTile);var objItem=g_objTileDesign.getItemByTile(objTile);var index=objItem.index;g_lightbox.open(index)},200)}
function onBeforeReqestItems(){if(g_objNavWrapper)
g_objNavWrapper.hide();if(g_objThumbsGrid)
g_objThumbsGrid.getElement().hide();g_objPreloader.fadeTo(0,1)}
function onLightboxInit(){if(g_options.theme_auto_open!==null){g_lightbox.open(g_options.theme_auto_open);g_options.theme_auto_open=null}}
function initEvents(){g_objGallery.on(g_gallery.events.SIZE_CHANGE,onSizeChange);g_objGallery.on(g_gallery.events.GALLERY_BEFORE_REQUEST_ITEMS,onBeforeReqestItems);if(g_objBullets)
g_objThumbsGrid.attachBullets(g_objBullets);if(g_objNavWrapper){g_objThumbsGrid.attachNextPaneButton(g_objButtonRight);g_objThumbsGrid.attachPrevPaneButton(g_objButtonLeft)}
jQuery(g_objTileDesign).on(g_objTileDesign.events.TILE_CLICK,onTileClick);jQuery(g_lightbox).on(g_lightbox.events.LIGHTBOX_INIT,onLightboxInit)}
this.destroy=function(){g_objGallery.off(g_gallery.events.SIZE_CHANGE);g_objGallery.off(g_gallery.events.GALLERY_BEFORE_REQUEST_ITEMS);jQuery(g_objTileDesign).off(g_objTileDesign.events.TILE_CLICK);if(g_objBullets)
jQuery(g_objBullets).off(g_objBullets.events.BULLET_CLICK);jQuery(g_lightbox).off(g_lightbox.events.LIGHTBOX_INIT);g_objThumbsGrid.destroy();g_lightbox.destroy()}
this.run=function(){runTheme()}
this.init=function(gallery,customOptions){initTheme(gallery,customOptions)}}
;
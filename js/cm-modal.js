/*	
 *	kem.launchModal()
 *	Takes a string for modal content. Build a string or send in something's innerHTML. Recommend .modal__target 
 *  for a target container because that class is already styled to display:none.
 *  
 *  Examples: 	kem.launchModal( $('.modal__target').html() );
 *  			kem.launchModal("<h2>HELLO, WORLD!</h2><p>I'm a modal!</p>");
 *  
 *  1. Creates modal markup and appends to body. Container styled to display:none.
 *  2. Adds content from contentTarget and adds the close button. 
 *  3. Attaches close behavior to button and background on click. jQuery will remove listeners upon removing parent.
*/
kem.launchModal = function(contentHTML) {
	//var contentHTML = $(contentTarget).html();
	if( $('#modal').length === 0 ) {
		var $modal = $('<div id="modal" class="modal"><div class="modal__content-wrapper"><div id="modal__content" class="modal__content"></div></div><div class="modal__bg"></div></div>').appendTo("body");
	}
	var $modal = $('#modal');
	var $contentWrapper = $('#modal .modal__content-wrapper');
	var contentPaddingBottom = $contentWrapper.css('padding-bottom').replace("px", ""); // Top and bottom padding should be the same, so just getting one.

	$modal.find('.modal__content').html('<div class="modal__close"><span>X</span></div>' + contentHTML);
	$modal.find('.modal__close, .modal__bg').on("click", function(event){
		$modal.remove();
	});

	// We must show the modal in order to get the height of the contents. jQuery can't get the height for display:none.
	$modal.show();

	// Padding must be accounted for because we're using border-box: http://www.paulirish.com/2012/box-sizing-border-box-ftw/
	var contentHeight = $modal.find('.modal__content').outerHeight();
	$contentWrapper.css('height', (contentHeight + (contentPaddingBottom * 2)) + 'px');
}
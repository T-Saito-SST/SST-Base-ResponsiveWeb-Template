$(document).ready(function(){
	
	/* 表示中のグローバルナビのアクティブ化 -----------------*/
	var myServer; //サーバ
	var myUrl = location.href;
	myServer = 'www.aaa.com/'; //本番サーバ（最後のスラッシュ"/"までつけること）
	myUrl = myUrl.substr( myUrl.indexOf('//') + 2, myUrl.length);
	myUrl = myUrl.substr(myServer.length,myUrl.length);
	myUrl = myUrl.substr(0,myUrl.indexOf("/"));
	if(myUrl.length == 0 || myUrl.length > 20) myUrl = 'home';
	$('li#gnav_' + myUrl).addClass('active');
	
	/* ===== pagetop ===== */
	var windowRoll = $(window),
	topBtn = $('#btnPagetop'),
	showFlug = false;
	
	topBtn.css('bottom', '-100px');
	
	//一定距離スクロールで表示
	windowRoll.scroll(function() {
		var h = $(this).scrollTop();
		if(h > 200) {
			if(showFlug == false) {
				showFlug = true;
				topBtn.stop().animate({'bottom' : '45px' }, 300);
			}
		} else {
			if(showFlug) {
				showFlug = false;
				topBtn.stop().animate({'bottom' : '-45px'}, 500);
			}
		}
	});
	
	//ページスクロール
	$('.scroll').click(function(event){
		event.preventDefault();
		
		var url = this.href;
		
		var parts = url.split('#');
		var target = parts[1];
		
		var target_offset = $('#'+target).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top}, 500);
	});
});
	


$(function() {
    w = $(window).width();
	if (w <= 767) {
		// スマホ向け（760px以下のとき）
		$('.slider').slick({
            // autoplay: true,         
            // autoplaySpeed: 2000,　  
            // speed: 800,	
            dots: true,　　　　　　
            infinite: true,　　　　//スライドのループ
            pauseOnHover: false,   //ホバーしたときにスライドを一時停止しない　
        });
	} else {
		// PC向け
		$('.slick-box.onlysp.slick-initialized').slick('unslick');
	}
});
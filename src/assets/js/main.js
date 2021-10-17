/*jshint esversion: 6 */
$(function () {
	let windowWidth = $(window).width();

	/*-------- 画面幅が変わったときに、更新 --------*/
	const autoResizer = () => {
		let timer = 0;
		let currentWidth = window.innerWidth;
		$(window).resize(function () {
			if (currentWidth == window.innerWidth) {
				return;
			}
			if (timer > 0) {
				clearTimeout(timer);
			}
			timer = setTimeout(function () {
				location.reload();
			}, 200);
		});
	};
	/*-------- 画面幅が変わったときに、更新 --------*/
});

$(window).on('load', function () {
	let element = $(".mv-js");
	element.each(function () {
	let text = $(this).text();
	let textbox = "";
	text.split('').forEach(function (t, i) {
		if (t !== " ") {
			if (i < 10) {
				textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
			} else {
				let n = i / 10;
				textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
			}
		} else {
			textbox += t;
		}
	});
	$(this).html(textbox);
	});
	$(element).addClass('appeartext');
});
$(window).on('load', function () {
	let element = $(".mv-js2");
	element.each(function () {
	let text = $(this).text();
	let textbox = "";
	text.split('').forEach(function (t, i) {
		if (t !== " ") {
			if (i < 10) {
				textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
			} else {
				let n = i / 10;
				textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
			}
		} else {
			textbox += t;
		}
	});
	$(this).html(textbox);
	});
	setTimeout(function(){
		$(element).addClass('appeartext');
	},800);
});

$(window).scroll(function(){
	$(".rain").each(function(){
		let scroll = $(window).scrollTop();
		let elemPos = $(this).offset().top;
		let windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight + 150){
			$(this).addClass('js-active');
		}else{
			$(this).removeClass('js-active');
		}
	});
});

let width = $('.carousel-area__item').outerWidth(true); 
let length = $('.carousel-area__item').length; 
let slideArea = width * length;
$('.carousel-area').css('width', slideArea);
let slideCurrent = 0;
let lastCurrent = $('.carousel-area__item').length - 1;


function changeslide() {
	$('.carousel-area').stop().animate({ // stopメソッドを入れることでアニメーション1回毎に止める
		left: slideCurrent * -width // 代入されたスライド数 × リスト1枚分の幅を左に動かす
	});
	let pagiNation = slideCurrent + 1; // nth-of-typeで指定するため0に＋1をする
    $('.pagination-circle').removeClass('target'); // targetクラスを削除
	$(".pagination-circle:nth-of-type(" + pagiNation + ")").addClass('target');
}

$('.js-btn-next').click(function () {
    if (slideCurrent === lastCurrent) { // 現在のスライドが最終スライドの場合
    	slideCurrent = 0;
      	changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
    } else {
    	slideCurrent++;
      	changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
    }
});
　// BACKボタン
$('.js-btn-back').click(function () {
    if (slideCurrent === 0) { // 現在のスライドが初期スライドの場合
    slideCurrent = lastCurrent;
    changeslide(); // 最終スライド番号を代入して関数実行（最後のスライドに移動）
    } else {
    	slideCurrent--;
      	changeslide(); // そうでなければスライド番号を減らして（前のスライドに切り替え）関数実行
    }
});

$('.more.btn').click(function(){
	$('.news').removeClass('news-more');
});
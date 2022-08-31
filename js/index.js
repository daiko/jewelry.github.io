// ハンバーガーメニュー
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('drawer-navigation').addEventListener('click',function(){
    drawer(),false;
});

//トップをクリックすると閉じて消える
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('top').addEventListener('click',function(){
    drawer(),false;
});

//私たちについてをクリックすると閉じて消える
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('abo').addEventListener('click',function(){
    drawer(),false;
});

//オンラインストアをクリックすると閉じて消える
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('store').addEventListener('click',function(){
    drawer(),false;
});

//こだわりをクリックすると閉じて消える
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('deti').addEventListener('click',function(){
    drawer(),false;
});

// スクロールしたらフワッと出るアニメーション
const targetElement = document.querySelectorAll(".animation-target");
      document.addEventListener("scroll", function(){
        for (let i = 0; i < targetElement.length; i++){
            const getElementDistance = targetElement[i].
            getBoundingClientRect().top + targetElement[i].clientHeight * .5
             if(window.innerHeight > getElementDistance){
                targetElement[i].classList.add("show"); 
             }
        }
      });

    //   下スクロールで隠し、上スクロールで表示
      const fixedElm = document.getElementById('header');
      let scrollPoint = 0; // 現在のスクロール位置をセットする変数
      let lastPoint = 0; // 1つ前のスクロール位置をセットする変数
      
      window.addEventListener("scroll",function(){
          
          scrollPoint = window.scrollY;
          
          if(scrollPoint > lastPoint){ // 下スクロールの場合
              fixedElm.classList.add('fixed-hide');
          }else{ // 上スクロールの場合
              fixedElm.classList.remove('fixed-hide');
          }
          
          lastPoint = scrollPoint;
      });

    //   スムーススクロール
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            const target = document.querySelector(link.hash),
                  adjust = 50,
                  offsetTop = window.pageYOffset + target.getBoundingClientRect().top - adjust

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
            //指定したところに飛んだら消える
            if(document.getElementById('navigation').classList.remove('in')){
                const timerId = setInterval(() => {
                    if (window.pageYOffset === offsetTop){
                        clearInterval(timerId)
                        document.getElementById('navigation').classList.contains('in')
                    }
                }, 16)
            }
        })
      })

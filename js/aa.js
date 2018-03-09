/*
* @Author: Administrator
* @Date:   2018-03-07 16:08:10
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-09 01:24:35
*/
//banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".paperbox li");
	let banner=document.querySelector("#banner");
	pagers.forEach(
		function(ele,index){
		ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
				this.classList.add("active");
				imgs[index].classList.add("active");
				n=index;
				}
			});
			let flag=true;
			let next=document.querySelector(".next");
			let prev=document.querySelector(".prev");
			next.onclick=function(){
				if(flag){
					flag=false;
				move();
			}
		};
			prev.onclick=function(){
				if(flag){
				flag=false;
				n-=2;
				move();
			}};

		imgs.forEach(function(ele,index){
			ele.addEventListener("transitionend",function(){
				flag=true;
			})
		})


	 let t=setInterval(move,3000);
	 var n=0;
	 	function move(){
		n++;
	 	// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
}
//shangou
{
	const prev=document.querySelector(".buy-prev");
	const next=document.querySelector(".buy-next");
	const inner=document.querySelector(".buy-inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
			n--;
			next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}

}
{
	function content(parent){
	const types=parent.querySelectorAll(".type");
	const goods=parent.querySelectorAll(".goodlist");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goods[i].classList.remove("active");
			}
			this.classList.add("active");
			goods[index].classList.add("active");
		}
	})
	}
	const contentList=document.querySelectorAll(".dapei");
	contentList.forEach(function(ele){
		content(ele);
	})
}
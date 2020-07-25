import React,{useState} from "react";
import "./slider.scss";
import ImgComp from "./ImgComp";
import i1 from "./pics/1.jpg";
import i2 from "./pics/2.jpg";
import i3 from "./pics/3.jpg";
import i4 from "./pics/4.jpg";
import i5 from "./pics/5.jpg";
import i6 from "./pics/6.jpg";
import i7 from "./pics/7.jpg";
import i8 from "./pics/8.jpg";
import i9 from "./pics/9.jpg";
import i10 from "./pics/10.jpg";

function Slider() {
	const [x,setX] = useState(0);
	let sliderArr = [<ImgComp src={i1} />, 
					<ImgComp src={i2} />, 
					<ImgComp src={i3} />, 
					<ImgComp src={i4} />, 
					<ImgComp src={i5} />, 
					<ImgComp src={i6} />, 
					<ImgComp src={i7} />, 
					<ImgComp src={i8} />, 
					<ImgComp src={i9} />, 
					<ImgComp src={i10} />];
	
	const goLeft = () => {
		x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100);
	};
	const goRight = () => {
		// sliderArr.length is used to make the input dynamic
		x === -100 * (sliderArr.length -1) ? setX(0) : setX(x - 100);
	};
	return (
		<div className="slider">
		{
			sliderArr.map((item, index) => {
				return(
					<div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
						{item}
					</div>
				);
			})}
			<button id="goLeft" onClick={goLeft}>
				<i class="fas fa-chevron-left"></i>
			</button>
			<button id="goRight" onClick={goRight}>
				<i class="fas fa-chevron-right"></i>
			</button>
		</div>
	);
}

export default Slider;
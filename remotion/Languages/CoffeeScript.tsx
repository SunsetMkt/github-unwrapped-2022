import React, {SVGProps} from 'react';
import {RoughPath} from './RoughPath';

export const CoffeeScript: React.FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 28 28"
			viewBox="0 0 28 28"
			{...props}
		>
			<RoughPath
				fill="#28334c"
				d="M4.444,10.79c0,0,10.177,3.973,22.213,0.03c-0.972,3.493-3.46,7.307-5.628,10.39s-7.496,5.174-10.332,0.462S1.944,12.62,4.444,10.79z"
			/>
			<path d="M15,23.65c-0.201,0-0.38,0-0.559-0.011c-0.158,0.013-0.435,0.056-0.657-0.014c-3.557-0.123-4.08-0.885-4.755-2.318c-0.354-0.755-0.797-1.694-2.179-2.842c-2.248-1.85-3.399-6.409-3.79-8.283C3.004,9.912,3.178,9.647,3.447,9.591c0.273-0.059,0.536,0.117,0.592,0.387c0.288,1.381,1.388,6.02,3.448,7.716c1.555,1.292,2.07,2.387,2.447,3.187c0.534,1.136,0.778,1.654,4.021,1.749c0.043,0.001,0.085,0.008,0.125,0.02c0.123,0,0.244-0.002,0.361-0.009c0.162,0.007,0.293,0.008,0.423,0.009c0.039-0.012,0.079-0.019,0.121-0.02c3.242-0.095,3.485-0.613,4.021-1.749c0.376-0.8,0.892-1.896,2.444-3.186c1.972-1.622,3.062-5.917,3.44-7.689c0.059-0.271,0.331-0.442,0.594-0.385c0.27,0.057,0.442,0.323,0.385,0.593c-0.497,2.329-1.648,6.498-3.782,8.252c-1.379,1.146-1.821,2.085-2.177,2.84c-0.675,1.434-1.198,2.196-4.761,2.319C15.103,23.641,15.052,23.65,15,23.65z" />
			<path d="M14.5,12c-5.25,0-9.004-0.493-11.156-1.464c-0.251-0.113-0.363-0.41-0.25-0.661c0.114-0.252,0.409-0.363,0.662-0.25C5.777,10.537,9.393,11,14.5,11c5.042,0,8.635-0.454,10.68-1.348c0.252-0.11,0.548,0.004,0.658,0.258c0.11,0.253-0.005,0.547-0.258,0.658C23.408,11.518,19.681,12,14.5,12z" />
			<path d="M14.5,10C14.03,10,3,9.972,3,7.5c0-0.816,1.057-1.239,1.852-1.486C5.12,5.933,5.396,6.079,5.478,6.343C5.56,6.606,5.412,6.887,5.148,6.969C4.128,7.286,3.994,7.538,3.993,7.541C4.265,8.013,8.009,9,14.5,9c6.436,0,10.171-0.971,10.499-1.526l0,0c-0.04,0-0.254-0.228-1.147-0.505c-0.264-0.082-0.411-0.362-0.329-0.626c0.081-0.264,0.359-0.411,0.626-0.329C24.943,6.261,26,6.684,26,7.5C26,9.972,14.97,10,14.5,10z" />
			<path d="M18 8c-2.454 0-2.533-1.449-2.536-1.511-.01-.276.206-.507.482-.517.253-.037.507.206.518.482C16.492 6.627 16.852 7 18 7c1.196 0 2-.646 2-1.25 0-.622-.928-1.25-3-1.25-1.293 0-2.036.743-2.896 1.604C13.215 6.993 12.207 8 10.5 8c-1.879 0-3-.748-3-2 0-.76.351-1.171.644-1.383 1.012-.729 2.812-.158 3.015-.091.262.087.403.37.316.631-.088.263-.374.403-.632.317-.578-.192-1.666-.373-2.114-.046C8.63 5.5 8.5 5.636 8.5 6c0 .902 1.398 1 2 1 1.293 0 2.036-.743 2.896-1.604C14.285 4.507 15.293 3.5 17 3.5c2.949 0 4 1.162 4 2.25C21 6.832 19.853 8 18 8zM6.5 21C4.019 21 2 18.981 2 16.5c0-1.559.787-2.98 2.105-3.804.232-.146.543-.075.688.159.146.234.075.543-.159.689C3.611 14.184 3 15.289 3 16.5 3 18.43 4.57 20 6.5 20c.702 0 1.387-.212 1.979-.614.229-.156.539-.096.694.133.154.229.095.54-.134.694C8.282 20.728 7.403 21 6.5 21z" />
		</svg>
	);
};
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Images from "./components/Images";

function App() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		// const fetchApi = async () => {
		// 	const res = await fetch(
		// 		`https://jsonplaceholder.typicode.com/albums/1/photos`
		// 	);
		// 	const json = await res.json();
		// 	console.log("res", res);
		// 	console.log("json", json);
		// };
		// fetchApi();
		// ###########################################################################
		fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`).then((res) =>
			res.json().then((data) => {
				// console.log("first", data);
				setImages(data);
			})
		);
	}, []);

	return (
		<>
			<Images data={images} />
		</>
	);
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "mobx-react";
import todoStore from '../src/store/store';

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={todoStore}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

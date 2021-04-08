import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from "aws-amplify"
import awsconfig from "./aws-exports";
import { useContext, createContext } from "react";

//Create the context
export const AppContext = createContext(null)

//Allow us to access the context
export function useAppContext() {
  return useContext(AppContext);
}

//Load the configuration
Amplify.configure({
  // OPTIONAL - if your API requires authentication 
  Auth: {
      // REQUIRED - Amazon Cognito Identity Pool ID
      identityPoolId: 'us-east-2:692c9e57-acfd-4c01-a5ba-cf1135584345',
      // REQUIRED - Amazon Cognito Region
      region: 'us-east-2', 
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'us-east-2_xnY9fhh6b', 
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '411ja0db35tggns3lsbn6c7ol3',
  },
  API: {
      endpoints: [
          {
              name: "goals",
              endpoint: "https://mrc769v197.execute-api.us-east-2.amazonaws.com/prod",
              region: "us-east-2"
          },

      ]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

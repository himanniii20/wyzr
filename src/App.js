import React from "react";
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div>
      <meta name="google-signin-client_id" content="680672895412-cm8973gstr7a7mjou82fi67hpp73hbnb.apps.googleusercontent.com"></meta>
    <SignIn/>
    </div>
  );
}

<script src="https://apis.google.com/js/platform.js" async defer></script>

//ClientID: 680672895412-cm8973gstr7a7mjou82fi67hpp73hbnb.apps.googleusercontent.com
//ClientSecret: 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

export default App;

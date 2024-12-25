import VoiceAssistant from 'sinsintro-ai-assistant';

import React from "react";

function App() {
  const openAIApiKey = process.env.REACT_APP_OPEN_AI_API;
  return (
    <div>
      <h1>Voice Assistant</h1>
      <VoiceAssistant
        apiKey={openAIApiKey}
      />
    </div>
  );
}

export default App;

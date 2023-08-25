import './App.css';
import ChatGPT from './components/ChatGPT';
// import { Client, IntentsBitField } from 'discord.js';

const App = () => {
  // const client = new Client({
  //   intents: [
  //     IntentsBitField.Flags.Guilds,
  //     IntentsBitField.Flags.GuildMembers,
  //     IntentsBitField.Flags.GuildMessages,
  //     IntentsBitField.Flags.GuildMessageReactions,
  //     IntentsBitField.Flags.MessageContent,
  //   ]
  // });

  // client.login(process.env.REACT_APP_DISCORD_TOKEN);

  return (
    <>
      <ChatGPT />
    </>
  );
}

export default App;

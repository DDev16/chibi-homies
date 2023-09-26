import React from 'react';
import '../../components/discord/discord.scss';
import discord from "../../assets/discord.png"
import ledge from "../../assets/ledge.png"
const DiscordWidget = () => {
  const discordInviteLink = 'YOUR_DISCORD_INVITE_LINK'; // Replace with your Discord invite link

  return (
    <div className="discord-widget">
      <div className="discord-text">
        Join our Discord!
      </div>
      <div className="discord-button">
        <a href={discordInviteLink} target="_blank" rel="noopener noreferrer">
          <img src={discord} alt="Join our Discord" />
        </a>
      </div>
      <div className="ledge">
        <a  target="_blank" rel="noopener noreferrer">
          <img src={ledge} alt="ledge" />
        </a>
      </div>
    </div>
  );
};

export default DiscordWidget;

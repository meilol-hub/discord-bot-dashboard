import express from "express";
import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(process.env.DISCORD_TOKEN);

// ��: Bot�̃X�e�[�^�X���擾����API
app.get("/api/status", (req, res) => {
  res.json({ online: client.ws.status === 0 });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

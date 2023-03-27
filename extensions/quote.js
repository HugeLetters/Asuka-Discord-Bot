export const alias = {
  userQuote: ["цитата", "цитату", "quote"],
};

// QUOTE
export const userQuote = async (data, bot, command, keywords) => {
  console.log("Generating a quote");
  const { channel_id } = data;
  const [author, ...words] = keywords;
  const parameters = { keywords: words, randomWordChance: 0.05 };

  if (bot.TAG_REGEXP.test(author)) {
    const userID = author.match(bot.TAG_REGEXP)[1];
    Object.keys(bot.speechModel).forEach(x => {
      if (x.includes(userID)) {
        parameters.user = x;
        console.log(`A quote of user: ${x}`);
      }
    });
  }

  const message = bot.generateSentence(parameters);

  return bot.sendMessage(channel_id, message, { message_id: data.id });
};

export default async function (bot) {
  await bot.loadSpeechGenerationModel("database/asuka");
}

const spamRegex = /^.*?(\w+\s?){10,}.*?$/;
const spamCooldown = new Map();

module.exports = (message) => {
  const userId = message.author.id;
  const now = Date.now();

  if (spamCooldown.has(userId)) {
    const cooldown = spamCooldown.get(userId);
    if (now - cooldown < 1000) return true;
  }

  spamCooldown.set(userId, now);

  return spamRegex.test(message.content);
};

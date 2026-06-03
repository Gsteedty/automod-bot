const raidRegex = /^.*?(http|https):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
const raidCooldown = new Map();

module.exports = (message) => {
  const userId = message.author.id;
  const now = Date.now();

  if (raidCooldown.has(userId)) {
    const cooldown = raidCooldown.get(userId);
    if (now - cooldown < 5000) return true;
  }

  raidCooldown.set(userId, now);

  return raidRegex.test(message.content);
};

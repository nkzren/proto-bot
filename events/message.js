module.exports = class {
  constructor(client) {
    this.name = 'message';
    this.client = client;
  }

  /**
   * Message event function
   *
   * @param {Message} message Message object with all message info. See discord.js docs
   */
  async run(message) {
    // Ignora as mensagens de outros bots e evita o "botception"
    if (message.author.bot) return;

    // Retorna se o bot não tiver permissões p/ enviar mensagens no canal
    if (!message.channel.permissionsFor(message.guild.me).missing("SEND_MESSAGES")) return;

    const config = this.client.config;

    // Retorna uma mensagem com o prefixo do bot caso ele seja mencionado sem argumentos
    const prefixMention = new RegExp(`^<@!?${this.client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.reply(`My prefix on this guild is \`${config.prefix}\``);
    }

    // Retorna qualquer mensagem que não começa com o prefixo escolhido
    if (!message.content.startsWith(config.prefix)) return;

    // Fim das validações, iniciando a identificação do comando e seus argumantos
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Fetch no membro, caso não esteja em cache ou invisível
    if (message.guild && !message.member) await message.guild.fetchMember(message.author);

    // Recupera a função do comando pela key (command) ou por um de seus aliases 
    const commandFn = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

    if (!commandFn) return;

    // TODO Implementar niveis de permissao e adicionar no terceiro parametro
    commandFn.run(message, args);

  }
}
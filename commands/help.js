const Command = require('../modules/Command');

class Help extends Command {
  constructor(client) {
    super(client, {
      name: "help",
      description: `Shows the list of available commands. Type \`help [command]\` for details.`,
      enabled: true,
      usage: "help [command]",
      aliases: ["halp", "healthme"],
      permissionLevel: "User",
    });
  }

  async run(message, args, level) {
    try {
      this.log();
      if (args[0]) {
        let command = args[0];
        if (this.client.commands.has(command)) {
          command = this.client.commands.get(command);
          message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}\nalises:: ${command.options.aliases.join(", ")}`, {code:"asciidoc"});
        }
      } else {
        // help genérico com a lista de comandos
        let msg = "=== All Commands ===\n"
        msg += [...this.client.commands.keys()].join(", ");
        message.channel.send(msg, {code: "asciidoc"});
      }
    } catch (e) {
      super.run(message);
      this.client.logger(e, "error");
    }
  }
}

module.exports = Help;
const Discord = require("discord.js");
const { finished } = require("stream");
const ytdl = require("ytdl-core")

const Client = new Discord.Client;

const prefix = "$";

var list = [];

Client.on("ready", () =>{
    console.log("bot opérationnel");
    
    Client.guilds.cache.find(guild => guild.id === "811966696368766996").channels.cache.find(channel => channel.id === "813133682507382824").messages.fetch("813135579726086185").then(message =>{
        console.log("message add a la memoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le mess a la mémoire : " + err);
    });
});



Client.on("message", message => {
    
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
        if(message.member.hasPermission("PRIORITY_SPEAKER")){
            if(message.content.startsWith(prefix + "embed")){
                var embed  = new Discord.MessageEmbed()
                    .setColor("#d8ab32")
                    .setTitle("Reglement")
                    .setAuthor("")
                    .addField("[:page_facing_up:]Règlement",false)
                    .addField("Bonjour et bienvenue sur le serveur ! Voici le règlement à respecter obligatoirement sous risques de sanctions.","Ce règlement est considéré comme lu et accepté par tous dès lors où vous cochez la case se trouvant en dessous de celui-ci !")
                    .setFooter("Blowze")

                message.channel.send(embed);
            }
        }
});



    

Client.on("ready", () => {
    Client.user.setActivity("By Le+Bo La_Kuizine", {type:"STREAMING", url:"https://www.twitch.tv/blowzee"})
});


Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(message.member.permissions.has("PRIORITY_SPEAKER")){
        if(message.content.startsWith(prefix + "helpmodo")){
            var embed = new Discord.MessageEmbed()
                .setColor("#d8ab32")
                .setTitle("Commandes")
                .setAuthor("BotLemon","https://static-cdn.jtvnw.net/jtv_user_pictures/b499225d-3707-4622-a809-b4ac38abd6fd-profile_image-300x300.png")
                .setDescription("Voici la liste des commandes que le BotLemon permet de faire")
                .addField("\u200B","\u200B")
                .addField("$kick", "permet de kick le membre mentionné",false)
                .addField("$ban", "permet de ban le membre mentionné",false)
                .addField("$mute / !demute", "permet de mute/demute le memnbre mentionné",false)
                .addField("$tempmute + temps en sec", "permet de mute pendant un certains temps une personne",false)
                .addField("$clear + nombre de mess", "permet de clear le nombre de message que l'on a indiqué",false)
        
            
    
            message.channel.send(embed);
        }
    }
});




Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission("PRIORITY_SPEAKER")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Aucun membre ne correspond!")
            }
            else{
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a été ban");
                }
                else {
                    message.reply("Impossible de bannir ce membre!");
                }
            }
        }
    }
});



Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission("KICK_MEMBERS")){
        if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Aucun membre ne correspond!")
            }
            else{
                if(mention.bannable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick");
                }
                else {
                    message.reply("Impossible de ce membre")
                }
            }
        }
    }
});

    
    
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission("PRIORITY_SPEAKER")){
        if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Aucun membbre ne correspond!")
            }
            else{
                mention.roles.remove("")
                message.channel.send(mention.displayName + " a été mute!");
            }
        }
        else if(message.content.startsWith(prefix + "demute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Aucun membre ne correspond!")
            }
            else{
                mention.roles.remove("823874405934563339");
                message.channel.send(mention.displayName + " a été démute!");
            }
        }
    }
    else if(message.content.startsWith(prefix + "tempmute")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Aucun membre ne correspond!");
        }
        else {
            let args = message.content.split(" ");

            mention.roles.add("813412636141682730");
            setTimeout(function() {
                mention.roles.remove("813412636141682730");
                message.channel.send("<@" + mention.id + "> tu peux maintenant reparler!");
            },args[2] * 1000);
        }
    }
});  



Client.on("message", message => {
    if(message.channel.type == "dm") return;
    if(message.member.permissions.has("PRIORITY_SPEAKER")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");

            if(args [1] == undefined){
                message.reply("Nombre de message mal dis!");
            }
            else{
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("Nombre de message mal dis!");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Suppression de " + messages.size + " messages")
                    }).catch(err => {
                        console.log("Erreur de clear : " + err);
                    });
                }
            }
        } 
    }
})






    






















Client.on("guildMemberAdd", member => {
    member.guild.channels.cache.find(channel => channel.id === "817480960828375100").send("<@" + member + "> fût arrivé dans la 𝐇 𝐀 𝐙 𝐄 ! Un tonnerre d'applaudissements ! Tu es le " + member.guild.memberCount + "ème.");
});

Client.on("guildMemberRemove", member => {
    member.guild.channels.cache.find(channel => channel.id === "817481011528466432").send("**" + member.displayName + "**, a quitté le serveur, Ciao ! :)");
});

Client.on ("messageReactionAdd", (reaction, user) => {
    if(user.bot) return;
    
    console.log("reaction ajouté par " + user.username + "\nNom de l'émoji " + reaction.emoji.name);

    if(reaction.message.id === "813135579726086185"){
        if(reaction.emoji.name === "✅"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add("817376868914298890").then(mbr => {
                console.log("role add pour " + mbr.displayName);
            }).catch(err =>{
                console.log("role pas add : " + err);
            });
            member.roles.add("816734186898849793").then(mbr => {
                console.log("role add pour " + mbr.displayName);
            }).catch(err =>{
                console.log("role pas add : " + err);
            });
        }
    }

    /*reaction.users.remove(user.id).then(react =>{
        console.log("reaction" + react.emoji.name + "retiré par le bot")
    }).catch(err =>{
        console.log("impossible de retirer la réaction : " + err);
    });
});
    /*reaction.remove().then(react =>{
        console.log("reaction" + react.emoji.name + "retiré par le bot")
    }).catch(err =>{
        console.log("impossible de retirer la réaction : " + err);
    });*/
});

Client.on("messageReactionRemove", (reaction, user) => {
    if(user.bot) return;
    console.log("reaction retiré");

    if(reaction.message.id === "813135579726086185"){
        if(reaction.emoji.name === "✅"){
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove("813107447430250566").then(mbr => {
                console.log("role retiré pour " + mbr.displayName);
            }).catch(err =>{
                console.log("role pas retiré : " + err);
            });
        }
    }
});

Client.on("guildMemberRemove", member => {
    console.log("un membre est parti");
});

Client.on('message', message => {
    if (message.content === "react for membre") {
        message.react("✅");
    }

});


Client.login("ODExOTY2MDkxMjA2OTgzNzQw.YC54WQ.jAl0bTXHDVn2jAmp7lW1-5_eRn4")
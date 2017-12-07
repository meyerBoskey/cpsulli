export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;
    adminCanEdit?: Boolean;

    constructor(content: string, username: string, messageId?: string, userId?: string, adminCanEdit?: Boolean) {
        this.content = content;
        this.messageId = messageId;
        this.userId = userId;
        this.username = username;
        this.adminCanEdit = true;
    }
}

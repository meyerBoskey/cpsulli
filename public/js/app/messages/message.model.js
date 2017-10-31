var Message = /** @class */ (function () {
    function Message(content, username, messageId, userId, adminCanEdit) {
        this.content = content;
        this.messageId = messageId;
        this.userId = userId;
        this.username = username;
        this.adminCanEdit = true;
    }
    return Message;
}());
export { Message };

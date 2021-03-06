"use strict";
/**
 * @class
 * @classdesc The main class for each language.
 */
class Language {
    /**
     * @constructs
     * @param {string} content The content to be added in the editable content.
     */
    constructor(content = "") {
        this.name = "Language";
        this.content = content;
    }
    /**
     * Gets the content to be added in the editable content.
     * @returns {string} The future content of the editable content.
     */
    getContent() { return this.content; }
    /**
     * Gets the name of the custom language.
     * @returns {string} The name of the custom language.
     */
    getNameOfLanguage() { return this.name; }
}
/**
 * @class
 * @classdesc An example for Text language, the default one.
 */
class TextLanguage extends Language {
    /**
     * @constructs
     * @param {string} content The content to be added in the editable content.
     */
    constructor(content = "") {
        super(content);
        this.name = "Text";
    }
}
/**
 * @class
 * @classdesc An example for JSON language.
 */
class Json extends Language {
    /**
     * @constructs
     * @param {string} content The content to be added in the editable content.
     */
    constructor(content = "") {
        super(content);
        this.name = "JSON";
    }
}
/**
 * @class
 * @classdesc An exemple for SQL language.
 */
class Sql extends Language {
    /**
     * @constructs
     * @param {string} content The content to be added in the editable content.
     */
    constructor(content = "") {
        super(content);
        this.name = "SQL";
    }
}
/**
 * @class
 * @classdesc Creates a contenteditable element with styles for specific languagues.
 */
class JSContentEditableCreator {
    /**
     * @constructs
     * @param {Language} language The language of the editable content.
     * @param {Element} parent The parent element in which to append the editable content.
     */
    constructor(language = new TextLanguage(), parent = document.body) {
        this.language = language;
        this.parent = parent;
    }
    /**
     * Generates a random unique ID for each editable content.
     * @returns {string} The unique ID of the editable content.
     */
    _generateRandomID() {
        var id = "ce-id-";
        for (var i = 0; i < 6; i++) {
            var min = 0;
            var max = 9;
            var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
            id += randomInt;
        }
        return id;
    }
    /**
     * Creates the editable content with a specific language.
     * @param {Language} language The language of this editable content. By default the language given by the constructor, or `TextLanguage()`.
     * @param {Array<{name: string, value: string}>} attributes The HTML attributes of this editable content.
     * @param {Element} parent The parent element in which to append this editable content.
     */
    createContentEditable(attributes, language = this.language, parent = this.parent) {
        var id = this._generateRandomID();
        var div = document.createElement('div');
        div.setAttribute("contenteditable", "true");
        div.setAttribute("data-language", language.getNameOfLanguage());
        div.setAttribute("id", id);
        div.textContent = language.getContent();
        if (attributes) {
            for (let attr of attributes)
                div.setAttribute(attr.name, attr.value);
        }
        parent.appendChild(div);
    }
    /**
     * Applies styles for the selection. Use one of these:
     * @param {string} name The name of the command to execute on the selection. Use one of these :
     * * `'bold', ''`
     * * `'underline', ''`
     * * `'italic', ''`
     * * `'undo', ''`
     * * `'redo', ''`
     * * `'strikeThrough', ''`
     * * `'delete', ''`
     * * `'selectAll', ''`
     * * `'justifyFull', ''`
     * * `'justifyCenter', ''`
     * * `'justifyLeft', ''`
     * * `'justifyRight', ''`
     * * `'insertOrderedList', ''`
     * * `'insertUnorderedList', ''`
     * * `'indent', ''`
     * * `'foreColor', '#fff'`
     * @param {string} value Additional value to be assigned.
     * @public
    */
    applyStyleForSelection(name, value = '') {
        document.execCommand(name, false, value);
    }
}

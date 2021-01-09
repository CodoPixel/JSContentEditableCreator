/// Used as reference for every language.
class Language {
    constructor(content) {
        this.name = "Language";
        this.content = content;
    }

    getContent() { return this.content; }
    getNameOfLanguage() { return this.name; }
}

class Text extends Language {
    constructor(content) {
        super(content);

        this.name = "Text";
    }
}

class Json extends Language {
    constructor(content) {
        super(content);

        this.name = "JSON";
    }
}

class Sql extends Language {
    constructor(content) {
        super(content);

        this.name = "SQL";
    }
}

class JSContentEditableCreator {
    constructor(language, parent) {
        this.language = language || new Text();
        this.parent = parent;
    }

    _generateRandomID() {
        var id = "ce-id-";
        for (var i = 0; i < 6; i++) {
            var min = 0;
            var max = 9;
            var randomInt = Math.floor(Math.random() * (max - min +1)) + min;
            id += randomInt;
        }
        return id;
    }

    /// Creates a div with contenteditable attribute with a specific language and set the focus on it.
    /// attributes = [{name: 'class', value: ''}, ...]
    /// parent = query selector of the parent element in which we want to place the new content editable.
    createContentEditable(attributes, parent) {
        if (!parent) {
            if (this.parent) {
                parent = this.parent;
            } else {
                parent = "body";
            }
        }

        var id = this._generateRandomID();

        var div = document.createElement('div');
        div.setAttribute("contenteditable", "true");
        div.setAttribute("data-language", this.language.getNameOfLanguage());
        div.setAttribute("id", id);
        div.innerHTML = this.language.getContent() || "";

        if (attributes) {
            attributes.forEach(function(attr) {
                div.setAttribute(attr.name, attr.value);
            });
        }

        document.querySelector(parent).appendChild(div);
        document.querySelector("#" + id).focus();
    }

    /// [name] can be :
    /// bold, ''
    /// underline, ''
    /// italic, ''
    /// undo, ''
    /// redo, ''
    /// strikeThrough, ''
    /// delete, ''
    /// selectAll, ''
    /// justifyFull, ''
    /// justifyCenter, ''
    /// justifyLeft, ''
    /// justifyRight, ''
    /// insertOrderedList, ''
    /// insertUnorderedList, ''
    /// indent, ''
    /// foreColor, '#fff'
    applyStyleForSelection(name, value='') {
        document.execCommand(name, false, value);
    }
}
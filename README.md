# JSContentEditableCreator

Creates contenteditable elements with styles for specific languages (Text, JSON, SQL, ...), which are also basic WYSIWYG editors.

## How do we create a contenteditable element ?

First of all, don't forget to add the source code:

```html
<script src="src/JSContentEditableCreator.js"></script>
```

Then, create an instance of `JSContentEditableCreator`:

```javascript
const contentCreator = new JSContentEditableCreator();
```

Create your contenteditable element with the method `createContentEditable`:

```javascript
const container = document.querySelector("#container");
const contentCreator = new JSContentEditableCreator(new TextLanguage(), container);
contentCreator.createContentEditable([{ name: "class", value: "myCSSclass" }]);
```

The constructor has two arguments which are optional. Their default values are respectively: `new TextLanguage()` & `document.body`. 

The method `createContentEditable` takes two optional arguments:

|name|type|default value|description|
|----|----|-------------|-----------|
|attributes|An array of objects: `{name: string, value: string}`|`null`|Add HTML attributes to the editable content.|
|language|A class that extends from Language|`this.language` (the language given in the constructor), or `new TextLanguage()`|The language to be given to the editable content.|
|parent|An Element|`this.parent` (the parent given in the constructor, or `document.body`)|The parent element in which to append the editable content.|

## The languages

You can define different customisations for certain languages. By default, the language is `TextLanguage()`, but it also exists `Json()` and `Sql()`. How do we create our own language?

```javascript
class TypeScript extends Language {
  constructor(content) {
    super(content);

    this.name = "TypeScript";
  }
}

const container = document.querySelector("#container");
const contentCreator = new JSContentEditableCreator(
  new TypeScript("This is the default content of the editor"),
  container
);

contentCreator.createContentEditable();
```

## A basic WYSIWYG editor

The user can select specific parts of a sentence inside the contenteditable element in order to change its style (put some words in _italic_ for example). It can be realized via this method:

```javascript
.applyStyleForSelection(name: string, value: string = '')
```

The `name` has to be one of these:

| name                | value   | description                           |
| ------------------- | ------- | ------------------------------------- |
| bold                | ''      | Put the selection in bold             |
| underline           | ''      | Underline the selection               |
| italic              | ''      | Put the selection in italic           |
| undo                | ''      | Cancels the previous action           |
| redo                | ''      | Go forward in history of the actions  |
| strikeThrough       | ''      | It bars the selection                 |
| delete              | ''      | Delete the selection                  |
| selectAll           | ''      | Selects everything                    |
| justifyFull         | ''      | Aligns the text                       |
| justifyCenter       | ''      | Aligns the text in the middle         |
| justifyLeft         | ''      | Aligns the text in the left           |
| justifyRight        | ''      | Aligns the text in the right          |
| insertOrderedList   | ''      | Creates an ordered list               |
| insertUnorderedList | ''      | Creates an unordered list             |
| indent              | ''      | Indent the line                       |
| foreColor           | _color_ | Change the color of the selected word |

## How do we select a language via CSS ?

Thanks to `data-language`, you can select specific languages via CSS:

```css
div[data-language="Text"] {
  /* ... */
}
```

## License

MIT License.

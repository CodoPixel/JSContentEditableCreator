# JSContentEditableCreator

Creates contenteditable elements with styles for specific language (Text, JSON, SQL, ...) and other customisations.

## How do you create a contenteditable element ?

First of all, don't forget to add the source code:

```html
<script src="src/JSContentEditableCreator.js"></script>
```

Then, create a instance of `JSContentEditableCreator`:

```javascript
var contentCreator = new JSContentEditableCreator();
```

Create your contenteditable element with this method:

```javascript
contentCreator.createContentEditable();
```

For example:

```javascript
var contentCreator = new JSContentEditableCreator(new Text(), "body");
contentCreator.createContentEditable([{ name: "class", value: "myCSSclass" }]);
```

## The languages

You can define different customisations for certain languages. By default, the language is `Text()`, but it also exists `JSON()` and `SQL()`. How do you create your own language?

```javascript
class TypeScript extends Language {
  constructor(content) {
    super(content);

    this.name = "TypeScript";
  }
}

var contentCreator = new JSContentEditableCreator(
  new TypeScript(),
  "#container"
);

contentCreator.createContentEditable();
```

## A basic WYSIWYG editor

The user can select specific parts of a sentence inside the contenteditable element in order to change its style (put some words in _italic_ for example). It can be releazed via this method:

```
.applyStyleForSelection(name: string, value: string = '')
```

The `name` has to be one of these:

| name                | value   | description                           |
| ------------------- | ------- | ------------------------------------- |
| bold                | ''      | Put the selected word in bold         |
| underline           | ''      | Underline the selected word           |
| italic              | ''      | Put the selected word in italic       |
| undo                | ''      | Cancels the previous action           |
| redo                | ''      | Go forward in history of the actions  |
| strikeThrough       | ''      | It bars the selected word             |
| delete              | ''      | Delete the selected word              |
| selectAll           | ''      | Selects the whole paragraph           |
| justifyFull         | ''      | Aligns the text                       |
| justifyCenter       | ''      | Aligns the text in the middle         |
| justifyLeft         | ''      | Aligns the text in the left           |
| justifyRight        | ''      | Aligns the text in the right          |
| insertOrderedList   | ''      | Creates an ordered list               |
| insertUnorderedList | ''      | Creates an unordered list             |
| indent              | ''      | Indent the line                       |
| foreColor           | _color_ | Change the color of the selected word |

## How do you select a language via CSS ?

Thanks to `data-language`, you can select specific languages via CSS:

```css
div[data-language="Text"] {
  /* ... */
}
```

## License

MIT License.

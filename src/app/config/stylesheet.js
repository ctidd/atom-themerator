export default `

/**************************************
** THEMERATOR | REMOVE THESE
***************************************/

.atui-code {
    color: @text;
}

.atui-code,
.atui-code * {
    background: @background !important;
}

.atui-code * {
    transform: none !important;
    height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    position: static !important;
}

.invisible-character {
    color: @invisible;
}

/**************************************
** EDITOR
***************************************/

// General colors
@syntax-text-color: @text;
@syntax-cursor-color: @text;
@syntax-selection-color: @selection;
@syntax-selection-flash-color: @selection;
@syntax-background-color: @background;

// Guide colors
@syntax-wrap-guide-color: @invisible;
@syntax-indent-guide-color: @invisible;
@syntax-invisible-character-color: @invisible;

// For find and replace markers
@syntax-result-marker-color: @marker;
@syntax-result-marker-color-selected: @marker-selected;

// Gutter colors
@syntax-gutter-text-color: @gutter-text;
@syntax-gutter-text-color-selected: @gutter-text-selected;
@syntax-gutter-background-color: @gutter-background;
@syntax-gutter-background-color-selected: @gutter-background-selected;

// For git diff info. i.e. in the gutter
@syntax-color-added: @git-added;
@syntax-color-modified: @git-modified;
@syntax-color-renamed: @git-renamed;
@syntax-color-removed: @git-removed;

/**************************************
** ALL LANGUAGES
***************************************/

.comment {
    color: @comment;
}

.variable {
    color: @variable;
}

.variable.this {
    color: @variable-this;
}

.keyword {
    color: @keyword;
}

.keyword.operator {
    color: @text;
}

.keyword.operator.new {
    color: @keyword-new;
}

.keyword.other.unit {
    color: @keyword-unit;
}

.storage {
    color: @keyword-storage;
}

.constant {
    color: @constant;
}

.constant.numeric {
    color: @constant-numeric;
}

.constant.color,
.constant.rgb-value {
    color: @constant-color;
}

.constant.symbol {
    color: @constant-symbol;
}

.constant.language {
    color: @constant-language;
}

.string {
    color: @string;
}

.string.unquoted {
    color: @text;
}

.string.regexp,
.string.regexp > .keyword,
.string.regexp > .punctuation {
    color: @regexp;
}

.punctuation.definition {
    color: @definition;
}

.punctuation.definition.comment {
    color: @comment;
}

.punctuation.definition.bold {
    font-style: bold;
}

.punctuation.definition.italic {
    font-style: italic;
}

.punctuation.definition.interpolation {
    color: @COLOR_MUTED;
}

.punctuation.section.embedded {
    color: @text;
}

.entity.name.type {
    color: @keyword-type;
}

.name.type.class {
}

.entity.name.class {
    color: @text;
}

.entity.name.tag {
    color: @BLUE;
}

.entity.other.attribute-name {
    color: @LIGHT_BLUE;
}

.entity.name.function, .support.function, .function.arrow {
    color: @text;
}

.object.key {
    color: @text;
}

.meta.class {
    color: @text;
}

.meta.link {
    color: @BLUE;
}

.meta.require {
    color: @BLUE;
}

.meta.selector {
    color: @BLUE;
}

.meta.separator {
    color: @text;
}

.meta.tag {
    color: @COLOR_MUTED;
}

.none {
    color: @text;
}

.invalid.illegal,
.invalid.broken,
.invalid.deprecated,
.invalid.unimplemented {
    color: @error;
}

/**************************************
** MARKUP
***************************************/

.markup.bold {
    color: @BLUE;
    font-weight: bold;
}

.markup.italic {
    color: @GREEN;
    font-style: italic;
}

.markup.heading .punctuation.definition.heading {
    color: @BLUE;
}

/**************************************
** CSS
***************************************/

.css .keyword.control {
    color: @css-keyword;
}

.css .attribute-name.other {
    color: @css-attribute;
}

.css .property-name {
    color: @css-property;
}

.css .function {
    color: @css-function;
}

.css .variable {
    color: @css-variable;
}

.css .constant {
    color: @css-constant;
}

.css .unit {
    color: @css-unit;
}

/**************************************
** MARKDOWN
***************************************/

.source.gfm .markup.heading {
    color: @BLUE;
}

`;

export default `

/**************************************
** THEMERATOR | REMOVE THESE
***************************************/

.atui-code {
    color: @all-text;
}

.atui-code,
.atui-code * {
    background: @ui-background !important;
}

.atui-code * {
    transform: none !important;
    height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    position: static !important;
}

.invisible-character {
    color: @ui-invisible;
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
    color: @all-comment;
}

.variable {
    color: @all-variable;
}

.variable.this {
    color: @all-variable-this;
}

.keyword {
    color: @all-keyword;
}

.keyword.operator {
    color: @all-operator;
}

.keyword.operator.new {
    color: @all-keyword-new;
}

.keyword.other.unit {
    color: @all-keyword-unit;
}

.storage {
    color: @all-keyword-storage;
}

.constant {
    color: @all-constant;
}

.constant.numeric {
    color: @all-constant-numeric;
}

.constant.color,
.constant.rgb-value {
    color: @all-constant-color;
}

.constant.symbol {
    color: @all-constant-symbol;
}

.constant.language {
    color: @all-constant-language;
}

.string {
    color: @all-string;
}

.string.unquoted {
    color: @all-text;
}

.string.regexp,
.string.regexp > .keyword,
.string.regexp > .punctuation {
    color: @all-regexp;
}

.punctuation.definition.comment {
    color: @all-comment;
}

.entity.name.type {
    color: @all-keyword-type;
}

.name.type.class {
    color: @all-type-class;
}

.entity.name.class {
    color: @all-text;
}

.entity.name.tag {
    color: @BLUE;
}

.entity.other.attribute-name {
    color: @LIGHT_BLUE;
}

.entity.name.function, .support.function, .function.arrow {
    color: @all-function;
}

.object.key {
    color: @all-key;
}

.meta.class {
    color: @all-text;
}

.meta.require {
    color: @all-keyword;
}

.meta.selector {
    color: @all-keyword;
}

.bold {
    font-style: bold;
}

.italic {
    font-style: italic;
}

.none {
    color: @all-text;
}

.invalid.illegal,
.invalid.broken,
.invalid.deprecated,
.invalid.unimplemented {
    color: @all-error;
}

/**************************************
** MARKUP
***************************************/

.meta.tag {
    color: @markup-punctuation;
}

.meta.separator {
    color: @markup-punctuation;
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
    color: @markdown-heading;
}

`;

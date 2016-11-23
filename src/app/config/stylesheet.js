export default `

/**************************************
** THEMERATOR | REMOVE THESE
***************************************/

.atui-code {
    color: @ui-text;
    background: @ui-background;
}

.atui-code * {
    background: transparent !important;
}

.atui-code * {
    position: static !important;
    height: auto !important;
    transform: none !important;
}

.invisible-character {
    color: @ui-invisible;
}

/**************************************
** EDITOR
***************************************/

// General colors
@syntax-text-color: @ui-text;
@syntax-cursor-color: @ui-cursor;
@syntax-selection-color: @ui-selection;
@syntax-selection-flash-color: @ui-selection;
@syntax-background-color: @ui-background;

// Guide colors
@syntax-wrap-guide-color: @ui-invisible;
@syntax-indent-guide-color: @ui-invisible;
@syntax-invisible-character-color: @ui-invisible;

// For find and replace markers
@syntax-result-marker-color: @ui-selection;
@syntax-result-marker-color-selected: @ui-selection;

// Gutter colors
@syntax-gutter-text-color: @ui-text;
@syntax-gutter-text-color-selected: @ui-text;
@syntax-gutter-background-color: @ui-background;
@syntax-gutter-background-color-selected: @ui-selected;

// For git diff info. i.e. in the gutter
@syntax-color-added: @git-added;
@syntax-color-modified: @git-modified;
@syntax-color-renamed: @git-renamed;
@syntax-color-removed: @git-removed;

.bracket-matcher .region {
    border-bottom: none;
    background: @ui-selection;
}

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
    color: @all-keyword-operator;
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

.string.quoted {
    color: @all-constant-string;
}

.string.definition.begin,
.string.definition.end {
    color: @all-constant-string-delimiter;
}

.string.regexp,
.string.regexp > .keyword,
.string.regexp > .punctuation {
    color: @all-constant-regexp;
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
    color: @ui-text;
}

.entity.name.function, .support.function, .function.arrow {
    color: @all-function;
}

.object.key {
    color: @all-key;
}

.meta.class {
    color: @ui-text;
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
    color: @ui-text;
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

.entity.name.tag {
    color: @markup-tag;
}

.entity.other.attribute-name {
    color: @markup-attribute;
}

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

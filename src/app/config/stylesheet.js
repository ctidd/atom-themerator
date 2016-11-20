export default `

/**************************************
** THEMERATOR | REMOVE THESE
***************************************/

.atui-code {
    background: @background !important;
}

/**************************************
** EDITOR
***************************************/


/**************************************
** ALL LANGUAGES
***************************************/

.comment {
    color: @comment;
}

.keyword {
    color: @keyword;
}

.keyword.operator {
    color: @syntax-text-color;
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

.constant.character.escape {
    color: inherit;
}

.constant.numeric {
    color: @constant-numeric;
}

.constant.other.color {
    color: @constant-color;
}

.constant.other.rgb-value {
    color: @constant-rbg;
}

.constant.other.symbol {
    color: @constant-symbol;
}

.constant.language {
    color: @constant-language;
}

.variable {
    color: @variable;
}

.variable.this {
    color: @variable-this;
}

.invalid.illegal,
.invalid.broken,
.invalid.deprecated,
.invalid.unimplemented {
    color: @error;
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

.punctuation.definition.comment {
    color: @comment;
}

.punctuation.definition.heading,
.punctuation.definition.identity {
    color: @GREEN;
}

.punctuation.definition.bold {
    color: @GREEN;
    font-style: bold;
}

.punctuation.definition.italic {
    color: @GREEN;
    font-style: italic;
}

.punctuation.definition.interpolation {
    color: @COLOR_MUTED;
}

.punctuation.section.embedded {
    color: @syntax-text-color;
}

.entity.name.type {
    color: @BLUE;
}

.entity.other.inherited-class {
    color: @syntax-text-color;
}

.entity.name.class, &.name.type.class {
    color: @syntax-text-color;
}

.entity.name.tag {
    color: @BLUE;
}

.entity.other.attribute-name {
    color: @LIGHT_BLUE;
}

.entity.name.function, .support.function, .function.arrow {
    color: @syntax-text-color;
}

.object.key {
    color: @syntax-text-color;
}

.meta.class {
    color: @syntax-text-color;
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
    color: @syntax-text-color;
}

.meta.tag {
    color: @COLOR_MUTED;
}

.none {
    color: @syntax-text-color;
}

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

.source.gfm .markup {
    -webkit-font-smoothing: auto;
}

.source.gfm .markup.heading {
    color: @BLUE;
}

:host, atom-text-editor[mini] .scroll-view {
    padding-left: 1px;
}

`;
